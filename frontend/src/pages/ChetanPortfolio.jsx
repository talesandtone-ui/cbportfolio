import { useState, useRef, useEffect } from 'react'
import {
  Play,
  Volume2,
  VolumeX,
  X,
  ArrowUpRight,
  Sparkles,
  Film,
  Zap,
  Wand2,
  ArrowRight,
  ExternalLink,
  CheckCircle
} from 'lucide-react'

// 8 signature video works in exact requested sequence
const PROJECTS = [
  {
    id: 'boisar',
    title: 'Boisar',
    subtitle: 'Cinematic Travel Reel',
    category: 'Reels',
    videoUrl: '/videos/chetan/boisar.mp4',
    badge: 'Cinematic Reel',
    ratio: 'vertical'
  },
  {
    id: 'ai-add',
    title: 'AI ADD',
    subtitle: 'Fire Beast AI Commercial',
    category: 'Ads',
    videoUrl: '/videos/chetan/ai-add.mp4',
    badge: 'AI Commercial',
    ratio: 'vertical'
  },
  {
    id: 'wong',
    title: 'Sze Wong',
    subtitle: 'Lifestyle Brand Commercial',
    category: 'Ads',
    videoUrl: '/videos/chetan/wong.mp4',
    badge: 'Brand Ad',
    ratio: 'vertical'
  },
  {
    id: 'botminda',
    title: 'Botminda',
    subtitle: 'Tech Product Motion Ad',
    category: 'Ads',
    videoUrl: '/videos/chetan/botminda.mp4',
    badge: 'Product Motion',
    ratio: 'vertical'
  },
  {
    id: 'inogics',
    title: 'Inogics',
    subtitle: 'Dynamics 365 SaaS Motion Ad',
    category: 'Ads',
    videoUrl: '/videos/chetan/Inogics.mp4',
    badge: 'SaaS Product Ad',
    ratio: 'vertical'
  },
  {
    id: 'intro-making',
    title: 'Intro Making',
    subtitle: 'Motion Graphics Breakdown',
    category: 'Reels',
    videoUrl: '/videos/chetan/intro-making.mp4',
    badge: 'Motion Reel',
    ratio: 'vertical'
  },
  {
    id: 'insights',
    title: 'Insights',
    subtitle: 'Finance & Analytics Commercial',
    category: 'Ads',
    videoUrl: '/videos/chetan/insights.mp4',
    badge: 'Commercial Ad',
    ratio: 'vertical'
  },
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'Cinematic Love Story',
    category: 'Wedding',
    videoUrl: '/videos/chetan/wedding.mov',
    badge: 'Wedding Film',
    ratio: 'vertical'
  }
]

