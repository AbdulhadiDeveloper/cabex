"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header.jsx";

// =========================================================================
// PIXEL PERFECT ROUNDED PATH (Reusable)
// Matches the exact shape of your Home Hero Section
// =========================================================================
const HERO_SHAPE_PATH = `
  M 0,0.97
  L 0,0.11 Q 0,0.08 0.03,0.08 
  L 0.07,0.08 Q 0.10,0.08 0.10,0.05 
  L 0.10,0.03 Q 0.10,0 0.13,0 
  L 0.87,0 Q 0.90,0 0.90,0.03 
  L 0.90,0.05 Q 0.90,0.08 0.93,0.08 
  L 0.97,0.08 Q 1,0.08 1,0.11 
  L 1,0.97 Q 1,1 0.97,1 
  L 0.03,1 Q 0,1 0,0.97 
  Z
`;

export default function HeroBackground({ children }) {
  return (
    <div className="min-h-screen bg-[#EBEBEB] p-0 md:p-4 lg:p-8 flex items-center justify-center font-sans">
      <div className="relative w-full max-w-[1400px] mx-auto">
        
        {/* =========================================
            1. HEADER (Sits on top of everything)
           ========================================= */}
        <div className="absolute top-0 left-0 w-full z-50 ">
            <Header />
        </div>

        {/* =========================================
            2. SVG CLIP DEFINITION
           ========================================= */}
        <svg className="absolute w-0 h-0">
          <defs>
            <clipPath id="hero-background-clip" clipPathUnits="objectBoundingBox">
              <path d={HERO_SHAPE_PATH} />
            </clipPath>
          </defs>
        </svg>

        {/* =========================================
            3. MAIN WRAPPER
           ========================================= */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 min-h-[950px] lg:h-[900px]">
          
          {/* =========================================
              4. BACKGROUND LAYER (Clipped)
             ========================================= */}
          <div className="col-span-1 lg:col-span-12 absolute inset-0 w-full h-full z-0 filter drop-shadow-2xl">
            <div
              className="w-full h-full relative bg-black"
              style={{ clipPath: "url(#hero-background-clip)" }}
            >
              
              {/* Dark Street Image */}
              <div className="absolute inset-0">
                <Image
                    src="/images/heroBg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent/30 z-10" />
              </div>

              {/* Red Slash Image */}
              <div className="absolute right-0 top-0 bottom-0 w-full h-full z-10">
                <Image 
                    src="/images/red-slash.png"
                    alt="Red Decoration"
                    fill
                    className="object-fill"
                    priority
                />
              </div>

             

            </div>
          </div>

          {/* =========================================
              5. CONTENT LAYER (Passed Children)
             ========================================= */}
          <div className="col-span-1 lg:col-span-12 relative z-40 w-full h-full pointer-events-none">
            {/* 
               - pointer-events-auto: Re-enables clicking on the form
               - pt-32: Pushes content down so it doesn't overlap the Header
            */}
            <div className="pointer-events-auto w-full h-full flex flex-col pt-32 lg:pt-40 px-4 lg:px-12">
                {children}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}