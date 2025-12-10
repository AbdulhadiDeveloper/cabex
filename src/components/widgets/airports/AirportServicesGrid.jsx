"use client";

import React from "react";
import { Plane, Clock, UserCheck, ShieldCheck, CreditCard, Headphones } from "lucide-react";

// We map these icons to the data based on index order
const iconMap = [Plane, Clock, UserCheck, ShieldCheck, CreditCard, Headphones];

export default function AirportServicesGrid({ services }) {
  // Guard clause: If no data is passed, don't render
  if (!services || services.length === 0) return null;

  return (
    <section className="bg-[#f8f9fa] py-20 px-4 md:px-8 font-sans border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2a4a] mb-4">
                Why Travel With Airport Driven?
            </h2>
            <div className="w-20 h-1 bg-[#9C0E0F] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
                // Select icon based on index (fallback to Plane if out of bounds)
                const IconComponent = iconMap[index] || Plane;

                return (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#9C0E0F]/30 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-[#f0f2f5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#9C0E0F] transition-colors">
                            <IconComponent size={28} className="text-[#0f2a4a] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#9C0E0F] transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                );
            })}
        </div>

      </div>
    </section>
  );
}