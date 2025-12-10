"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTASection({ airportName = "Airport" }) {
  return (
    <section className=" py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* =========================================
            THE DARK CARD
           ========================================= */}
        <div className="bg-[#1A1A1A] rounded-[40px] px-8 py-12 lg:px-20 lg:py-20 shadow-[0_25px_50px_rgba(0,0,0,0.25)] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">

            {/* --- DECORATION: Subtle Red Glow --- */}
            <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-[#9C0E0F] opacity-20 blur-[100px] pointer-events-none"></div>
            
            {/* --- DECORATION: Diagonal Slash (Desktop) --- */}
            <div className="absolute top-0 right-[25%] h-full w-[2px] bg-white/5 skew-x-[-20deg] hidden lg:block"></div>

            {/* LEFT SIDE: TEXT */}
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                    Contact <span className="text-[#9C0E0F]">Airport Driven</span> Today
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-medium">
                    Experience the difference with our cheap <span className="text-white font-bold">{airportName}</span> taxi services. 
                    Whether it&apos;s a quick taxi to {airportName}, or a smooth transfer, we are your trusted travel partner.
                </p>
            </div>

            {/* RIGHT SIDE: BUTTONS */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
                
                {/* 1. Book Now (Brand Gradient) */}
                <Link href="/book" className="flex-1 lg:flex-none">
                    <button className="w-full lg:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-sm shadow-[0_10px_20px_rgba(156,14,15,0.4)] hover:shadow-red-900/60 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        Book Your Ride <ArrowRight size={18} />
                    </button>
                </Link>

                {/* 2. Contact Support (Outline Dark) */}
                <Link href="/contact" className="flex-1 lg:flex-none">
                    <button className="w-full lg:w-auto px-10 py-4 rounded-full border border-gray-600 bg-transparent text-white font-bold text-sm hover:bg-white hover:text-[#1A1A1A] hover:border-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        <Phone size={18} /> Contact Support
                    </button>
                </Link>

            </div>

        </div>

      </div>
    </section>
  );
}