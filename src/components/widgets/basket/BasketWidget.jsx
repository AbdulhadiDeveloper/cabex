"use client";

import React from "react";
import Image from "next/image";
import { 
  CalendarDays, 
  Plus, 
  ChevronDown, 
  CalendarPlus, 
  Repeat, 
  CreditCard,
  Check 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BasketWidget() {
    const [isChecked, setIsChecked] = useState(false);


  return (
    <div className="bg-white rounded-[30px] p-6 lg:p-10 w-full shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
      
      {/* =========================================
          LEFT SIDE: JOURNEY SUMMARY (5 Columns)
          (Reused structure for consistency)
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
                    <span className="cursor-pointer text-gray-500 hover:text-black">✎</span>
                </div>
                <div className="absolute -right-[1px] top-0 w-4 h-4 bg-white border-[3px] border-[#bf1515] rounded-full z-10"></div>
            </div>

            {/* Via */}
            <div className="relative">
                <div className="border-b border-gray-400 pb-2 flex justify-between items-center pr-6">
                    <span className="text-sm text-gray-400">Via <span className="opacity-50">(Optional)</span></span>
                    <ChevronDown size={16} className="text-gray-400" />
                </div>
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
                <div className="absolute -right-[1px] top-6 w-4 h-4 bg-white border-[3px] border-[#bf1515] rounded-full z-10"></div>
            </div>
        </div>

        {/* MAP IMAGE */}
        <div className="w-full h-[220px] relative rounded-xl overflow-hidden border border-gray-200 shadow-inner">
            <Image 
                src="/images/airport-transfer/map.png"
                alt="Route Map"
                fill
                className="object-cover"
            />
        </div>

      </div>

      {/* =========================================
          RIGHT SIDE: YOUR BASKET (7 Columns)
         ========================================= */}
      <div className="lg:col-span-7 flex flex-col gap-5">
        
        <h4 className="text-sm font-bold text-[#1A1A1A]">Your Basket</h4>

        {/* 1. BASKET DETAILS CARD */}
        <div className="border-[2px] border-[#360505] rounded-[10px] p-5 lg:p-6 bg-white">
            
            {/* Journey Details Text */}
            <div className="mb-6 text-sm text-[#1A1A1A] font-medium space-y-2 leading-relaxed">
                <p>Flight arrival at 10:00am on Friday 22nd Nov, 2024</p>
                <p>By Saloon Car</p>
                <p>2 Passengers with hand luggage</p>
                <p>arriving on service F9H from Heathrow</p>
            </div>

            {/* Pricing Rows */}
            <div className="space-y-3">
                
                {/* Standard Fare */}
                
                 <div className="flex justify-between items-center bg-[#E8E8E8] rounded-md h-9">
                    <span className="text-xs font-bold text-gray-700 pl-4">Standard Fare</span>
                    <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white text-xs font-semibold px-4 py-0.5 rounded-r-md h-9  flex items-center justify-center">
                        ~£78
                    </div>
                </div>

                {/* Discount */}
                <div className="flex justify-between items-center bg-[#E8E8E8] rounded-md h-9">
                    <span className="text-xs font-bold text-gray-700 pl-4">Online Booking Discount</span>
                    <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white text-xs font-semibold px-5 py-0.5 rounded-r-md h-9  flex items-center justify-center">
                        -£3
                    </div>
                </div>

                {/* Subtotal Amount */}
                <div className="flex justify-between items-center bg-[#A6A6A6] rounded-md px-4 py-2 text-[#181A1F">
                    <span className="text-xs font-bold">Amount</span>
                    <span className="text-sm font-bold">~£75.00</span>
                </div>

            </div>
        </div>

        {/* 2. ACTION BUTTONS ROW */}
        <div className="flex gap-4">
            <Link href="/airportTransfers" className="flex-1 py-3 rounded-full border border-[#360505] text-[#360505] font-bold text-xs hover:bg-red-50 transition-colors flex items-center justify-center ">
            <button className="flex items-center justify-center gap-2">
                New Journey <CalendarPlus size={16} />
            </button>
            </Link>
            <button className="flex-1 py-1 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-xs hover:bg-[#360505] transition-colors flex items-center justify-center gap-2 shadow-md">
                Add Return <Repeat size={16} />
            </button>
        </div>

        {/* 3. TOTAL FARE BAR */}
        <div className="bg-[#181A1F] rounded-[10px] px-6 py-3 flex justify-between items-center text-white">
            <span className="text-sm font-bold">Total Fare</span>
            <span className="text-lg font-bold">~£75.00</span>
        </div>

        {/* 4. TERMS CHECKBOX */}
        <div className="bg-[#E8E8E8] rounded-[10px] px-4 py-3 flex items-center justify-between">
    <span className="text-[10px] text-gray-600 font-medium">
        I have read and agree to the <span className="underline cursor-pointer hover:text-black">Privacy Policy</span> & <span className="underline cursor-pointer hover:text-black">terms of booking</span> with Airport Driven.
    </span>
    
    {/* Custom Interactive Checkbox */}
    <div 
        onClick={() => setIsChecked(!isChecked)}
        className={`w-5 h-5 bg-white border rounded cursor-pointer flex items-center justify-center transition-colors duration-200 ${
            isChecked ? "border-[#9C0E0F]" : "border-gray-400"
        }`}
    >
        {/* Conditional Icon */}
        {isChecked && <Check size={14} className="text-[#9C0E0F]" strokeWidth={3} />}
    </div>
</div>

        {/* 5. PAY NOW BUTTON */}
        <button className="w-full py-4 rounded-[30px] bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-sm shadow-xl hover:shadow-red-900/40 transition-all flex items-center justify-center gap-2">
            Pay Now <CreditCard size={18} />
        </button>

      </div>

    </div>
  );
}