import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header"; 

// =========================================================================
// PIXEL PERFECT ROUNDED PATH (Same as Home Hero)
// Logic: Rounded Tab at top, Rounded Cutout at bottom-left.
// =========================================================================
const HERO_SHAPE_PATH = `
  M 0,0.97
  L 0,0.16 Q 0,0.13 0.03,0.13 
  L 0.06,0.13 Q 0.09,0.13 0.09,0.10 
  L 0.09,0.03 Q 0.09,0 0.12,0 
  L 0.88,0 Q 0.91,0 0.91,0.03 
  L 0.91,0.11 Q 0.91,0.14 0.94,0.14 
  L 0.97,0.14 Q 1,0.14 1,0.17 
  L 1,0.97 Q 1,1 0.97,1 
  L 0.03,1 Q 0,1 0,0.97 
  Z
`;

export default function InnerHero({ children }) {
  return (
    <div className="w-full bg-[#EBEBEB] p-4 md:p-6 lg:p-8 flex justify-center font-sans">
      
      {/* MAIN WRAPPER */}
      <div className="relative w-full max-w-[1400px] mx-auto min-h-[450px] lg:h-[500px]">
        
        {/* =========================================
            1. SVG DEFINITION (Hidden)
           ========================================= */}
        <svg className="absolute w-0 h-0">
          <defs>
            <clipPath id="inner-hero-clip" clipPathUnits="objectBoundingBox">
              <path d={HERO_SHAPE_PATH} />
            </clipPath>
          </defs>
        </svg>

        {/* =========================================
            2. BACKGROUND LAYER (Clipped)
           ========================================= */}
        <div className="absolute inset-0 w-full h-full z-0 filter drop-shadow-2xl">
            
            {/* The Clipped Container */}
            <div 
                className="w-full h-full relative bg-black"
                style={{ clipPath: "url(#inner-hero-clip)" }}
            >
                {/* A. City Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/heroBg.jpg" // Using your consistent background
                        alt="Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent/30 z-10" />
                </div>

                {/* B. Red Slash Image */}
                <div className="absolute right-0 top-0 bottom-0 w-full h-full z-10">
                    <Image 
                        src="/images/red-slash.png"
                        alt="Red Decoration"
                        fill
                        className="object-fill"
                        priority
                    />
                </div>

                {/* C. Dotted Line Decoration */}
                <svg className="absolute bottom-0 left-0 w-[300px] h-[200px] z-20 opacity-30 pointer-events-none">
                    <path 
                        d="M -20,180 Q 80,180 120,120 T 250,50" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="3" 
                        strokeDasharray="8 8"
                    />
                </svg>
            </div>
        </div>

        {/* =========================================
            3. CONTENT LAYER
           ========================================= */}
        <div className="relative z-30 w-full h-full flex flex-col">
            
            {/* A. Header (Client Component) */}
            <Header />

            {/* B. Children Content (Centered Title) */}
            <div className="flex-1 flex items-center justify-center pb-12 w-full px-4 pt-20 lg:pt-24">
                {children}
            </div>

        </div>

      </div>
    </div>
  );
}