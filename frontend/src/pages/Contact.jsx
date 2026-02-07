import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, Calendar, CheckCircle, AlertCircle } from 'lucide-react'
import { saveLead } from '../services/leads'
import { emailService } from '../services/email'
import { shakeElement } from '../utils/animations'
import { reinitAnimations } from '../utils/animations'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    reinitAnimations()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields')
      setLoading(false)
      const errorEl = document.getElementById('error-message')
      if (errorEl) shakeElement(errorEl)
      return
    }

    try {
      // Save lead to storage
      const leadResult = await saveLead(formData)

      if (leadResult.success) {
        // Send email notifications (non-blocking)
        emailService.sendLeadNotification(formData).catch(err => {
          console.error('Failed to send admin notification:', err)
        })
        emailService.sendConfirmationEmail(formData).catch(err => {
          console.error('Failed to send confirmation email:', err)
        })

        setSubmitted(true)

        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: ''
          })
        }, 5000)
      } else {
        setError(leadResult.error || 'Failed to submit form. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@buildlabs.in',
      link: 'mailto:hello@buildlabs.in',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 82375 13033',
      link: 'tel:+918237513033',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat with us',
      link: 'https://wa.me/918237513033',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      link: '#',
      color: 'from-purple-500 to-pink-600'
    },
  ]

  const whatsappNumber = '918237513033' // Update with your WhatsApp number
  const whatsappMessage = encodeURIComponent('Hi! I\'m interested in your services. Can we discuss?')

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 hero-animate">
            Get In <span className="text-gradient bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-primary-100 hero-animate hero-animate-delay-1">
            Ready to turn your business into profits? Let's discuss how we can help grow your business.
          </p>
          {/* WhatsApp Button - Floating */}
          <div className="mt-8 hero-animate hero-animate-delay-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-dark-100 mb-1">{method.title}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-400">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold font-display mb-6">Request a Free Consultation</h2>

              {submitted ? (
                <div className="success-message bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div id="error-message" className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="web-development">Web Development</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="branding">Branding</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="performance-marketing">Performance Marketing</option>
                        <option value="full-package">Full Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-25k">Under ₹25,000</option>
                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                        <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                        <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                        <option value="over-2l">Over ₹2,00,000</option>
                        <option value="custom">Custom Budget</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`submit-button w-full px-6 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ${loading ? 'loading' : ''}`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-display mb-6">Why Choose Us?</h2>
                <div className="space-y-4">
                  {[
                    'Free consultation and audit',
                    'Quick response time (within 24 hours)',
                    'Transparent pricing with no hidden costs',
                    'Dedicated account manager',
                    'Proven track record with 200+ clients',
                    'Flexible packages for all budgets',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-dark-700 dark:text-dark-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold font-display mb-4">Book a Free Strategy Call</h3>
                <p className="text-primary-100 mb-6">
                  Schedule a 30-minute call with our team to discuss your project and get expert recommendations.
                </p>
                <a
                  href="https://calendly.com/buildlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Now
                </a>
              </div>

              <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-dark-900 dark:text-dark-100 mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm text-dark-600 dark:text-dark-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

