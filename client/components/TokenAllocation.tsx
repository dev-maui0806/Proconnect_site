export default function TokenAllocation() {
  const allocations = [
    {
      color: "#4C9EFF",
      title: "Public Sale: 25%",
      description: "1-month cliff, gradual release post-launch.",
    },
    {
      color: "#9B51E0",
      title: "Private Sale: 10%",
      description: "1-month lockup for bonus tokens, 3-month vesting.",
    },
    {
      color: "#56CCF2",
      title: "Team & Advisors 15%",
      description: "6-month cliff, 24-month vesting for stability.",
    },
    {
      color: "#F2C94C",
      title: "Development & Partnerships 10%",
      description: "Supports long-term platform development and strategic collaborations.",
    },
    {
      color: "#27AE60",
      title: "Ecosystem & Community 25%",
      description: "Used for staking rewards, user incentives, and platform growth.",
    },
    {
      color: "#EB5757",
      title: "Liquidity & Exchanges 10%",
      description: "Provides stability for trading and exchange listings.",
    },
    {
      color: "#2D9CDB",
      title: "Treasury & Reserve 5%",
      description: "Locked for 12 months; future governance-managed allocation.",
    },
  ];

  const saleDetails = [
    { label: "Token Name", value: "ProConnect Token" },
    { label: "Symbol", value: "PCT" },
    { label: "Total Supply", value: "1,000,000,000 PCT" },
    { label: "Tokens Offered (Presale)", value: "150,000,000 PCT" },
    { label: "Start Date", value: "€1,500,000" },
    { label: "Crowdsale Target", value: "€10,500,000" },
    { label: "Hard Cap", value: "€12,000,000" },
    { label: "Blockchain Network", value: "Binance Smart Chain (BEP-20)" },
    { label: "Accepted Currencies", value: "BNB, USDT, ETH" },
    { label: "Treasury Wallet", value: "Official ProConnect Ledger Treasury" },
  ];

  return (
    <section className="w-full bg-white px-4 py-12 md:py-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
          {/* Number Badge with Line */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-[39px] h-[39px] bg-black rounded-full">
              <span className="text-white font-inter font-medium text-base">3</span>
            </div>
          </div>

          {/* Tag */}
          <div className="flex items-center justify-center px-[13px] py-[10px] rounded-[10px] border border-black/10 bg-white/50">
            <span className="text-black font-inter font-medium text-[13px] leading-[31px] tracking-[-0.325px]">
              TOKENS
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-montserrat font-bold text-[36px] md:text-[48px] lg:text-[54px] leading-[1.1] tracking-[-3.24px] text-center bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent max-w-[819px]">
            Breakdown of the ProConnect (PCT) Token Allocation
          </h2>
        </div>

        {/* Token Allocation Chart & Legend */}
        <div className="flex flex-col relative lg:flex-row gap-12 lg:gap-16 items-center mb-8">
          {/* Left - Pie Chart */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center md:items-center lg:justify-start">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/3cf5c274126b815cd5c80182defd8ff0481b04de?width=1395" 
              alt="Token Allocation Pie Chart"
              className="w-full max-w-[697px] h-auto"
            />
             {/* Disclaimer */}
           <p className="text-[#6F6C90] font-dm-sans font-bold text-[16px] md:text-[18px] leading-normal tracking-[-0.558px] mb-16">
             <span className="text-[#FF383C]">*</span>These allocations ensure fair distribution while protecting long-term project stability.
          </p>
          </div>

          {/* Right - Legend */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {allocations.map((item, index) => (
              <div key={index} className="flex items-start gap-4" >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                  style={{marginTop:'17px'}}
                >
                  <circle cx="12" cy="12" r="12" fill={item.color} />
                </svg>
                <div className="flex flex-col flex-1">
                  <h3 className="font-dm-sans font-bold text-[22px] md:text-[26px] leading-[60px] tracking-[-1.04px] bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-[#010D3E] font-inter font-normal text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.72px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

       

        {/* Token Sale Details Card */}
        <div className="w-full p-8 md:p-12 rounded-[20px] border border-black/8 shadow-[0_7px_24px_0_rgba(36,38,43,0.2)] bg-white">
          <h2 className="font-dm-sans font-bold text-[40px] md:text-[48px] lg:text-[54px] leading-[1.1] bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent mb-6">
            Token Sale Details
          </h2>

          {/* Details Table */}
          <div className="flex flex-col">
            {saleDetails.map((detail, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 py-6 ${
                  index < saleDetails.length - 1 ? 'border-b border-[rgba(15,25,50,0.5)]' : ''
                }`}
              >
                <div className="font-inter font-medium text-[20px] md:text-[26px] leading-tight tracking-[-1.04px] bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,19,84,0.8)] bg-clip-text text-transparent">
                  {detail.label}
                </div>
                <div className="font-inter font-semibold text-[20px] md:text-[26px] leading-tight tracking-[-1.04px] bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent sm:text-right">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
