import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'
import useSEO from '../hooks/useSEO'

const Services = () => {
  useSEO({
    title: 'Our Services - Video, Websites & Performance Marketing',
    description: 'Explore the digital marketing services offered by Buildlabs, including Social Media Marketing, Video Production, Web Development, Branding, Performance Marketing, and SEO.',
    keywords: 'social media marketing, video production, web development, branding design, performance marketing, seo agency',
    canonicalPath: '/services',
    noIndex: false
  })

  useEffect(() => {
    reinitAnimations()
  }, [])

  const [hoveredIndex, setHoveredIndex] = useState(0)

  const servicesList = [
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
      num: '05',
      title: 'SOFTWARE',
      description: 'Custom enterprise software solutions, scalable databases, and automated workflows. We build robust systems that streamline operations and drive efficiency.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
      features: [
        'CUSTOM ENTERPRISE SOFTWARE',
        'DATABASE ARCHITECTURE & DESIGN',
        'API INTEGRATIONS & AUTOMATIONS',
        'SCALABLE BACKEND SYSTEMS'
      ]
    }
  ]

  return (
    <div className="bg-[#0b0b0b] text-white animate-fade-in">
      {/* Services Accordion List Section */}
      <section className="py-20 md:py-32 bg-black border-b border-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
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
            {servicesList.map((service, index) => {
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-black text-center relative overflow-hidden border-t border-neutral-100">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="text-[#8BCF1D] text-xs font-black uppercase tracking-[0.25em] mb-4">
            WORK WITH US
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display mb-8 tracking-tight text-black max-w-2xl leading-tight">
            Ready to scale <br />your brand?
          </h2>
          <a
            href="/#contact"
            className="px-8 py-4 bg-[#8BCF1D] hover:bg-[#8BCF1D]/90 text-black rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 hover:scale-105 shadow-xl shadow-[#8BCF1D]/15"
          >
            <span>Start the Conversation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services
