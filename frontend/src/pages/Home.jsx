import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, TrendingUp, Video, Globe, Megaphone, Film, Palette, Award, CheckCircle } from 'lucide-react'

import Testimonials from '../components/Testimonials'
import MarqueeSection from '../components/MarqueeSection'
import ProblemSection from '../components/ProblemSection'
import { reinitAnimations } from '../utils/animations'
import useSEO from '../hooks/useSEO'

const Home = () => {
  useSEO({
    title: 'Content-First Growth Studio',
    description: 'Buildlabs is a full-service digital marketing agency helping brands grow through high-converting videos, modern web development, and performance marketing campaigns.',
    keywords: 'digital marketing, video editing, web development, social media management, performance marketing, Buildlabs',
    canonicalPath: '/',
    noIndex: false
  })

  useEffect(() => {
    reinitAnimations()
  }, [])

  const [hoveredIndex, setHoveredIndex] = useState(0)

  const services = [
    {
      num: '01',
      title: 'SOCIAL MEDIA MARKETING',
      description: "Your audience is on Instagram, LinkedIn, YouTube and TikTok right now. They're watching someone. It should be you.",
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
      features: [
        'CONTENT CALENDARS & STRATEGY',
        'SCALABLE CONTENT SYSTEMS',
        'COMMUNITY GROWTH',
        'PLATFORM CAMPAIGNS'
      ]
    },
    {
      num: '02',
      title: 'WEBSITE',
      description: 'Custom digital products, speed optimization, and search rankings. We build clean, rapid-load websites optimized for maximum business conversions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
      features: [
        'MOBILE-FIRST WEBSITE DEVELOPMENT',
        'CRM & SCHEDULING AUTOMATIONS',
        'LOCALIZED & TECHNICAL SEO',
        'PERFORMANCE & LOADING OPTIMIZATION'
      ]
    },
    {
      num: '03',
      title: 'BRANDING & DESIGN',
      description: 'Memorable brand guidelines, high-conversion visual design. We establish a cohesive identity that sets you apart and converts visitors into loyal fans.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop',
      features: [
        'BRAND IDENTITY & COLOR SCHEMES',
        'HIGH-CONVERSION THUMBNAILS',
        'EXECUTIVE PITCH DECKS',
        'LANDING PAGE WIREFRAMING'
      ]
    },
    {
      num: '04',
      title: 'SOFTWARE',
      description: 'Custom enterprise software solutions, scalable databases, and automated workflows. We build robust systems that streamline operations and drive efficiency.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
      features: [
        'CUSTOM ENTERPRISE SOFTWARE',
        'DATABASE ARCHITECTURE & DESIGN',
        'API INTEGRATIONS & AUTOMATIONS',
        'SCALABLE BACKEND SYSTEMS'
      ]
    },
    {
      num: '05',
      title: 'VIDEO PRODUCTION',
      description: 'Cinematic, hook-focused short-form & long-form video. We craft visual stories that keep viewers hooked from the first second and build deep trust.',
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop',
      features: [
        'SCRIPTWRITING & HOOK IDEATION',
        'DIRECTING & SHOOTING GUIDANCE',
        'CINEMATIC VIDEO EDITING',
        'FORMAT OPTIMIZATION'
      ]
    },
  ]

  const portfolioPreviews = [
    {
      id: 1,
      brand: 'TIMUS LUGGAGE',
      category: 'Social Media / Video',
      metric: '1.5M+ Views',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop',
      caption: 'HAVE YOU EVER WONDER',
      desc: 'Rebuilt visual identity for travel luggage brand on social.'
    },
    {
      id: 2,
      brand: 'USHA INFOTECH',
      category: 'B2B personal brand',
      metric: '1.2M+ Impressions',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
      caption: 'Wo bhi aapke LOCATION PER',
      desc: 'Executive authority content driving software engineering clients.'
    },
    {
      id: 3,
      brand: 'RAHUL JAIN',
      category: 'Real Estate Authority',
      metric: '800K+ Organic Reach',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&auto=format&fit=crop',
      caption: 'Tourism growth',
      desc: 'Educational real estate hooks generating high-intent buyers.'
    },
    {
      id: 4,
      brand: 'EUNORA PHYSIOTHERAPY',
      category: 'Local Healthcare',
      metric: '400K+ Video Reach',
      image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=600&auto=format&fit=crop',
      caption: 'What Reduces',
      desc: 'Pain relief demonstration videos filling clinic bookings.'
    }
  ]

  return (
    <div className="bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-green-radial text-white pb-16 pt-20 md:pt-28 md:pb-24">
        {/* Decorative ambient glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#8BCF1D]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C5FF2E]/15 rounded-full blur-[90px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">

            <h1
              className="hero-animate hero-animate-delay-1 mb-10 max-w-5xl font-extrabold leading-[1.08] tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(3.5rem, 9vw, 7rem)', fontWeight: '800' }}
            >
              <span className="text-white block">Grow Your Business</span>
              <span className="block mt-1" style={{ color: '#C5FF2E' }}>With Us</span>
            </h1>

            <p className="hero-animate hero-animate-delay-2 text-sm md:text-base text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
              We help ambitious brands scale through strategic content systems. Stop guessing, start growing with a team that actually delivers.
            </p>

            <div className="hero-animate hero-animate-delay-3 flex justify-center w-full">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white hover:bg-neutral-100 text-black rounded-full font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 shadow-lg hover:scale-105"
              >
                <span>GET STARTED TODAY</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Logos and Reels Marquee Section */}
      <MarqueeSection />

      {/* Problem Definition Section */}
      <ProblemSection />

      {/* Services Preview Section */}
      <section className="py-20 md:py-28 bg-black border-b border-neutral-900/60 relative overflow-hidden">
        {/* Subtle green ambient glow on dark section */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8BCF1D]/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4caf20]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16 scroll-reveal">
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C5FF2E]"></span>
              <span className="text-xs font-extrabold tracking-[0.25em] text-[#C5FF2E] uppercase">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white leading-none">
              What we do
            </h2>
            <p className="text-neutral-500 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mt-4">
              FIVE THINGS. ONE TEAM. ZERO EXCUSES.
            </p>
          </div>

          <div className="border-t border-neutral-900/60 divide-y divide-neutral-900/60">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => setHoveredIndex(index)}
                  className="py-8 md:py-10 transition-all duration-500 cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
                    {/* Number */}
                    <span className={`font-mono text-sm md:text-base tracking-wider transition-colors duration-300 pt-2 ${
                      isHovered ? 'text-[#C5FF2E]' : 'text-neutral-500'
                    }`}>
                      ({service.num})
                    </span>

                    {/* Image / Video Thumbnail column */}
                    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-500 ease-out flex-shrink-0 ${
                      isHovered 
                        ? 'w-full md:w-[320px] lg:w-[380px] aspect-[4/3]' 
                        : 'w-24 md:w-36 h-14 md:h-20'
                    }`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    {/* Text Column */}
                    <div className="flex-1 w-full">
                      {/* Title */}
                      <h3 className={`text-2xl md:text-4xl lg:text-5xl font-black font-display tracking-tight uppercase transition-colors duration-300 ${
                        isHovered ? 'text-[#C5FF2E]' : 'text-white group-hover:text-[#C5FF2E]/80'
                      }`}>
                        {service.title}
                      </h3>

                      {/* Expandable Details Container */}
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isHovered ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                      }`}>
                        <p className="text-neutral-400 text-xs md:text-sm lg:text-base font-medium max-w-xl leading-relaxed">
                          {service.description}
                        </p>
                        
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-6 max-w-xl">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center space-x-2.5 text-neutral-300">
                              <span className="w-1.5 h-1.5 bg-[#C5FF2E] rounded-sm flex-shrink-0" />
                              <span className="text-[10px] md:text-xs font-black tracking-widest uppercase">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-neutral-100 text-black rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              <span>Explore Services Details</span>
              <ArrowRight className="w-4 h-4 ml-2 text-black" />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-20 md:py-28 bg-white border-y border-neutral-100 relative overflow-hidden">
        {/* Soft green ambient glow on white work section */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#8BCF1D]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#C5FF2E]/8 rounded-full blur-[90px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 scroll-reveal gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-6 h-[1.5px] bg-[#8BCF1D]"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-[#8BCF1D] uppercase">
                  SELECTED WORK
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-black leading-none">
                The work
              </h2>
            </div>
            <Link
              to="/case-study"
              className="inline-flex items-center text-xs font-black tracking-widest text-[#8BCF1D] uppercase hover:underline mt-4 md:mt-0"
            >
              OUR RECENT CASE STUDIES →
            </Link>
          </div>

          {/* Grid of Work (Reels Style) - 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {portfolioPreviews.map((work) => (
              <div
                key={work.id}
                className="scroll-reveal group aspect-[9/16] relative rounded-[2rem] overflow-hidden shadow-xl border border-neutral-100 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
              >
                {/* Cover Image */}
                <img
                  src={work.image}
                  alt={work.brand}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent z-10"></div>

                {/* Metric/Views Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/60 backdrop-blur-md text-[8px] sm:text-[9px] font-extrabold text-[#C5FF2E] tracking-wider rounded-md border border-white/5 uppercase">
                    {work.metric}
                  </span>
                </div>

                {/* Subtitle Caption Overlay */}
                <div className="absolute bottom-4 left-3 right-3 sm:bottom-6 sm:left-4 sm:right-4 z-20 flex flex-col items-center justify-end h-[60%] text-center pointer-events-none">
                  {work.caption === "HAVE YOU EVER WONDER" ? (
                    <div className="bg-white text-black p-2 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center font-display shadow-lg w-20 sm:w-28 md:w-32 aspect-video transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
                      <span className="text-[7px] sm:text-[10px] md:text-xs font-extrabold leading-none tracking-wider text-neutral-800">HAVE YOU</span>
                      <span className="text-[9px] sm:text-xs md:text-sm font-black leading-none tracking-wider mt-0.5 text-neutral-900">EVER</span>
                      <span className="text-[10px] sm:text-sm md:text-base font-black leading-none tracking-widest text-red-600 mt-1 uppercase">WONDER</span>
                    </div>
                  ) : work.caption === "Wo bhi aapke LOCATION PER" ? (
                    <p className="text-white text-[9px] sm:text-xs md:text-sm font-extrabold leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center uppercase">
                      Wo bhi aapke <br />
                      <span className="text-[#38bdf8] font-black uppercase tracking-wider text-[11px] sm:text-sm md:text-base">LOCATION PER</span>
                    </p>
                  ) : work.caption === "Tourism growth" ? (
                    <p className="text-[#facc15] font-black text-xs sm:text-base md:text-lg tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center uppercase">
                      Tourism <br />
                      <span className="text-white font-extrabold text-[10px] sm:text-sm md:text-base tracking-wide lowercase">growth</span>
                    </p>
                  ) : work.caption === "What Reduces" ? (
                    <p className="text-white text-[10px] sm:text-xs md:text-sm font-extrabold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center uppercase">
                      What Reduces
                    </p>
                  ) : (
                    <p className="text-white text-[10px] sm:text-xs md:text-sm font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center">
                      {work.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

export default Home