export default function ChetanPortfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [modalVideo, setModalVideo] = useState(null)
  const [activeAudioId, setActiveAudioId] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const modalVideoRef = useRef(null)

  // Track scroll for sticky navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [modalVideo])

  const filterCategories = ['All', 'Ads', 'Reels', 'Wedding']

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  const openLightbox = (item) => {
    setModalVideo(item)
    setActiveAudioId(null)
  }

  const closeLightbox = () => {
    setModalVideo(null)
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased relative selection:bg-neutral-900 selection:text-white">
      
      {/* Subtle, clean top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-neutral-100/70 via-neutral-50/40 to-transparent pointer-events-none -z-10" />

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-2.5 shadow-sm'
            : 'bg-transparent py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Creator Brand / Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <img
                src="/chetan-logo.jpg"
                alt="Chetan Bharati"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-neutral-200 group-hover:scale-105 transition-transform"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-neutral-900 leading-none">
                Chetan Bharati
              </span>
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mt-0.5">
                Video Editor
              </span>
            </div>
          </a>

          {/* Social Icons & Contact CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/chetan_bharati30/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-black flex items-center justify-center transition-colors"
              title="Instagram Profile"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chetan-bharati-92b643350/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-black flex items-center justify-center transition-colors"
              title="LinkedIn Profile"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
            >
              Contact
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          
          {/* Status Chip */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100/90 border border-neutral-200 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-neutral-700 tracking-wide">
              Available for New Projects
            </span>
          </div>

          {/* Clean Main Heading */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-950 mb-3">
            Chetan Bharati
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-medium text-neutral-600 mb-2">
            Senior Video Editor & Motion Designer
          </p>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md mb-6 leading-relaxed">
            High-retention commercial ads, kinetic reels & cinematic visual storytelling.
          </p>

          {/* Clean Vector Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mb-8 text-[11px] font-medium text-neutral-700">
            <span className="px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/80 flex items-center space-x-1.5">
              <Film className="w-3.5 h-3.5 text-neutral-900" />
              <span>8 Featured Works</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/80 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              <span>4K Master Quality</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/80 flex items-center space-x-1.5">
              <Zap className="w-3.5 h-3.5 text-neutral-900" />
              <span>High-Retention</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/80 flex items-center space-x-1.5">
              <Wand2 className="w-3.5 h-3.5 text-neutral-900" />
              <span>AI & VFX Motion</span>
            </span>
          </div>

          {/* Hero CTAs */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="#work"
              className="px-5 sm:px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-black text-white font-semibold text-xs tracking-wide transition-all shadow-sm flex items-center space-x-2"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/chetan_bharati30/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 font-semibold text-xs tracking-wide border border-neutral-200 transition-all flex items-center space-x-1.5"
            >
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>

        </div>
      </section>

      {/* Video Portfolio Grid Section */}
      <section id="work" className="py-10 sm:py-16 border-t border-neutral-100 bg-neutral-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                Selected Works
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                Tap card to play full HD with audio
              </p>
            </div>

            {/* Single Line Filter Tabs (Clean, compact, no horizontal scroll) */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto bg-neutral-100/90 p-1 rounded-full border border-neutral-200/70">
              {filterCategories.map((cat) => {
                const count =
                  cat === 'All'
                    ? PROJECTS.length
                    : PROJECTS.filter((i) => i.category === cat).length
                const isActive = activeFilter === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center space-x-1 whitespace-nowrap ${
                      isActive
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1 rounded font-medium ${
                        isActive ? 'bg-white/20 text-white' : 'text-neutral-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Video Grid (2 Columns on Mobile, 3 on Tablet, 4 on Desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {filteredProjects.map((item) => {
              const isAudioActive = activeAudioId === item.id
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col"
                >
                  {/* Vertical 9:16 Video Container */}
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-950">
                    <video
                      src={item.videoUrl}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      autoPlay
                      loop
                      muted={!isAudioActive}
                      playsInline
                      preload="metadata"
                    />

                    {/* Subtle Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Clean Badge */}
                    <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] font-medium tracking-wide">
                        {item.badge}
                      </span>
                    </div>

                    {/* Play Indicator on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 pointer-events-none">
                      <div className="w-11 h-11 rounded-full bg-white/95 text-neutral-900 shadow-lg flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Audio Toggle Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveAudioId(isAudioActive ? null : item.id)
                      }}
                      className="absolute bottom-2.5 right-2.5 z-30 p-1.5 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black transition-colors"
                      title={isAudioActive ? 'Mute audio' : 'Play audio'}
                    >
                      {isAudioActive ? (
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <VolumeX className="w-3.5 h-3.5 text-neutral-300" />
                      )}
                    </button>

                    {/* Bottom Title Info */}
                    <div className="absolute bottom-2.5 left-2.5 right-10 z-20 pointer-events-none">
                      <h3 className="text-white font-bold text-xs sm:text-sm leading-tight drop-shadow-sm truncate">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-neutral-300 font-medium truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* Connect & Collaboration Section */}
      <section id="contact" className="py-14 sm:py-20 bg-white border-t border-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          
          <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">
            Get in Touch
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-3">
            Let's build something cinematic
          </h2>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto mb-8">
            Available for commercials, high-retention social content, and cinematic video projects worldwide.
          </p>

          {/* Social Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8">
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/chetan_bharati30/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/80 transition-all flex items-center space-x-3.5 group text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-bold text-neutral-900">Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </div>
                <p className="text-[11px] text-neutral-500 truncate">@chetan_bharati30</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chetan-bharati-92b643350/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/80 transition-all flex items-center space-x-3.5 group text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-bold text-neutral-900">LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </div>
                <p className="text-[11px] text-neutral-500 truncate">chetan-bharati-92b643350</p>
              </div>
            </a>

          </div>

          {/* Primary Action Button */}
          <a
            href="https://www.instagram.com/chetan_bharati30/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-neutral-950 hover:bg-black text-white font-semibold text-xs tracking-wide transition-all shadow-md"
          >
            <span>Message on Instagram</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

        </div>
      </section>

      {/* Clean Minimalist Footer */}
      <footer className="py-6 bg-white border-t border-neutral-100 text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Chetan Bharati. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-neutral-600">
            <a
              href="https://www.instagram.com/chetan_bharati30/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/chetan-bharati-92b643350/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox Video Modal (Clean White Player Frame) */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 transition-all shadow-lg border border-neutral-200"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Card */}
          <div
            className="relative w-full max-w-lg max-h-[88vh] bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                  {modalVideo.category} • {modalVideo.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-tight">
                  {modalVideo.title}
                </h3>
              </div>
              <a
                href="https://www.instagram.com/chetan_bharati30/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-neutral-900 hover:underline flex items-center space-x-1"
              >
                <span>Hire</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Video Player */}
            <div className="relative bg-black flex items-center justify-center flex-grow max-h-[66vh] overflow-hidden">
              <video
                ref={modalVideoRef}
                src={modalVideo.videoUrl}
                className="w-full h-full max-h-[66vh] object-contain"
                autoPlay
                controls
                playsInline
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
              <span className="truncate pr-2">{modalVideo.subtitle}</span>
              <a
                href="https://www.instagram.com/chetan_bharati30/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-neutral-950 text-white font-semibold text-[11px] tracking-wide hover:bg-black transition-all shrink-0"
              >
                DM on Instagram
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
