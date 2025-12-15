"use client";

import React from "react";
import { Info, MapPin } from "lucide-react";

export default function LogisticsInfoSection({ 
  heading = "Important Information", 
  content 
}) {
  if (!content) return null;

  return (
    <section className="bg-[#EBEBEB] pb-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Dark Container */}
        <div className="bg-[#1A1A1A] rounded-[35px] p-8 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-10 lg:gap-16 items-start border-l-8 border-[#9C0E0F]">
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <MapPin size={200} className="text-white" strokeWidth={0.5} />
            </div>

            {/* Left: Icon & Label */}
            <div className="flex-shrink-0 flex items-center gap-4">
                <div className="w-16 h-16 rounded-[20px] bg-[#2A2A2A] flex items-center justify-center shadow-lg text-[#9C0E0F]">
                    <Info size={32} />
                </div>
                <div className="lg:hidden">
                    <span className="text-[#9C0E0F] font-bold text-xs uppercase tracking-widest block mb-1">
                        Good to Know
                    </span>
                    <h3 className="text-2xl font-bold text-white">Logistics</h3>
                </div>
            </div>

            {/* Right: Content */}
            <div className="relative z-10 max-w-3xl">
                <span className="hidden lg:block text-[#9C0E0F] font-bold text-xs uppercase tracking-widest mb-3">
                    Meeting Points & Procedures
                </span>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    {heading}
                </h2>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed font-light opacity-90 text-justify lg:text-left">
                    {content}
                </p>
            </div>

        </div>

      </div>
    </section>
  );
}