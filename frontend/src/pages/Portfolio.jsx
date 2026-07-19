import { useState, useEffect } from 'react'
import { Play, ArrowRight, Video, FileText, Image, Award, XCircle, Volume2, VolumeX } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'
import useSEO from '../hooks/useSEO'
import { getCollection } from '../services/content'

const ICON_MAP = {
  Play,
  Video,
  FileText,
  Image,
  Award
}

const defaultItems = [
  // Social Media (4 items) - Vertical aspect
  {
    id: 1,
    title: 'TIMUS Luggage Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    video: '/videos/056dff485242441776c90cd1ba524476.mp4',
    metric: '1.5M+ Views',
    caption: 'you five things.',
    aspect: 'aspect-[9/16]',
    icon: 'Play'
  },
  {
    id: 2,
    title: 'USHA B2B Thought Leadership',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    video: '/videos/f08ad582b24cf050cee403954697769d_720w.mp4',
    metric: '1.2M+ Reach',
    caption: 'Wo bhi aapke LOCATION PER',
    aspect: 'aspect-[9/16]',
    icon: 'FileText'
  },
  {
    id: 3,
    title: 'Grace Realty Buyer Education',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&auto=format&fit=crop',
    video: '/videos/prpoerty.mp4',
    metric: '800K+ Views',
    caption: 'Tourism growth',
    aspect: 'aspect-[9/16]',
    icon: 'Play'
  },
  {
    id: 4,
    title: 'Eunora Local Patient Reels',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop',
    video: '/videos/2aeb8ab2e973f0366ce0e03e1f153d1a_720w.mp4',
    metric: '400K+ Views',
    caption: 'What Reduces',
    aspect: 'aspect-[9/16]',
    icon: 'Play'
  },

  // Video Production (4 items) - Vertical aspect
  {
    id: 5,
    title: 'Eunora Office Stretch Routine',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop',
    video: '/videos/gym edit 2.mp4',
    metric: 'Educational Short',
    caption: "Relax / it's not",
    aspect: 'aspect-[9/16]',
    icon: 'Video'
  },
  {
    id: 6,
    title: 'Grace Realty Micro-Market Guide',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    video: '/videos/property edits.mp4',
    metric: 'Cinematic Vlog',
    caption: 'Nashik me Bahut / bada Development !',
    aspect: 'aspect-[9/16]',
    icon: 'Video'
  },
  {
    id: 7,
    title: 'Timus Cinematic Travel Film',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop',
    video: '/videos/edits 1.mp4',
    metric: 'High-Hook Edit',
    caption: 'Winter Snow',
    aspect: 'aspect-[9/16]',
    icon: 'Video'
  },
  {
    id: 8,
    title: 'B2B Enterprise Software Showcase',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    video: '/videos/editing.mp4',
    metric: 'SaaS Case Study',
    caption: 'and',
    aspect: 'aspect-[9/16]',
    icon: 'Video'
  },

  // Branding (2 items) - Landscape aspect
  {
    id: 9,
    title: 'Timus Logo & Ribbon Redesign',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop',
    video: '/videos/brandingg.mp4',
    metric: 'Visual Identity',
    caption: 'Rebranding Timus',
    aspect: 'aspect-[16/10]',
    icon: 'Award'
  },
  {
    id: 10,
    title: 'Eunora Clinical Style Guide',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop',
    video: '/videos/brandingg.mp4',
    metric: 'Corporate Branding',
    caption: 'Style Guides',
    aspect: 'aspect-[4/3]',
    icon: 'Award'
  },

  // Design (2 items) - Landscape aspect
  {
    id: 11,
    title: 'Grace Realty Landing Page',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
    video: '/videos/motion graphics.mp4',
    metric: 'UI/UX Design',
    caption: 'Landing Page',
    aspect: 'aspect-[16/9]',
    icon: 'Image'
  },
  {
    id: 12,
    title: 'Buildlabs Marketing Graphic Kit',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop',
    video: '/videos/motion graphics.mp4',
    metric: 'Social Feed Kit',
    caption: 'Graphic Kit',
    aspect: 'aspect-[4/3]',
    icon: 'Image'
  }
]

