import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-neutral-500 border-t border-neutral-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Single compact row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          {/* Logo + email */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 16.5L11.5 5.5H16L9 16.5H4.5Z" fill="#9ecf18" />
                <path d="M9 19.5L16 8.5H20.5L13.5 19.5H9Z" fill="#C5FF2E" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-xs font-black tracking-[0.12em] text-white uppercase">BUILDLABS</span>
                <span className="text-[7px] font-extrabold tracking-[0.38em] text-[#8BCF1D] uppercase -mt-0.5">DIGITAL</span>
              </div>
            </div>
            <a href="mailto:buildlabsdigital@gmail.com" className="text-[#8BCF1D] text-xs font-medium hover:underline hidden sm:block">
              buildlabsdigital@gmail.com
            </a>
          </div>

          {/* Nav links */}
          <div className="flex items-center flex-wrap gap-x-5 gap-y-1 text-xs font-medium">
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link to="/case-study" className="hover:text-white transition-colors">Case Studies</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>

          {/* Socials + copyright */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a href="https://www.instagram.com/buildlabsdigital/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/buildlabs.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[10px] text-neutral-700 hidden md:block">© {currentYear} Buildlabs</span>
          </div>
        </div>

        {/* Mobile copyright */}
        <p className="text-[10px] text-neutral-700 text-center mt-4 sm:hidden">© {currentYear} Buildlabs. All rights reserved.</p>

      </div>
    </footer>
  )
}

export default Footer
