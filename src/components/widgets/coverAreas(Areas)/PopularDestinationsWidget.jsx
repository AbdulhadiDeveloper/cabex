"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function PopularDestinationsWidget({ 
  title,       // e.g. "Routes from Heathrow Airport"
  subtitle,    // e.g. "Where our clients go"
  description, // e.g. "Explore the most popular..."
  destinations = [], // Array of destination objects
  ctaText = "See All Routes",
  ctaLink = "/book"  // e.g. "/book"
}) {
  
  // Guard Clause: Don't render if no destinations provided
  if (!destinations || destinations.length === 0) return null;

  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        
        {/* =========================================
            MAIN CONTENT CARD (White Panel)
           ========================================= */}
        <div className="bg-white rounded-[35px] p-8 lg:p-12 shadow-xl border border-gray-100">
            
            {/* --- HEADER ROW --- */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 border-b border-gray-100 pb-8">
                
                {/* Left: Headings */}
                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-8 h-[2px] bg-[#9C0E0F]"></div>
                        <span className="text-[#9C0E0F] font-bold text-xs uppercase tracking-widest">
                            {subtitle}
                        </span>
                    </div>
                    {/* Render Title */}
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Right: Paragraph + CTA */}
                <div className="flex flex-col items-start lg:items-end text-left lg:text-right max-w-lg">
                    <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">
                        {description}
                    </p>
                    
                    {/* Link Button */}
                    <Link href={ctaLink}>
                        <button className="group flex items-center gap-3 text-[#1A1A1A] font-bold text-sm hover:text-[#9C0E0F] transition-colors">
                            {ctaText}
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#9C0E0F] transition-colors duration-300">
                                <ArrowRight size={18} className="text-gray-600 group-hover:text-white transition-colors" />
                            </div>
                        </button>
                    </Link>
                </div>

            </div>

            {/* --- CARDS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {destinations.map((item, index) => (
                    // We link to /book as default action for these route cards
                    <Link href="/book" key={index} className="group">
                        <div className="flex flex-col gap-5">
                            
                            {/* 1. Image Container */}
                            <div className="relative w-full h-[280px] rounded-[30px] overflow-hidden shadow-lg border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                                
                                {/* Price Badge (If price exists in data) */}
                                {item.price && (
                                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md border border-white/50">
                                        <span className="text-xs font-extrabold text-[#1A1A1A] uppercase tracking-wide">
                                            {item.price}
                                        </span>
                                    </div>
                                )}

                                {/* Main Image */}
                                <Image 
                                    src={item.image} 
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300"></div>

                                {/* Floating Action Button (Inside Image, Bottom Right) */}
                                <div className="absolute bottom-4 right-4 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                    <div className="w-12 h-12 rounded-full bg-[#9C0E0F] flex items-center justify-center text-white shadow-lg">
                                        <ArrowRight size={22} />
                                    </div>
                                </div>
                            </div>

                            {/* 2. Text Content */}
                            <div className="px-2">
                                <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#9C0E0F] transition-colors mb-2">
                                    {item.title}
                                </h3>
                                
                                {/* Info Line */}
                                <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                                    {/* Distance */}
                                    {item.distance && (
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} className="text-[#9C0E0F]" />
                                            <span>{item.distance}</span>
                                        </div>
                                    )}
                                    
                                    {/* Divider Dot */}
                                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                    
                                    <span className="uppercase tracking-wider text-[10px]">Luxury Transfer</span>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}

            </div>

        </div>

      </div>
    </section>
  );
}