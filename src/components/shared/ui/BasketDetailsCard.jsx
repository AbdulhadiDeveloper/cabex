"use client";

import React from "react";

export default function BasketDetailsCard() {
    


  return (
   <div className="border-[3px] border-[#360505] rounded-[10px] p-5 lg:p-6 bg-white">
            
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
  );
}