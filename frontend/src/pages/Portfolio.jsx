import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, TrendingUp, Eye, Users, Zap, Video, Globe, Megaphone, BarChart3, Clock } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'

const Portfolio = () => {
  useEffect(() => {
    reinitAnimations()
  }, [])

  const caseStudies = [
    {
      id: 1,
      client: 'Taste Fusion',
      category: 'Web Development + Marketing',
      problem: 'Low website conversion rate and minimal online presence',
      strategy: 'Complete website redesign with conversion-focused landing pages and performance marketing campaigns',
      services: ['Website Development', 'SEO Optimization', 'Performance Marketing', 'Landing Pages'],
      results: {
        views: '1500K+',
        leads: '1120+',
        conversions: '15%',
        revenue: '₹2L+'
      },
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      icon: Globe
    },
    {
      id: 2,
      client: 'Omkar Enterprise',
      category: 'Web Development + Marketing',
      problem: 'Low website conversion rate and minimal online presence',
      strategy: 'Complete website redesign with conversion-focused landing pages and performance marketing campaigns',
      services: ['Website Development', 'SEO Optimization', 'Performance Marketing', 'Landing Pages'],
      results: {
        views: '25K+',
        leads: '120+',
        conversions: '15%',
        revenue: '₹L+'
      },
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      icon: Globe
    },
    {
      id: 3,
      client: 'Chetu Flims',
      category: 'Video Editing + Social Media',
      problem: 'Inconsistent content quality and low engagement rates',
      strategy: 'Professional video editing pipeline and strategic social media management',
      services: ['Video Editing', 'Motion Graphics', 'Social Media Management', 'Content Strategy'],
      results: {
        views: '50K+',
        leads: '200+',
        conversions: '12%',
        revenue: '₹2L+'
      },
      image: 'bg-gradient-to-br from-red-500 to-pink-600',
      icon: Video
    },

  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Our <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-dark-300">
            Real results from real clients. See how we've helped brands grow their digital presence.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="portfolio-item scroll-reveal-stagger bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Image/Video Placeholder - Can be replaced with actual screenshots/videos */}
                <div className={`${study.image} h-64 relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Placeholder for actual video/screenshot - Replace with <img> or <video> tag */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full flex items-center justify-center">
                      <study.icon className="w-32 h-32 text-white/50" />
                    </div>
                  </div>
                  <div className="portfolio-overlay text-center text-white">
                    <study.icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block mb-2">
                      <Play className="w-6 h-6 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mt-4">{study.client}</h3>
                    <p className="text-sm text-primary-300 mt-2">View Case Study</p>
                    <p className="text-xs text-white/80 mt-1">Click to see video/screenshots</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-display mb-1">{study.client}</h3>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-2">Challenge:</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">{study.problem}</p>
                  </div>

                  {/* Strategy */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-2">Our Strategy:</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">{study.strategy}</p>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-2">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Before/After Results */}
                  <div className="border-t border-dark-200 dark:border-dark-700 pt-4 mb-4">
                    <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-3">Before & After:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-3 border border-red-200 dark:border-red-800">
                        <p className="text-xs font-semibold text-red-700 dark:text-red-400 mb-1">Before</p>
                        <p className="text-sm text-dark-700 dark:text-dark-300">{study.problem}</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-3 border border-green-200 dark:border-green-800">
                        <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">After</p>
                        <p className="text-sm text-dark-700 dark:text-dark-300">Significant growth in {study.results.views} views, {study.results.leads} leads, and {study.results.revenue} revenue</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t border-dark-200 dark:border-dark-700 pt-4">
                    <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-4">Growth Metrics:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Eye className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          <span className="text-xs text-dark-600 dark:text-dark-400">Total Views</span>
                        </div>
                        <div className="text-xl font-bold text-primary-700 dark:text-primary-300">
                          {study.results.views}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Users className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          <span className="text-xs text-dark-600 dark:text-dark-400">Leads Generated</span>
                        </div>
                        <div className="text-xl font-bold text-primary-700 dark:text-primary-300">
                          {study.results.leads}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          <span className="text-xs text-dark-600 dark:text-dark-400">Conversion Rate</span>
                        </div>
                        <div className="text-xl font-bold text-primary-700 dark:text-primary-300">
                          {study.results.conversions}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <BarChart3 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          <span className="text-xs text-dark-600 dark:text-dark-400">Revenue Impact</span>
                        </div>
                        <div className="text-xl font-bold text-primary-700 dark:text-primary-300">
                          {study.results.revenue}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-400">Project Duration: 3-6 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how we can help achieve similar results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 scroll-reveal">
            <Link
              to="/contact"
              className="cta-button px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="cta-button px-8 py-4 bg-primary-700 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-primary-800 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

