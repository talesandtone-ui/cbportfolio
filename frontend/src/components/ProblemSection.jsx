const ProblemSection = () => {
  return (
    <section className="relative bg-[#f4f7f4] py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-neutral-250/60 overflow-hidden">
      {/* Soft, premium neon-lime radial glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5FF2E]/30 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Dotted pattern overlay for light-mode technical design feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center z-10">
        {/* Left Column: Problem Copy */}
        <div className="flex flex-col text-left md:col-span-7">
          {/* Badge */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-[2px] bg-[#7db509]"></div>
            <span className="text-xs md:text-sm font-extrabold tracking-widest text-[#7db509] uppercase">
              THE REAL PROBLEM
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black font-display leading-[1.1] mb-8 tracking-tight">
            Your product <br className="hidden lg:block" />
            is not your <br className="hidden lg:block" />
            biggest problem. <br />
            <span className="text-[#8BCF1D] italic">Invisibility is.</span>
          </h2>

          {/* Paragraph description */}
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl font-medium">
            Great companies get ignored every day. Not because they're bad — because no one can find them. Content without a system is just noise.
          </p>
        </div>

        {/* Right Column: Statement Progression */}
        <div className="border-l border-neutral-300 pl-8 md:pl-12 py-4 flex flex-col space-y-6 md:space-y-8 md:col-span-5">
          <div className="scroll-reveal text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-black tracking-tight leading-none">
              You have a great product.
            </h3>
          </div>
          <div className="scroll-reveal text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-black/75 tracking-tight leading-none">
              A solid team.
            </h3>
          </div>
          <div className="scroll-reveal text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-black/50 tracking-tight leading-none">
              Real results for clients.
            </h3>
          </div>
          <div className="scroll-reveal text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-black/25 tracking-tight leading-none">
              And no one knows you exist.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
