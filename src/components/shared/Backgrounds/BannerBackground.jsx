"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header.jsx"; // Importing the Header you provided

export default function HeroBackground({ children }) {
  return (
    <div className="relative w-full min-h-[950px] lg:h-[900px] bg-[#EBEBEB]">
      
      {/* =========================================
          BACKGROUND LAYER
         ========================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        
        {/* 1. DARK STREET IMAGE (Left Side Base) */}
        <div className="absolute inset-0 bg-black">
            <Image
                src="/images/heroBg.jpg" // Make sure this exists
                alt="Background"
                fill
                className="object-cover opacity-80"
                priority
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent/30 z-10" />
        </div>

       {/* 2. RED SLASH IMAGE (Right Side) */}
        {/* Replaced the CSS Div with your Image */}
        <div className="absolute right-0 top-0 bottom-0 w-full h-full z-10">
            <Image 
                src="/images/red-slash.png" // Save your uploaded image with this name
                alt="Red Decoration"
                fill
                className="object-fill" // Ensures it stretches to cover the area perfectly without cutting
                priority
            />
        </div>

        
      </div>

      {/* =========================================
          CONTENT LAYER
         ========================================= */}
      <div className="relative z-30 w-full h-full flex flex-col">
        
        {/* A. HEADER (Sits on top of the background) */}
        <Header />

        {/* B. HERO CONTENT (Passed as children) */}
        <div className="flex-1 w-full max-w-[1400px] mx-auto px-4 lg:px-12">
            {children}
        </div>

      </div>

    </div>
  );
}