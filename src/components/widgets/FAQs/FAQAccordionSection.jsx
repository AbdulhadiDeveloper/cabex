"use client"

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqList = [
  {
    question: "What services does Airport Driven offer at London Airports?",
    answer: "We offer a range of premium services including airport transfers, chauffeur-driven car hire for business or leisure, meet-and-greet services, and inter-city transfers to ensure a seamless journey."
  },
  {
    question: "How do I book an airport transfer with Airport Driven for Heathrow Airport?",
    answer: "Booking is simple. Use the 'Book Online' widget at the top of our homepage, select your pickup/drop-off locations, choose your vehicle, and proceed to secure payment. You can also call our 24/7 support line."
  },
  {
    question: "Can I book a chauffeur-driven vehicle for my Heathrow Airport transfer in advance?",
    answer: "Yes, we highly recommend booking in advance. This guarantees availability of your preferred vehicle class and locks in the price, avoiding any last-minute stress."
  },
  {
    question: "What types of vehicles does Airport Driven provide for Airport transfers?",
    answer: "Our fleet includes Saloon cars (Mercedes E-Class), Executive Saloons (Mercedes S-Class), and MPVs (Mercedes V-Class) to accommodate individuals, families, and larger groups with luggage."
  },
  {
    question: "Is Airport Driven available for both pickups and drop-offs at Heathrow Airport?",
    answer: "Absolutely. We cover both arrivals (pickups with flight monitoring) and departures (drop-offs) at all Heathrow terminals, as well as Gatwick, Stansted, Luton, and London City Airport."
  },
  {
    question: "What safety measures does Airport Driven take for Airport transfers?",
    answer: "All our vehicles are regularly inspected and fully insured. Our drivers are licensed professionals who undergo background checks. We also adhere to strict hygiene protocols to ensure a safe environment."
  },
  {
    question: "Are the Airport Driven chauffeurs knowledgeable about the routes to and from Heathrow Airport?",
    answer: "Yes, our chauffeurs are highly experienced local experts. They utilize real-time traffic monitoring to select the most efficient routes, ensuring you arrive on time."
  },
  {
    question: "What amenities are available in the vehicles?",
    answer: "Our luxury vehicles come equipped with complimentary Wi-Fi, bottled water, phone chargers, and daily newspapers to make your journey comfortable and productive."
  },
  {
    question: "Do you provide a meet-and-greet service at London Airports?",
    answer: "Yes, for a small additional fee, our driver will meet you inside the arrivals hall with a name board, assist with your luggage, and escort you to the vehicle."
  },
  {
    question: "Are there additional charges for waiting time at Airport for my pickup?",
    answer: "We offer a complimentary waiting time (usually 45 minutes) after your flight lands. Charges may apply if the waiting time exceeds this period, but we monitor flights to adjust pickup times automatically."
  }
];

export default function FAQAccordionSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#EBEBEB] pb-36 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="max-w-5xl mx-auto flex flex-col">
          {faqList.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-[#181A1F4D]" // Matches the specific grey line color
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-5 lg:py-6 flex items-center justify-between text-left group focus:outline-none"
              >
                {/* Question Text */}
                <span className="text-[#181A1F] text-[15px] lg:text-[16px] font-medium leading-normal group-hover:text-[#900c0c] transition-colors pr-6">
                  {item.question}
                </span>
                
                {/* Chevron Icon */}
                <ChevronDown 
                  size={20} 
                  className={`text-[#333] shrink-0 transition-transform duration-300 ease-in-out ${activeIndex === index ? "rotate-180 text-[#900c0c]" : ""}`} 
                />
              </button>

              {/* Answer Dropdown */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}