import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Omkar ',
      role: 'Founder',
      company: 'Omkar Enterprise',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      rating: 5,
      text: 'Buildlabs helped us fix our website and get more customers. Very professional team.',
      results: '50% more visitors'
    },
    {
      name: 'Chetan ',
      role: 'Content Creator',
      company: 'Chetan Flims',
      image: 'bg-gradient-to-br from-pink-500 to-rose-600',
      rating: 5,
      text: 'They edit my videos perfectly and on time. My channel is growing much better now.',
      results: '10K to 50K subs'
    },
    {
      name: 'Amit Patel',
      role: 'Marketing Head',
      company: 'Yum Yum',
      image: 'bg-gradient-to-br from-green-500 to-emerald-600',
      rating: 5,
      text: 'Good digital marketing service. We are seeing better sales for our products.',
      results: '20% sales boost'
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

