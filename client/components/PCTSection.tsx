export default function PCTSection() {
  return (
    <section className="w-full bg-white px-4 py-12 md:py-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
          {/* Number Badge with Line */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-[39px] h-[39px] bg-black rounded-full">
              <span className="text-white font-inter font-medium text-base">2</span>
            </div>
          </div>

          {/* Tag */}
          <div className="flex items-center justify-center px-[13px] py-[10px] rounded-[10px] border border-black/10 bg-white/50">
            <span className="text-black font-inter font-medium text-[13px] leading-[31px] tracking-[-0.325px]">
              What and Why
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-montserrat font-bold text-[40px] md:text-[48px] lg:text-[54px] leading-[1.1] tracking-[-3.24px] text-center bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent max-w-[540px]">
            PCT is the coin of future
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Large Card */}
          <div className="flex flex-col items-center justify-center rounded-[20px] border border-black/8 shadow-[0_7px_24px_0_rgba(36,38,43,0.2)] bg-white" style = {{padding:'4rem'}}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/de60b8b5e144e2a0cd20ae818b18c856e9316133?width=726" 
              alt="PCT Token 3D Render"
              className="w-full max-w-[363px] h-auto aspect-square mb-6"
            />
            <div className="flex flex-col items-center gap-2 max-w-[467px]">
              <h3 className="font-dm-sans font-bold text-[26px] leading-normal tracking-[-1.04px] text-center bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent">
                The Power Behind the New Work Economy
              </h3>
              <p className="text-[#010D3E] font-inter font-normal text-base leading-[1.44] tracking-[-0.16px] text-center max-w-[447px]">
                The PCT Token fuels a borderless ecosystem where individuals, freelancers, and companies exchange real value transparently, securely, and instantly.
              </p>
            </div>
          </div>

          {/* Right Column - Three Horizontal Cards */}
          <div className="flex flex-col gap-8">
            {/* Card 1: Real World Utility */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:px-10 sm:py-4 rounded-[20px] border border-black/8 shadow-[0_7px_24px_0_rgba(36,38,43,0.2)] bg-white">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f87a14faae14ee36fc4c662e0894e31e9fd04aba?width=342" 
                alt="Real World Utility Icon"
                className="w-[171px] h-[171px] flex-shrink-0"
              />
              <div className="flex flex-col justify-center items-start flex-1">
                <h3 className="font-dm-sans font-bold text-[26px] leading-[60px] tracking-[-1.04px] bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent">
                  Real World Utility
                </h3>
                <p className="text-[#010D3E] font-inter font-normal text-base leading-[1.44] tracking-[-0.16px]">
                  Use PCT for hiring, payments, and staking inside the ProConnect platform. Every interaction is backed by tangible work and measurable value.
                </p>
              </div>
            </div>

            {/* Card 2: Value Through Participation */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:px-10 sm:py-4 rounded-[20px] border border-black/8 shadow-[0_7px_24px_0_rgba(36,38,43,0.2)] bg-white">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ef74f50a5db856e2ce4361ae0c564bc1f1d277d8?width=342" 
                alt="Value Through Participation Icon"
                className="w-[171px] h-[171px] flex-shrink-0"
              />
              <div className="flex flex-col justify-center items-start flex-1">
                <h3 className="font-dm-sans font-bold text-[26px] leading-[60px] tracking-[-1.04px] bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent">
                  Value Through Participation
                </h3>
                <p className="text-[#010D3E] font-inter font-normal text-base leading-[1.44] tracking-[-0.16px]">
                  Earn PCT by completing projects, collaborating, or contributing to the community transforming effort into opportunity.
                </p>
              </div>
            </div>

            {/* Card 3: AI-Driven Growth */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:px-10 sm:py-4 rounded-[20px] border border-black/8 shadow-[0_7px_24px_0_rgba(36,38,43,0.2)] bg-white">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/bc7c34099f3f27164b314370a00b5c80ae8c74d8?width=342" 
                alt="AI-Driven Growth Icon"
                className="w-[171px] h-[171px] flex-shrink-0"
              />
              <div className="flex flex-col justify-center items-start flex-1">
                <h3 className="font-dm-sans font-bold text-[26px] leading-[60px] tracking-[-1.04px] bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent">
                  AI-Driven Growth
                </h3>
                <p className="text-[#010D3E] font-inter font-normal text-base leading-[1.44] tracking-[-0.16px]">
                  Integrated with smart matching and automated reward systems that optimize connections and sustain long-term engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
