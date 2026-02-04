import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder, TechStartup Co.',
      company: 'TechStartup Co.',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      rating: 5,
      text: 'Buildlabs transformed our digital presence completely. Our website traffic increased by 300% and we saw a 45% conversion rate improvement. Highly professional team!',
      results: '300% traffic increase, 45% conversion rate'
    },
    {
      name: 'Priya Sharma',
      role: 'Content Creator',
      company: 'Creator Studio',
      image: 'bg-gradient-to-br from-pink-500 to-rose-600',
      rating: 5,
      text: 'Their video editing is top-notch! My YouTube channel grew from 10K to 100K subscribers in just 6 months. The quality of work is exceptional and they always deliver on time.',
      results: '10K to 100K subscribers in 6 months'
    },
    {
      name: 'Amit Patel',
      role: 'Marketing Director',
      company: 'E-commerce Brand',
      image: 'bg-gradient-to-br from-green-500 to-emerald-600',
      rating: 5,
      text: 'Best digital marketing agency we\'ve worked with. Their performance marketing campaigns generated ₹75L+ in revenue. ROI was outstanding and they provided detailed analytics.',
      results: '₹75L+ revenue generated'
    },
    {
      name: 'Sneha Reddy',
      role: 'Business Owner',
      company: 'Local Restaurant Chain',
      image: 'bg-gradient-to-br from-orange-500 to-amber-600',
      rating: 5,
      text: 'Buildlabs helped us rebrand completely and launch our digital marketing. Our online orders increased by 250% and brand awareness skyrocketed. Worth every rupee!',
      results: '250% increase in online orders'
    },
    {
      name: 'Vikram Singh',
      role: 'CEO',
      company: 'SaaS Startup',
      image: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      rating: 5,
      text: 'Their lead generation funnels are incredible. We went from struggling to get leads to generating 3,500+ qualified leads with a 52% conversion rate. Game changer!',
      results: '3,500+ leads, 52% conversion rate'
    },
    {
      name: 'Anjali Mehta',
      role: 'Creative Director',
      company: 'Production House',
      image: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      rating: 5,
      text: 'Professional video production and branding services. They understand creative vision and execute flawlessly. Our client satisfaction has never been higher.',
      results: '98% client satisfaction'
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Buildlabs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="service-card scroll-reveal-stagger bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.image} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-dark-100">{testimonial.name}</h3>
                  <p className="text-sm text-dark-600 dark:text-dark-400">{testimonial.role}</p>
                  <p className="text-xs text-primary-600 dark:text-primary-400">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800 mb-3" />
              <p className="text-dark-700 dark:text-dark-300 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="pt-4 border-t border-dark-200 dark:border-dark-700">
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  Results: {testimonial.results}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

