"use client";

import React from "react";
import { MapPin, Clock, CarFront, Coins } from "lucide-react";

export default function AreaStatsOverview({ 
  introTitle = "Overview",
  description = "Experience a seamless journey to this destination with our premium chauffeur services. We track traffic and flight times to ensure punctuality.",
  stats = [] // Array of { label, value }
}) {
  return (
    <section className="relative z-40 px-4 md:px-8 font-sans mt-0 mb-24 pointer-events-none">
      <div className="max-w-[1200px] mx-auto pointer-events-auto">
        
        {/* THE FLOATING CARD - Glassmorphism */}
        <div className="backdrop-blur-xl bg-black/95 border border-white/10 text-white rounded-[30px] p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
           
           {/* LEFT: TEXT INTRODUCTION */}
           <div className="flex-1 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-700 pb-8 lg:pb-0 lg:pr-10">
              <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">
                {introTitle}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
           </div>

           {/* RIGHT: STATS GRID */}
           {/* 
              This section automatically renders stats passed in via props.
              Expected Data Format: { label: "Distance", value: "15 Miles" }
           */}
           <div className="w-full lg:w-auto shrink-0">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
                
                {/* 1. Distance */}
                <StatItem 
                    icon={MapPin} 
                    label="Distance" 
                    value={stats[0]?.value || "N/A"} 
                />

                {/* 2. Travel Time */}
                <StatItem 
                    icon={Clock} 
                    label="Avg Time" 
                    value={stats[1]?.value || "N/A"} 
                />

                {/* 3. Availability */}
                <StatItem 
                    icon={CarFront} 
                    label="Fleet" 
                    value="24/7" 
                />

                {/* 4. Pricing */}
                <StatItem 
                    icon={Coins} 
                    label="Price From" 
                    value={stats[2]?.value || "N/A"}
                    isHighlight 
                />

             </div>
           </div>

        </div>

      </div>
    </section>
  );
}

// Sub-component for individual stats
function StatItem({ icon: Icon, label, value, isHighlight }) {
    return (
        <div className="flex flex-col items-center justify-center group">
            {/* Icon Circle */}
            <div className="w-10 h-10 rounded-full bg-[#9C0E0F]/10 flex items-center justify-center mb-3 group-hover:bg-[#9C0E0F] transition-colors duration-300">
                <Icon size={18} className="text-[#9C0E0F] group-hover:text-white transition-colors duration-300" />
            </div>
            
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                {label}
            </span>
            
            <span className={`text-3xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent`}>
                {value}
            </span>
        </div>
    );
}