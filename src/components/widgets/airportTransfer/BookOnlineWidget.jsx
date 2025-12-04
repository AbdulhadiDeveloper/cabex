"use client";

import React from "react";
import Image from "next/image";
import { User, Briefcase, CalendarDays, Plus, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";
import JouneySummary from "@/components/shared/ui/JouneySummary";

// Mock Data for Cars
const cars = [
  { id: 1, name: "SALOON CAR", passengers: 3, luggage: 2, priceOneWay: 165, priceReturn: 165 },
  { id: 2, name: "EXECUTIVE SALOON", passengers: 3, luggage: 2, priceOneWay: 195, priceReturn: 195 },
  { id: 3, name: "MPV CAR", passengers: 5, luggage: 4, priceOneWay: 215, priceReturn: 215 },
];

export default function BookOnlineWidget() {
  return (
    <div className="bg-white rounded-[30px] p-6 lg:p-8 w-full shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      {/* =========================================
          LEFT SIDE: BOOKING FORM (5 Columns)
         ========================================= */}
        <JouneySummary />
      {/* =========================================
          RIGHT SIDE: CAR SELECTION (7 Columns)
         ========================================= */}
      <div className="lg:col-span-7 flex flex-col h-full">
        
        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">Journey Fairs</h3>

        {/* Discount Banner */}
        <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white py-3 px-6 rounded-lg shadow-md mb-8 relative overflow-hidden flex items-center">
            <span className="text-xs lg:text-sm font-bold tracking-wide">
                £3 OFF EVERY Online Journey + 5% Return Booking Discount!
            </span>
            {/* Tag Graphic on Right */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-[#9C0E0F] to-[#360505] rotate-45 transform origin-center border-4 border-white/20"></div>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold rotate-45">SALE</span>
        </div>

        {/* Scrollable Car List */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-12 pb-4 custom-scrollbar" style={{ maxHeight: '600px' }}>
            {cars.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
            {/* Repeat items to fill space for demo */}
            {cars.map((car) => (
                <CarCard key={`dup-${car.id}`} car={car} />
            ))}
        </div>

      </div>

    </div>
  );
}

// =========================================
// SUB-COMPONENT: CAR CARD
// =========================================
function CarCard({ car }) {
    return (
        <div className="relative pt-10">
            {/* The Border Box */}
            <div className="border-[2px] border-[#360505] rounded-[20px] p-5 pt-12 relative bg-white shadow-sm hover:shadow-lg transition-shadow">
                
                {/* 1. Car Image (Overlapping Top) */}
                <div className="absolute -top-14 left-4 w-[240px] h-[140px] z-10">
                    <Image 
                        src="/images/airport-transfer/Mercedes.png" // Use your car image
                        alt={car.name}
                        fill
                        className="object-contain"
                    />
                </div>
                <Link href="/airportTransfers/Details">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                    
                    {/* 2. Car Details */}
                    <div>
                        <h4 className="text-lg font-black text-[#1A1A1A] mb-2 uppercase">
                            {car.name}
                        </h4>
                        <div className="flex items-center gap-4 text-xs text-gray-600 font-medium">
                            <div className="flex items-center gap-1">
                                <User size={14} />
                                <span>{car.passengers} passengers</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Briefcase size={14} />
                                <span>{car.luggage} luggage</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Pricing Buttons */}
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        {/* One Way */}
                        <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white rounded-[10px] px-4 py-2 flex items-center justify-between gap-6 shadow-md cursor-pointer hover:bg-[#750a0a] transition-colors">
                            <span className="text-[10px] font-medium opacity-80">One Way</span>
                            <div className="flex gap-2 text-xs font-bold">
                                <span className="line-through opacity-50">£{car.priceOneWay}</span>
                                <span>£{car.priceOneWay}</span>
                            </div>
                        </div>
                        {/* Return */}
                        <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white rounded-[10px] px-4 py-2 flex items-center justify-between gap-6 shadow-md cursor-pointer hover:bg-[#750a0a] transition-colors">
                            <span className="text-[10px] font-medium opacity-80">Return</span>
                            <div className="flex gap-2 text-xs font-bold">
                                <span className="line-through opacity-50">£{car.priceReturn}</span>
                                <span>£{car.priceReturn}</span>
                            </div>
                        </div>
                    </div>

                </div>
                </Link>
            </div>
        </div>
    );
}