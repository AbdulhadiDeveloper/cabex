"use client";

import React from "react";
import { 
  CalendarDays, 
  Plus, 
  Mail, 
  Eye, 
  Phone, 
  Smartphone, 
  MapPin, 
  ShoppingCart, 
  ChevronRight, 
  Lock,
  ChevronDown
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function LoginWidget() {
  return (
    <div className="bg-white rounded-[30px] p-6 lg:p-10 w-full shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 relative z-20">
      
      {/* =========================================
          LEFT SIDE: EXISTING CUSTOMER (5 Columns)
         ========================================= */}
      <div className="lg:col-span-5 flex flex-col">
        
        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-6">
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

        {/* Description Text */}
        <p className="text-[11px] text-gray-600 font-medium leading-relaxed mb-8">
            If you have booked before, an account will have been created for you. If you are unsure of this account&apos;s credentials select <span className="font-bold text-black">Reset Password</span> below.
        </p>

        <h3 className="text-xs font-bold text-gray-800 mb-2">Existing Customer</h3>

        {/* LOGIN FORM BOX */}
        <div className="border-[2px] border-[#360505] rounded-[15px] p-5 lg:p-6 space-y-6">
            
            {/* Inputs Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">E-Mail Address</label>
                    <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
                            <Mail size={16} />
                        </div>
                        <input 
                            type="email" 
                            className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-900"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">Password</label>
                    <div className="relative">
                        <input 
                            type="password" 
                            className="w-full bg-[#E8E8E8] rounded-md pl-4 pr-10 py-2.5 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-900"
                        />
                        <div className="absolute right-3 top-3 text-gray-500 cursor-pointer hover:text-black">
                            <Eye size={16} />
                        </div>
                    </div>
                </div>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
                {/* Reset Password */}
                <button className="flex-1 py-3 rounded-full border border-[#360505] text-[#360505] font-bold text-[10px] hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                    Reset Password <Lock size={14} />
                </button>

                {/* Login */}
                <button className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white hover:shadow-red-900/40 border border-transparent rounded-full flex-1 py-3 font-bold text-[10px] flex items-center justify-center gap-3">
                    Login 
                    <div className="h-2 w-2 flex items-center justify-center gap-1">
                        <span className="text-xs leading-none">→</span>
                        <Image
                    src="/images/loginSign.png"
                    width={20}
                    height={20}
                    alt="Login-Icon"
                    />
                    </div>
                
                    
                </button>
            </div>

        </div>

      </div>

      {/* =========================================
          RIGHT SIDE: NEW CUSTOMER (7 Columns)
         ========================================= */}
      <div className="lg:col-span-7 flex flex-col">
        
        <h3 className="text-xs font-bold text-gray-800 mb-2">New Customer</h3>

        {/* REGISTER FORM BOX */}
        <div className="border-[2px] border-[#360505] rounded-[15px] p-5 lg:p-6 space-y-4 mb-6">
            
            {/* Row 1: Name */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">First Name</label>
                    <input type="text" className="w-full bg-[#E8E8E8] rounded-md px-3 py-2.5 text-xs focus:outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">Last Name</label>
                    <input type="text" className="w-full bg-[#E8E8E8] rounded-md px-3 py-2.5 text-xs focus:outline-none" />
                </div>
            </div>

            {/* Row 2: Email */}
            <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-[#1A1A1A]">E-Mail Address</label>
                <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
                        <Mail size={16} />
                    </div>
                    <input type="email" className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-2.5 text-xs focus:outline-none" />
                </div>
            </div>

            {/* Row 3: Phones */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">Telephone Number</label>
                    <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
                            <Phone size={16} />
                        </div>
                        <input type="tel" className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-2.5 text-xs focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">Mobile Number</label>
                    <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
                            <Smartphone size={16} />
                        </div>
                        <input type="tel" className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-2.5 text-xs focus:outline-none" />
                    </div>
                </div>
            </div>

            {/* Row 4: Emergency */}
            <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-[#1A1A1A]">Emergency Number (Optional)</label>
                <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
                        <Phone size={16} />
                    </div>
                    <input type="tel" className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-2.5 text-xs focus:outline-none" />
                </div>
            </div>

            {/* Row 5: Address 1 */}
            <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-[#1A1A1A]">Billing Address, Line 1</label>
                <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
                        <MapPin size={16} />
                    </div>
                    <input type="text" className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-2.5 text-xs focus:outline-none" />
                </div>
            </div>

            {/* Row 6: Address 2 */}
            <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400">Billing Address, Line 2 (Optional)</label>
                <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400 pointer-events-none">
                        <MapPin size={16} />
                    </div>
                    <input type="text" className="w-full bg-[#E8E8E8] rounded-md pl-10 pr-4 py-2.5 text-xs focus:outline-none" />
                </div>
            </div>

            {/* Row 7: City / Postcode */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">City</label>
                    <input type="text" className="w-full bg-[#E8E8E8] rounded-md px-3 py-2.5 text-xs focus:outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">Postcode</label>
                    <input type="text" className="w-full bg-[#E8E8E8] rounded-md px-3 py-2.5 text-xs focus:outline-none" />
                </div>
            </div>

            {/* Row 8: Country / State */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">Country</label>
                    <div className="relative">
                        <select className="w-full bg-[#E8E8E8] rounded-md px-3 py-2.5 text-xs text-gray-700 appearance-none focus:outline-none">
                            <option>United Kingdom</option>
                            <option>USA</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3 text-gray-500 w-3 h-3 pointer-events-none" />
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#1A1A1A]">Sate (US Only)</label>
                    <input 
                        type="text" 
                        placeholder="N/A"
                        className="w-full bg-[#E8E8E8] rounded-md px-3 py-2.5 text-xs text-gray-500 placeholder-gray-400 focus:outline-none" 
                    />
                </div>
            </div>

        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="flex gap-4 justify-end">
            
            {/* Basket Button */}
            <Link href="/airportTransfers/Details/basket">
            <button className="px-10 py-3 rounded-full border border-[#360505] text-[#360505] font-bold text-xs hover:bg-red-50 transition-colors flex items-center gap-2">
                Basket <ShoppingCart size={16} />
            </button>
            </Link>

            {/* Continue Button */}
            <Link href="/airportTransfers/Details/basket">
            <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white hover:shadow-red-900/40 border border-transparentfont-bold text-xs shadow-xl  transition-colors flex items-center gap-2">
                Continue <ChevronRight size={16} />
            </button>
            </Link>

        </div>

      </div>

    </div>
  );
}