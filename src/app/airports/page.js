import React from "react";
import Link from "next/link";
import { Plane, ArrowRight, MapPin, Search } from "lucide-react";

// 1. DATA IMPORT
import { ukAirports } from "@/data/ukAirports"; 

// 2. COMPONENT IMPORTS
import DynamicHero from "@/components/widgets/airports/DynamicHero";
import Footer from "@/components/layout/Footer";
import MissingAirfieldCTA from "@/components/widgets/airports/MissingAirfieldCTA"; 

export const metadata = {
  title: "Airport Transfer Directory | Airport Driven",
  description: "Select your airport to view meeting points, terminal information, and fixed-price quotes.",
};

export default function AirportsDirectoryPage() {
  
  // Separate London from the rest for a Featured Layout
  const londonAirports = ukAirports.find(cat => cat.category === "London Major Terminals")?.airports || [];
  const otherRegions = ukAirports.filter(cat => cat.category !== "London Major Terminals");

  // Dynamic Hero Title
  const heroTitle = (
    <>
      UK Airport <br />
      <span className="text-[#9C0E0F]">Transfers</span>
    </>
  );

  return (
    <main className="w-full bg-[#F5F5F5] min-h-screen font-sans">
      
      {/* =========================================
          1. DYNAMIC HERO
         ========================================= */}
      <DynamicHero 
        title={heroTitle}
        description="Professional chauffeur services to every major terminal. Select your airport to start your journey."
      />

      {/* =========================================
          2. FEATURED HUBS (LONDON)
          Distinct Design: Dark Cards
         ========================================= */}
      <section className="py-16 px-4 md:px-8 -mt-20 relative z-30">
        <div className="max-w-[1400px] mx-auto">
            
            <div className="flex items-center gap-3 mb-6 pl-2">
                <div className="w-1.5 h-8 bg-[#9C0E0F]"></div>
                <h3 className="text-2xl text-[#9C0E0F] font-bold tracking-wide shadow-black drop-shadow-md">
                    Major London Terminals
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {londonAirports.map((airport, idx) => (
                    <Link key={idx} href={`/airports/${airport.slug}`} className="group">
                        <div className="bg-[#1A1A1A] hover:bg-white rounded-[25px] p-8 border border-gray-800 hover:border-gray-200 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col h-[200px] justify-between relative overflow-hidden">
                            
                            {/* Decorative Icon BG */}
                            <div className="absolute right-[-20px] top-[-20px] text-[#2A2A2A] group-hover:text-gray-100 transition-colors duration-300">
                                <Plane size={150} strokeWidth={0.5} />
                            </div>

                            {/* Top Row */}
                            <div className="flex justify-between items-start relative z-10">
                                <span className="bg-[#9C0E0F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Primary Hub
                                </span>
                                <ArrowRight size={24} className="text-[#9C0E0F] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>

                            {/* Bottom Content */}
                            <div className="relative z-10">
                                {airport.name.includes("(") && (
                                    <span className="text-2xl font-black text-[#888] group-hover:text-[#9C0E0F]/50 absolute -top-8 left-0 transition-colors opacity-100 group-hover:opacity-100">
                                        {airport.name.split("(")[1].replace(")", "")}
                                    </span>
                                )}
                                <h4 className="text-white group-hover:text-[#1A1A1A] font-bold text-2xl transition-colors mb-1">
                                    {airport.name.split("(")[0]}
                                </h4>
                                <p className="text-gray-300 group-hover:text-gray-800 text-xs transition-colors">
                                    Fixed prices & Flight Monitoring
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* =========================================
          3. REGIONAL DIRECTORY
          Distinct Design: Clean List / Map Style
         ========================================= */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
            
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-3">
                    Nationwide <span className="text-[#9C0E0F]">Coverage</span>
                </h2>
                <div className="w-16 h-1 bg-[#9C0E0F] mx-auto rounded-full"></div>
            </div>

            {/* Grid of Columns for Regions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {otherRegions.map((region, idx) => (
                    <div key={idx} className="flex flex-col gap-6">
                        
                        {/* Region Header */}
                        <div className="border-b border-[#9C0E0F]/30 pb-3 flex items-center gap-3">
                            <MapPin size={18} className="text-[#9C0E0F]" />
                            <h3 className="text-lg font-bold text-[#1A1A1A] uppercase tracking-wider">
                                {region.category}
                            </h3>
                        </div>

                        {/* List Items */}
                        <ul className="flex flex-col gap-3">
                            {region.airports.map((airport, i) => (
                                <li key={i}>
                                    <Link 
                                        href={`/airports/${airport.slug}`}
                                        className="group flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all duration-200"
                                    >
                                        <span className="text-sm font-medium text-gray-600 group-hover:text-[#1A1A1A]">
                                            {airport.name.split("(")[0]}
                                        </span>
                                        {airport.name.includes("(") && (
                                            <span className="text-[10px] font-bold text-gray-400 group-hover:text-[#9C0E0F] bg-gray-100 group-hover:bg-[#9C0E0F]/10 px-2 py-1 rounded-md transition-colors">
                                                {airport.name.split("(")[1].replace(")", "")}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>

        </div>
      </section>

      {/* =========================================
          4. CTA (Reuse Dark)
         ========================================= */}
      <div className="mb-[-80px] relative z-20 pt-10">
         <MissingAirfieldCTA />
      </div>

      {/* =========================================
          5. FOOTER
         ========================================= */}
        <Footer />

    </main>
  );
}