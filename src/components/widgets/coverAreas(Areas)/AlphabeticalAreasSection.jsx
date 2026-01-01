"use client";

import React from "react";
import Link from "next/link";
// 1. IMPORT DATA
import { coveredAreasData } from "@/data/coveredAreas";

export default function AlphabeticalAreasSection() {
  return (
    <section className="bg-[#F8F8F8] py-20 px-4 md:px-8 font-sans border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Areas We <span className="text-[#9C0E0F]">Cover</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto font-medium">
            Browse our complete directory of service areas. We provide luxury transport to and from every major borough and town listed below.
          </p>
        </div>

        {/* ALPHABETICAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
          
          {coveredAreasData.map((group) => (
            <div key={group.letter} className="flex flex-col gap-6">
              
              {/* THE BIG LETTER HEADER */}
              <div className="flex items-center gap-4">
                 <h3 className="text-4xl font-black text-[#1A1A1A]/60 select-none">
                    {group.letter}
                 </h3>
                 <div className="h-[2px] bg-[#9C0E0F] w-full opacity-20 rounded-full"></div>
              </div>

              {/* AREA LIST (Buttons) */}
              <div className="flex flex-col gap-3">
                {group.items.map((item, idx) => (
                    
                    <Link 
                        key={idx} 
                        // USE THE SPECIFIC SLUG FROM DATA
                        href={`/cover-areas/${item.slug}`}
                        className="group"
                    >
                        <div className="bg-white border border-gray-200 rounded-[12px] px-5 py-3 text-center transition-all duration-300 shadow-sm hover:shadow-[0_10px_20px_rgba(156,14,15,0.2)] hover:bg-gradient-to-r hover:from-[#9C0E0F] hover:to-[#360505] hover:border-transparent transform hover:-translate-y-1">
                            
                            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide group-hover:text-white transition-colors">
                                {item.label}
                            </span>

                        </div>
                    </Link>

                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}