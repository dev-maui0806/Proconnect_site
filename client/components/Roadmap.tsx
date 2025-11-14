export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Q4 2025  ICO Launch & Presale Phase (Current Phase)",
      items: [
        "Whitepaper finalized and tokenomics published.",
        "Start of the ICO presale (Ethereum / BNB Chain).",
        "Smart contract audit and KYC verification completed.",
        "Global marketing campaign targeting 100,000+ early users.",
      ],
    },
    {
      title: "Q1 2026 Token Launch & Exchange Listing",
      items: [
        "Token Generation Event (TGE) and public listing.",
        "Listing on major decentralized exchanges (Uniswap / PancakeSwap).",
        "Liquidity pools created and staking module released.",
        "Governance and vesting dashboard deployed.",
      ],
    },
    {
      title: "Q2 2026 Platform Development (Phase 1)",
      items: [
        "Core development of the ProConnect.",
        "Integration of user roles (Individuals, Freelancers, Companies, Job Seekers).",
        "Implementation of chat, projects, subscriptions, and feedback modules.",
        "Internal testing & closed beta for community members.",
      ],
    },
    {
      title: "Q3 2026  MVP Launch & Ecosystem Activation",
      items: [
        "Official MVP launch of ProConnect platform.",
        "Integration of wallet and in-platform payments using PCT Token.",
        "Start of staking, reward, and referral programs.",
        "Expansion of marketing campaigns across EU & MENA regions.",
      ],
    },
    {
      title: "Q4 2026  AI & Automation Phase",
      items: [
        "Integration of AI matching and quote-generation systems.",
        "Enhanced staking utility and partner reward systems.",
        "Dashboard analytics for user and token data.",
        "Introduction of partnerships with enterprises and public institutions.",
      ],
    },
    {
      title: "Q1-Q2 2027  Governance & Global Expansion",
      items: [
        "Launch of PCT DAO (decentralized governance).",
        "Mobile app release (iOS & Android).",
        "New global partnerships and ecosystem expansion.",
        "Preparation for Phase 2 platform scaling.",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-[100%] w-full mx-auto relative">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
          {/* Number Badge with Line */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-[39px] h-[39px] bg-black rounded-full">
              <span className="text-white font-inter font-medium text-base">4</span>
            </div>
          </div>

          {/* Tag */}
          <div className="flex items-center justify-center px-[13px] py-[10px] rounded-[10px] border border-black/10 bg-white/50">
            <span className="text-black font-inter font-medium text-[13px] leading-[31px] tracking-[-0.325px]">
              PCT Timeline
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-montserrat font-bold text-[40px] md:text-[48px] lg:text-[54px] leading-[1.1] tracking-[-3.24px] text-center bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent max-w-[540px]">
            Our Roadmap for the future
          </h2>
        </div>

        {/* Decorative 3D Elements */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f87a14faae14ee36fc4c662e0894e31e9fd04aba?width=342"
          alt=""
          className="hidden lg:block absolute left-0 top-[300px] w-[171px] h-[171px] z-10"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/22f6bae63a0e418c59e487b8f2e0c01ba64fa5f1?width=524"
          alt=""
          className="hidden lg:block absolute right-0 bottom-[40%] w-[262px] h-[262px] z-10"
        />

        {/* Roadmap Timeline Image */}
        <div className="w-full mb-12 md:mb-16 relative">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/52ed744d47e02f746d63c8e19a235ab67dcb3d77?width=2880"
            alt="ProConnect Roadmap Timeline"
            className="w-full h-auto max-w-full"
          />
        </div>

        {/* Timeline Cards Grid */}
        <div className="flex flex-col gap-4 mb-8 container">
          {/* Row 1 - 3 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {roadmapItems.slice(0, 3).map((item, index) => (
              <div 
                key={index}
                className="flex flex-col gap-4 p-6 rounded-[20px] border border-black/8 bg-white"
              >
                <h3 className="text-[#010D3E] font-inter font-normal text-[20px] md:text-[22px] leading-[1.4] tracking-[-0.792px]">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {item.items.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <svg 
                        width="6" 
                        height="6" 
                        viewBox="0 0 6 6" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 mt-1"
                      >
                        <circle cx="3" cy="3" r="3" fill="#010D3E" />
                      </svg>
                      <p className="flex-1 text-[#6F6C90] font-dm-sans font-bold text-[16px] md:text-[18px] leading-normal tracking-[-0.558px]">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - 3 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {roadmapItems.slice(3, 6).map((item, index) => (
              <div 
                key={index}
                className="flex flex-col gap-4 p-6 rounded-[20px] border border-black/8 bg-white"
              >
                <h3 className="text-[#010D3E] font-inter font-normal text-[20px] md:text-[22px] leading-[1.4] tracking-[-0.792px]">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {item.items.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <svg 
                        width="6" 
                        height="6" 
                        viewBox="0 0 6 6" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 mt-1"
                      >
                        <circle cx="3" cy="3" r="3" fill="#010D3E" />
                      </svg>
                      <p className="flex-1 text-[#6F6C90] font-dm-sans font-bold text-[16px] md:text-[18px] leading-normal tracking-[-0.558px]">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[#6F6C90] font-dm-sans font-bold text-[16px] md:text-[18px] leading-normal tracking-[-0.558px] max-w-7xl container">
          <span className="text-[#FF383C]">*</span>The roadmap may evolve as the project grows. Our vision remains clear  building the digital economy of work, powered by PCT.
        </p>
      </div>
    </section>
  );
}
