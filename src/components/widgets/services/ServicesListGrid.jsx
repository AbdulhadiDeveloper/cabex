"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plane, Train, Ship, ArrowRight } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Airport Transfers",
    description: "Reliable, fixed-price transfers to and from all major UK airports including Heathrow, Gatwick, and Stansted. Includes flight monitoring and 60 minutes free waiting time.",
    icon: Plane,
    link: "/services/airport-transfers",
    image: "/images/airport-transfer/heathrow.jpeg" 
  },
  {
    id: 2,
    title: "Railway Transfers",
    description: "Seamless connections between major train stations (St Pancras, Euston, Victoria) and your final destination. Don't haul luggage on the tube; let us drive you.",
    icon: Train,
    link: "/services/railway-transfers",
    image: "/images/airport-transfer/gatwick.jpg"
  },
  {
    id: 3,
    title: "Cruise Transfers",
    description: "Start your holiday in style. Luxury chauffeur transfers to Southampton, Dover, and Tilbury ports. Ample luggage space for your ocean voyage.",
    icon: Ship,
    link: "/services/cruise-transfers",
    image: "/images/airport-transfer/stansted.jpg"
  }
];

export default function ServicesListGrid() {
  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                Our <span className="text-[#9C0E0F]">Core Services</span>
            </h2>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-medium">
                We specialize in connecting you to your next journey. Select a service to get started.
            </p>
        </div>

        {/* Grid (Balanced for 3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, index) => (
                <Link key={index} href={item.link} className="group h-full">
                    <div className="bg-white rounded-[35px] p-2 shadow-lg hover:shadow-[0_20px_50px_rgba(156,14,15,0.15)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-transparent relative overflow-hidden h-full flex flex-col">
                        
                        {/* 1. Image Half */}
                        <div className="relative h-[250px] w-full rounded-[30px] overflow-hidden">
                             <Image 
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                             />
                             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                             
                             {/* Floating Icon */}
                             <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#9C0E0F]">
                                <item.icon size={22} strokeWidth={1.8} />
                             </div>
                        </div>

                        {/* 2. Text Content */}
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#9C0E0F] transition-colors">
                                    {item.title}
                                </h3>
                                <ArrowRight size={20} className="text-gray-300 group-hover:text-[#9C0E0F] -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                            
                            <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-3 mb-6">
                                {item.description}
                            </p>

                            {/* Fake Button Text */}
                            <div className="mt-auto pt-4 border-t border-gray-100">
                                <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider group-hover:underline decoration-[#9C0E0F] decoration-2 underline-offset-4 flex items-center gap-2">
                                    Learn More
                                </span>
                            </div>
                        </div>

                    </div>
                </Link>
            ))}
        </div>

      </div>
    </section>
  );
}