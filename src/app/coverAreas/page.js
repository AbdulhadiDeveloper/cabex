import React from "react";
import Link from "next/link";
import { Plane, MapPin, ArrowRight, Phone } from "lucide-react";

// Components
import DynamicHero from "@/components/widgets/airports/DynamicHero";
import AlphabeticalAreasSection from "@/components/widgets/coverAreas(Areas)/AlphabeticalAreasSection.jsx"; // The A-Z Grid


// IMPORT DATA HERE
import { ukAirports } from "@/data/ukAirports"; 

export const metadata = {
  title: "Cover Area | Airport Driven",
  description: "Comprehensive coverage of over 40 major airports and private terminals across the UK.",
};

export default function CoverAreaPage() {
  return (
    <main className="w-full bg-[#EBEBEB] min-h-screen">
      
     <DynamicHero 
        title={
            <>
                Areas We <br />
                <span className="text-[#9C0E0F]">Cover</span>
            </>
        }
        description="From Major Terminals to Private Airfields, We Ensure You Arrive in Style Anywhere in the UK."
      />

      {/* 2. MAIN CONTENT AREA */}
      <section className="py-20 px-4 md:px-8 font-sans">
        <div className="max-w-[1400px] mx-auto">
            
            {/* Intro Block */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                    Extensive <span className="text-[#9C0E0F]">UK Coverage</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Airport Driven provides reliable, fixed-price transfers to and from over 40 commercial and private airports across the United Kingdom.
                </p>
            </div>

            {/* Loop through Categories */}
            <div className="flex flex-col gap-16">
                {ukAirports.map((group, index) => (
                    <div key={index}>
                        
                        {/* Category Title */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[3px] bg-[#9C0E0F] w-8"></div>
                            <h3 className="text-2xl font-bold text-[#1A1A1A] uppercase tracking-wide">
                                {group.category}
                            </h3>
                            <div className="h-[2px] bg-gray-300 flex-1"></div>
                        </div>

                        {/* Buttons Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.airports.map((airport, idx) => (
                                <Link 
                                    key={idx} 
                                    href={`/coverAreas/${airport.slug}`}
                                    className="group"
                                >
                                    <div className="bg-white hover:bg-gradient-to-r hover:from-[#9C0E0F] hover:to-[#360505] border border-gray-200 hover:border-transparent rounded-[20px] p-6 shadow-sm hover:shadow-[0_10px_30px_rgba(156,14,15,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-between">
                                        
                                        {/* Left: Icon + Text */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#F5F5F5] group-hover:bg-white/10 flex items-center justify-center transition-colors">
                                                <Plane 
                                                    size={18} 
                                                    className="text-[#9C0E0F] group-hover:text-white transition-colors" 
                                                    fill="currentColor"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-[#1A1A1A] group-hover:text-white font-bold text-sm lg:text-[15px] transition-colors">
                                                    {/* Display Name without code for cleaner look */}
                                                    {airport.name.includes("(") ? airport.name.split("(")[0] : airport.name}
                                                </h4>
                                                {/* Code Display */}
                                                {airport.name.includes("(") && (
                                                    <span className="text-[10px] text-gray-600 group-hover:text-gray-300 font-medium block mt-0.5">
                                                        Code: {airport.name.split("(")[1].replace(")", "")}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right: Arrow */}
                                        <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowRight size={20} className="text-white" />
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

        </div>
      </section>


      {/* 2. ALPHABETICAL AREAS GRID (A-Z) */}
      <AlphabeticalAreasSection />


      {/* 3. MAP DECORATION */}
      <section className="w-full pb-20 pt-10 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* =========================================
            THE CTA CARD
           ========================================= */}
        <div className="relative bg-[#1A1A1A] rounded-[40px] p-8 lg:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 group">
            
            {/* 1. Background Decoration (Subtle Red Glow) */}
            <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-[#9C0E0F] opacity-[0.15] blur-[100px] pointer-events-none rounded-full"></div>
            <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-[#9C0E0F] opacity-[0.1] blur-[80px] pointer-events-none rounded-full"></div>

            {/* 2. Background Pattern (Diagonal Slash Line - Theme Consistent) */}
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
                    If your destination isn&apos;t listed&lsquo; don&apos;t worry. Our bespoke team is ready to arrange a premium transfer tailored to your specific flight plan.
                </p>
            </div>

            {/* =========================================
                RIGHT SIDE: ACTIONS
               ========================================= */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                
                {/* Primary Button (Gradient) */}
                <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-sm shadow-[0_10px_30px_rgba(156,14,15,0.4)] hover:shadow-red-900/60 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                        Request Custom Quote <ArrowRight size={18} />
                    </button>
                </Link>

                {/* Secondary Button (Outline) */}
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

    

    </main>
  );
}