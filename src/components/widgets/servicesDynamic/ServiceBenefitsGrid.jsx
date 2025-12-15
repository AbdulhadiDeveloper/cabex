"use client";

import React from "react";
import { Train, Ship, Plane, Clock, User, Briefcase, MapPin } from "lucide-react";

// Mapping string names to components
const ICON_MAP = {
  "Plane": Plane,
  "Clock": Clock,
  "User": User,
  "Train": Train,
  "Ship": Ship,
  "Briefcase": Briefcase,
  "MapPin": MapPin
};

export default function ServiceBenefitsGrid({ benefits = [], title }) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="bg-white py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
            <span className="text-[#9C0E0F] font-bold text-xs uppercase tracking-widest mb-3 block">
                Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                Benefits of our <span className="text-[#9C0E0F]">{title}</span>
            </h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, index) => {
                const IconComponent = ICON_MAP[item.icon];
                
                return (
                    <div 
                        key={index}
                        className="group bg-[#F9F9F9] hover:bg-white rounded-[30px] p-8 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-transparent hover:border-gray-100"
                    >
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-[#9C0E0F]">
                            {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#9C0E0F] transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                            {item.desc}
                        </p>
                    </div>
                );
            })}
        </div>

      </div>
    </section>
  );
}
