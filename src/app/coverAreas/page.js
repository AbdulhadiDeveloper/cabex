import React from "react";
import Link from "next/link";
import { Plane, MapPin, ArrowRight } from "lucide-react";

// Components
import InnerHero from '@/components/shared/ui/SamllHero'
import NewsletterSection from "@/components/shared/ui/NewsletterSection";

// IMPORT DATA HERE
import { ukAirports } from "@/data/ukAirports"; 

export const metadata = {
  title: "Cover Area | Airport Driven",
  description: "Comprehensive coverage of over 40 major airports and private terminals across the UK.",
};

export default function CoverAreaPage() {
  return (
    <main className="w-full bg-[#EBEBEB] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <InnerHero>
        <div className="text-center">
            <h1 className="text-5xl lg:text-[5.5rem] font-bold tracking-tight capitalize mb-4">
                <span className="text-white">Areas We </span>
                <span className="text-[#9C0E0F]">Cover</span>
            </h1>
            <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
                From Major Terminals to Private Airfields, We Ensure You Arrive in Style Anywhere in the UK.
            </p>
        </div>
      </InnerHero>

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
                                    href={`/airports/${airport.slug}`}
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
                                                    <span className="text-[10px] text-gray-400 group-hover:text-gray-300 font-medium block mt-0.5">
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

      {/* 3. MAP DECORATION */}
      <section className="w-full h-[400px] relative mt-10">
         <div className="absolute inset-0 bg-[#1A1A1A] flex flex-col items-center justify-center text-center px-4">
            <MapPin size={48} className="text-[#9C0E0F] mb-4" fill="currentColor" />
            <h3 className="text-white text-3xl font-bold mb-2">Can&apos;t Find Your Airfield?</h3>
            <p className="text-gray-400 mb-8 max-w-md">
                We service over 1,000+ smaller airfields and private strips. 
                Contact us directly for bespoke travel arrangements.
            </p>
            <Link href="/contact">
                <button className="px-10 py-3.5 rounded-full border border-white text-white font-bold text-sm hover:bg-white hover:text-black transition-all hover:scale-105">
                    Contact Support
                </button>
            </Link>
         </div>
      </section>

      <div className="relative">
        <NewsletterSection />
      </div>

    </main>
  );
}