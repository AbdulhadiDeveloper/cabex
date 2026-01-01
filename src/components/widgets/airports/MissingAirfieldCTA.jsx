"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export default function MissingAirfieldCTA() {
  return (
    <section className="w-full pb-20 pt-10 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* =========================================
            THE CTA CARD (Dark Theme)
           ========================================= */}
        <div className="relative bg-[#1A1A1A] rounded-[40px] p-8 lg:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 group">
            
            {/* 1. Background Decorations */}
            {/* Subtle Red Glow Top Left */}
            <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-[#9C0E0F] opacity-[0.15] blur-[100px] pointer-events-none rounded-full"></div>
            {/* Subtle Red Glow Bottom Right */}
            <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-[#9C0E0F] opacity-[0.1] blur-[80px] pointer-events-none rounded-full"></div>
            {/* Diagonal Slash Line Pattern */}
            <div className="absolute top-0 right-[30%] w-[2px] h-full bg-white/5 skew-x-[-20deg] hidden lg:block"></div>

            {/* =========================================
                LEFT SIDE: CONTENT
               ========================================= */}
            <div className="relative z-10 flex-1 text-center lg:text-left">
                
                {/* Floating Icon Pill */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                    <MapPin size={14} className="text-[#9C0E0F]" fill="currentColor" />
                    <span className="text-gray-300 text-[11px] font-bold uppercase tracking-widest">
                        Custom Locations
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Can&apos;t Find <span className="text-[#9C0E0F]">Your Airfield?</span>
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-xl font-light">
                    We service over <span className="text-white font-bold">1,000+ smaller airfields and private strips</span> across the UK. 
                    If your destination isn&apos;t listed, don&lsquo;t worry. Our bespoke team is ready to arrange a premium transfer tailored to your specific flight plan.
                </p>
            </div>

            {/* =========================================
                RIGHT SIDE: ACTIONS
               ========================================= */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                
                {/* 1. Request Custom Quote (Brand Gradient) */}
                <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-sm shadow-[0_10px_30px_rgba(156,14,15,0.4)] hover:shadow-red-900/60 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                        Request Custom Quote <ArrowRight size={18} />
                    </button>
                </Link>

                {/* 2. Call Support (Outline) */}
                <a href="tel:+442080504099" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-700 bg-transparent text-gray-300 font-bold text-sm hover:bg-white hover:text-[#1A1A1A] hover:border-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group/btn">
                        <Phone size={18} className="group-hover/btn:text-[#9C0E0F] transition-colors" /> 
                        Call Support
                    </button>
                </a>

            </div>

        </div>
      </div>
    </section>
  );
}