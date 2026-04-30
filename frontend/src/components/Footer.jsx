import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react'

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
    <footer className="bg-dark-950 text-dark-300 border-t border-primary-700/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Buildlabs Digital"
                  className="h-16 md:h-20 w-auto object-contain"
                />
            </div>
            <p className="text-dark-500 text-sm leading-relaxed">
              We Help Your Business Grow. We help you get more customers with great videos, clean websites, and smart marketing.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/buildlabsdigital/?utm_source=ig_web_button_share_sheet " target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700/50 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@Buildlabsdigital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700/50 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/buildlabs.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700/50 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-500">Services</h3>
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
            <h3 className="text-lg font-semibold mb-4 text-primary-500">Company</h3>
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
            <h3 className="text-lg font-semibold mb-4 text-primary-500">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@buildlabs.in" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                  hello@buildlabs.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918237513033" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                    +91 82375 13033
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-dark-400 text-sm">Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-500 text-sm">
              © {currentYear} Buildlabs. All rights reserved.
              made with ❤️
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-dark-500 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-dark-500 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/admin/login" className="text-dark-500 hover:text-primary-400 transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
