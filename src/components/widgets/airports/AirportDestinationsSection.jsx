"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Plane } from "lucide-react";

// Default Airport Codes for the Bottom Strip
const DEFAULT_AIRPORTS = [
  { code: "LHR", name: "Heathrow", slug: "heathrow" },
  { code: "LGW", name: "Gatwick", slug: "gatwick" },
  { code: "STN", name: "Stansted", slug: "stansted" },
  { code: "LTN", name: "Luton", slug: "luton" },
];

export default function AirportDestinationsSection({ 
  title = "Popular Journeys",
  subtitle = "Explore The City",
  description = "Discover our most requested luxury transfer routes. From city center to the terminal in absolute comfort.",
  destinations = [], // Array of { title, route, image, slug }
  otherAirports = DEFAULT_AIRPORTS
}) {

  // Fallback if no destinations provided
  if (!destinations || destinations.length === 0) return null;

  return (
    <section className=" py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        
        {/* =========================================
            PART 1: MAIN CONTENT CARD (Dynamic)
           ========================================= */}
        <div className=" rounded-[35px] p-8 lg:p-12 shadow-xl">
            
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                
                <div>
                    <h4 className="text-[#9C0E0F] font-bold uppercase tracking-widest text-xs mb-2">
                        {subtitle}
                    </h4>
                    {/* Render Title with last word colored */}
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
                        {title.split(" ").slice(0, -1).join(" ")} <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">{title.split(" ").slice(-1)}</span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-3 max-w-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                <Link 
                    href="/destinations" 
                    className="flex items-center gap-2 text-[#1A1A1A] font-bold text-sm hover:text-[#9C0E0F] transition-colors group"
                >
                    See All Destinations
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Dynamic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {destinations.map((dest, index) => (
                    <Link 
                        key={index}
                        href={`/destinations/${dest.slug}`} 
                        className="group relative rounded-[25px] overflow-hidden shadow-lg h-[350px] block"
                    >
                        {/* Background Image */}
                        <Image 
                            src={dest.image} 
                            alt={dest.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        {/* Content (Bottom) */}
                        <div className="absolute bottom-0 left-0 w-full p-8">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-white text-2xl font-bold mb-1">{dest.title}</h3>
                                    <div className="flex items-center gap-1 text-gray-300 text-xs font-medium">
                                        <MapPin size={12} className="text-[#9C0E0F]" />
                                        <span>{dest.route}</span>
                                    </div>
                                </div>
                                
                                {/* Theme Button */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] flex items-center justify-center text-white shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>

        {/* =========================================
            PART 2: AIRPORT NAVIGATOR (Static/Dynamic List)
           ========================================= */}
        <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] rounded-[35px] py-10 px-8 lg:px-16 flex flex-col xl:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            
            {/* Watermark Decoration */}
            <div className="absolute right-[-50px] top-[-50px] opacity-5 pointer-events-none">
                <Plane size={300} strokeWidth={0.5} />
            </div>

            <div className="text-center xl:text-left z-10">
                <h3 className="text-2xl font-bold text-white mb-2">We Cover All Major Airports</h3>
                <p className="text-gray-400 text-sm">Fixed prices and reliable pickups from all London terminals.</p>
            </div>

            {/* Airport Chips */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full xl:w-auto z-10">
                {otherAirports.map((apt, idx) => (
                    <Link 
                        key={idx} 
                        href={`/airports/${apt.slug}`}
                        className=" bg-[#151515] hover:bg-[#9C0E0F] transition-colors duration-300 rounded-[15px] p-4 flex flex-col items-center justify-center text-center cursor-pointer group h-[100px] w-full min-w-[140px]"
                    >
                        <h4 className="text-white font-bold text-lg">{apt.code}</h4>
                        <span className="text-[10px] text-gray-400 group-hover:text-white/80">{apt.name}</span>
                    </Link>
                ))}
            </div>

        </div>

      </div>
    </section>
  );
}