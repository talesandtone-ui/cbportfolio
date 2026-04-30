import { Link } from 'react-router-dom'
import { Check, ArrowRight, Zap, TrendingUp, Crown, MessageCircle } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      subtitle: 'Perfect for small businesses',
      price: '₹25,000',
      period: '/month',
      description: 'Essential digital marketing services to get your business online',
      features: [
        'Social Media Management (2 platforms)',
        '10 Social Media Posts/Month',
        'Basic Graphic Design',
        'Monthly Analytics Report',
        'Email Support',
        'Content Calendar',
        '1 Revision Round',
      ],
      cta: 'Get Started',
      popular: false,
      icon: Zap,
    },
    {
      name: 'Growth',
      subtitle: 'For growing brands',
      price: '₹55,000',
      period: '/month',
      description: 'Comprehensive digital solutions to scale your business',
      features: [
        'Social Media Management (All platforms)',
        '20 Social Media Posts/Month',
        'Video Editing (10 videos/month)',
        'Website Maintenance & Updates',
        'Performance Marketing Setup',
        'SEO Optimization',
        'Monthly Strategy Call',
        'Priority Support',
        '3 Revision Rounds',
        'Analytics Dashboard',
      ],
      cta: 'Get Started',
      popular: true,
      icon: TrendingUp,
    },
    {
      name: 'Premium',
      subtitle: 'For creators & companies',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for maximum growth and ROI',
      features: [
        'Unlimited Social Media Posts',
        'Unlimited Video Editing',
        'Custom Website Development',
        'Complete Brand Identity',
        'Dedicated Account Manager',
        'Performance Marketing (Full Management)',
        'Lead Generation Funnels',
        'Marketing Automation',
        'Weekly Strategy Calls',
        '24/7 Priority Support',
        'Unlimited Revisions',
        'Custom Reporting',
      ],
      cta: 'Contact Us',
      popular: false,
      icon: Crown,
    },
  ]

  const addOns = [
    {
      service: 'Additional Video Editing',
      price: '₹2,500',
      unit: 'per video'
    },
    {
      service: 'Landing Page Development',
      price: '₹15,000',
      unit: 'one-time'
    },
    {
      service: 'Website Development (Custom)',
      price: '₹50,000+',
      unit: 'one-time'
    },
    {
      service: 'Brand Identity Package',
      price: '₹30,000',
      unit: 'one-time'
    },
    {
      service: 'SEO Audit & Optimization',
      price: '₹20,000',
      unit: 'one-time'
    },
    {
      service: 'Performance Marketing (Managed)',
      price: '₹15,000+',
      unit: '/month + ad spend'
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="bg-dark-950 py-20 relative overflow-hidden border-b border-primary-700/15">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-500/5 rounded-full blur-[120px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
            Pricing & <span className="text-gradient">Packages</span>
          </h1>
          <p className="text-xl text-dark-400">
            Flexible pricing plans designed to grow with your business.
            Choose the perfect package or customize your own.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-dark-900 border rounded-2xl p-8 hover:-translate-y-2 transition-all ${plan.popular ? 'ring-2 ring-primary-500 scale-105 border-primary-500/30' : 'border-dark-700/50 hover:border-primary-500/30'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-dark-950 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-16 h-16 rounded-xl bg-primary-500/15 flex items-center justify-center mb-6">
                  <plan.icon className="w-8 h-8 text-primary-500" />
                </div>

                <h3 className="text-2xl font-bold font-display mb-2 text-white">{plan.name}</h3>
                <p className="text-dark-400 text-sm mb-6">{plan.subtitle}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-primary-500">{plan.price}</span>
                    {plan.period && <span className="text-dark-400 ml-2">{plan.period}</span>}
                  </div>
                  <p className="text-dark-400 text-sm mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-dark-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`cta-button block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${plan.popular
                      ? 'bg-gradient-primary text-dark-950 hover:shadow-lg hover:shadow-primary-500/20'
                      : 'bg-dark-800 border border-dark-700/50 text-dark-200 hover:border-primary-500/30 hover:text-primary-400'
                    }`}
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
              Add-On <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-dark-400">
              Enhance your package with additional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-dark-950 border border-dark-700/50 rounded-xl p-6 flex items-center justify-between hover:border-primary-500/30 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {addon.service}
                  </h3>
                  <p className="text-sm text-dark-400">{addon.unit}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-500">
                    {addon.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
            Need a <span className="text-gradient">Custom Solution?</span>
          </h2>
          <p className="text-lg text-dark-400 mb-8">
            Every business is unique. We offer custom project pricing tailored to your specific needs.
            Get in touch to discuss your requirements and receive a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="cta-button px-8 py-4 bg-gradient-primary text-dark-950 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/25 flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/918237513033"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-all flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes will be reflected in your next billing cycle.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, UPI, credit/debit cards, and other digital payment methods. All payments are secure and encrypted.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 30-day money-back guarantee for monthly plans. Custom projects are billed based on milestones with clear terms.'
              },
              {
                q: 'How long does it take to see results?',
                a: 'Results vary by service and industry. Typically, you\'ll see initial improvements within 2-4 weeks, with significant growth in 3-6 months.'
              },
              {
                q: 'Do you work with international clients?',
                a: 'Yes! We work with clients globally. All communication can be done remotely via video calls, email, and project management tools.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-dark-950 border border-dark-700/50 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-dark-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
