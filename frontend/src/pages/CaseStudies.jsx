import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'
import useSEO from '../hooks/useSEO'

const CaseStudies = () => {
  useSEO({
    title: 'Case Studies - Client Success Stories',
    description: 'Explore detailed case studies and results from Buildlabs Digital.',
    noIndex: true
  })

  useEffect(() => {
    reinitAnimations()
  }, [])

  const cases = [
    {
      id: 1,
      brand: 'TIMUS',
      category: 'Product Brand',
      subtitle: 'Global luggage brand. Rebuilt their visual identity on social.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
      context: [
        'A global luggage brand with strong products but no consistent social presence',
        'No visual language or content strategy built for short-form audiences',
        'Missing the storytelling that turns casual viewers into loyal customers'
      ],
      approach: [
        'Rebuilt the entire brand visual identity for a social-first format.',
        'Developed high-hook travel and lifestyle concepts featuring the product in action.',
        'Produced premium, cinematically edited vertical reels to drive engagement.'
      ],
      outcome: [
        'Reached over 1M+ views consistently per reel.',
        'Triggered multiple viral reels in Q1, building a massive organic community.',
        'Successfully shifted brand perception to premium, boosting direct web store sales.'
      ]
    },
    {
      id: 2,
      brand: 'USHA INFOTECH',
      category: 'Tech & B2B',
      subtitle: 'IT company turned into a recognised personal brand.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
      context: [
        'A solid IT company completely invisible on social with no personal brand presence',
        'Decision-makers in their target market unaware of their services or expertise',
        'Generic content that failed to communicate value or generate any qualified leads'
      ],
      approach: [
        'Repositioned the founder as a thought leader through pain-point-driven hooks',
        'Created content specifically targeting B2B decision-makers on Reels and LinkedIn',
        'Built a content engine that educated, established trust, and converted simultaneously'
      ],
      outcome: [
        'Organic reel content reached over 1.2M impressions in less than 4 months.',
        'Direct high-intent B2B inquiries and client conversions directly traced to video content.',
        'Enhanced client acquisition quality, bypassing standard long-sales-cycle gatekeepers.'
      ]
    },
    {
      id: 3,
      brand: 'RAHUL JAIN',
      category: 'Real Estate',
      subtitle: 'Real estate consultant. Built authority and inbound lead engine.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format&fit=crop',
      context: [
        'Local real estate consultant struggling in a highly competitive metro market',
        'Dependent on unpredictable referrals and cold calling to find premium buyers',
        'High-value clients required deep trust before making any property site visits'
      ],
      approach: [
        'Positioned as the go-to market-insight authority for premium local properties.',
        'Created educational, short-form reels demystifying micro-market pricing trends.',
        'Crafted high-converting lead capture profiles to engage ready-to-buy prospects.'
      ],
      outcome: [
        'Achieved multiple viral local real estate reels, expanding organic reach.',
        'Acquired rapid high-intent local follower growth within the target location.',
        'Inbound leads completely replaced cold calling within 90 days of launch.'
      ]
    },
    {
      id: 4,
      brand: 'EUNORA PHYSIOTHERAPY',
      category: 'Healthcare',
      subtitle: 'Local healthcare clinic. Automated client appointments.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop',
      context: [
        'Highly expert physiotherapy clinic but zero online visibility or social presence',
        'Relying solely on unpredictable neighborhood word-of-mouth recommendations',
        'Facing fierce patient acquisition competition from larger hospitals and clinics'
      ],
      approach: [
        'Created education-first pain relief demonstration reels targeting office goers.',
        'Addressed common desk-job posture pains and recovery techniques visually.',
        'Optimized localized profile search visibility to drive booking conversions.'
      ],
      outcome: [
        'Generated viral localized reels across target neighborhoods.',
        'Achieved a month-over-month increase in appointments booked via social.',
        'Established clinic as the premier neighborhood authority for physiotherapy.'
      ]
    }
  ]

  return (
    <div className="bg-[#0b0b0b] text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-20 bg-black border-b border-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#8BCF1D]"></span>
              <span className="text-xs font-extrabold tracking-[0.25em] text-[#8BCF1D] uppercase">
                OUR WORK
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white leading-none mb-3">
              Case Studies
            </h1>
            <p className="text-neutral-400 text-xs md:text-sm font-medium">
              Real brands. Real results. Stories told through growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Flow */}
      <div>
        {cases.map((c, index) => {
          const isEven = index % 2 === 1; // 0 (TIMUS) is white, 1 (USHA) is black, etc.
          return (
            <section
              key={c.id}
              className={`py-20 md:py-28 ${
                isEven ? 'bg-[#0b0b0b] text-white border-b border-neutral-900/60' : 'bg-white text-black'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${
                    isEven ? 'order-1 lg:order-2' : 'order-1'
                  }`}>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] md:aspect-[16/10]">
                      <img
                        src={c.image}
                        alt={c.brand}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'order-2 lg:order-1' : 'order-2'
                  }`}>
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2.5 py-1 text-[10px] font-black tracking-wider rounded-md border uppercase ${
                        isEven 
                          ? 'bg-[#C5FF2E]/10 text-[#C5FF2E] border-[#C5FF2E]/20' 
                          : 'bg-[#8BCF1D]/15 text-[#8BCF1D] border-[#8BCF1D]/35'
                      }`}>
                        {c.brand}
                      </span>
                      <span className={`px-2.5 py-1 text-[10px] font-black tracking-wider rounded-md uppercase ${
                        isEven ? 'bg-neutral-900 text-neutral-400' : 'bg-neutral-100 text-neutral-600'
                      }`}>
                        {c.category}
                      </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl md:text-4xl font-black font-display tracking-tight leading-tight uppercase">
                      {c.subtitle}
                    </h2>

                    {/* Journey Details */}
                    <div className="space-y-6">
                      {/* Context */}
                      <div className="space-y-3">
                        <h4 className={`text-xs font-black tracking-widest uppercase ${
                          isEven ? 'text-[#C5FF2E]' : 'text-[#8BCF1D]'
                        }`}>
                          THE CONTEXT
                        </h4>
                        <ul className="space-y-2">
                          {c.context.map((item, fIdx) => (
                            <li key={fIdx} className="flex items-start space-x-2">
                              <span className={`w-1.5 h-1.5 rounded-sm flex-shrink-0 mt-1.5 ${
                                isEven ? 'bg-[#C5FF2E]' : 'bg-[#8BCF1D]'
                              }`} />
                              <span className={`text-xs md:text-sm font-medium leading-relaxed text-left ${
                                isEven ? 'text-neutral-400' : 'text-neutral-600'
                              }`}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Approach */}
                      <div className="space-y-3">
                        <h4 className={`text-xs font-black tracking-widest uppercase ${
                          isEven ? 'text-[#C5FF2E]' : 'text-[#8BCF1D]'
                        }`}>
                          OUR APPROACH
                        </h4>
                        <ul className="space-y-2">
                          {c.approach.map((item, fIdx) => (
                            <li key={fIdx} className="flex items-start space-x-2">
                              <span className={`w-1.5 h-1.5 rounded-sm flex-shrink-0 mt-1.5 ${
                                isEven ? 'bg-[#C5FF2E]' : 'bg-[#8BCF1D]'
                              }`} />
                              <span className={`text-xs md:text-sm font-medium leading-relaxed text-left ${
                                isEven ? 'text-neutral-400' : 'text-neutral-600'
                              }`}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcome */}
                      <div className="space-y-3">
                        <h4 className={`text-xs font-black tracking-widest uppercase ${
                          isEven ? 'text-[#C5FF2E]' : 'text-[#8BCF1D]'
                        }`}>
                          THE OUTCOME
                        </h4>
                        <ul className="space-y-2">
                          {c.outcome.map((item, fIdx) => (
                            <li key={fIdx} className="flex items-start space-x-2">
                              <span className={`w-1.5 h-1.5 rounded-sm flex-shrink-0 mt-1.5 ${
                                isEven ? 'bg-[#C5FF2E]' : 'bg-[#8BCF1D]'
                              }`} />
                              <span className={`text-xs md:text-sm font-black tracking-wide uppercase text-left ${
                                isEven ? 'text-neutral-300' : 'text-neutral-800'
                              }`}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Call to Action */}
      <section className="py-24 bg-white text-black text-center relative overflow-hidden border-t border-neutral-100">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="text-[#8BCF1D] text-xs font-black uppercase tracking-[0.25em] mb-4 block">
            READY?
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display mb-8 tracking-tight text-black max-w-2xl leading-tight">
            Let's build yours next.
          </h2>
          <a
            href="/#contact"
            className="px-8 py-4 bg-black hover:bg-neutral-900 text-white rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 hover:scale-105 shadow-xl"
          >
            <span>Start the Conversation</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
