"use client";

import React from "react";
import Image from "next/image";
import { 
  CalendarDays, 
  Plus, 
  MapPin, 
  ChevronDown, 
  Plane, 
  PlaneLanding, 
  Calendar,
  ShoppingCart,
  Undo2 
} from "lucide-react";
import Link from "next/link";

export default function PassengerDetailsWidget() {
  return (
    <div className="bg-white rounded-[30px] p-6 lg:p-10 w-full shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
      
      {/* =========================================
          LEFT SIDE: JOURNEY SUMMARY (5 Columns)
         ========================================= */}
      <div className="lg:col-span-5 flex flex-col">
        
        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-8">
            <div className="relative">
                <CalendarDays className="text-[#9C0E0F] w-10 h-10 lg:w-12 lg:h-12" strokeWidth={1.5} />
                <div className="absolute -right-1 -bottom-1 bg-[#9C0E0F] rounded-full p-0.5 border-2 border-white">
                    <Plus className="text-white w-3 h-3" />
                </div>
            </div>
            <div className="leading-[0.9]">
                <span className="block text-2xl lg:text-3xl font-black text-[#1a1a1a]">BOOK</span>
                <span className="block text-2xl lg:text-3xl font-black text-[#9C0E0F]">ONLINE</span>
            </div>
        </div>

        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-6">First Journey</h3>

        {/* SUMMARY TIMELINE */}
        <div className="relative flex flex-col gap-8 mb-8">
            {/* Vertical Line */}
            <div className="absolute right-[6px] top-3 bottom-3 w-[2px] bg-gray-300 rounded-full"></div>

            {/* Pick Up */}
            <div className="relative">
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center pr-6">
                    <span className="text-sm text-gray-600">Pick Up : <span className="text-gray-400">Heathrow Airport, Terminal 2</span></span>
                    {/* Pencil Icon */}
                    <span className="cursor-pointer text-gray-500 hover:text-black">✎</span>
                </div>
                {/* Dot */}
                <div className="absolute -right-[1px] top-0 w-4 h-4 bg-white border-[3px] border-[#bf1515] rounded-full z-10"></div>
            </div>

            {/* Via */}
            <div className="relative">
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center pr-6">
                    <span className="text-sm text-gray-400">Via <span className="opacity-50">(Optional)</span></span>
                    <ChevronDown size={16} className="text-gray-400" />
                </div>
                {/* Plus Dot */}
                <div className="absolute -right-[3px] top-4 w-5 h-5 bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white rounded-full flex items-center justify-center z-10 text-[12px]">
                    +
                </div>
            </div>

            {/* Drop Off */}
            <div className="relative">
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center pr-6">
                    <span className="text-sm text-gray-600">Drop Off : <span className="text-gray-400">The University of Bath, BA2 7AY</span></span>
                    <span className="cursor-pointer text-gray-500 hover:text-black">✎</span>
                </div>
                {/* Dot */}
                <div className="absolute -right-[1px] top-6 w-4 h-4 bg-white border-[3px] border-[#bf1515] rounded-full z-10"></div>
            </div>
        </div>

        {/* MAP IMAGE */}
        <div className="w-full h-[220px] relative rounded-xl overflow-hidden border border-gray-200 shadow-inner">
            <Image 
                src="/images/airport-transfer/map.png" // Use your map screenshot
                alt="Route Map"
                fill
                className="object-cover"
            />
        </div>

      </div>

      {/* =========================================
          RIGHT SIDE: PASSENGER FORMS (7 Columns)
         ========================================= */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        
        {/* --- FORM 1: PASSENGER DETAILS --- */}
        <div>
            <h4 className="text-sm font-bold text-[#1A1A1A] mb-3">Passenger Details</h4>
            
            <div className="border-[2px] border-[#360505] rounded-[10px] p-5 lg:p-6 space-y-5">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-[#1A1A1A]">Head Passenger Full Name</label>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-[#E8E8E8] rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-900"
                    />
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-[#1A1A1A]">Passenger Mobile</label>
                    <div className="w-full bg-[#E8E8E8] rounded-md px-4 py-3 text-sm text-gray-700 flex items-center">
                        <span className="text-gray-500 mr-2">+</span>
                        <input type="text" className="bg-transparent w-full focus:outline-none" />
                    </div>
                </div>

                {/* Row: Passengers & Luggage */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-[#1A1A1A]">Passengers</label>
                        <div className="relative">
                            <select className="w-full bg-[#E8E8E8] rounded-md px-4 py-3 text-sm text-gray-700 appearance-none focus:outline-none">
                                <option>1 Person</option>
                                <option>2 People</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-gray-500 w-4 h-4 pointer-events-none" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-[#1A1A1A]">Luggage</label>
                        <div className="relative">
                            <select className="w-full bg-[#E8E8E8] rounded-md px-4 py-3 text-sm text-gray-700 appearance-none focus:outline-none">
                                <option>None</option>
                                <option>1 Bag</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-gray-500 w-4 h-4 pointer-events-none" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* --- FORM 2: JOURNEY DETAILS --- */}
        <div>
            <h4 className="text-sm font-bold text-[#1A1A1A] mb-3">Journey Details</h4>
            
            <div className="border-[2px] border-[#360505] rounded-[10px] p-5 lg:p-6 space-y-5">
                
                {/* Row: Flight No & Arrival */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-[#1A1A1A]">Flight Number</label>
                        <div className="relative">
                            <input type="text" className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-3 text-sm focus:outline-none" />
                            <Plane className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-[#1A1A1A]">Flight Arriving From</label>
                        <div className="relative">
                            <input type="text" className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-3 text-sm focus:outline-none" />
                            <PlaneLanding className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Meet & Greet */}
                <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-[#1A1A1A]">Meet And Greet Service</label>
                    <div className="relative">
                        <select className="w-full bg-[#E8E8E8] rounded-md px-4 py-3 text-sm text-gray-700 appearance-none focus:outline-none">
                            <option>No (£0) i will call my driver</option>
                            <option>Yes (£10) Driver in arrivals</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 text-gray-500 w-4 h-4 pointer-events-none" />
                    </div>
                </div>

                {/* Date & Time */}
                <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-[#1A1A1A]">Flight Arrival Date & Time</label>
                    <div className="relative">
                        <input type="datetime-local" className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-3 text-sm text-gray-700 focus:outline-none" />
                        <Calendar className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                    </div>
                </div>

            </div>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex gap-4 justify-end mt-2">
            
            {/* Back Button */}
            <Link href="/airportTransfers" className="flex items-center gap-2">
            <button className="px-8 py-3.5 rounded-full border border-[#5e0808] text-[#5e0808] font-bold text-sm hover:bg-red-50 transition-colors flex items-center gap-2">
                Back To Fares <Undo2 size={16} />
            </button>
            </Link>

            {/* Continue Button */}
            <Link href="/airportTransfers/Details/basket" className="flex items-center gap-2">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505]  hover:shadow-red-900/40 border border-transparent text-white font-bold text-sm shadow-xl hover:bg-[#4a0404] transition-colors flex items-center gap-2">
                Continue To Basket <ShoppingCart size={16} />
            </button>
            </Link>

        </div>

      </div>

    </div>
  );
}