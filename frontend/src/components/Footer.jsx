import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Zap } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Video Editing', path: '/services#video' },
    { name: 'Web Development', path: '/services#web' },
    { name: 'Digital Marketing', path: '/services#marketing' },
    { name: 'Brand Identity', path: '/services#branding' },
  ]

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-dark-900 text-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-display">Buildlabs</span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              We Turn Business Into Profits. Full-service digital marketing agency helping brands grow through video, websites, and performance marketing.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/buildlabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@buildlabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/buildlabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@buildlabs.in" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                  hello@buildlabs.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+918237513033" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                  +918237513033
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-dark-400 text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-400 text-sm">
              © {currentYear} Buildlabs. All rights reserved.
              made with ❤️
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-dark-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-dark-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

