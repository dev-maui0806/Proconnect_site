import Header from "@/components/Header";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <div className="min-h-screen">
      <Header />

      <main
        className="relative min-h-screen pt-[79px] overflow-hidden"
        style={{
          background: 'linear-gradient(201deg, #EAEEFE 43.73%, #183EC2 95.83%)'
        }}
      >
        {/* Grid Overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gridGradient" x1="1440" y1="0" x2="0" y2="1024" gradientUnits="userSpaceOnUse">
              <stop stopColor="#183EC2"/>
              <stop offset="1" stopColor="white"/>
            </linearGradient>
          </defs>
          <path
            d="M103.5 0L103.5 1024M206.5 0L206.5 1024M309.5 0L309.5 1024M411.5 0L411.5 1024M514.5 0L514.5 1024M617.5 0L617.5 1024M720.5 0L720.5 1024M823.5 0L823.5 1024M926.5 0L926.5 1024M1029.5 0V1024M1131.5 0V1024M1234.5 0V1024M1337.5 0V1024M0 922.5L1440 922.5M0 820.5L1440 820.5M0 717.5L1440 717.5M0 614.5L1440 614.5M0 511.5L1440 511.5M0 408.5L1440 408.5M0 305.5L1440 305.5M0 202.5L1440 202.5M0 100.5L1440 100.5"
            stroke="url(#gridGradient)"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-[72px] py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {pageName}
            </h1>
            <p className="text-lg text-white/80">
              This page is under construction. Continue prompting to add content here!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
