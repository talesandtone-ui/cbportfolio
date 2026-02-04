import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Video, Film, Image, Palette, Globe, Code, Search, BarChart3, Instagram, Youtube, Facebook, TrendingUp, Users, Mail, MessageCircle, Filter, PieChart, Zap, ArrowRight } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'

const Services = () => {
  useEffect(() => {
    // Re-initialize animations when component mounts (route change)
    reinitAnimations()
  }, [])
  const creativeServices = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing for Reels, YouTube, Ads, and Cinematic content. We transform raw footage into engaging stories that captivate audiences and drive results.',
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
      description: 'Modern, conversion-focused website designs (Static + Dynamic)',
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
      title: 'Performance Marketing',
      description: 'Data-driven paid advertising campaigns on Meta Ads and Google Ads',
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
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            {title}
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card scroll-reveal-stagger bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{service.title}</h3>
              <p className="text-dark-600 dark:text-dark-400 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-dark-700 dark:text-dark-300">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
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
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-100">
            End-to-end digital solutions to help your brand grow and succeed in the digital landscape
          </p>
        </div>
      </section>

      {/* Creative Services */}
      <ServiceSection
        id="video"
        title="Creative Services"
        description="Visual storytelling that captivates and converts"
        services={creativeServices}
      />

      {/* Web & Tech */}
      <ServiceSection
        id="web"
        title="Web & Technology"
        description="Modern websites and technical solutions that drive results"
        services={webServices}
      />

      {/* Digital Marketing */}
      <ServiceSection
        id="marketing"
        title="Digital Marketing"
        description="Data-driven marketing strategies that scale your business"
        services={marketingServices}
      />

      {/* Business Growth */}
      <ServiceSection
        id="growth"
        title="Business Growth"
        description="Strategic solutions to accelerate your growth"
        services={growthServices}
      />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 scroll-reveal">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 scroll-reveal">
            Let's discuss how we can help grow your business with our comprehensive digital solutions.
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
              to="/pricing"
              className="cta-button px-8 py-4 bg-primary-700 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-primary-800 transition-all"
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

