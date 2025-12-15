"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function AreaAttractionsGrid({ 
  title = "Must Visit Locations", 
  subtitle = "Explore Nearby", 
  attractions = [] 
}) {

  // Safety check
  if (!attractions || attractions.length === 0) return null;

  return (
    <section className="bg-white py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* =========================================
            HEADER
           ========================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-gray-100 pb-8">
            
            {/* Title Block */}
            <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-[3px] bg-[#9C0E0F] rounded-full"></div>
                    <span className="text-[#9C0E0F] font-bold text-xs uppercase tracking-widest">
                        {subtitle}
                    </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
                    {title}
                </h2>
            </div>
            
            {/* Right Side Text */}
            <p className="text-gray-500 text-sm max-w-sm text-left md:text-right font-medium leading-relaxed">
                Our chauffeurs know these routes perfectly. 
                Sit back and enjoy the journey to these iconic spots in style.
            </p>
        </div>

        {/* =========================================
            GRID CARDS
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {attractions.map((place, index) => (
                <div 
                    key={index} 
                    className="group relative h-[450px] rounded-[40px] overflow-hidden cursor-pointer shadow-lg border border-gray-100 bg-black"
                >
                    
                    {/* A. Background Image (Zoom Effect) */}
                    <div className="absolute inset-0">
                        <Image 
                            src={place.image} 
                            alt={place.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                         {/* Dark Overlay Gradient (Top to Bottom) */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A] opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                        {/* Hover Tint */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                    </div>

                    {/* B. Floating Tag (Top Right) */}
                    {place.category && (
                         <div className="absolute top-6 right-6 z-20">
                            <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                {place.category}
                            </span>
                        </div>
                    )}

                    {/* C. Bottom Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        
                        {/* Distance Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-[#9C0E0F] px-3 py-1 rounded-md text-white text-[10px] font-bold mb-3 shadow-md">
                            <MapPin size={12} fill="currentColor" />
                            {place.distance || "Nearby"}
                        </div>

                        {/* Title & Arrow */}
                        <div className="flex items-end justify-between gap-2">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                                {place.title}
                            </h3>
                            
                            {/* Arrow Button */}
                            <div className="w-12 h-12 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#9C0E0F] hover:text-white shadow-xl">
                                <ArrowRight size={20} />
                            </div>
                        </div>

                        {/* Description Line (Fade In) */}
                        <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                             <p className="text-gray-300 text-xs mt-4 leading-relaxed font-light opacity-0 group-hover:opacity-100 delay-100 border-t border-white/20 pt-4">
                                {place.desc}
                            </p>
                        </div>
                       
                    </div>

                </div>
            ))}

        </div>

      </div>
    </section>
  );
}