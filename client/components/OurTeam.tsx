import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}

export default function OurTeam() {
  const featuredMember: TeamMember = {
    name: "Jari de smaele",
    role: "Ceo & Founder",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7de63494fb0f809758388d3a659fb9b7914e936b?width=528",
    linkedinUrl: "https://www.linkedin.com/in/jari-de-smaele-4a68aa38a/",
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Sven Halbach",
      role: "Community & Ecosystem Manager",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/acaf6bbfdabf73fab65e13e37d939e84bc2b2f79?width=533",
      linkedinUrl: "https://www.linkedin.com/in/sven-halbach-a63ba338a/",
    },
    {
      name: "Sacha Capelluto",
      role: "AI Engineer | Machine Learning & Data Science",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/a01050eacd9eff6d23a281d5e56d7deeba6196f1?width=533",
      linkedinUrl: "https://www.linkedin.com/in/sacha-capelluto-489864312/?trk=opento_nprofile_details",
    },
    {
      name: "Yash Shukla",
      role: "Lead Full-Stack Developer & UI/UX Engineer",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/299ba8ba302fe7171dc98710f42ec2d2b1b10c3a?width=528",
      linkedinUrl: "https://www.linkedin.com/in/yashshukla4261/",
    },
    {
      name: "Janus Ladero",
      role: "Blockchain | Web3 & AI Developer",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7fb476f1342d4f020c064ba3785cb9bef0ca4734?width=533",
      linkedinUrl: "https://www.linkedin.com/in/blockchaindeveloper2025/",
    },
  ];

  return (
    <div className="relative min-h-screen py-12 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#D2DCFF]" />
      
      {/* Decorative cube elements */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/f87a14faae14ee36fc4c662e0894e31e9fd04aba?width=342" 
        alt="" 
        className="absolute left-4 md:left-12 lg:left-40 top-32 md:top-40 w-24 h-24 md:w-32 md:h-32 lg:w-[171px] lg:h-[171px] opacity-80"
        aria-hidden="true"
      />
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/ef74f50a5db856e2ce4361ae0c564bc1f1d277d8?width=342" 
        alt="" 
        className="absolute right-4 md:right-12 lg:right-40 top-96 md:top-[500px] w-24 h-24 md:w-32 md:h-32 lg:w-[171px] lg:h-[171px] opacity-80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16 lg:mb-20">
          {/* Decorative line and number */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center rounded-full bg-black px-[15px] py-[10px] min-w-[39px]">
              <span className="text-white font-medium text-base tracking-[-0.32px]">5</span>
            </div>
          </div>
          
          {/* Tag */}
          <div className="inline-flex items-center justify-center px-[13px] py-[10px] rounded-[10px] border border-black/10">
            <span className="text-black font-medium text-[13px] tracking-[-0.325px]">Core Team</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-tight lg:leading-[60px] tracking-[-3.24px] text-center bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Team
          </h1>
        </div>

        {/* Featured member */}
        <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
          <div className="w-full max-w-[312px] bg-white/50 backdrop-blur-sm rounded-[20px] border border-black/8 p-6 flex flex-col gap-4">
            <img 
              src={featuredMember.image} 
              alt={featuredMember.name}
              className="w-full aspect-[12/13] rounded-[10px] object-cover"
            />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-[#010D3E] text-[32px] font-normal leading-[40px]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {featuredMember.name}
                </h2>
                <p className="text-[#6F6C90] text-lg font-bold tracking-[-0.558px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {featuredMember.role}
                </p>
              </div>
              <a 
                href={featuredMember.linkedinUrl && featuredMember.linkedinUrl !== "#" ? featuredMember.linkedinUrl : "https://www.linkedin.com"}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex hover:opacity-80 transition-opacity" 
                aria-label={`${featuredMember.name} LinkedIn profile`}
                onClick={(e) => {
                  if (!featuredMember.linkedinUrl || featuredMember.linkedinUrl === "#") {
                    e.preventDefault();
                    window.open("https://www.linkedin.com", "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <Linkedin className="w-[14px] h-[14px] text-[#001354]" />
              </a>
            </div>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-[20px] p-6 flex flex-col gap-4">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full aspect-[266.25/288.44] rounded-[10px] object-cover"
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#010D3E] text-[32px] font-normal leading-[40px]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-[#6F6C90] text-lg font-bold tracking-[-0.558px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {member.role}
                  </p>
                </div>
                <a 
                  href={member.linkedinUrl && member.linkedinUrl !== "#" ? member.linkedinUrl : "https://www.linkedin.com"}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex hover:opacity-80 transition-opacity" 
                  aria-label={`${member.name} LinkedIn profile`}
                  onClick={(e) => {
                   
                      window.open(`${member.linkedinUrl}`, "_blank", "noopener,noreferrer");
                  
                  }}
                >
                  <Linkedin className="w-[14px] h-[14px] text-[#001354]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
