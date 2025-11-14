import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // Only handle smooth scroll if we're on the home page
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 79; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      closeMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/[0.01] backdrop-blur-[7px]">
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-[72px] py-5 h-[79px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/930d13e60c9207553eb6485eb758b90d87bd6b35?width=110"
            alt="ProConnect Logo"
            className="w-[55px] h-[33px] drop-shadow-md"
          />
          <span className="text-black font-semibold text-base leading-normal">
            PCT by ProConnect
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            to="/#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors"
          >
            About
          </Link>
          <Link
            to="/#tokens"
            onClick={(e) => handleNavClick(e, "tokens")}
            className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors"
          >
            Tokens
          </Link>
          <Link
            to="/#roadmap"
            onClick={(e) => handleNavClick(e, "roadmap")}
            className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors"
          >
            Roadmap
          </Link>
          <Link
            to="/#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors"
          >
            Contact
          </Link>

          {/* Login Button */}
          <button className="flex items-center justify-center gap-1 px-[15px] py-[10px] bg-black rounded-[10px] text-white text-base font-medium leading-normal tracking-[-0.32px] hover:bg-black/90 transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-black/5 px-6 py-4">
          <div className="flex flex-col gap-4">
            <Link
              to="/#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors py-2"
            >
              Home
            </Link>
            <Link
              to="/#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors py-2"
            >
              About
            </Link>
            <Link
              to="/#tokens"
              onClick={(e) => handleNavClick(e, "tokens")}
              className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors py-2"
            >
              Tokens
            </Link>
            <Link
              to="/#roadmap"
              onClick={(e) => handleNavClick(e, "roadmap")}
              className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors py-2"
            >
              Roadmap
            </Link>
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-black/60 text-base font-normal leading-[23px] tracking-[-0.16px] hover:text-black transition-colors py-2"
            >
              Contact
            </Link>

            {/* Login Button */}
            <button
              onClick={closeMenu}
              className="flex items-center justify-center gap-1 px-[15px] py-[10px] bg-black rounded-[10px] text-white text-base font-medium leading-normal tracking-[-0.32px] hover:bg-black/90 transition-colors w-full mt-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
