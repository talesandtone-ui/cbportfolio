import { useEffect } from 'react'
import { reinitAnimations } from '../utils/animations'
import useSEO from '../hooks/useSEO'

// Light-themed brand logo components for white background marquee
const LightUshaLogo = () => (
  <div className="flex flex-col items-center justify-center text-neutral-800 select-none">
    <svg className="w-8 h-8 mb-1 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.2L19 11.5V18h-2v-6H7v6H5v-6.5l7-6.3z" />
      <path d="M10 14h4v4h-4z" />
    </svg>
    <span className="text-[9px] font-extrabold tracking-[0.25em] font-sans text-neutral-700">USHA INFOTECH</span>
  </div>
)

const LightUshaInfraLogo = () => (
  <div className="flex flex-col items-center justify-center text-neutral-800 select-none">
    <svg className="w-8 h-8 mb-1 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.2L19 11.5V18h-2v-6H7v6H5v-6.5l7-6.3z" />
      <path d="M10 14h4v4h-4z" />
    </svg>
    <span className="text-[9px] font-extrabold tracking-[0.25em] font-sans text-neutral-700">USHA INFRA</span>
  </div>
)

const LightVaamsiLogo = () => (
  <div className="flex flex-col items-center justify-center text-neutral-800 select-none">
    <svg className="w-8 h-8 mb-1 text-indigo-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22C12 22 7 17 7 13C7 11 8.5 9 12 5C15.5 9 17 11 17 13C17 17 12 22 12 22Z" />
      <path d="M12 22C12 22 9 18 9 15C9 13.5 10 12 12 9C14 12 15 13.5 15 15C15 18 12 22 12 22Z" />
    </svg>
    <span className="text-[9px] font-bold tracking-[0.25em] font-sans text-neutral-700">VAAMSI</span>
  </div>
)

const LightBniLogo = () => (
  <div className="flex flex-col items-center justify-center text-neutral-800 select-none">
    <span className="text-2xl font-black italic tracking-tighter text-red-650 mb-0.5">BNI</span>
    <span className="text-[7px] font-bold tracking-[0.3em] text-neutral-500">CHAMPIONS</span>
  </div>
)

const LightYiLogo = () => (
  <div className="flex flex-col items-center justify-center text-neutral-800 select-none">
    <div className="flex items-center space-x-1.5">
      <span className="text-2xl font-black tracking-tight text-neutral-850">YI</span>
      <div className="h-5 w-[1.5px] bg-[#8BCF1D]"></div>
      <span className="text-[7px] font-bold leading-none tracking-wider text-left max-w-[45px] text-neutral-700">Young Indians</span>
    </div>
  </div>
)

const LightBanjosLogo = () => (
  <div className="flex flex-col items-center justify-center text-neutral-850 select-none">
    <span className="text-xl font-serif italic font-extrabold tracking-tight text-yellow-600">Banjo's</span>
    <span className="text-[6px] font-bold tracking-[0.2em] text-neutral-500 uppercase -mt-0.5">THE FOOD CHAIN</span>
  </div>
)

