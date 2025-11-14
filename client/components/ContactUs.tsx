import { Mail, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="relative py-12 md:py-40 lg:py-40 bg-gradient-to-b from-white via-white to-[#D2DCFF]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="relative">
            {/* Dotted World Map Background */}
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2b45adb1507403f1f04a6ed1967337ec7ddd569d?width=1086"
                alt=""
                className="absolute -left-4 md:-left-8 -top-4 w-[543px] h-[543px] opacity-80"
                aria-hidden="true"
              />

              {/* Contact List */}
              <div className="relative flex flex-col gap-1 pt-16 md:pt-24 pl-4 md:pl-12">
                {/* Email */}
                <div className="flex items-center gap-4 py-2">
                  <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#97AFD5]/15 flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#97AFD5]" />
                  </div>
                  <a
                    href="mailto:contact@pro--connect.com"
                    className="text-[#010D3E] text-lg md:text-[22px] font-normal leading-[31px] tracking-[-0.792px]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    contact@pro--connect.com
                  </a>
                </div>

                {/* X/Twitter */}
                <div className="flex items-center gap-4 py-2">
                  <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#97AFD5]/15 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.641 5.20801H19.095L13.735 11.3851L20.041 19.7913H15.103L11.236 14.6934L6.811 19.7913H4.356L10.09 13.184L4.041 5.20801H9.103L12.599 9.86842L16.641 5.20801Z"
                        fill="#97AFD5"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://x.com/ProConnectICO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#010D3E] text-lg md:text-[22px] font-normal leading-[31px] tracking-[-0.792px] underline"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    https://x.com/ProConnectICO
                  </a>
                </div>

                {/* Discord */}
                <div className="flex items-center gap-2.5 py-2">
                  <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#97AFD5]/15 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.317 4.3671C18.7947 3.60914 17.147 3.07618 15.418 2.75202C15.4121 2.75057 15.4063 2.75121 15.4048 2.75247C15.1789 3.13141 14.9521 3.63639 14.7868 4.04566C12.9907 3.77087 11.2147 3.77087 9.47291 4.04566C9.30764 3.63639 9.08692 3.13141 8.86088 2.75247C8.84934 2.75121 8.84356 2.75057 8.83769 2.75202C7.10853 3.07618 5.46247 3.60914 3.94026 4.3671C3.92873 4.3686 3.91726 4.37147 3.90693 4.37559C0.704128 9.04492 -0.0343704 13.5821 0.00348818 18.0578C0.00348818 18.0718 0.0124794 18.0859 0.0230327 18.0948C2.18412 19.7627 4.17248 20.7986 6.10282 21.5892C6.10868 21.5915 6.11548 21.5884 6.11769 21.5825C6.51415 20.9318 6.86519 20.2273 7.15766 19.4798C7.16006 19.4729 7.15651 19.4657 7.15023 19.4657C6.67296 19.3099 6.21625 19.1225 5.78239 18.9079C5.77474 18.9042 5.77829 18.8923 5.78591 18.8883C5.91479 18.8112 6.04368 18.7306 6.16755 18.648C6.17317 18.6441 6.17885 18.6449 6.18161 18.649C10.0038 20.3282 14.2863 20.3282 18.0614 18.649C18.0641 18.6449 18.0698 18.6441 18.0755 18.648C18.1993 18.7306 18.3282 18.8112 18.457 18.8883C18.4646 18.8923 18.4682 18.9042 18.4605 18.9079C18.0266 19.1225 17.5699 19.3099 17.0927 19.4657C17.0864 19.4657 17.083 19.4729 17.0854 19.4798C17.3778 20.2265 17.7288 20.9318 18.1229 21.5816C18.1251 21.5875 18.1319 21.5906 18.1377 21.5883C20.0681 20.7986 22.0564 19.7627 24.2175 18.0948C24.2281 18.0859 24.237 18.0718 24.237 18.0578C24.2923 12.7406 22.8849 8.39461 20.3265 4.37559C20.3166 4.37147 20.3051 4.3686 20.2936 4.3671Z"
                        fill="#97AFD5"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://discord.gg/Tsa5qTEVjQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#010D3E] text-lg md:text-[22px] font-normal leading-[31px] tracking-[-0.792px] underline"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    https://discord.gg/Tsa5qTEVjQ
                  </a>
                </div>

                {/* Telegram */}
                <div className="flex items-center gap-4 py-1">
                  <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#97AFD5]/15 flex-shrink-0">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 10.8L14.51 17.18C14.36 17.62 14.01 17.78 13.64 17.59L11.3 15.7L10.12 17.04C9.96 17.22 9.78 17.3 9.56 17.3C9.35 17.3 9.14 17.22 8.99 17.04L9.3 14.08L5.9 10.68C5.56 10.35 5.72 9.87 6.19 9.81L9.59 9.39L10.97 6.2C11.27 5.55 12.73 5.55 13.03 6.2L14.41 9.39L17.81 9.81C18.28 9.87 18.44 10.35 18.1 10.68L15.37 13.18L16.64 10.8Z"
                        fill="#97AFD5"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://t.me/ProConnectCommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#010D3E] text-lg md:text-[22px] font-normal leading-[31px] tracking-[-0.792px] underline"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Join us on Telegram
                  </a>
                </div>

                {/* Website */}
                <div className="flex items-center gap-4 py-1">
                  <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#97AFD5]/15 flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#97AFD5]" />
                  </div>
                  <a
                    href="https://www.pro--connect.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#010D3E] text-lg md:text-[22px] font-normal leading-[31px] tracking-[-0.792px]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    https://www.pro--connect.com/
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h2
                className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-tight lg:leading-[60px] tracking-[-3.24px] bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Contact Us
              </h2>
              <p
                className="text-[#6F6C90] text-base md:text-lg font-bold tracking-[-0.558px]"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Only the channels listed below are verified and maintained by
                the official ProConnect core team. Any other account or website
                claiming association is not authorized.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="name"
                    className="text-[#1E1E1E] text-base font-normal leading-[140%]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Introduce yourself"
                    className="min-w-[240px] px-4 py-3 rounded-lg border border-[#D9D9D9] bg-white text-base placeholder:text-[#B3B3B3]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="email"
                    className="text-[#1E1E1E] text-base font-normal leading-[140%]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="min-w-[240px] px-4 py-3 rounded-lg border border-[#D9D9D9] bg-white text-base placeholder:text-[#B3B3B3]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="message"
                  className="text-[#1E1E1E] text-base font-normal leading-[140%]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message here"
                  className="min-h-[80px] px-4 py-3 rounded-lg border border-[#D9D9D9] bg-white text-base placeholder:text-[#B3B3B3] resize-none"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-[15px] py-[10px] rounded-[10px] bg-black text-white font-medium text-base tracking-[-0.32px] hover:bg-gray-900 transition-colors self-start"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
