import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, CheckCircle, TrendingUp, Video, Globe, Megaphone, Users, Award, Zap } from 'lucide-react'
import ClientLogos from '../components/ClientLogos'
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
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Performance-driven campaigns that scale your business',
      color: 'from-purple-500 to-indigo-600'
    },
  ]

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '200+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '3+', label: 'Years Experience' },
  ]

  const features = [
    'End-to-end digital solutions',
    'Results-driven strategies',
    'Modern & creative approach',
    'Dedicated account managers',
    'Real-time analytics & reporting',
    '24/7 support & maintenance'
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-animate inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Premium Digital Marketing Agency</span>
            </div>

            <h1 className="hero-animate hero-animate-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              We Turn <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Business</span> Into <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Profits</span>
            </h1>

            <p className="hero-animate hero-animate-delay-2 text-xl md:text-2xl text-dark-300 mb-10 leading-relaxed">
              Full-service digital marketing agency helping brands grow through video, websites, and performance marketing.
              <span className="block mt-2 text-lg">We help startups, creators, local businesses, and production houses scale their digital presence.</span>
            </p>

            <div className="hero-animate hero-animate-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="cta-button group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-2xl flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="cta-button group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="scroll-reveal text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-dark-600 dark:text-dark-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-dark-50 dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              End-to-end digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card scroll-reveal-stagger group relative bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-2 transition-all"
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
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
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
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Why Choose <span className="text-gradient">Buildlabs?</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              We combine creativity with data-driven strategies to deliver results that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Track Record',
                description: '500+ projects completed, 200+ happy clients, 98% satisfaction rate'
              },
              {
                icon: Zap,
                title: 'Fast Turnaround',
                description: 'Quick response times and efficient project delivery without compromising quality'
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'Dedicated account managers and 24/7 support for all your needs'
              },
              {
                icon: TrendingUp,
                title: 'Results-Driven',
                description: 'Data-backed strategies that deliver measurable ROI and growth'
              },
              {
                icon: Globe,
                title: 'End-to-End Solutions',
                description: 'From video editing to web development to marketing - all under one roof'
              },
              {
                icon: CheckCircle,
                title: 'Transparent Pricing',
                description: 'No hidden costs, flexible packages, and clear communication throughout'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="service-card scroll-reveal-stagger bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal">
            <Link
              to="/contact"
              className="cta-button inline-flex items-center px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-2xl"
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
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Scale Your Digital Presence?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a free consultation and discover how we can help turn your business into profits.
            </p>
          </div>
          <div className="scroll-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="cta-button px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/918237513033"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button px-8 py-4 bg-primary-700 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-primary-800 transition-all flex items-center space-x-2"
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

