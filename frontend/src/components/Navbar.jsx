import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-primary-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/logo.png"
              alt="Buildlabs Digital"
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'text-primary-500'
                  : 'text-dark-300 hover:text-primary-400'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-gradient-primary text-dark-950 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-105 transition-all"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-dark-300 hover:bg-dark-800 hover:text-primary-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-primary-700/20 bg-dark-950">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'bg-primary-500/10 text-primary-500'
                  : 'text-dark-300 hover:bg-dark-800 hover:text-primary-400'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-2 bg-gradient-primary text-dark-950 rounded-lg font-semibold text-center"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
