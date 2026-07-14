import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import CaseStudies from './pages/CaseStudies'
import WhyContent from './pages/WhyContent'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
// Login/Signup pages removed — only contact form is used
import { reinitAnimations } from './utils/animations'

// Component to handle route changes
const RouteHandler = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    // Re-initialize animations on route change
    reinitAnimations()
  }, [location.pathname])

  return <>{children}</>
}

function App() {
  return (
    <Router>
      <RouteHandler>
        <Routes>
          {/* Admin Routes (no navbar/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Public Routes */}
          <Route
            path="/*"
            element={
              <div className="min-h-screen flex flex-col bg-[#0b0b0b]">
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/case-study" element={<CaseStudies />} />
                    <Route path="/why-content" element={<WhyContent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />

                  </Routes>
                </main>
                <Footer />
                <WhatsAppButton />
              </div>
            }
          />
        </Routes>
      </RouteHandler>
    </Router>
  )
}

export default App

