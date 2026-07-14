import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'

// Inline SVG Brand Logos for high performance and sharp rendering
const UshaLogo = () => (
  <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors duration-300 select-none">
    <svg className="w-9 h-9 mb-1" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.2L19 11.5V18h-2v-6H7v6H5v-6.5l7-6.3z" />
      <path d="M10 14h4v4h-4z" />
    </svg>
    <span className="text-[10px] font-extrabold tracking-[0.25em] font-sans">USHA INFRA</span>
  </div>
)

const VaamsiLogo = () => (
  <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors duration-300 select-none">
    <svg className="w-9 h-9 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22C12 22 7 17 7 13C7 11 8.5 9 12 5C15.5 9 17 11 17 13C17 17 12 22 12 22Z" />
      <path d="M12 22C12 22 9 18 9 15C9 13.5 10 12 12 9C14 12 15 13.5 15 15C15 18 12 22 12 22Z" />
    </svg>
    <span className="text-[10px] font-bold tracking-[0.25em] font-sans">VAAMSI</span>
  </div>
)

const BniLogo = () => (
  <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors duration-300 select-none">
    <span className="text-2xl font-black italic tracking-tighter text-red-500 mb-0.5">BNI</span>
    <span className="text-[8px] font-bold tracking-[0.3em]">CHAMPIONS</span>
  </div>
)

const YiLogo = () => (
  <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors duration-300 select-none">
    <div className="flex items-center space-x-1.5">
      <span className="text-2xl font-black tracking-tight">YI</span>
      <div className="h-5 w-[1.5px] bg-[#9fe870]"></div>
      <span className="text-[8px] font-bold leading-none tracking-wider text-left max-w-[45px]">Young Indians</span>
    </div>
  </div>
)

const BanjosLogo = () => (
  <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors duration-300 select-none">
    <span className="text-xl font-serif italic font-extrabold tracking-tight">Banjo's</span>
    <div className="w-10 h-[1.5px] bg-[#9fe870] mt-0.5 rounded-full"></div>
  </div>
)

const FinshellLogo = () => (
  <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors duration-300 select-none">
    <div className="flex items-center space-x-1">
      <svg className="w-5 h-5 text-[#9fe870]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
      </svg>
      <span className="text-sm font-black tracking-tight">Fin<span className="font-light">Shell</span></span>
    </div>
    <span className="text-[7px] font-semibold tracking-[0.12em] opacity-60">FINANCIAL PLANNING</span>
  </div>
)

const KaariLogo = () => (
  <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors duration-300 select-none">
    <svg className="w-7 h-7 mb-1 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
    </svg>
    <span className="text-[10px] font-extrabold tracking-[0.34em] font-sans">KAARI</span>
  </div>
)

const MarqueeSection = () => {
  const logos = [
    <UshaLogo />,
    <VaamsiLogo />,
    <BniLogo />,
    <YiLogo />,
    <BanjosLogo />,
    <FinshellLogo />,
    <KaariLogo />
  ]

  const reels = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop',
      category: 'FITNESS & HEALTH',
      caption: 'you five things.',
      highlight: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop',
      category: 'FASHION & LIFESTYLE',
      caption: '#TimusBuiltByFriends',
      subtitle: 'Why...',
      highlight: false
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      category: 'REAL ESTATE',
      caption: 'property kyun nahi',
      highlight: true
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
      category: 'INTERIOR DESIGN',
      caption: "Don't Pick Tiles",
      subtitle: 'Because they Loved Them',
      highlight: false
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop',
      category: 'SPACES & DECOR',
      caption: 'Modern Studio Design',
      highlight: false
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      category: 'PRESENTATION & BRAND',
      caption: 'main hi sabko bata deti hoon',
      highlight: true
    }
  ]

  // Render list twice to ensure seamless infinite looping marquee
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]
  const duplicatedReels = [...reels, ...reels, ...reels]

  return (
    <section className="bg-black py-4 overflow-hidden border-y border-neutral-900 flex flex-col space-y-4">
      {/* Row 1: Brand Logos Marquee (Left to Right) */}
      <div className="w-full overflow-hidden relative py-4 border-b border-neutral-900/60 bg-black">
        {/* Subtle left/right fading mask */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-ltr flex items-center space-x-20 md:space-x-28">
          {duplicatedLogos.map((logo, index) => (
            <div key={`logo-${index}`} className="flex-shrink-0 flex items-center justify-center min-w-[120px]">
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reels Cards Marquee (Right to Left) */}
      <div className="w-full overflow-hidden relative py-6 bg-black">
        {/* Subtle left/right fading mask */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-rtl flex items-center space-x-6">
          {duplicatedReels.map((reel, index) => (
            <div
              key={`reel-${reel.id}-${index}`}
              className="flex-shrink-0 w-40 md:w-48 aspect-[9/16] relative rounded-2xl overflow-hidden group shadow-2xl border border-neutral-800"
            >
              {/* Cover Image */}
              <img
                src={reel.image}
                alt={reel.category}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10"></div>

              {/* Tag / Category Badge (top left) */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-[9px] font-extrabold text-[#C5FF2E] tracking-wider rounded-md border border-white/5 uppercase">
                  {reel.category}
                </span>
              </div>

              {/* Play Button Overlay (appears on hover) */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>

              {/* Reel Text Caption (bottom center) */}
              <div className="absolute bottom-6 left-4 right-4 z-20 flex flex-col space-y-1 text-left">
                {reel.subtitle && (
                  <span className="text-white/60 text-xs font-semibold tracking-wide">
                    {reel.subtitle}
                  </span>
                )}
                <h4 className={`text-sm md:text-base font-black leading-tight tracking-wide ${
                  reel.highlight ? 'text-[#C5FF2E]' : 'text-white'
                }`}>
                  {reel.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
