import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      // If mobile menu is open, keep navbar visible
      if (isOpen) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isOpen]);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/services', label: 'SERVICES' },
    { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/case-study', label: 'CASE STUDY' },
    { path: '/about', label: 'ABOUT US' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-5xl mx-auto bg-[#edf2ed] rounded-b-[2rem] shadow-xl border-b border-white/20 px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <svg
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Custom stylized green leaf logo matching screenshot */}
              <path
                d="M4.5 16.5L11.5 5.5H16L9 16.5H4.5Z"
                fill="#9ecf18"
              />
              <path
                d="M9 19.5L16 8.5H20.5L13.5 19.5H9Z"
                fill="#C5FF2E"
              />
            </svg>
            <div className="flex flex-col items-start leading-none pt-0.5">
              <span className="text-base font-black tracking-[0.12em] text-black font-display uppercase">
                BUILDLABS
              </span>
              <span className="text-[8px] font-extrabold tracking-[0.38em] text-[#8BCF1D] uppercase ml-0.5 -mt-0.5">
                DIGITAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold tracking-widest transition-all relative py-2 ${
                  isActive(link.path)
                    ? 'text-black'
                    : 'text-dark-600 hover:text-black'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-black rounded-full" />
                )}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-black hover:bg-neutral-900 text-white rounded-full font-bold text-xs tracking-wider transition-all duration-300 flex items-center space-x-2 shadow-sm"
            >
              <span>BOOK A CALL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-black hover:bg-black/5"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#edf2ed] rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-colors ${
                  isActive(link.path)
                    ? 'bg-black text-white'
                    : 'text-dark-700 hover:bg-black/5'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-3 bg-black hover:bg-neutral-900 text-white rounded-full font-bold text-center text-xs tracking-wider flex items-center justify-center space-x-2"
            >
              <span>BOOK A CALL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
