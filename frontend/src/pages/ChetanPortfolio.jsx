import { useState, useRef, useEffect } from 'react'
import {
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ArrowUpRight,
  Sparkles,
  Film,
  Video,
  Layers,
  Wand2,
  Award,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sliders,
  Share2,
  Zap
} from 'lucide-react'

// Chetan's 7 signature video works in the exact requested sequence
const PROJECTS = [
  {
    id: 'boisar',
    title: 'Boisar',
    subtitle: 'Cinematic Travel',
    category: 'Reels',
    type: 'cinematic',
    videoUrl: '/videos/chetan/boisar.mp4',
    badge: 'Cinematic',
    metric: 'Visual Reel'
  },
  {
    id: 'ai-add',
    title: 'AI ADD',
    subtitle: 'Fire Beast AI Commercial',
    category: 'Ads',
    type: 'commercial',
    videoUrl: '/videos/chetan/ai-add.mp4',
    badge: 'AI Ad',
    metric: 'Brand Campaign'
  },
  {
    id: 'wong',
    title: 'Sze Wong',
    subtitle: 'Lifestyle Commercial',
    category: 'Ads',
    type: 'commercial',
    videoUrl: '/videos/chetan/wong.mp4',
    badge: 'Commercial',
    metric: 'Lifestyle Cut'
  },
  {
    id: 'botminda',
    title: 'Botminda Project',
    subtitle: 'Tech Product Motion',
    category: 'Ads',
    type: 'commercial',
    videoUrl: '/videos/chetan/botminda.mp4',
    badge: 'Product',
    metric: 'Product Ad'
  },
  {
    id: 'intro-making',
    title: 'Intro Making',
    subtitle: 'Motion Graphics Reel',
    category: 'Reels',
    type: 'cinematic',
    videoUrl: '/videos/chetan/intro-making.mp4',
    badge: 'Motion',
    metric: 'Motion Reel'
  },
  {
    id: 'insights',
    title: 'Insights Project',
    subtitle: 'Brand Storytelling',
    category: 'Ads',
    type: 'commercial',
    videoUrl: '/videos/chetan/insights.mp4',
    badge: 'Brand Cut',
    metric: 'Retention Cut'
  },
  {
    id: 'wedding',
    title: 'Wedding Film',
    subtitle: 'Cinematic Wedding',
    category: 'Wedding',
    type: 'wedding',
    videoUrl: '/videos/chetan/wedding.mov',
    badge: 'Wedding',
    metric: 'Cinematic Memory'
  }
]

