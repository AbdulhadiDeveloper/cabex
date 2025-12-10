"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Plane } from "lucide-react";

export default function TopDestinationsSection() {
  return (
    <section className=" py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        
        {/* =========================================
            PART 1: MAIN CONTENT CARD (White)
           ========================================= */}
        <div className="bg-white rounded-[35px] p-8 lg:p-12 shadow-xl">
            
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                
                {/* Text Content */}
                <div>
                    <h4 className="text-[#9C0E0F] font-bold uppercase tracking-widest text-xs mb-2">
                        Explore The City
                    </h4>
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
                        Popular <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">Journeys</span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-3 max-w-lg">
                        Discover our most requested luxury transfer routes. From city center to the terminal in absolute comfort.
                    </p>
                </div>

                {/* 'See More' Link */}
                <Link 
                    href="/destinations" 
                    className="flex items-center gap-2 text-[#1A1A1A] font-bold text-sm hover:text-[#9C0E0F] transition-colors group"
                >
                    See More Destinations
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* The Two Main Cards (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* CARD 1: Central London */}
                <div className="group relative rounded-[25px] overflow-hidden shadow-lg h-[350px]">
                    {/* Background Image */}
                    <Image 
                        src="/images/london.jpg" 
                        alt="London City"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    {/* Content (Bottom) */}
                    <div className="absolute bottom-0 left-0 w-full p-8">
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-1">Central London</h3>
                                <div className="flex items-center gap-1 text-gray-300 text-xs font-medium">
                                    <MapPin size={12} className="text-[#9C0E0F]" />
                                    <span>To Heathrow T5</span>
                                </div>
                            </div>
                            
                            {/* Theme Button */}
                            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] flex items-center justify-center text-white shadow-lg hover:-translate-y-1 transition-transform">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* CARD 2: Bath / Historic */}
                <div className="group relative rounded-[25px] overflow-hidden shadow-lg h-[350px]">
                    {/* Background Image */}
                    <Image 
                        src="/images/london.jpg" 
                        alt="Bath City"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    {/* Content (Bottom) */}
                    <div className="absolute bottom-0 left-0 w-full p-8">
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-1">Bath City</h3>
                                <div className="flex items-center gap-1 text-gray-300 text-xs font-medium">
                                    <MapPin size={12} className="text-[#9C0E0F]" />
                                    <span>To Gatwick North</span>
                                </div>
                            </div>
                            
                            {/* Theme Button */}
                            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] flex items-center justify-center text-white shadow-lg hover:-translate-y-1 transition-transform">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* =========================================
            PART 2: BOTTOM STRIP (Dark)
           ========================================= */}
        <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] rounded-[35px] py-10 px-8 lg:px-16 flex flex-col xl:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            
            {/* Watermark Decoration (Right) */}
            <div className="absolute right-[-50px] top-[-50px] opacity-5 pointer-events-none">
                <Plane size={300} strokeWidth={0.5} />
            </div>

            {/* Left Title */}
            <div className="text-center xl:text-left z-10">
                <h3 className="text-2xl font-bold text-white mb-2">We Cover All Major Airports</h3>
                <p className="text-gray-400 text-sm">Fixed prices and reliable pickups from all London terminals.</p>
            </div>

            {/* Right: The 4 Boxes (Grid) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full xl:w-auto z-10">
                {/* Box 1 */}
                <div className="bg-[#151515] hover:bg-[#9C0E0F] transition-colors duration-300 rounded-[15px] p-4 flex flex-col items-center justify-center text-center cursor-pointer group h-[100px] w-full min-w-[140px]">
                    <h4 className="text-white font-bold text-lg">LHR</h4>
                    <span className="text-[10px] text-gray-400 group-hover:text-white/80">Heathrow</span>
                </div>

                {/* Box 2 */}
                <div className="bg-[#151515] hover:bg-[#9C0E0F] transition-colors duration-300 rounded-[15px] p-4 flex flex-col items-center justify-center text-center cursor-pointer group h-[100px] w-full min-w-[140px]">
                    <h4 className="text-white font-bold text-lg">LGW</h4>
                    <span className="text-[10px] text-gray-400 group-hover:text-white/80">Gatwick</span>
                </div>

                {/* Box 3 */}
                <div className="bg-[#151515] hover:bg-[#9C0E0F] transition-colors duration-300 rounded-[15px] p-4 flex flex-col items-center justify-center text-center cursor-pointer group h-[100px] w-full min-w-[140px]">
                    <h4 className="text-white font-bold text-lg">STN</h4>
                    <span className="text-[10px] text-gray-400 group-hover:text-white/80">Stansted</span>
                </div>

                {/* Box 4 */}
                <div className="bg-[#151515] hover:bg-[#9C0E0F] transition-colors duration-300 rounded-[15px] p-4 flex flex-col items-center justify-center text-center cursor-pointer group h-[100px] w-full min-w-[140px]">
                    <h4 className="text-white font-bold text-lg">LTN</h4>
                    <span className="text-[10px] text-gray-400 group-hover:text-white/80">Luton</span>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}