"use client";

import React from "react";
import { Navigation } from "lucide-react";

export default function PopularTerminalsList({ 
  title = "Locations Served", 
  terminals = [] 
}) {
  
  if (!terminals || terminals.length === 0) return null;

  return (
    <section className="bg-white py-20 px-4 md:px-8 font-sans border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto text-center">
        
        <h3 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-12 tracking-tight">
            Key <span className="text-[#9C0E0F]">Locations</span> We Serve
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {terminals.map((item, index) => (
                <div 
                    key={index}
                    className="group bg-[#F5F5F5] hover:bg-[#1A1A1A] transition-all duration-300 rounded-[15px] p-5 flex items-center gap-4 cursor-default border border-transparent hover:border-[#9C0E0F]"
                >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Navigation size={18} className="text-[#9C0E0F]" />
                    </div>

                    {/* Text */}
                    <span className="text-[#1A1A1A] font-bold text-sm text-left group-hover:text-white transition-colors">
                        {item}
                    </span>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}