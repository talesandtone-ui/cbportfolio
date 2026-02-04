import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Target, Zap, Users, Award, ArrowRight, CheckCircle } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'

const About = () => {
  useEffect(() => {
    reinitAnimations()
  }, [])

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes and ROI for every project we undertake.'
    },
    {
      icon: Zap,
      title: 'Creative Excellence',
      description: 'We combine creativity with strategy to deliver visually stunning and effective solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships, not just projects.'
    },
    {
      icon: Award,
      title: 'Reliable & Modern',
      description: 'We stay ahead of trends and use cutting-edge tools to deliver premium results.'
    },
  ]

  const team = [
    {
      name: 'Creative Team',
      role: 'Video & Design',
      description: 'Expert editors, motion graphics artists, and designers',
      expertise: ['Video Editing', 'Motion Graphics', 'Graphic Design', 'Brand Identity']
    },
    {
      name: 'Tech Team',
      role: 'Web & Development',
      description: 'Full-stack developers and technical specialists',
      expertise: ['React/Next.js', 'WordPress', 'E-commerce', 'API Integration']
    },
    {
      name: 'Marketing Team',
      role: 'Strategy & Growth',
      description: 'Performance marketers and growth strategists',
      expertise: ['Performance Marketing', 'Social Media', 'SEO', 'Analytics']
    },
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years of Experience' },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            About <span className="text-gradient bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent">Buildlabs</span>
          </h1>
          <p className="text-xl text-primary-100">
            We're a premium digital marketing agency that turns business into profits.
            Modern, creative, reliable, and results-driven.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold font-display mb-6 scroll-reveal">Who We Are</h2>
            <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed scroll-reveal">
              Buildlabs is a premium digital marketing agency founded by a team of creative professionals and marketing experts.
              We're not just another agency—we're your strategic partners in digital growth.
            </p>
            <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed scroll-reveal">
              Our team consists of video editors, web developers, graphic designers, performance marketers, and growth strategists
              who are passionate about turning creative ideas into profitable digital experiences. We've worked with startups,
              creators, local businesses, and production houses across various industries.
            </p>
            <p className="text-dark-600 dark:text-dark-400 leading-relaxed scroll-reveal">
              What sets us apart is our commitment to combining creative excellence with data-driven strategies.
              We don't just create beautiful content—we create content that converts, engages, and drives measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Buildlabs */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-display mb-6 scroll-reveal">Why Buildlabs?</h2>
          <div className="space-y-6 scroll-reveal">
            <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold font-display mb-3 flex items-center">
                <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                End-to-End Solutions
              </h3>
              <p className="text-dark-600 dark:text-dark-400">
                From video editing to website development, from branding to performance marketing—we handle it all under one roof.
                No need to coordinate with multiple agencies.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold font-display mb-3 flex items-center">
                <Target className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                Results-Driven Approach
              </h3>
              <p className="text-dark-600 dark:text-dark-400">
                Every project is backed by data and analytics. We measure everything and optimize for results, not just aesthetics.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold font-display mb-3 flex items-center">
                <Users className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                Dedicated Account Managers
              </h3>
              <p className="text-dark-600 dark:text-dark-400">
                You'll have a dedicated point of contact who understands your business and ensures smooth communication throughout the project.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold font-display mb-3 flex items-center">
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                Modern & Reliable
              </h3>
              <p className="text-dark-600 dark:text-dark-400">
                We use cutting-edge tools and stay ahead of trends. Our processes are streamlined, and we deliver on time, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-display mb-4">Our Mission</h2>
              <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
                To empower brands with premium digital solutions that drive growth, engagement, and measurable results.
                We turn creative ideas into profitable digital experiences.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-display mb-4">Our Vision</h2>
              <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
                To become the go-to digital marketing agency for brands that value creativity, reliability,
                and results. We envision a future where every business can compete and thrive in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display mb-2">{value.title}</h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              Specialized teams delivering excellence across all services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="service-card scroll-reveal-stagger bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-xl font-bold font-display mb-2">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">{member.role}</p>
                <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-dark-600 dark:text-dark-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Why Work With Us?
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {[
              'End-to-end digital solutions under one roof',
              'Modern, creative, and results-driven approach',
              'Dedicated account managers for personalized service',
              'Transparent communication and regular updates',
              'Data-driven strategies with measurable results',
              'Flexible packages for businesses of all sizes',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-dark-700 dark:text-dark-300 text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
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
    </div>
  )
}

export default About

