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

export default function InnerHero({ word1, word2, backgroundImage, children }) {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8 flex justify-center font-sans overflow-hidden">
      
      {/* MAIN WRAPPER */}
      <div className="relative w-full max-w-[1400px] mx-auto min-h-[500px] lg:h-[600px] shadow-2xl rounded-[40px] overflow-hidden">
        
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
            2. BACKGROUND LAYER (Clipped) - NOW with Fallback
           ========================================= */}
        <div className="absolute inset-0 w-full h-full z-0">
            
            {/* The Clipped Container */}
            <div 
                className="w-full h-full relative bg-black"
                style={{ clipPath: "url(#inner-hero-clip)" }}
            >
                {/* A. City Image */}
                <div className="absolute inset-0">
                    <Image
                        src={backgroundImage || "/images/heroBg.jpg"} 
                        alt="Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
                </div>

                {/* B. Red Slash Image */}
                <div className="absolute right-0 top-0 bottom-0 w-full h-full z-10 pointer-events-none opacity-80">
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
            3. CONTENT LAYER
           ========================================= */}
        <div className="relative z-30 w-full h-full flex flex-col pointer-events-none">
            
            {/* A. Header (Client Component) - Make sure pointer events are enabled for header interactions */}
            <div className="pointer-events-auto">
                <Header />
            </div>

            {/* B. Centered Title OR Children */}
            <div className="flex-1 flex flex-col items-center justify-center pb-20 w-full px-4 pt-20 lg:pt-24 text-center">
                {children ? (
                    // Render Children if passed (e.g. from CoverAreas Page)
                    <div className="relative z-10">
                        {children}
                    </div>
                ) : (
                    // Default Prop-based Title (e.g. from Dynamic Slug Pages)
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
                        {word1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#990000]">{word2}</span>
                    </h1>
                )}
            </div>

        </div>

      </div>
    </div>
  );
}