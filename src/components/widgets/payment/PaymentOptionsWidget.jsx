"use client";

import React, { useState } from "react";
import { 
  CalendarDays, 
  Plus, 
  ChevronDown, 
  ShoppingCart, 
  ChevronRight, 
  Check 
} from "lucide-react";
import BasketDetailsCard from "@/components/shared/ui/BasketDetailsCard";
import JouneySummary from "@/components/shared/ui/JouneySummary";
import Link from "next/link";

export default function PaymentPageWidget() {
  const [termsChecked, setTermsChecked] = useState(false);

  return (
    <div className="bg-white rounded-[30px] p-6 lg:p-10 w-full shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
      
      {/* =========================================
          LEFT SIDE: JOURNEY SUMMARY (5 Columns)
          (Consistent with previous steps)
         ========================================= */}
      <JouneySummary />

      {/* =========================================
          RIGHT SIDE: SUMMARY & PAYMENT (7 Columns)
         ========================================= */}
      <div className="lg:col-span-7 flex flex-col gap-5">
        
        <h4 className="text-sm font-bold text-[#1A1A1A]">Summary & Payment Options</h4>

        {/* 1. JOURNEY DETAILS CARD (Red Border) */}
       <BasketDetailsCard/>

        {/* 3. TERMS CHECKBOX */}
        <div className="bg-[#E8E8E8] rounded-[10px] px-4 py-3 flex items-center justify-between">
            <span className="text-[10px] text-gray-600 font-medium">
                I have read and agree to the <span className="underline cursor-pointer hover:text-black">Privacy Policy</span> & <span className="underline cursor-pointer hover:text-black">terms of booking</span> with Airport Driven.
            </span>
            <div 
                onClick={() => setTermsChecked(!termsChecked)}
                className={`w-5 h-5 bg-white border rounded cursor-pointer flex items-center justify-center transition-colors duration-200 ${termsChecked ? "border-[#9C0E0F]" : "border-gray-400"}`}
            >
                {termsChecked && <Check size={14} className="text-[#9C0E0F]" strokeWidth={3} />}
            </div>
        </div>

        {/* 4. BUTTONS ROW */}
        <div className="flex gap-4">
            <Link
            href="/airportTransfers/Details/basket"
            className="flex-1  py-3.5 rounded-full border border-[#360505] text-[#360505] font-bold text-sm hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
            >
            <button className=" flex items-center justify-center gap-2">
                Basket <ShoppingCart size={18} />
            </button>
            </Link>
            <button className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-sm shadow-xl hover:bg-[#4a0404] transition-colors flex items-center justify-center gap-2">
                Continue <ChevronRight size={18} />
            </button>
        </div>

        {/* 5. PAYMENT INFORMATION SECTION (Grey Box) */}
        <div className="bg-[#E8E8E8] rounded-[15px] p-6 lg:p-8 space-y-6 mt-2">
            
            {/* Gateway Logos */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Opayo Logo Pill */}
                <div className="bg-black text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wide">
                    Opayo
                </div>
                
                {/* Card Icons */}
                <div className="flex items-center gap-2">
                    {/* Placeholder colored divs to simulate card logos */}
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-5 bg-red-600 rounded-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-600 rounded-full opacity-80"></div>
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 rounded-full opacity-80"></div>
                        </div>
                        <span className="text-[6px] font-bold text-gray-500 mt-0.5">Maestro</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-5 bg-white border border-gray-300 rounded-sm flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500 -ml-1"></div>
                        </div>
                        <span className="text-[6px] font-bold text-gray-500 mt-0.5">Mastercard</span>
                    </div>

                    <div className="w-8 h-5 bg-blue-500 rounded-sm flex items-center justify-center text-[5px] text-white font-bold">
                        AMEX
                    </div>
                    <div className="w-8 h-5 bg-white border border-gray-300 rounded-sm flex items-center justify-center text-[6px] text-blue-800 font-bold italic">
                        VISA
                    </div>
                </div>
            </div>

            {/* Information Text */}
            <div className="space-y-4">
                <h5 className="text-xs font-bold text-[#1A1A1A]">Important Information</h5>
                
                <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
                    Opayo (previously known as Sage Pay) will securely handle your card information on their protected servers. For additional details, please refer to our terms.
                </p>
                <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
                    After your payment is successfully completed, you will receive an email confirming your journey and payment.
                </p>
                <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
                    Once a driver and vehicle have been assigned for your journey, you will be provided with further information, including pickup instructions and the driver's contact details.
                </p>
                <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
                    A sales receipt will be sent to you via email within 24 hours of the payment being processed.
                </p>
            </div>

        </div>

      </div>

    </div>
  );
}