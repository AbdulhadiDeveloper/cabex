"use client";

import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FareTableSection({ airportName = "London Airport", routes }) {
  if (!routes || routes.length === 0) return null;

  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
                Estimated Fares From <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">{airportName}</span>
            </h2>
            <p className="text-gray-500 text-xs lg:text-sm font-medium">
                Transparent pricing with no hidden costs.
            </p>
        </div>

        {/* Styled Card Container */}
        <div className="bg-white rounded-[30px] shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
            
            {/* Table Header */}
            <div className="bg-[#1A1A1A] text-white flex justify-between items-center py-5 px-6 lg:px-10">
                <span className="text-xs font-bold uppercase tracking-widest w-2/3">Destination</span>
                <span className="text-xs font-bold uppercase tracking-widest w-1/3 text-right">Fixed Price*</span>
            </div>

            {/* Table Body */}
            <div className="flex flex-col">
                {routes.map((route, index) => (
                    <div 
                        key={index} 
                        className="group flex items-center justify-between py-5 px-6 lg:px-10 border-b border-gray-100 hover:bg-[#9C0E0F]/5 transition-colors duration-300 last:border-0 cursor-default"
                    >
                        {/* Route Name */}
                        <div className="flex items-center gap-4 w-2/3">
                            <div className="w-8 h-8 rounded-full bg-[#EBEBEB] flex items-center justify-center shrink-0 group-hover:bg-[#9C0E0F] group-hover:text-white transition-colors duration-300">
                                <MapPin size={16} className="text-gray-800 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-sm lg:text-[15px] font-bold text-[#1A1A1A] group-hover:text-[#9C0E0F] transition-colors">
                                {route.destination}
                            </span>
                        </div>

                        {/* Price & Action */}
                        <div className="flex items-center justify-end gap-4 w-1/3">
                            <span className="text-base lg:text-lg font-bold text-[#1A1A1A]">
                                £{route.price}
                            </span>
                            {/* Mobile Hidden Arrow */}
                            <ArrowRight size={16} className="text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-[#9C0E0F] transition-all transform -translate-x-2 group-hover:translate-x-0 hidden sm:block" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer / CTA in card */}
            <div className="bg-[#F5F5F5] p-6 text-center">
                <p className="text-[10px] lg:text-[11px] text-gray-400 italic mb-4">
                    *Prices shown are estimated starting fares for a Saloon vehicle. Final price depends on exact mileage and vehicle choice.
                </p>
                <Link href="/book">
                    <button className="text-xs font-bold text-[#9C0E0F] hover:text-[#360505] underline tracking-wide uppercase transition-colors">
                        Check Exact Price for My Journey
                    </button>
                </Link>
            </div>

        </div>

      </div>
    </section>
  );
}