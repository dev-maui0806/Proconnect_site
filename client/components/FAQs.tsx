import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronUp } from "lucide-react";

type FAQCategory = "general" | "ico" | "token" | "investors";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

export default function FAQs() {
  const [activeTab, setActiveTab] = useState<FAQCategory>("general");

  const faqData: FAQData = {
    general: [
      {
        question: "What is ProConnect?",
        answer:
          "ProConnect is a decentralized work and talent ecosystem that connects individuals, freelancers, and companies powered by blockchain technology. It allows users to post projects, hire professionals, and earn rewards through the PCT Token economy.",
      },
      {
        question: "What is the PCT Token?",
        answer:
          "The PCT Token is the native utility token of the ProConnect ecosystem. It powers all transactions on the platform from staking and visibility boosts to payments, governance, and community rewards.",
      },
      {
        question: "Why is ProConnect launching an ICO?",
        answer:
          "The ICO allows early supporters to become part of the ecosystem and fund the development of the main platform, marketing, and AI integration. Participants benefit from early access and discounted token pricing.",
      },
    ],
    ico: [
      {
        question: "When does the ICO start?",
        answer:
          "The ICO launch date will be announced soon. Stay tuned to our official channels for the latest updates.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept major cryptocurrencies including ETH, BTC, and USDT for ICO participation.",
      },
    ],
    token: [
      {
        question: "What is the total token supply?",
        answer:
          "The total supply of PCT tokens is fixed and will be announced in our official whitepaper.",
      },
      {
        question: "How can I use PCT tokens?",
        answer:
          "PCT tokens can be used for platform fees, staking, governance voting, and accessing premium features.",
      },
    ],
    investors: [
      {
        question: "What are the investment tiers?",
        answer:
          "We offer multiple investment tiers with varying benefits. Details will be shared in our investment documentation.",
      },
      {
        question: "Is there a minimum investment?",
        answer:
          "Yes, there is a minimum investment requirement. Please check our ICO guidelines for specific amounts.",
      },
    ],
  };

  const tabs: { id: FAQCategory; label: string }[] = [
    { id: "general", label: "General Questions" },
    { id: "ico", label: "ICO Questions" },
    { id: "token", label: "Token Sales" },
    { id: "investors", label: "Investors" },
  ];

  return (
    <div className="relative min-h-screen py-12 md:py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
          {/* Decorative line and number */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center rounded-full bg-black px-[15px] py-[10px] min-w-[39px]">
              <span className="text-white font-medium text-base tracking-[-0.32px]">
                6
              </span>
            </div>
          </div>

          {/* Tag */}
          <div className="inline-flex items-center justify-center px-[13px] py-[10px] rounded-[10px] border border-black/10">
            <span className="text-black font-medium text-[13px] tracking-[-0.325px]">
              FAQS
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-3xl sm:text-4xl lg:text-[54px] font-bold leading-tight lg:leading-[60px] tracking-[-3.24px] text-center max-w-5xl bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent px-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Learn more about the ProConnect ICO, PCT Token, and how to
            participate. For further inquiries, contact our team.
          </h1>
        </div>

        {/* Tab buttons */}
        <div className="max-w-[857px] mx-auto mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`h-12 px-4 rounded-lg font-medium text-base tracking-[-0.32px] transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-black to-[#001354] text-white"
                    : "border border-black/20 text-[#0F1932] hover:border-black/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="max-w-[857px] mx-auto">
          <Accordion
            type="multiple"
            defaultValue={["item-0", "item-1", "item-2"]}
            className="bg-white"
          >
            {faqData[activeTab].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 shadow-[inset_0_-1px_0_0_#E2E8F0]"
              >
                <AccordionTrigger className="px-4 sm:px-8 py-4 hover:no-underline group">
                  <span
                    className="text-left text-lg sm:text-[22px] font-normal leading-[31px] tracking-[-0.792px] text-[#010D3E]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  {/* <ChevronUp className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=closed]:rotate-180 text-[#0F172A]" /> */}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-8 pb-8">
                  <p
                    className="text-[#6F6C90] text-base sm:text-lg font-bold tracking-[-0.558px]"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
