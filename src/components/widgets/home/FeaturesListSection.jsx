"use client";

import React from "react";
import { 
  Car, 
  User, 
  BadgeCheck, // For Fixed Price
  Clock, 
  ShieldCheck, 
  Truck // For Professional Car Drivers
} from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Luxury Limousine Selection",
    description: "Both you and your shipments will travel with professional drivers."
  },
  {
    icon: Clock,
    title: "27/7 Order Available",
    description: "Both you and your shipments will travel with professional drivers."
  },
  {
    icon: User,
    title: "Fast Car Delivery Service",
    description: "Both you and your shipments will travel with professional drivers. Always with the highest quality standards."
  },
  {
    icon: ShieldCheck,
    title: "High Safety and Nurity",
    description: "Both you and your shipments will travel with professional drivers."
  },
  {
    icon: BadgeCheck, // Using BadgeCheck to represent Price/Bonus
    title: "Fixed Price & Bonus System",
    description: "Both you and your shipments will travel with professional drivers. Always with the highest quality."
  },
  {
    icon: Truck,
    title: "Professional Car Drivers",
    description: "Both you and your shipments will travel with professional drivers. Always with the highest quality standards."
  }
];

export default function FeaturesListSection() {
  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 1. Header Section */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-[3.5rem] font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Our <span className="text-[#900c0c]">Features</span>
          </h2>
          <p className="text-gray-500 text-xs lg:text-[13px] leading-relaxed max-w-2xl font-medium">
            Experience Seamless Transportation With Our Reliable Taxi Service. From Airport Transfers To City Tours, We Offer Convenient And Affordable Travel Solutions.
          </p>
        </div>

        {/* 2. Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-6">
                    
                    {/* Icon Circle */}
                    <div className="shrink-0 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                        {/* 
                           Stroke width is 1.5 to match the thin line style in the image.
                           Color is the brand red.
                        */}
                        <feature.icon className="w-10 h-10 text-[#bf1515]" strokeWidth={1.5} />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-400 text-[11px] lg:text-xs leading-relaxed max-w-sm font-medium">
                            {feature.description}
                        </p>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </section>
  );
}