"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What services does Airport Driven offer at London Airports?",
    answer: "We provide comprehensive luxury transportation services including airport transfers, corporate chauffeur services, and private sightseeing tours across all major London airports."
  },
  {
    question: "How do I book an airport transfer with Airport Driven for Heathrow Airport?",
    answer: "You can book directly through our online booking form at the top of this page, via our mobile app, or by calling our 24/7 customer support line."
  },
  {
    question: "Can I book a chauffeur-driven vehicle for my Heathrow Airport transfer in advance?",
    answer: "Yes, we highly recommend booking in advance to ensure availability of your preferred vehicle class and to secure the best rates for your journey."
  },
  {
    question: "What services does Airport Driven offer at London Airports?",
    answer: "In addition to standard transfers, we offer Meet & Greet services, flight monitoring to adjust pickup times, and child seats upon request."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 1. Header */}
        <div className="mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight uppercase">
            FAQ
          </h2>
        </div>

        {/* 2. Accordion List */}
        <div className="flex flex-col">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-[#D1D1D1]" // Matches the thin grey line in reference
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
              >
                {/* Question Text */}
                <span className="text-[#1A1A1A] text-sm lg:text-[15px] font-medium group-hover:text-[#900c0c] transition-colors pr-8">
                  {item.question}
                </span>
                
                {/* Chevron Icon */}
                <ChevronDown 
                  size={18} 
                  className={`text-[#1A1A1A] shrink-0 transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-[#900c0c]" : ""}`} 
                />
              </button>

              {/* Expandable Answer Area */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
              >
                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed font-normal">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}