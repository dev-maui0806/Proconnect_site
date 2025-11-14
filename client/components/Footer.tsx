import { Link } from "react-router-dom";

export default function Footer() {
  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "Tokens", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Whitepaper", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
    { label: "Disclaimer", href: "#" },
    { label: "KYC", href: "#" },
  ];

  return (
    <footer className="bg-black py-12 px-6 md:px-12 lg:px-[72px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
          {/* Left Section - Logo and Tagline */}
          <div className="flex flex-col gap-8 lg:max-w-[25rem] items-center lg:items-start">
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/930d13e60c9207553eb6485eb758b90d87bd6b35?width=110"
                alt="ProConnect Logo"
                className="w-[55px] h-[33px]"
                style={{ filter: "drop-shadow(0 3px 4px rgba(0, 0, 0, 0.25))" }}
              />
            </div>
            <p
              className="text-white text-sm font-normal text-center lg:text-left"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              "Reinventing the world of work powered by crypto & AI."
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {/* X (Twitter) */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="X (Twitter)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {/* Discord */}
              <a
                href="https://discord.gg/Tsa5qTEVjQ "
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="Discord"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/ProConnectCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="Telegram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.166 1.699-.84 5.857-1.184 7.78-.152.87-.45 1.16-.74 1.19-.63.059-1.108-.416-1.717-.816-.952-.64-1.49-.992-2.414-1.59-1.03-.66-.363-1.024.225-1.617.155-.156 2.83-2.595 2.883-2.815.006-.027.012-.125-.047-.177-.059-.052-.144-.034-.207-.02-.089.018-1.495.952-4.22 2.795-.4.27-.762.401-1.087.394-.358-.008-.998-.192-1.488-.35-.6-.194-1.076-.297-1.034-.628.021-.165.31-.333.853-.51 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.024.465.14.118.095.151.223.167.313.016.09.036.297.02.458z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-12 items-center justify-center lg:items-start">
            {/* Company Column */}
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <h3
                className="text-white text-sm font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Company
              </h3>
              <nav className="flex flex-col gap-5 items-center justify-center lg:items-start">
                {companyLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-[#7B7B7B] text-sm font-normal hover:text-white transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <h3
                className="text-white text-sm font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Legal
              </h3>
              <nav className="flex flex-col gap-5 items-center justify-center lg:items-start">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-[#7B7B7B] text-sm font-normal hover:text-white transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
