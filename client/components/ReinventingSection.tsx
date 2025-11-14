export default function ReinventingSection() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-white to-[#D2DCFF] flex items-center justify-center py-12 md:py-20 px-4 md:px-6 lg:px-0">
        <div className="max-w-[100%] md:max-w-[90%] lg:max-w-[100%] w-full mx-auto">

            {/* Header Section */}
            <div className="flex flex-col items-center lg:items-center gap-4">
            {/* Number Badge with Line */}
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-[39px] h-[39px] bg-black rounded-full">
                <span className="text-white font-inter font-medium text-base">1</span>
                </div>
            </div>

            {/* Tag */}
            <div className="flex items-center justify-center px-[13px] py-[10px] rounded-[10px] border border-black/10 bg-white/50">
                <span className="text-black font-inter font-medium text-[13px] leading-[31px] tracking-[-0.325px]">
                About ProConnect
                </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-montserrat font-bold text-[40px] md:text-[48px] lg:text-[54px] leading-[1.1] tracking-[-3.24px] text-center lg:text-center bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent max-w-[807px]">
                Reinventing the World of Work Powered by Crypto & AI.
            </h1>
            </div>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mt-20 " >
            {/* Left side - MacBook Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4782cdf036a1d14e0dee5f8ac0905034e855803c?width=1326" 
                alt="ProConnect Platform Preview"
                className="w-full max-w-[80%] h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2 order-1 lg:order-2 mr-100 ">
               {/* Content Section */}
              <div className="flex flex-col gap-6 md:items:center">
                {/* Secondary Headline */}
                <h2 className="font-dm-sans font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25] tracking-[-2.88px] bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent">
                  ProConnect is building the world's first decentralized work ecosystem powered by the PCT Token.
                </h2>

                {/* Body Text */}
                <p className="text-[#010D3E] font-inter font-normal text-[18px] md:text-[20px] lg:text-[22px] leading-[1.4] tracking-[-0.792px]">
                  It connects individuals, professionals, and companies into a single digital economy where every action, project, and collaboration creates measurable value. Through blockchain, AI, and smart contracts, ProConnect transforms work into a transparent, borderless, and rewarding experience.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-[17px]">
                  <button className="w-full sm:w-auto flex items-center justify-center px-[15px] py-[10px] bg-black rounded-[10px] hover:bg-black/90 transition-colors">
                    <span className="text-white font-inter font-medium text-base tracking-[-0.32px]">
                      Join the Presale
                    </span>
                  </button>

                  <button className="w-full sm:w-auto flex items-center justify-center gap-1 px-[15px] py-[10px] rounded-[10px] hover:opacity-80 transition-opacity group">
                    <span className="text-black font-inter font-medium text-base tracking-[-0.32px]">
                      Explore the Platform
                    </span>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path 
                        d="M16.0306 10.5307L11.5306 15.0307C11.3897 15.1716 11.1986 15.2508 10.9994 15.2508C10.8001 15.2508 10.609 15.1716 10.4681 15.0307C10.3272 14.8898 10.2481 14.6987 10.2481 14.4995C10.2481 14.3002 10.3272 14.1091 10.4681 13.9682L13.6875 10.7501H4.5C4.30109 10.7501 4.11032 10.6711 3.96967 10.5304C3.82902 10.3898 3.75 10.199 3.75 10.0001C3.75 9.8012 3.82902 9.61043 3.96967 9.46978C4.11032 9.32913 4.30109 9.25011 4.5 9.25011H13.6875L10.4694 6.03011C10.3285 5.88921 10.2493 5.69812 10.2493 5.49886C10.2493 5.2996 10.3285 5.10851 10.4694 4.96761C10.6103 4.82671 10.8014 4.74756 11.0006 4.74756C11.1999 4.74756 11.391 4.82671 11.5319 4.96761L16.0319 9.46761C16.1018 9.53738 16.1573 9.62028 16.1951 9.71155C16.2329 9.80281 16.2523 9.90065 16.2522 9.99943C16.252 10.0982 16.2324 10.196 16.1944 10.2872C16.1564 10.3784 16.1007 10.4611 16.0306 10.5307Z" 
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
