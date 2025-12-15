"use client";

import React from "react";
import Image from "next/image";
import { Navigation, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AreaSpotlightSection({ 
  heading = "Explore the Area", 
  description, 
  image, 
  locationLabel = "Area Map" 
}) {
  return (
    <section className="bg-white py-24 px-4 md:px-8 font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* =========================================
            LEFT SIDE: IMAGE / MAP CONTAINER
           ========================================= */}
        <div className="relative h-[400px] lg:h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white order-2 lg:order-1 group">
            
            {/* Main Image */}
            <Image 
                src={image} 
                alt="Area Spotlight" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

            {/* Floating Badge (Bottom Left) */}
            <div className="absolute bottom-8 left-8 bg-white px-5 py-3 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center gap-3 z-10 animate-fadeIn">
                <div className="bg-[#9C0E0F]/10 p-2 rounded-full">
                    <Navigation size={18} className="text-[#9C0E0F]" />
                </div>
                <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Location</p>
                    <p className="text-sm font-bold text-[#1A1A1A] leading-none">{locationLabel}</p>
                </div>
            </div>

        </div>

        {/* =========================================
            RIGHT SIDE: TEXT CONTENT
           ========================================= */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
            
            {/* Decorative Line */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-[#9C0E0F]"></div>
                <span className="text-[#9C0E0F] font-bold text-xs uppercase tracking-widest">
                    Local Insights
                </span>
            </div>
            
            {/* Headings */}
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight tracking-tight">
                {heading}
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-[1.8] mb-10 font-medium text-justify lg:text-left">
                {description}
            </p>

            {/* Feature Checklist (Hardcoded highlights relevant to transport) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {["Local Chauffeurs", "Fixed Route Pricing", "Luggage Assistance", "Zero Wait Time"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-[#9C0E0F] shrink-0" fill="#fdecec" />
                        <span className="text-[#1A1A1A] font-bold text-sm">{item}</span>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div>
                <Link href="/contact">
                    <button className="px-8 py-3.5 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold text-xs uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all flex items-center gap-2 group">
                        Get Custom Quote 
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </div>

        </div>

      </div>
    </section>
  );
}