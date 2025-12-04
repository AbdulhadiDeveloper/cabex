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
import BasketDetailsCard from "@/components/shared/ui/BasketDetailsCard";
import JouneySummary from "@/components/shared/ui/JouneySummary";

export default function BasketWidget() {
    const [isChecked, setIsChecked] = useState(false);


  return (
    <div className="bg-white rounded-[30px] p-6 lg:p-10 w-full shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
      
      {/* =========================================
          LEFT SIDE: JOURNEY SUMMARY (5 Columns)
          (Reused structure for consistency)
         ========================================= */}
      <JouneySummary />

      {/* =========================================
          RIGHT SIDE: YOUR BASKET (7 Columns)
         ========================================= */}
      <div className="lg:col-span-7 flex flex-col gap-5">
        
        <h4 className="text-sm font-bold text-[#1A1A1A]">Your Basket</h4>

        {/* 1. BASKET DETAILS CARD */}
       <BasketDetailsCard />

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
        <Link
        href="/airportTransfers/Details/basket/payment">
        <button className="w-full py-4 rounded-[30px] bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-sm shadow-xl hover:shadow-red-900/40 transition-all flex items-center justify-center gap-2">
            Pay Now <CreditCard size={18} />
        </button>
        </Link>

      </div>

    </div>
  );
}