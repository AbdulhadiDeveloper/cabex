"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";

export default function ContactCTASection({ airportName = "Airport" }) {
  return (
    <section className="py-24 px-4 md:px-8 font-sans bg-[#EBEBEB]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* =========================================
            MAIN CONTAINER: Rounded Dark Card
           ========================================= */}
        <div className="relative bg-[#1A1A1A] rounded-[50px] shadow-2xl overflow-hidden min-h-[400px] flex items-center">
          
            {/* 1. BACKGROUND DECORATION (Red Slash) */}
            {/* Matches the Hero Section visual exactly */}
            <div className="absolute right-0 top-0 h-full w-[50%] lg:w-[45%] pointer-events-none">
                <Image 
                    src="/images/red-slash.png" 
                    alt="Red Pattern"
                    fill
                    className="object-cover lg:object-fill"
                    style={{ objectPosition: 'right center' }}
                />
            </div>

            {/* 2. BACKGROUND WATERMARK (Subtle Map/Grid) */}
            <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
                 <Image 
                    src="/images/london.jpg" // Reusing your map texture for consistency
                    alt="Map Texture"
                    fill
                    className="object-cover"
                 />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full relative z-20 p-8 lg:p-16 gap-12 lg:gap-0">
                
                {/* =========================================
                    LEFT: CONTENT & ACTIONS
                   ========================================= */}
                <div className="flex flex-col justify-center text-center lg:text-left">
                    
                    <div className="inline-flex items-center gap-2 justify-center lg:justify-start mb-6">
                        <span className="w-10 h-[2px] bg-[#9C0E0F]"></span>
                        <span className="text-[#9C0E0F] font-bold text-xs uppercase tracking-widest">
                            24/7 Availability
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
                        Need a Ride to <br />
                        <span className="text-[#9C0E0F]">{airportName}?</span>
                    </h2>

                    <p className="text-gray-400 text-sm lg:text-[15px] font-medium leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
                        Book your seamless airport transfer now. Whether it’s an urgent booking or a scheduled VIP arrival, we are ready to drive.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        {/* Primary Button - White for high contrast on black */}
                        <Link href="/book">
                            <button className="px-10 py-4 rounded-full bg-white text-[#1A1A1A] font-extrabold text-xs uppercase tracking-widest shadow-lg hover:bg-[#9C0E0F] hover:text-white hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3">
                                Book Your Ride <ArrowRight size={18} />
                            </button>
                        </Link>
                        
                        {/* Secondary Button - Outline */}
                        <Link href="/contact">
                            <button className="px-10 py-4 rounded-full border border-gray-600 text-white font-bold text-xs uppercase tracking-widest hover:border-white transition-colors flex items-center justify-center gap-2">
                                <Phone size={18} /> Contact Support
                            </button>
                        </Link>
                    </div>

                </div>

                {/* =========================================
                    RIGHT: VISUALS (Car Interaction)
                   ========================================= */}
                <div className="relative h-[300px] lg:h-full flex items-end lg:items-center justify-center lg:justify-end pointer-events-none">
                    
                    {/* The Car - Anchored properly */}
                    <div className="relative w-[120%] lg:w-[130%] h-[120%] lg:-mr-20 mt-10 lg:mt-0">
                         <Image 
                            src="/images/carImage.png" 
                            alt="Luxury Fleet"
                            fill
                            className="object-contain object-bottom drop-shadow-2xl"
                         />
                    </div>

                </div>

            </div>

        </div>
      </div>
    </section>
  );
}