"use client";

import React from "react";
import { 
  CalendarX, 
  ShieldCheck, 
  Clock, 
  Briefcase, 
  CalendarRange, 
  Headset,
  MapPin,
  CarFront,
  CreditCard,
  Smile
} from "lucide-react";

// =========================================
// INTERNAL DATA (Defined here instead of imported)
// =========================================

const HIGHLIGHTS_DATA = [
  {
    icon: CalendarX,
    title: "Free cancellations",
    desc: "Plans change? Easily cancel for a full refund up to 24h before."
  },
  {
    icon: ShieldCheck,
    title: "Fully licensed providers",
    desc: "Transparent, fixed price rides with vetted, quality drivers."
  },
  {
    icon: Clock,
    title: "Free wait time included",
    desc: "Up to 15 minutes for standard, 45 minutes at airports."
  },
  {
    icon: Briefcase,
    title: "Luggage items & Multi-stops",
    desc: "Easy to add diverse luggage items & multiple stops."
  },
  {
    icon: CalendarRange,
    title: "Book up to 12 months ahead",
    desc: "Best prices for trips booked up to 12 months in advance."
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "By email, live chat or phone, we're here to help."
  }
];

const STEPS_DATA = [
  {
    icon: MapPin,
    title: "Pick your location and time",
    desc: "Pick a destination and date and we'll search reliable providers to find you the best value."
  },
  {
    icon: CarFront,
    title: "Choose your ride",
    desc: "Choose from a range of cars to suit your needs. All licensed, high quality drivers."
  },
  {
    icon: CreditCard,
    title: "Pay securely",
    desc: "Pay for your fixed price ride securely through our website or app."
  },
  {
    icon: Smile,
    title: "Ride with confidence",
    desc: "Drivers and their cab providers independently rated by customers."
  }
];

// =========================================
// COMPONENT
// =========================================

export default function StepsAndHighlightsSection({ 
  airportName = "London Airport" // Keep this prop for dynamic text
}) {
  
  return (
    <section className="font-sans">
      
      {/* =========================================
          PART 1: HIGHLIGHTS (White Background)
         ========================================= */}
      <div className="bg-white py-16 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
            {HIGHLIGHTS_DATA.map((item, index) => (
              <div key={index} className="flex gap-5 items-start">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-[12px] bg-[#9C0E0F]/10 flex items-center justify-center shrink-0">
                  {/* Directly render the icon component from data */}
                  <item.icon size={22} className="text-[#9C0E0F]" strokeWidth={1.8} />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-[#1A1A1A] font-bold text-sm lg:text-[15px]">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs lg:text-[13px] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          PART 2: HOW IT WORKS (Grey Background)
         ========================================= */}
      <div className="bg-[#EBEBEB] py-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] mb-3">
              How <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">it works</span>
            </h2>
            <p className="text-gray-600 text-sm font-medium max-w-2xl mx-auto">
              Find and book a cheap <span className="text-[#9C0E0F] font-bold">{airportName}</span> taxi with our <span className="font-bold text-[#1A1A1A]">online transfer comparison service</span>
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* The Horizontal Line (Desktop Only) */}
            <div className="absolute top-[40px] left-[12%] right-[12%] h-[2px] bg-gray-300 hidden lg:block z-0"></div>

            {STEPS_DATA.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10 group">
                
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                  <step.icon size={32} className="text-[#9C0E0F]" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <h4 className="text-[#1A1A1A] font-bold text-lg mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}