import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Video, Film, Image, Palette, Globe, Code, Search, BarChart3, Instagram, Youtube, Facebook, TrendingUp, Users, Mail, MessageCircle, Filter, PieChart, Zap, ArrowRight } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'

const Services = () => {
  useEffect(() => {
    reinitAnimations()
  }, [])
  const creativeServices = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Great video editing for Reels, YouTube, and Ads. We make your videos look amazing so people want to watch them.',
      features: ['Reels & Short-form content', 'YouTube long-form videos', 'Social media ads', 'Cinematic edits', 'Color grading & correction', 'Audio mixing', 'Transitions & effects', 'Thumbnail design'],
      details: 'From quick social media clips to full-length YouTube videos, we handle all aspects of post-production. Our editors are experts in Premiere Pro, After Effects, and DaVinci Resolve.'
    },
    {
      icon: Film,
      title: 'Motion Graphics & Animations',
      description: 'Eye-catching animations and motion graphics that bring your brand to life',
      features: ['2D & 3D animations', 'Logo animations', 'Explainer videos', 'Title sequences', 'Lower thirds & graphics', 'After Effects expertise']
    },
    {
      icon: Image,
      title: 'Graphic Design',
      description: 'Stunning visuals for posters, thumbnails, ads, and social media',
      features: ['Social media posts', 'Thumbnail design', 'Ad creatives', 'Posters & banners', 'Infographics', 'Brand assets']
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity design including logo, colors, and typography',
      features: ['Logo design', 'Color palette', 'Typography selection', 'Brand guidelines', 'Style guide', 'Brand assets']
    },
  ]

  const webServices = [
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Clean websites that help you get more customers',
      features: ['UI/UX design', 'Responsive layouts', 'Wireframing', 'Prototyping', 'Design systems', 'Mobile-first approach']
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom website development using HTML/CSS/JS, React, and WordPress',
      features: ['React & Next.js', 'WordPress development', 'Custom HTML/CSS/JS', 'E-commerce solutions', 'API integration', 'Third-party integrations']
    },
    {
      icon: Zap,
      title: 'Landing Pages',
      description: 'High-converting landing pages optimized for lead generation',
      features: ['Conversion optimization', 'A/B testing', 'Fast loading speeds', 'Mobile responsive', 'SEO friendly', 'Analytics integration']
    },
    {
      icon: Globe,
      title: 'Website Maintenance & Hosting',
      description: 'Ongoing support, updates, and reliable hosting solutions',
      features: ['Regular updates', 'Security patches', 'Backup management', 'Performance optimization', 'Hosting setup', '24/7 monitoring']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'On-page and technical SEO to improve search rankings',
      features: ['On-page SEO', 'Technical SEO', 'Keyword research', 'Content optimization', 'Link building', 'Analytics & reporting']
    },
  ]

  const marketingServices = [
    {
      icon: Instagram,
      title: 'Social Media Management',
      description: 'Complete social media management for Instagram, YouTube, and Facebook',
      features: ['Content strategy', 'Post scheduling', 'Community management', 'Engagement optimization', 'Analytics tracking', 'Growth strategies']
    },
    {
      icon: TrendingUp,
      title: 'Online Ads (Facebook & Google)',
      description: 'Ads that run on facts to save you money and get better results.',
      features: ['Meta Ads (Facebook/Instagram)', 'Google Ads (Search & Display)', 'Campaign optimization', 'Audience targeting', 'Budget management', 'ROI tracking']
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Strategic influencer partnerships to amplify your brand reach',
      features: ['Influencer outreach', 'Campaign management', 'Content collaboration', 'Performance tracking', 'Relationship management', 'ROI analysis']
    },
    {
      icon: BarChart3,
      title: 'Content Strategy & Calendar',
      description: 'Data-backed content strategies and organized content calendars',
      features: ['Content planning', 'Calendar creation', 'Trend analysis', 'Content optimization', 'Publishing schedule', 'Performance review']
    },
    {
      icon: Mail,
      title: 'Email & WhatsApp Marketing',
      description: 'Automated email and WhatsApp campaigns for customer engagement',
      features: ['Email campaigns', 'WhatsApp automation', 'Drip sequences', 'Segmentation', 'A/B testing', 'Analytics & reporting']
    },
  ]

  const growthServices = [
    {
      icon: Filter,
      title: 'Lead Generation Funnels',
      description: 'Complete funnel systems to capture and convert leads',
      features: ['Funnel design', 'Landing page creation', 'Email sequences', 'Automation setup', 'Conversion optimization', 'Analytics tracking']
    },
    {
      icon: PieChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and regular performance reports',
      features: ['Google Analytics setup', 'Custom dashboards', 'Monthly reports', 'Data analysis', 'Insights & recommendations', 'KPI tracking']
    },
    {
      icon: TrendingUp,
      title: 'Conversion Rate Optimization',
      description: 'Data-driven optimization to improve conversion rates',
      features: ['A/B testing', 'User behavior analysis', 'Heatmap tracking', 'Optimization strategies', 'Performance monitoring', 'Continuous improvement']
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automated marketing workflows to scale your business',
      features: ['Workflow automation', 'Lead nurturing', 'Customer journeys', 'Trigger-based campaigns', 'Integration setup', 'Performance tracking']
    },
  ]

  const ServiceSection = ({ title, description, services, id }) => (
    <section id={id} className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card scroll-reveal-stagger bg-dark-900 border border-dark-700/50 rounded-xl p-6 hover:border-primary-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-500/15 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold font-display mb-2 text-white">{service.title}</h3>
              <p className="text-dark-400 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-dark-300">
                    <span className="text-primary-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-dark-950 border-b border-primary-700/15 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-500/5 rounded-full blur-[120px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-dark-400">
            Complete digital services to help your business grow online
          </p>
        </div>
      </section>

      {/* Creative Services */}
      <div className="bg-dark-950">
        <ServiceSection
          id="video"
          title="Creative Services"
          description="Visual storytelling that captivates and converts"
          services={creativeServices}
        />
      </div>

      {/* Web & Tech */}
      <div className="bg-dark-900">
        <ServiceSection
          id="web"
          title="Web & Technology"
          description="Modern websites and technical solutions that drive results"
          services={webServices}
        />
      </div>

      {/* Digital Marketing */}
      <div className="bg-dark-950">
        <ServiceSection
          id="marketing"
          title="Digital Marketing"
          description="Data-driven marketing strategies that scale your business"
          services={marketingServices}
        />
      </div>

      {/* Business Growth */}
      <div className="bg-dark-900">
        <ServiceSection
          id="growth"
          title="Business Growth"
          description="Strategic solutions to accelerate your growth"
          services={growthServices}
        />
      </div>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 scroll-reveal text-dark-950">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-dark-800 mb-8 scroll-reveal">
            Let's discuss how we can help grow your business with our comprehensive digital solutions.
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
              to="/pricing"
              className="cta-button px-8 py-4 bg-dark-950/20 border-2 border-dark-950/30 text-dark-950 rounded-lg font-semibold text-lg hover:bg-dark-950/30 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
