import { Quote } from 'lucide-react'

const Testimonials = () => {
  const row1 = [
    {
      name: 'SUMIT TIWARI',
      role: 'Founder, Timus, Pune',
      text: 'Buildlabs ne amchi brand ekdam next level la neli! Content baghitla ki trust lagar yeto. Solid team aahe.',
      dotColor: '#ff7a00'
    },
    {
      name: 'SUNAYA MADAN',
      role: 'Chocoyum, Nagpur',
      text: 'Creative touch khup chan hota. Aaplya brand la ek vegalich identity milali. Digital growth saathi best choice!',
      dotColor: '#ff7a00'
    },
    {
      name: 'PRIYA DESHPANDE',
      role: 'Deshpande Foods, Pune',
      text: 'Khup Chan kaam kela! Video content pahun customers khush zhale. Puneri business la ha team must aahe.',
      dotColor: '#ff7a00'
    }
  ]

  const row2 = [
    {
      name: 'RAHUL JAIN',
      role: 'Grace Realty, Mumbai',
      text: 'Professional team hai yaar, inke saath kaam karke maza aaya. Results bhi dikhaye aur brand value bhi badhi. Recommend karunga!',
      dotColor: '#2b7fff'
    },
    {
      name: 'ARJUN MEHTA',
      role: 'ArcoBuild Infra, Delhi',
      text: 'Bhai seedha baat karo, inki content strategy ne humari enquiries double kar di. Delhi mein bhi naam ho gaya!',
      dotColor: '#2b7fff'
    },
    {
      name: 'KARAN MALHOTRA',
      role: 'FitZone Gym, Bangalore',
      text: 'Yaar social media pe itna achha response pehle kabhi nahi mila. Buildlabs ka kaam dekh ke competitors bhi pooch rahe hain!',
      dotColor: '#2b7fff'
    }
  ]

  // Create an even list of 6 items to ensure seamless alternating color repeating (White, Black, White, Black...)
  const marquee1Items = [...row1, ...row1] // 6 items
  const marquee2Items = [...row2, ...row2] // 6 items

  const renderCard = (item, idx, rowNum) => {
    // Alternate row 1 starting with White (idx % 2 === 0), Row 2 starting with Black (idx % 2 === 0)
    const isWhiteCard = rowNum === 1 ? idx % 2 === 0 : idx % 2 !== 0

    return (
      <div
        key={idx}
        className={`w-[280px] md:w-[340px] rounded-[2rem] p-6 mx-3 flex-shrink-0 transition-all duration-300 text-left relative flex flex-col justify-between shadow-xl ${
          isWhiteCard
            ? 'bg-white text-neutral-800 border border-neutral-200/50'
            : 'bg-neutral-950 border border-neutral-800/40 text-neutral-300'
        }`}
      >
        <div className="space-y-4">
          {/* Quote icon */}
          <div className="text-5xl font-serif text-[#C5FF2E] font-black leading-none h-4 block">
            “
          </div>
          <p className="text-xs md:text-sm leading-relaxed font-semibold">
            {item.text}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-205/10 flex items-center justify-between">
          <div>
            <h4 className={`text-xs md:text-sm font-black tracking-wider uppercase font-display ${isWhiteCard ? 'text-black' : 'text-white'}`}>
              {item.name}
            </h4>
            <div className="flex items-center space-x-1.5 mt-1">
              <span className={`text-[10px] font-semibold tracking-wide ${isWhiteCard ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {item.role}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: item.dotColor }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-24 bg-[#0b0b0b] border-b border-neutral-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-[#C5FF2E] text-xs font-black uppercase tracking-[0.25em] mb-3 block">
          REVIEWS
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
          What Clients Say
        </h2>
      </div>

      {/* Row 1: Left to Right Marquee */}
      <div className="w-full flex overflow-hidden mb-8 relative">
        <div className="animate-marquee-ltr flex py-4">
          {/* Render duplicated list twice to ensure infinite continuity */}
          {[...marquee1Items, ...marquee1Items].map((item, idx) => renderCard(item, idx, 1))}
        </div>
      </div>

      {/* Row 2: Right to Left Marquee */}
      <div className="w-full flex overflow-hidden relative">
        <div className="animate-marquee-rtl flex py-4">
          {[...marquee2Items, ...marquee2Items].map((item, idx) => renderCard(item, idx, 2))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
