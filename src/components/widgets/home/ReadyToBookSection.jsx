"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
// Importing the reusable Button component
import Button from "@/components/shared/ui/Button";

export default function ReadyToBookSection() {
  return (
    <section className="relative w-full h-[500px] lg:h-[550px]  overflow-hidden font-sans flex">
      
      {/* =========================================
          LEFT SIDE: DARK BACKGROUND & CONTENT (65% Width)
         ========================================= */}
      <div className="relative w-full lg:w-[65%] h-full">
        
        {/* 1. Background Image (Man in Suit) */}
        <div className="absolute inset-0 z-0">
            {/* Replace with your specific background image path */}
            <Image 
                src="/images/Rectangle 142.png" // Name this file appropriately in your public folder
                alt="Background" 
                fill
                className="object-cover object-top"
            />
            {/* Heavy Dark Gradient Overlay to match the black look */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00000066] to-[#000000] opacity-[40%]" />
        </div>

        {/* 2. Content Container */}
        <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-12 xl:px-24">
            
            {/* Headers */}
            <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl text-white font-medium mb-2 tracking-wide">
                    Ready to Go?
                </h3>
                <h2 className="text-4xl lg:text-[3.5rem] text-white font-bold tracking-tight leading-tight">
                    Book Your <span className="font-extrabold text-white">Ride Now</span>
                </h2>
            </div>

            {/* Info Group with Red Vertical Line */}
            <div className="flex gap-6 mb-10">
                
                {/* The Red Line Indicator */}
                <div className="w-[4px] bg-[#9B0302] rounded-full shrink-0 h-auto self-stretch"></div>

                {/* The Pills */}
                <div className="flex flex-col gap-4">
                    
                    {/* Phone Pill */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/5 rounded-full py-3 px-6 flex items-center gap-3 w-fit">
                        <Phone size={18} className="text-gray-400" />
                        <span className="text-gray-300 text-sm font-medium tracking-wide">
                            UK: +44 2080504059
                        </span>
                    </div>

                    {/* Address Pill */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/5 rounded-full py-3 px-6 flex items-center gap-3 w-fit">
                        <MapPin size={18} className="text-gray-400" />
                        <span className="text-gray-300 text-sm font-medium tracking-wide">
                            62 Bath Rd, London UB3 5AH, United Kingdom
                        </span>
                    </div>

                </div>
            </div>

            {/* 3. CTA Button (Using your Reusable Component) */}
            <div>
                <Button 
                    variant="primary" 
                    className="px-10 py-4 text-xs font-bold rounded-[30px] shadow-[0_10px_30px_rgba(144,12,12,0.4)]"
                    src="/airpoortTransfer" // Link to the booking page
                >
                    INSTANT QUOTE
                </Button>
            </div>

        </div>
      </div>

      {/* =========================================
          RIGHT SIDE: RED BACKGROUND (35% Width)
         ========================================= */}
      <div className="hidden lg:block w-[35%] h-full relative bg-[#5e0808]">
         {/* Using the red gradient image provided */}
         <Image 
            src="/images/Rectangle 143.png" // Replace with the red gradient image you uploaded
            alt="Red Background" 
            fill
            className="object-cover"
         />
      </div>

      {/* =========================================
          THE CAR (Overlapping Position)
         ========================================= */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] lg:right-0 w-[50%] lg:w-[45%] h-[60%] lg:h-[70%] z-30 pointer-events-none hidden md:block">
          <div className="relative w-full h-full">
            <Image 
                src="/images/carImage.png" // Replace with the cropped car image
                alt="Luxury Car"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
      </div>

    </section>
  );
}