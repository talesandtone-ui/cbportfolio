import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, AlertCircle, Instagram, Linkedin } from 'lucide-react'
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { emailService } from '../services/email'
import { shakeElement, reinitAnimations } from '../utils/animations'
import useSEO from '../hooks/useSEO'

const Contact = () => {
  useSEO({
    title: 'Contact Us - Start Growing Your Brand',
    description: 'Get in touch with Buildlabs Digital. Contact our team for social media growth, high-converting video production, modern website design, or custom branding services.',
    keywords: 'contact buildlabs, digital marketing contact, hire digital agency',
    canonicalPath: '/contact',
    noIndex: false
  })

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
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.')
      setLoading(false)
      const errorEl = document.getElementById('error-message')
      if (errorEl) shakeElement(errorEl)
      return
    }

    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        status: 'new',
        createdAt: new Date()
      })
      emailService.sendLeadNotification(formData).catch(() => { })
      emailService.sendConfirmationEmail(formData).catch(() => { })
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
      }, 5000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const whatsappNumber = '919307294733'
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in Buildlabs services. Can we discuss?")

  const inputClass = "w-full px-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#8BCF1D]/40 focus:border-[#8BCF1D]/60 transition-all duration-200"
  const labelClass = "block text-xs font-bold tracking-wider uppercase text-neutral-500 mb-2"

  return (
    <div className="bg-white min-h-screen text-black">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-hero-green-radial pt-24 pb-8 md:pt-28 md:pb-10 text-center">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#8BCF1D]/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-white/60 text-[10px] font-black tracking-[0.3em] uppercase mb-3">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold font-display leading-tight tracking-tight text-white mb-3">
            Let's Build <span className="text-white font-black underline decoration-[#8BCF1D] decoration-4 underline-offset-4">Something Great</span>
          </h1>
          <p className="text-white/75 text-sm max-w-md mx-auto leading-relaxed mb-6">
            Tell us about your project — we'll get back within 24 hours.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-full font-bold text-sm tracking-wider transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="py-6 border-b border-neutral-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Mail, label: 'Email', value: 'buildlabsdigital@gmail.com', href: 'mailto:buildlabsdigital@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 82375 13033', href: 'tel:+918237513033' },
              { icon: MessageCircle, label: 'WhatsApp', value: '+91 93072 94733', href: `https://wa.me/${whatsappNumber}` },
              { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra', href: '#' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group flex flex-col items-start p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#8BCF1D]/60 hover:bg-[#f7fff0] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#8BCF1D]/15 flex items-center justify-center mb-3 group-hover:bg-[#8BCF1D]/25 transition-colors">
                  <item.icon className="w-4 h-4 text-[#5a9a0f]" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-neutral-400 mb-1">{item.label}</span>
                <span className="text-neutral-900 text-xs font-semibold leading-snug break-all">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Form + Info ── */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Form (3 cols) */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <span className="text-[#5a9a0f] text-[10px] font-black tracking-[0.3em] uppercase block mb-2">REQUEST A CONSULTATION</span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-display text-black leading-tight">
                  Tell us about <br /> your project
                </h2>
              </div>

              {submitted ? (
                <div className="bg-[#8BCF1D]/10 border border-[#8BCF1D]/30 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#8BCF1D]/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-[#5a9a0f]" />
                  </div>
                  <h3 className="text-xl font-black text-black mb-2 font-display">Message Sent!</h3>
                  <p className="text-neutral-500 text-sm">We've received your request and will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div id="error-message" className="flex items-start space-x-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-300">{error}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name <span className="text-[#8BCF1D]">*</span></label>
                      <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email <span className="text-[#8BCF1D]">*</span></label>
                      <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className={labelClass}>Service</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                        <option value="">Select a service</option>
                        <option value="social-media">Social Media Marketing</option>
                        <option value="video-production">Video Production</option>
                        <option value="branding">Branding & Design</option>
                        <option value="website">Website Development</option>
                        <option value="software">Software Development</option>
                        <option value="full-package">Full Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className={labelClass}>Budget Range</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                        <option value="">Select budget</option>
                        <option value="under-25k">Under ₹25,000</option>
                        <option value="25k-50k">₹25,000 – ₹50,000</option>
                        <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                        <option value="1l-2l">₹1,00,000 – ₹2,00,000</option>
                        <option value="over-2l">Over ₹2,00,000</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Message <span className="text-[#8BCF1D]">*</span></label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project goals, timelines and expectations..." className={`${inputClass} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-black hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-black text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-md"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Panel (2 cols) */}
            <div className="lg:col-span-2 space-y-6">

              {/* Why choose us */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                <h3 className="text-base font-black font-display text-black uppercase tracking-wide mb-5">
                  Why <span className="text-[#5a9a0f]">Buildlabs?</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    'Free initial consultation & brand audit',
                    'Response guaranteed within 24 hours',
                    'No hidden costs — transparent pricing',
                    'Dedicated account manager for every client',
                    'Proven results across 50+ brands',
                    'Flexible packages for every budget',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="w-5 h-5 rounded-full bg-[#8BCF1D]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#5a9a0f]" />
                      </span>
                      <span className="text-neutral-600 text-xs font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Hours */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                <h3 className="text-base font-black font-display text-black uppercase tracking-wide mb-4">Business Hours</h3>
                <div className="space-y-3 text-xs">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-neutral-200 pb-3 last:border-0 last:pb-0">
                      <span className="text-neutral-500 font-medium">{row.day}</span>
                      <span className={`font-bold ${row.hours === 'Closed' ? 'text-neutral-400' : 'text-black'}`}>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                <h3 className="text-base font-black font-display text-black uppercase tracking-wide mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a href="https://www.instagram.com/buildlabsdigital/" target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-white hover:bg-[#f7fff0] border border-neutral-200 hover:border-[#8BCF1D]/50 transition-all duration-200 text-xs font-bold text-neutral-800">
                    <Instagram className="w-4 h-4 text-[#5a9a0f]" />
                    <span>Instagram</span>
                  </a>
                  <a href="https://linkedin.com/company/buildlabs.in" target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-white hover:bg-[#f7fff0] border border-neutral-200 hover:border-[#8BCF1D]/50 transition-all duration-200 text-xs font-bold text-neutral-800">
                    <Linkedin className="w-4 h-4 text-[#5a9a0f]" />
                    <span>LinkedIn</span>
                  </a>
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