const About = () => {
  useSEO({
    title: 'About Us - Our Story & Mission',
    description: 'Learn more about Buildlabs Digital, our core philosophy, our team, and how we help brands grow through digital content and design.',
    keywords: 'about buildlabs, digital marketing team, content creation agency',
    canonicalPath: '/about',
    noIndex: false
  })

  useEffect(() => {
    reinitAnimations()
  }, [])

  const logos = [
    <LightUshaLogo />,
    <LightUshaInfraLogo />,
    <LightVaamsiLogo />,
    <LightBniLogo />,
    <LightYiLogo />,
    <LightBanjosLogo />
  ]

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Section 1: Who We Are (White Background) */}
      <section className="py-20 md:py-28 bg-white pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left scroll-reveal">
              <span className="text-neutral-400 text-xs font-bold uppercase tracking-wider block">
                WHO WE ARE
              </span>
              <h2 className="text-4xl md:text-6xl font-black font-display text-black tracking-tight leading-none">
                People connect with people first.
              </h2>
              <p className="text-neutral-800 text-sm md:text-base leading-relaxed font-semibold">
                At Buildlabs, we know that people connect with people before they connect with companies.
              </p>
              <p className="text-neutral-650 text-xs md:text-sm leading-relaxed">
                Businesses naturally grow when their founders and leaders become trusted voices in their industry. That's why we focus entirely on executive and personal branding services.
              </p>
              <p className="text-neutral-650 text-xs md:text-sm leading-relaxed">
                We help professionals share their expertise and build strong digital profiles that drive real business growth.
              </p>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 scroll-reveal relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] md:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
                  alt="Personal Branding"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Float Badge overlay */}
                <div className="absolute bottom-6 right-6 bg-[#111]/95 backdrop-blur-sm text-[#C5FF2E] px-4 py-2 rounded-xl flex items-center space-x-1.5 border border-neutral-800 shadow-2xl text-[10px] md:text-xs font-black tracking-wider uppercase">
                  <span className="text-[#C5FF2E]">✦</span>
                  <span>Personal Branding Agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Story (Black Background) */}
      <section className="py-20 md:py-28 bg-[#0b0b0b] text-white border-t border-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 scroll-reveal order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] md:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=crop"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left scroll-reveal order-1 lg:order-2">
              <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider block">
                OUR STORY
              </span>
              <h2 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight leading-none uppercase">
                How It Started
              </h2>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                We noticed that many great businesses struggle to grow simply because their founders are invisible online. They have strong expertise but lack a solid digital presence.
              </p>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                Many leaders post content without a clear strategy, leading to inconsistent results. They stay busy without seeing real growth in their personal brand.
              </p>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                We realized the missing link is the person behind the brand. When a founder becomes visible and builds trust, it naturally leads to better opportunities.
              </p>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                We built Buildlabs to help founders turn their expertise into influence and drive sustainable growth for their businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why We Exist (White Background) */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-100 relative text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-8 scroll-reveal">
          <span className="text-neutral-400 text-xs font-bold uppercase tracking-[0.2em] block">
            WHY WE EXIST
          </span>
          
          {/* Main Centered Quote */}
          <blockquote className="text-2xl md:text-4xl font-serif italic text-neutral-850 leading-relaxed max-w-4xl mx-auto">
            "To empower founders and professionals to become influential personal brands that inspire, educate, and create meaningful business opportunities."
          </blockquote>

          {/* Subtitle taglines */}
          <div className="flex flex-col space-y-2 text-xs md:text-sm text-neutral-500 font-medium">
            <span>Every expert deserves visibility.</span>
            <span>Every entrepreneur deserves authority.</span>
            <span>Every business deserves a face people can trust.</span>
          </div>
        </div>
      </section>

      {/* Brand Logos Marquee (White background directly above Philosophy) */}
      <div className="w-full overflow-hidden relative py-8 bg-white border-t border-neutral-100">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-ltr flex items-center space-x-20 md:space-x-28">
          {duplicatedLogos.map((logo, index) => (
            <div key={`logo-${index}`} className="flex-shrink-0 flex items-center justify-center min-w-[120px]">
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Our Philosophy (Black Background) */}
      <section className="py-20 md:py-28 bg-[#0b0b0b] text-white border-t border-neutral-900/60 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-8 scroll-reveal">
          <span className="text-neutral-500 text-xs font-bold uppercase tracking-[0.2em] block">
            OUR PHILOSOPHY
          </span>
          
          {/* Main Centered Quote */}
          <blockquote className="text-2xl md:text-4xl font-serif italic text-white/95 leading-relaxed max-w-4xl mx-auto">
            "People buy from people they know, like, and trust."
          </blockquote>

          {/* Subtitle taglines */}
          <div className="flex flex-col space-y-2 text-xs md:text-sm text-neutral-500 font-medium">
            <span>Products can be copied. Services can be replicated.</span>
            <span>But an authentic <strong className="text-white font-extrabold">personal brand</strong> is impossible to duplicate.</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
