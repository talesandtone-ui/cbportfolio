import { Search, MessageSquare, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'We Meet',
      description: 'We listen to your ideas and understand what you need for your business.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      number: '02',
      icon: MessageSquare,
      title: 'We Plan',
      description: 'We create a clear plan for your project with timeline and costs.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '03',
      icon: Zap,
      title: 'We Build',
      description: 'Our team starts working on your project and keeps you updated.',
      color: 'from-orange-500 to-red-600'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'We Launch',
      description: 'We launch your project and help you grow your business.',
      color: 'from-green-500 to-emerald-600'
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            A proven 4-step process that ensures your success from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="service-card scroll-reveal-stagger relative"
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary-100 dark:text-primary-900/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center scroll-reveal">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Process

