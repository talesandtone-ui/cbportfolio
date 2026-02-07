import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, LogOut } from 'lucide-react'
import { authService } from '../services/auth'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setUser(authService.getCurrentUser())
  }, [location.pathname])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-dark-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl md:text-2xl font-bold font-display text-gradient">
              Buildlabs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Get Quote
            </Link>

            {user ? (
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-dark-200 dark:border-dark-700">
                <span className="text-sm font-medium text-dark-600 dark:text-dark-300">
                  Hi, {user.name.split(' ')[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="p-2 text-dark-600 dark:text-dark-300 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-dark-200 dark:border-dark-700">
                <Link
                  to="/login"
                  className="text-sm font-medium text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all text-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-900">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                  : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-2 bg-gradient-primary text-white rounded-lg font-semibold text-center"
            >
              Get Quote
            </Link>

            {user ? (
              <div className="pt-4 mt-4 border-t border-dark-200 dark:border-dark-700">
                <div className="px-4 py-2 mb-2 text-sm font-medium text-dark-600 dark:text-dark-300">
                  Hi, {user.name}
                </div>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="block w-full px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg font-semibold text-center"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="pt-4 mt-4 border-t border-dark-200 dark:border-dark-700 space-y-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 border border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg font-semibold text-center"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 bg-gradient-primary text-white rounded-lg font-semibold text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
