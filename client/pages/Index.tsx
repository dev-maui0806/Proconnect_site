import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";

import LogoTicker from "@/components/LogoTicker";
import ReinventingSection from "@/components/ReinventingSection";
import PCTSection from "@/components/PCTSection";
import TokenAllocation from "@/components/TokenAllocation";
import Roadmap from "@/components/Roadmap";
import OurTeam from "@/components/OurTeam";
import FAQs from "@/components/FAQs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load or hash change
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const headerHeight = 79; // Height of fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location.hash]);
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Header />
      <img
          src="/images/pyramid.png?width=432"
          alt="ddd"
          style={{zIndex:10}}
          className="absolute top-[4%] sm:top-[5%] lg:top-[6.4%] xl-[5.5%] left-1/2 -translate-x-1/2 w-[180px] md:w-[232px] lg:w-[262px] h-auto pointer-events-none opacity-80"
          aria-hidden="true"
        />
      <img
          src="/images/Visual.png?width=432"
          alt="ddd"
          style={{zIndex:10}}
          className="absolute top-[3.4%] right-0 md:left-[61%] md:right-auto lg:left-[74.8%]  w-[250px] md:w-[365px] lg:w-[480px] h-auto pointer-events-none opacity-80"
          aria-hidden="true"
      />
      {/* Hero Section with Gradient Background */}
    
      <section id="home">
        <HeroSection/>
      </section>
      {/* Logo Ticker Section */}
      <LogoTicker />
      <section id="about">
        <ReinventingSection/>
      </section>
      {/* PCT Token Section */}
      
        <PCTSection/>
      
      {/* Token Allocation Section */}
      <section id="tokens">
      <TokenAllocation/>
      </section>
      {/* Roadmap Section */}
      <section id="roadmap">
        <Roadmap/>
      </section>
      <OurTeam />
      <FAQs />
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}
