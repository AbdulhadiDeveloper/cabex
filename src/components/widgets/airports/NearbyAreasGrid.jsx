"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Navigation, ArrowUpRight } from "lucide-react";

// Default placeholder data if none provided
const DEFAULT_AREAS = [
  "Windsor", "Slough", "Maidenhead", "Ascot", 
  "Bracknell", "Staines", "Egham", "Hounslow",
  "Uxbridge", "Hayes", "West Drayton", "Gerrards Cross"
];

export default function NearbyAreasGrid({ 
  airportName = "Heathrow", 
  areas = DEFAULT_AREAS 
}) {

  return (
    <section className="bg-white py-20 px-4 md:px-8 font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* =========================================
            HEADER
           ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#9C0E0F]"></span>
                    <span className="text-[#9C0E0F] font-bold text-xs uppercase tracking-widest">
                        Local Coverage
                    </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] tracking-tight">
                    Areas Covered Around <span className="text-[#9C0E0F]">{airportName}</span>
                </h2>
                <p className="text-gray-500 mt-4 text-sm font-medium leading-relaxed max-w-xl">
                    We provide prompt taxi services to all surrounding towns, boroughs, and hotels near {airportName}. 
                    Fixed prices for local transfers with zero metered anxiety.
                </p>
            </div>

            <div className="hidden lg:block">
                 <button className="px-6 py-2.5 rounded-full border-2 border-gray-100 text-gray-400 font-bold text-xs uppercase tracking-wide cursor-default hover:border-[#9C0E0F] hover:text-[#9C0E0F] transition-colors">
                    Search your postcode in booking
                 </button>
            </div>
        </div>

        {/* =========================================
            AREAS GRID
           ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            
            {areas.map((area, index) => {
                // Generate slug (e.g. "West Drayton" -> "west-drayton")
                const slug = area.toLowerCase().replace(/ /g, "-");
                
                return (
                    <Link 
                        key={index} 
                        href={`/cover-areas/${slug}`} 
                        className="group"
                    >
                        <div className="relative bg-[#F9F9F9] hover:bg-[#1A1A1A] rounded-[20px] p-5 transition-all duration-300 border border-transparent hover:border-[#9C0E0F] hover:-translate-y-1 hover:shadow-xl flex items-center justify-between overflow-hidden">
                            
                            {/* Left: Icon & Text */}
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-10 h-10 rounded-[12px] bg-white group-hover:bg-[#9C0E0F] flex items-center justify-center text-[#9C0E0F] group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <MapPin size={18}  />
                                </div>
                                <div>
                                    <h4 className="text-[#1A1A1A] group-hover:text-white font-bold text-sm lg:text-[15px] transition-colors">
                                        {area}
                                    </h4>
                                    <span className="text-[10px] text-gray-400 font-medium group-hover:text-gray-500 transition-colors">
                                        Taxi & Transfer
                                    </span>
                                </div>
                            </div>

                            {/* Right: Hover Arrow */}
                            <div className="relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowUpRight size={18} className="text-white" />
                            </div>

                            {/* Decorative Background Icon (Subtle) */}
                            <div className="absolute right-[-10px] bottom-[-10px] text-gray-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                                <Navigation size={60} strokeWidth={0.5} />
                            </div>

                        </div>
                    </Link>
                )
            })}

        </div>

      </div>
    </section>
  );
}