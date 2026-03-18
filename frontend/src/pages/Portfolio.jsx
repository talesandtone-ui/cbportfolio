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
      icon: Video
    },

  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-dark-950 py-20 relative overflow-hidden border-b border-primary-700/15">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-500/5 rounded-full blur-[120px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-dark-400">
            Real results from real clients. See how we've helped brands grow their digital presence.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="portfolio-item scroll-reveal-stagger bg-dark-900 border border-dark-700/50 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-colors"
              >
                {/* Image/Video Placeholder */}
                <div className="bg-gradient-to-br from-primary-700/30 to-primary-900/30 h-64 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-dark-950/30"></div>
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full flex items-center justify-center">
                      <study.icon className="w-32 h-32 text-primary-500/30" />
                    </div>
                  </div>
                  <div className="portfolio-overlay text-center text-white">
                    <study.icon className="w-16 h-16 mx-auto mb-4 text-primary-400 opacity-80" />
                    <div className="bg-primary-500/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block mb-2 border border-primary-500/20">
                      <Play className="w-6 h-6 mx-auto text-primary-400" />
                    </div>
                    <h3 className="text-xl font-bold mt-4">{study.client}</h3>
                    <p className="text-sm text-primary-400 mt-2">View Case Study</p>
                    <p className="text-xs text-dark-300 mt-1">Click to see video/screenshots</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-display mb-1 text-white">{study.client}</h3>
                      <span className="text-sm text-primary-500 font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-dark-400 text-sm">{study.problem}</p>
                  </div>

                  {/* Strategy */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Our Strategy:</h4>
                    <p className="text-dark-400 text-sm">{study.strategy}</p>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium border border-primary-500/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Before/After Results */}
                  <div className="border-t border-dark-700/50 pt-4 mb-4">
                    <h4 className="font-semibold text-white mb-3">Before & After:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                        <p className="text-xs font-semibold text-red-400 mb-1">Before</p>
                        <p className="text-sm text-dark-300">{study.problem}</p>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                        <p className="text-xs font-semibold text-green-400 mb-1">After</p>
                        <p className="text-sm text-dark-300">Significant growth in {study.results.views} views, {study.results.leads} leads, and {study.results.revenue} revenue</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t border-dark-700/50 pt-4">
                    <h4 className="font-semibold text-white mb-4">Growth Metrics:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-500/8 rounded-lg p-3 border border-primary-500/15">
                        <div className="flex items-center space-x-2 mb-1">
                          <Eye className="w-4 h-4 text-primary-500" />
                          <span className="text-xs text-dark-400">Total Views</span>
                        </div>
                        <div className="text-xl font-bold text-primary-400">
                          {study.results.views}
                        </div>
                      </div>
                      <div className="bg-primary-500/8 rounded-lg p-3 border border-primary-500/15">
                        <div className="flex items-center space-x-2 mb-1">
                          <Users className="w-4 h-4 text-primary-500" />
                          <span className="text-xs text-dark-400">Leads Generated</span>
                        </div>
                        <div className="text-xl font-bold text-primary-400">
                          {study.results.leads}
                        </div>
                      </div>
                      <div className="bg-primary-500/8 rounded-lg p-3 border border-primary-500/15">
                        <div className="flex items-center space-x-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-primary-500" />
                          <span className="text-xs text-dark-400">Conversion Rate</span>
                        </div>
                        <div className="text-xl font-bold text-primary-400">
                          {study.results.conversions}
                        </div>
                      </div>
                      <div className="bg-primary-500/8 rounded-lg p-3 border border-primary-500/15">
                        <div className="flex items-center space-x-2 mb-1">
                          <BarChart3 className="w-4 h-4 text-primary-500" />
                          <span className="text-xs text-dark-400">Revenue Impact</span>
                        </div>
                        <div className="text-xl font-bold text-primary-400">
                          {study.results.revenue}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary-500/8 rounded-lg border border-primary-500/15">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary-500" />
                        <span className="text-xs font-semibold text-primary-400">Project Duration: 3-6 months</span>
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
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-950">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-dark-800 mb-8">
            Let's discuss how we can help achieve similar results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 scroll-reveal">
            <Link
              to="/contact"
              className="cta-button px-8 py-4 bg-dark-950 text-primary-500 rounded-lg font-semibold text-lg hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="cta-button px-8 py-4 bg-dark-950/20 border-2 border-dark-950/30 text-dark-950 rounded-lg font-semibold text-lg hover:bg-dark-950/30 transition-all"
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
