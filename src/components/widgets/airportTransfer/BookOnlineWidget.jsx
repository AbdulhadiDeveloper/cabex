"use client";

import React from "react";
import Image from "next/image";
import { User, Briefcase, CalendarDays, Plus, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";

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
      <div className="lg:col-span-5 flex flex-col">
        
        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-8">
            <div className="relative">
                <CalendarDays className="text-[#9C0E0F] w-12 h-12" strokeWidth={1.5} />
                <div className="absolute -right-1 -bottom-1 bg-[##9C0E0F] rounded-full p-0.5 border-2 border-white">
                    <Plus className="text-white w-3 h-3" />
                </div>
            </div>
            <div className="leading-[0.9]">
                <span className="block text-3xl font-black text-[#1a1a1a]">BOOK</span>
                <span className="block text-3xl font-black text-[#9C0E0F]">ONLINE</span>
            </div>
        </div>

        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-6">First Journey</h3>

        {/* INPUTS CONTAINER */}
        <div className="relative flex flex-col gap-8 mb-8">
            {/* Timeline Line */}
            <div className="absolute right-[6px] top-3 bottom-3 w-[2px] bg-gray-300 rounded-full"></div>

            {/* Pick Up */}
            <div className="relative">
                <label className="text-[10px] font-bold text-gray-500 mb-1 block">Pick Up</label>
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Heathrow Airport, Terminal 2</span>
                    {/* Timeline Dot */}
<div className="absolute -right-[1px] top-0 w-4 h-4 bg-white border-[3px] border-[#bf1515] rounded-full z-10">
                        
                    </div>                </div>
            </div>

            {/* Via */}
            <div className="relative">
                <label className="text-[10px] font-bold text-gray-400 mb-1 block">Via (Optional)</label>
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-400">Add Stop</span>
                    <ChevronDown size={16} className="text-gray-400" />
                    {/* Timeline Plus */}
                    <div className="absolute -right-[3px] top-4 w-5 h-5 bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white rounded-full flex items-center justify-center z-10 text-[12px]">
                        +
                    </div>
                </div>
            </div>

            {/* Drop Off */}
            <div className="relative">
                <label className="text-[10px] font-bold text-gray-500 mb-1 block">Drop Off</label>
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">The University of Bath, BA2 7AY</span>
                    {/* Timeline Dot */}
                    <div className="absolute -right-[1px] top-6 w-4 h-4 bg-white border-[3px] border-[#bf1515] rounded-full z-10">
                        
                    </div>
                </div>
            </div>
        </div>

        {/* MAP IMAGE */}
        <div className="w-full h-[200px] relative rounded-xl overflow-hidden border border-gray-200 shadow-inner">
            <Image 
                src="/images/airport-transfer/map.png" // You need to save the map screenshot
                alt="Route Map"
                fill
                className="object-cover"
            />
        </div>
        
        {/* Edit Route Button */}
        <div className="mt-6">
             <button className="w-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white py-4 rounded-full font-bold text-xs tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-[#750a0a] transition-all">
                EDIT ROUTE
                <span className="text-lg ">↩</span>
             </button>
        </div>

      </div>

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