const Portfolio = () => {
  useSEO({
    title: 'Our Portfolio - Recent Works',
    description: 'Browse the portfolio and creative works of Buildlabs Digital.',
    noIndex: true
  })

  useEffect(() => {
    reinitAnimations()
  }, [])

  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [activeAudioId, setActiveAudioId] = useState(null)
  const [portfolioItems, setPortfolioItems] = useState([])

  useEffect(() => {
    const fetchPortfolio = async () => {
      const dbItems = await getCollection('portfolio')
      if (dbItems && dbItems.length > 0) {
        setPortfolioItems(dbItems)
      } else {
        setPortfolioItems(defaultItems)
      }
    }
    fetchPortfolio()
  }, [])

  const filterCategories = [
    { name: 'All', count: portfolioItems.length },
    { name: 'Social Media', count: portfolioItems.filter(i => i.category === 'Social Media').length },
    { name: 'Video Production', count: portfolioItems.filter(i => i.category === 'Video Production').length },
    { name: 'Design', count: portfolioItems.filter(i => i.category === 'Design').length },
    { name: 'Branding', count: portfolioItems.filter(i => i.category === 'Branding').length }
  ]

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div className="pt-24 md:pt-28 bg-[#0b0b0b] text-white">
      {/* Hero Title */}
      <section className="relative overflow-hidden py-12 md:py-20 border-b border-neutral-900/60 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C5FF2E]"></span>
              <span className="text-xs font-extrabold tracking-widest text-[#C5FF2E] uppercase">
                PORTFOLIO
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-display mb-4 tracking-tight leading-none text-white font-serif">
              The Portfolio
            </h1>
            <p className="text-sm md:text-base text-neutral-400 font-medium">
              Every frame crafted with intention.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & Grid */}
      <section className="py-12 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {filterCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveFilter(cat.name)}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 border flex items-center space-x-1.5 ${
                  activeFilter === cat.name
                    ? 'bg-[#C5FF2E] text-black border-[#C5FF2E] shadow-lg shadow-[#C5FF2E]/10'
                    : 'bg-neutral-900/50 text-neutral-450 border-neutral-800/80 hover:text-white hover:border-neutral-700'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-extrabold ${
                  activeFilter === cat.name ? 'bg-black/10 text-black' : 'bg-neutral-800 text-neutral-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-900">
            <span className="text-neutral-500 text-xs font-bold tracking-wider uppercase">
              {filteredItems.length} works
            </span>
          </div>

          {/* Pinterest-style Masonry Columns layout - 4 columns on desktop */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => item.video && setSelectedVideo(item.video)}
                className={`break-inside-avoid mb-4 w-full relative rounded-[1.5rem] overflow-hidden shadow-xl border border-neutral-900/40 hover:scale-[1.02] transition-all duration-500 cursor-pointer group ${item.aspect}`}
              >
                {/* Video or Image Cover */}
                {item.video ? (
                  <video
                    src={item.video}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted={activeAudioId !== item.id}
                    playsInline
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10"></div>

                {/* Metric/Views Badge */}
                <div className="absolute top-3 left-3 z-20 flex space-x-2">
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-[8px] font-extrabold text-[#C5FF2E] tracking-wider rounded border border-white/5 uppercase">
                    {item.metric}
                  </span>
                </div>

                {/* Category Icon Overlay */}
                <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-[#C5FF2E] border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {(() => {
                    const IconComponent = ICON_MAP[item.icon] || Play
                    return <IconComponent className="w-3 h-3" />
                  })()}
                </div>

                {/* Sound Toggle (for videos) */}
                {item.video && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveAudioId(activeAudioId === item.id ? null : item.id)
                    }}
                    className="absolute bottom-3 right-3 z-30 p-1.5 rounded-full bg-black/60 backdrop-blur-sm text-[#C5FF2E] border border-white/5 hover:scale-110 transition-transform cursor-pointer"
                  >
                    {activeAudioId === item.id ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                  </button>
                )}

                {/* Subtitle Caption Overlay */}
                <div className="absolute bottom-4 left-3 right-3 z-20 flex flex-col items-center justify-end h-[60%] text-center pointer-events-none">
                  {item.caption === "Wo bhi aapke LOCATION PER" ? (
                    <p className="text-white text-[10px] md:text-xs font-extrabold leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center uppercase">
                      Wo bhi aapke <br />
                      <span className="text-[#38bdf8] font-black uppercase tracking-wider text-xs md:text-sm">LOCATION PER</span>
                    </p>
                  ) : item.caption === "Tourism growth" ? (
                    <p className="text-[#facc15] font-black text-xs md:text-sm tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center uppercase">
                      Tourism <br />
                      <span className="text-white font-extrabold text-[10px] md:text-xs tracking-wide lowercase">growth</span>
                    </p>
                  ) : item.caption === "What Reduces" ? (
                    <p className="text-white text-[10px] md:text-xs font-extrabold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center uppercase">
                      What Reduces
                    </p>
                  ) : item.caption === "Relax / it's not" ? (
                    <p className="text-white text-[10px] md:text-xs font-extrabold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center uppercase">
                      Relax <br />
                      <span className="text-[#C5FF2E] font-black text-[9px] md:text-[10px] tracking-wider">it's not</span>
                    </p>
                  ) : item.caption === "Nashik me Bahut / bada Development !" ? (
                    <p className="text-white text-[10px] md:text-xs font-extrabold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center uppercase">
                      Nashik me Bahut <br />
                      <span className="text-[#facc15] font-black text-[9px] md:text-[10px] tracking-wider">bada Development !</span>
                    </p>
                  ) : (
                    <p className="text-white text-[10px] md:text-xs font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center uppercase">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white text-center relative overflow-hidden border-t border-neutral-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5FF2E]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="text-[#C5FF2E] text-xs font-black uppercase tracking-[0.25em] mb-3 block">
            WORK WITH US
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display mb-6 tracking-tight text-white max-w-2xl leading-tight">
            Your work could <br />live here.
          </h2>
          <a
            href="https://growupmedia.in/#contact"
            className="px-8 py-4 bg-[#C5FF2E] hover:bg-[#C5FF2E]/90 text-black rounded-full font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 hover:scale-105 shadow-xl"
          >
            <span>Start the Conversation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:scale-110 transition-all z-50 p-2 bg-white/10 rounded-full"
            onClick={() => setSelectedVideo(null)}
          >
            <XCircle className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] aspect-video md:aspect-auto rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-black flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={selectedVideo} 
              className="max-w-full max-h-[85vh] object-contain" 
              autoPlay 
              controls 
              playsInline
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