export default function ChetanPortfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeAudioId, setActiveAudioId] = useState(null)
  const [modalVideo, setModalVideo] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const modalVideoRef = useRef(null)

  useEffect(() => {
    document.title = 'Chetan Bharati | Video Editor Portfolio'
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filterCategories = ['All', 'Ads', 'Reels', 'Wedding']

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(item => item.category === activeFilter)

  const openLightbox = (project) => {
    setActiveAudioId(null)
    setModalVideo(project)
  }

  const closeLightbox = () => {
    setModalVideo(null)
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-black selection:text-white relative overflow-x-hidden">
      
      {/* Visual Background Elements */}
      {/* 1. Subtle Dot Grid Matrix */}
      <div className="fixed inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-70 pointer-events-none -z-20" />

      {/* 2. Ambient Gradient Glows (Lime & Emerald Auras) */}
      <div className="fixed -top-28 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#C5FF2E]/35 via-lime-200/25 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 -left-24 w-[420px] h-[420px] bg-emerald-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed top-2/3 -right-24 w-[480px] h-[480px] bg-cyan-100/50 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="fixed -bottom-10 left-1/4 w-[500px] h-[400px] bg-lime-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 3. Subtle Film / Viewfinder Corner Markers */}
      <div className="fixed top-24 left-6 w-4 h-4 border-t-2 border-l-2 border-neutral-300 pointer-events-none opacity-40 hidden lg:block -z-10" />
      <div className="fixed top-24 right-6 w-4 h-4 border-t-2 border-r-2 border-neutral-300 pointer-events-none opacity-40 hidden lg:block -z-10" />
      <div className="fixed bottom-10 left-6 w-4 h-4 border-b-2 border-l-2 border-neutral-300 pointer-events-none opacity-40 hidden lg:block -z-10" />
      <div className="fixed bottom-10 right-6 w-4 h-4 border-b-2 border-r-2 border-neutral-300 pointer-events-none opacity-40 hidden lg:block -z-10" />

      {/* Sticky Header / Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-2.5 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          
          {/* Logo & Name (Compact single row) */}
          <a href="#" className="flex items-center space-x-2.5 shrink-0 group">
            <img
              src="/chetan-logo.jpg"
              alt="Chetan Bharati"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-neutral-300 shadow-sm group-hover:scale-105 transition-all"
            />
            <div className="flex items-center space-x-1.5">
              <span className="font-black text-xs sm:text-sm tracking-wider text-black uppercase whitespace-nowrap font-display">
                CHETAN BHARATI
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            </div>
          </a>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-widest text-neutral-600">
            <a href="#work" className="hover:text-black transition-colors">
              Works
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              Connect
            </a>
          </nav>

          {/* Social & CTA Header Buttons */}
          <div className="flex items-center space-x-2 shrink-0">
            <a
              href="https://www.instagram.com/chetan_bharati30/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-700 hover:text-black flex items-center justify-center transition-all hover:scale-105"
              title="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/chetan-bharati-92b643350/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-700 hover:text-black flex items-center justify-center transition-all hover:scale-105"
              title="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="px-3 sm:px-4 py-1.5 rounded-full bg-black text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-neutral-800 transition-all hover:scale-105 shadow-sm whitespace-nowrap"
            >
              Let's Talk
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section (Compact & Sleek) */}
      <section className="relative pt-20 pb-8 sm:pt-28 sm:pb-12 overflow-hidden bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Status Pill with REC indicator */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/80 border border-neutral-200/90 mb-4 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-800 tracking-wider uppercase">
              REC • Available for Projects
            </span>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-neutral-950 uppercase leading-none mb-3">
            CHETAN <span className="underline decoration-[#C5FF2E] decoration-4">BHARATI</span>
          </h1>

          {/* Title & One-line Punchline */}
          <p className="text-sm sm:text-base md:text-lg font-bold text-neutral-700 max-w-xl mb-2 font-display">
            Video Editor & Motion Creator
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mb-6 leading-relaxed">
            High-retention commercial ads, kinetic reels & cinematic visual storytelling.
          </p>

          {/* Clean Minimalist Feature Chips with Vector Icons */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mb-6 text-[10px] sm:text-[11px] font-semibold text-neutral-800">
            <span className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center space-x-1.5">
              <Film className="w-3.5 h-3.5 text-black" />
              <span>7+ Featured Edits</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>4K Master Quality</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center space-x-1.5">
              <Zap className="w-3.5 h-3.5 text-black" />
              <span>High-Retention</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center space-x-1.5">
              <Wand2 className="w-3.5 h-3.5 text-black" />
              <span>AI & VFX</span>
            </span>
          </div>

          {/* Compact Action Buttons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="#work"
              className="px-5 sm:px-6 py-2.5 rounded-full bg-black text-white font-extrabold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all hover:scale-105 shadow-md flex items-center space-x-1.5"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/chetan_bharati30/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-extrabold text-xs uppercase tracking-wider border border-neutral-300 transition-all hover:scale-105 flex items-center space-x-1.5 shadow-sm"
            >
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
          </div>

        </div>
      </section>

      {/* Video Portfolio Showcase Section */}
      <section id="work" className="py-14 md:py-20 bg-white/60 backdrop-blur-sm border-t border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-neutral-200 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="w-4 h-1 bg-black rounded-full" />
                <span className="text-[10px] sm:text-xs font-black text-neutral-800 uppercase tracking-widest">
                  PORTFOLIO SHOWCASE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-950 font-display tracking-tight uppercase leading-tight">
                Featured Video Edits
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Tap card to play full HD or toggle audio.
              </p>
            </div>

            {/* Filter Pills (Clean Single Line, No Scrollbar) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {filterCategories.map((cat) => {
                const count = cat === 'All' 
                  ? PROJECTS.length 
                  : PROJECTS.filter(i => i.category === cat).length
                const isActive = activeFilter === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider transition-all border flex items-center space-x-1 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-white text-neutral-600 border-neutral-300 hover:text-black hover:border-neutral-400 shadow-sm'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[8px] sm:text-[9px] px-1 py-0.2 rounded-md font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Video Grid (2 Columns on Mobile for native Reel look, 3-4 on Desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
            {filteredProjects.map((item, idx) => {
              const isAudioActive = activeAudioId === item.id
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-black/50 transition-all duration-500 shadow-md hover:shadow-2xl cursor-pointer hover:-translate-y-1.5 flex flex-col"
                >
                  {/* Video Container (Vertical 9:16 format) */}
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                    <video
                      src={item.videoUrl}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      autoPlay
                      loop
                      muted={!isAudioActive}
                      playsInline
                      preload="metadata"
                    />

                    {/* Gradient Overlay for video text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 pointer-events-none" />

                    {/* Single Clean Top Badge (1 Line) */}
                    <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-20 pointer-events-none">
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-neutral-950 text-[8px] sm:text-[9px] font-black tracking-wider uppercase shadow-sm whitespace-nowrap">
                        {item.badge}
                      </span>
                    </div>

                    {/* Play Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-black ml-0.5 sm:ml-1" />
                      </div>
                    </div>

                    {/* Sound Control Button on Card */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveAudioId(isAudioActive ? null : item.id)
                      }}
                      className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-30 p-1.5 sm:p-2 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/20 hover:scale-110 hover:bg-black transition-transform cursor-pointer shadow-lg"
                      title={isAudioActive ? 'Mute audio' : 'Play audio'}
                    >
                      {isAudioActive ? (
                        <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5FF2E]" />
                      ) : (
                        <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-300" />
                      )}
                    </button>

                    {/* Clean Bottom Title Overlay */}
                    <div className="absolute bottom-2.5 left-2.5 right-9 sm:bottom-3 sm:left-3.5 sm:right-12 z-20 pointer-events-none">
                      <h3 className="text-white font-extrabold text-xs sm:text-base leading-tight tracking-tight drop-shadow-md">
                        {item.title}
                      </h3>
                      <p className="text-[9px] sm:text-[11px] text-white/80 font-medium tracking-wide drop-shadow-sm truncate">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* Connect & Contact Section */}
      <section id="contact" className="py-14 md:py-20 bg-white/60 backdrop-blur-sm border-t border-neutral-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200 shadow-xl relative overflow-hidden">
            
            <span className="text-black font-black text-xs uppercase tracking-[0.2em] mb-3 block">
              LET'S CREATE TOGETHER
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 font-display uppercase tracking-tight mb-4 leading-tight">
              Have a Project <br />Or Video in Mind?
            </h2>

            <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto mb-8">
              Whether it’s a high-impact commercial, viral social reels, wedding cinematic, or dynamic motion graphics, let's talk and bring your vision to life.
            </p>

            {/* Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/chetan-bharati-92b643350/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#0077b5] transition-all duration-300 flex items-center space-x-3 group hover:scale-[1.02] text-left shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-neutral-900 text-sm font-bold flex items-center space-x-1">
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0077b5]" />
                  </h4>
                  <p className="text-xs text-neutral-500">chetan-bharati-92b643350</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/chetan_bharati30/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#E1306C] transition-all duration-300 flex items-center space-x-3 group hover:scale-[1.02] text-left shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center text-[#E1306C] group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-neutral-900 text-sm font-bold flex items-center space-x-1">
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#E1306C]" />
                  </h4>
                  <p className="text-xs text-neutral-500">@chetan_bharati30</p>
                </div>
              </a>

            </div>

            {/* Direct Contact Button */}
            <a
              href="https://www.instagram.com/chetan_bharati30/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-black hover:bg-neutral-800 text-white font-black text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-lg"
            >
              <span>Direct Message on Instagram</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-neutral-200 text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-neutral-900">CHETAN BHARATI</span>
            <span>•</span>
            <span>Portfolio 2026</span>
          </div>
          <p className="text-neutral-500">
            Crafted with passion for cinematic excellence.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/chetan_bharati30/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-black transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/chetan-bharati-92b643350/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-black transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox Video Modal (Clean White Theme) */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white text-black hover:bg-neutral-100 transition-all shadow-xl border border-neutral-200 hover:scale-105"
            title="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header info */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-neutral-200 bg-white">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-[10px] font-black uppercase text-black bg-[#C5FF2E] px-2.5 py-0.5 rounded border border-neutral-300 shadow-sm">
                    {modalVideo.badge}
                  </span>
                  <span className="text-xs text-neutral-500 font-semibold">
                    {modalVideo.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-neutral-950 tracking-tight">
                  {modalVideo.title}
                </h3>
              </div>
            </div>

            {/* Video Player Frame */}
            <div className="relative bg-black flex items-center justify-center flex-grow max-h-[68vh] overflow-hidden">
              <video
                ref={modalVideoRef}
                src={modalVideo.videoUrl}
                className="w-full h-full max-h-[68vh] object-contain"
                autoPlay
                controls
                playsInline
              />
            </div>

            {/* Footer details */}
            <div className="p-4 bg-white border-t border-neutral-200 text-xs text-neutral-600 flex items-center justify-between">
              <span className="font-bold text-neutral-900 text-sm">{modalVideo.title}</span>
              <a
                href="https://www.instagram.com/chetan_bharati30/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-black hover:bg-neutral-800 text-white font-extrabold text-xs uppercase tracking-wider inline-flex items-center space-x-1.5 transition-all shadow-sm"
              >
                <span>Connect on Instagram</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
