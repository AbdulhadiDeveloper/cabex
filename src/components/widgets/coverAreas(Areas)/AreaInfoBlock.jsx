"use client";

import React from "react";
import { Info, Clock, AlertCircle } from "lucide-react";

export default function AreaInfoBlock({ 
  locationName = "the destination",
  introText,
  paragraphs = []
}) {
  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* =========================================
            1. MAIN ARTICLE (White Card)
            Spans 2 columns on desktop
           ========================================= */}
        <div className="lg:col-span-2 bg-white rounded-[35px] p-8 lg:p-12 shadow-sm border border-gray-100">
            
            <div className="flex items-center gap-3 mb-6">
                <Info size={20} className="text-[#9C0E0F]" />
                <span className="text-[#1A1A1A] font-bold text-sm uppercase tracking-wider">
                    Journey Details
                </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">
                Traveling to <span className="text-[#9C0E0F]">{locationName}</span>
            </h3>

            {/* Intro Content */}
            <p className="text-gray-500 text-sm lg:text-[15px] font-medium leading-[1.8] mb-6">
                {introText || `Experience a seamless transfer to ${locationName} with our executive fleet. Whether you are visiting for business meetings in the center or a weekend getaway, our fixed-price service ensures you arrive without the stress of train timetables or parking availability.`}
            </p>

            {/* Extra Paragraphs */}
            {paragraphs.map((text, idx) => (
                <p key={idx} className="text-gray-500 text-sm lg:text-[15px] font-normal leading-[1.8] mb-4 last:mb-0">
                    {text}
                </p>
            ))}

        </div>

        {/* =========================================
            2. QUICK TIPS SIDEBAR (Grey Card)
            Spans 1 column on desktop
           ========================================= */}
        <div className="lg:col-span-1 bg-[#F5F5F5] rounded-[35px] p-8 lg:p-10 shadow-sm border-t-4 border-[#9C0E0F] h-fit">
            
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-6">
                Quick Travel Tips
            </h4>

            <div className="space-y-6">
                
                {/* Tip 1 */}
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9C0E0F] shadow-sm shrink-0">
                        <Clock size={18} />
                    </div>
                    <div>
                        <h5 className="text-sm font-bold text-[#1A1A1A]">Best Time to Travel</h5>
                        <p className="text-xs text-gray-500 leading-relaxed mt-1">
                            Avoid peak M25 rush hours (07:00-09:00 & 16:30-18:30) to save approximately 30 minutes on your journey time.
                        </p>
                    </div>
                </div>

                {/* Line */}
                <div className="h-[1px] bg-gray-200 w-full"></div>

                {/* Tip 2 */}
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9C0E0F] shadow-sm shrink-0">
                        <AlertCircle size={18} />
                    </div>
                    <div>
                        <h5 className="text-sm font-bold text-[#1A1A1A]">Meeting Point</h5>
                        <p className="text-xs text-gray-500 leading-relaxed mt-1">
                            For hotel pickups in {locationName}, please ensure you are in the main lobby 5 minutes prior to the scheduled time.
                        </p>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
}