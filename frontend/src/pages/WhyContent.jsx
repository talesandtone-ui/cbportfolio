import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Target, Users, ShieldAlert, Award } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'
import useSEO from '../hooks/useSEO'

const WhyContent = () => {
  useSEO({
    title: 'Why Content? - The Power of Digital Authority',
    description: 'Understand the business case for high-quality video and web content strategy with Buildlabs Digital.',
    noIndex: true
  })

  useEffect(() => {
    reinitAnimations()
  }, [])

  const truths = [
    {
      number: '01',
      title: 'INVISIBLE TO UNDENIABLE',
      description: "If you're not posting, you don't exist. Content is how you occupy space in your prospect's mind before you even hop on a call."
    },
    {
      number: '02',
      title: 'COMPOUNDING TRUST',
      description: 'Every video, post, and case study is a brick in your wall of authority. Trust used to take years; now it takes 15 minutes of binge-watching.'
    },
    {
      number: '03',
      title: 'THE INBOUND ENGINE',
      description: 'Stop chasing leads. Build an ecosystem that attracts them. Good content qualifies your leads so you only talk to people who already want to work with you.'
    }
  ]

  const stats = [
    { value: '93%', label: 'Social media users active every single day' },
    { value: '3.5x', label: 'More leads for brands that post consistently' },
    { value: '84%', label: 'Of buyers research on social before purchasing' },
    { value: '62%', label: 'Lower cost per lead vs traditional outbound' }
  ]

  const flywheelSteps = [
    { title: 'Create', desc: 'Consistent, strategic content goes live across your platforms.' },
    { title: 'Attract', desc: 'New audiences discover your brand through organic reach.' },
    { title: 'Trust', desc: 'Repeated exposure builds authority you cannot buy.' },
    { title: 'Convert', desc: 'Warm leads reach out ready to buy — no cold pitching needed.' },
    { title: 'Compound', desc: 'Every piece feeds the next. The flywheel never stops.' }
  ]

  return (
    <div className="pt-24 md:pt-28 bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 border-b border-neutral-900/60 bg-hero-green-radial">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#C5FF2E]"></span>
            <span className="text-xs md:text-sm font-extrabold tracking-widest text-[#C5FF2E] uppercase">
              THE CONTENT EDGE
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-display mb-6 tracking-tight leading-none text-white">
            Why Content Matters
          </h1>
          <p className="text-base md:text-lg font-bold tracking-widest text-white/50 uppercase max-w-2xl">
            THREE TRUTHS. ONE STRATEGY. ZERO SHORTCUTS.
          </p>
        </div>
      </section>

      {/* The Three Truths Section */}
      <section className="py-20 border-b border-neutral-900/60 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {truths.map((truth, idx) => (
              <div key={idx} className="scroll-reveal flex flex-col text-left space-y-4">
                <div className="text-5xl md:text-6xl font-black text-[#C5FF2E]/10 font-display">
                  {truth.number}
                </div>
                <h3 className="text-lg md:text-xl font-black tracking-wider text-white">
                  {truth.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  {truth.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black border-b border-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="scroll-reveal text-center flex flex-col justify-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#C5FF2E] mb-2 font-display">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-neutral-400 font-semibold tracking-wide max-w-[200px] mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Content Flywheel */}
      <section className="py-20 md:py-28 border-b border-neutral-900/60 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
              The Content Flywheel
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              How content compounds into unstoppable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 md:gap-4 relative">
            {flywheelSteps.map((step, idx) => (
              <div
                key={idx}
                className="scroll-reveal bg-neutral-900/20 border border-neutral-800/40 rounded-2xl p-6 text-left relative flex flex-col space-y-3"
              >
                <div className="w-10 h-10 bg-[#C5FF2E]/10 rounded-xl flex items-center justify-center font-bold text-[#C5FF2E] text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-wide">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference Content Makes (Comparison) */}
      <section className="py-20 md:py-28 bg-black border-b border-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
              The Difference Content Makes
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              Two brands. Same product. Completely different outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Without Content */}
            <div className="scroll-reveal bg-red-950/10 border border-red-950/30 rounded-3xl p-8 text-left space-y-6">
              <div className="flex items-center space-x-3 text-red-500 mb-4">
                <ShieldAlert className="w-6 h-6" />
                <h3 className="text-xl font-extrabold tracking-wide uppercase">WITHOUT CONTENT</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Invisible to your target audience online',
                  'Cold outreach with zero trust built up',
                  'Competitors own the conversation in your niche',
                  'Every sale starts from absolute scratch'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-neutral-400 leading-relaxed">
                    <span className="text-red-500 mr-3 text-base">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With Content */}
            <div className="scroll-reveal bg-[#C5FF2E]/5 border border-[#C5FF2E]/10 rounded-3xl p-8 text-left space-y-6">
              <div className="flex items-center space-x-3 text-[#C5FF2E] mb-4">
                <Award className="w-6 h-6" />
                <h3 className="text-xl font-extrabold tracking-wide uppercase">WITH CONTENT</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Omnipresent in your ideal buyer’s feed',
                  'Leads arrive pre-sold and pre-qualified',
                  'You own the narrative in your market',
                  'Sales happen before the first call is made'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-neutral-300 leading-relaxed">
                    <span className="text-[#C5FF2E] mr-3 text-base">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5FF2E]/5 rounded-full blur-[120px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="text-[#C5FF2E] text-xs font-black uppercase tracking-[0.25em] mb-4">
            WORK WITH US
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display mb-6 tracking-tight text-white max-w-2xl leading-tight">
            Your audience is waiting for you.
          </h2>
          <p className="text-base md:text-lg text-neutral-400 mb-10 max-w-xl">
            Let's build a content strategy that drives real revenue, and turn your experience into digital leverage.
          </p>
          <a
            href="/#contact"
            className="px-8 py-4 bg-[#C5FF2E] hover:bg-[#C5FF2E]/90 text-black rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 hover:scale-105"
          >
            <span>Start the Conversation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default WhyContent
