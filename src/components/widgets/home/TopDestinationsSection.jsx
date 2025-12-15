"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

// Default Data
const DEFAULT_DESTINATIONS = [
  {
    id: 1,
    title: "Central London",
    distance: "15 miles from LHR",
    image: "/images/london.jpg",
    slug: "central-london"
  },
  {
    id: 2,
    title: "Cambridge University",
    distance: "60 miles from STN",
    image: "/images/london.jpg",
    slug: "cambridge"
  },
  {
    id: 3,
    title: "Brighton Pier",
    distance: "28 miles from LGW",
    image: "/images/london.jpg",
    slug: "brighton"
  }
];

    export default function TopDestinationsSection({ 
    title = "Popular Journeys",
    subtitle = "Explore The City",
    description = "Discover the most frequented locations by our clients. From historic landmarks to business hubs, travel in comfort and style.",
    ctaText = "See More",
    ctaLink = "/destinations",
    destinations = DEFAULT_DESTINATIONS 
    }) {
  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        
        {/* =========================================
            PART 1: MAIN CONTENT CARD
           ========================================= */}
        <div className="bg-white rounded-[35px] p-8 lg:p-12 shadow-xl">
            
            {/* --- HEADER ROW --- */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 border-b border-gray-100 pb-8">
                
                {/* Left: Headings */}
                <div className="max-w-md">
                    <span className="text-[#9C0E0F] font-bold text-xs uppercase tracking-widest block mb-2">
                        {subtitle}
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Right: Paragraph + CTA */}
                <div className="flex flex-col items-start lg:items-end text-left lg:text-right max-w-lg">
                    <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">
                        {description}
                    </p>
                    
                    {/* 'See More' Link Button */}
                    <Link href={ctaLink}>
                        <button className="group flex items-center gap-2 text-[#1A1A1A] font-bold text-sm hover:text-[#9C0E0F] transition-colors">
                            {ctaText}
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#9C0E0F] transition-colors">
                                <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                            </div>
                        </button>
                    </Link>
                </div>

            </div>

            {/* --- CARDS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {destinations.map((item, index) => (
                    // Inside the return .map() loop...

    <Link href={`/destinations/${item.slug}`} key={index} className="group">
        <div className="flex flex-col"> {/* Removed gap-4 to handle spacing manually via margin top */}
            
            {/* Image Container (Keep existing) */}
            <div className="relative w-full h-[280px] rounded-[25px] overflow-hidden shadow-md">
                <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Floating Arrow Button */}
                <div className="absolute bottom-4 right-4 z-20">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#9C0E0F] shadow-lg group-hover:bg-[#9C0E0F] group-hover:text-white transition-all transform group-hover:-translate-y-1">
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>

            {/* --- INSERT UPDATED TEXT SECTION HERE --- */}
            <div className="mt-5 px-1">
                <h3 className="text-[19px] font-bold text-[#1A1A1A] leading-none mb-2.5 group-hover:text-[#9C0E0F] transition-colors">
                    {item.title}
                </h3>
                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#9C0E0F] shrink-0" strokeWidth={2.5} />
                    <span className="text-[13px] font-medium text-slate-500 tracking-wide">
                        {item.distance}
                    </span>
                </div>
            </div>

        </div>
    </Link>

// ...
                ))}

            </div>

        </div>

      </div>
    </section>
  );
}