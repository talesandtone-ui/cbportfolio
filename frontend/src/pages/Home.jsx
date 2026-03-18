import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, CheckCircle, TrendingUp, Video, Globe, Megaphone, Users, Award, Zap } from 'lucide-react'

import Testimonials from '../components/Testimonials'
import Process from '../components/Process'
import { reinitAnimations } from '../utils/animations'

const Home = () => {
  useEffect(() => {
    reinitAnimations()
  }, [])

  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Reels, YouTube, Ads, Cinematic edits that captivate audiences',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Marketing that brings you more sales',
      color: 'from-primary-600 to-primary-800'
    },
  ]

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '200+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '3+', label: 'Years Experience' },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-950 text-white">
        {/* Animated gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

            <div className="hero-animate inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/25 rounded-full px-5 py-2 mb-8">
              <span className="text-sm font-medium text-primary-400">🚀 Your Digital Growth Partner</span>
            </div>

            <h1 className="hero-animate hero-animate-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight text-white">
              We Help Your <span className="text-gradient">Business</span> Grow
            </h1>

            <p className="hero-animate hero-animate-delay-2 text-xl text-dark-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              We help you get more customers with great videos, clean websites, and smart marketing.
              <span className="block mt-2 text-lg text-dark-500">We help startups, creators, local businesses, and production houses scale their digital presence.</span>
            </p>

            <div className="hero-animate hero-animate-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="cta-button group px-8 py-4 bg-gradient-primary text-dark-950 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/25 flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="cta-button group px-8 py-4 bg-dark-800 border border-primary-500/20 text-primary-400 rounded-lg font-semibold text-lg hover:border-primary-500/40 hover:bg-dark-800/80 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Play className="w-5 h-5" />
                <span>View Our Work</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-900 border-y border-primary-700/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="scroll-reveal text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-dark-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              Complete digital services for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card scroll-reveal-stagger group relative bg-dark-900 border border-dark-700/50 rounded-2xl p-8 hover:border-primary-500/30"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-dark-950" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-white">{service.title}</h3>
                <p className="text-dark-400 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-500 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-dark-950 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/20 transform hover:scale-105 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
              Why Choose <span className="text-gradient">Buildlabs?</span>
            </h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              We combine creativity with data-driven strategies to deliver results that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Success',
                description: '500+ happy clients and 98% satisfaction rate.'
              },
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'We deliver projects on time without quality compromise.'
              },
              {
                icon: Users,
                title: 'Full Support',
                description: 'Dedicated managers and 24/7 support for you.'
              },
              {
                icon: TrendingUp,
                title: 'Real Results',
                description: 'Strategies that actually help your business grow sales.'
              },
              {
                icon: Globe,
                title: 'All-in-One Service',
                description: 'Video to website to marketing - we handle everything.'
              },
              {
                icon: CheckCircle,
                title: 'Clear Pricing',
                description: 'No hidden costs. Simple and flexible packages.'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="service-card scroll-reveal-stagger bg-dark-950 border border-dark-700/50 rounded-xl p-6 hover:border-primary-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-500/15 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold font-display mb-2 text-white">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal">
            <Link
              to="/contact"
              className="cta-button inline-flex items-center px-8 py-4 bg-gradient-primary text-dark-950 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/25"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-dark-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-300/20 rounded-full blur-[80px]"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-950">
              Ready to Scale Your Digital Presence?
            </h2>
            <p className="text-xl text-dark-800 mb-8">
              Get a free consultation and discover how we can help turn your business into profits.
            </p>
          </div>
          <div className="scroll-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="cta-button px-8 py-4 bg-dark-950 text-primary-500 rounded-lg font-semibold text-lg hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/918237513033"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button px-8 py-4 bg-dark-950/20 border-2 border-dark-950/30 text-dark-950 rounded-lg font-semibold text-lg hover:bg-dark-950/30 transition-all flex items-center space-x-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
