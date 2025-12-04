
import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header"; // Client Component imported into Server Component

export default function InnerHero({ children }) {
  return (
    <div className="w-full bg-[#EBEBEB] p-4 md:p-6 lg:p-8 flex justify-center font-sans">
      
      {/* ROUNDED CONTAINER */}
      <div className="relative w-full max-w-[1400px] mx-auto min-h-[450px] lg:h-[500px] rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-2xl bg-black">
        
        {/* =========================================
            BACKGROUND LAYER
           ========================================= */}
        <div className="absolute inset-0 w-full h-full z-0">
            
            {/* 1. City Image */}
            <div className="absolute inset-0 bg-black">
                        <Image
                            src="/images/london.jpg" // Make sure this exists
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent/30 z-10" />
                    </div>

            {/* 2. Red Slash Image */}
            <div className="absolute right-0 top-0 bottom-0 w-full h-full z-10">
                        <Image 
                            src="/images/red-slash.png" // Save your uploaded image with this name
                            alt="Red Decoration"
                            fill
                            className="object-fill" // Ensures it stretches to cover the area perfectly without cutting
                            priority
                        />
                    </div>

            {/* 3. Dotted Line Decoration (Bottom Left) */}
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

        {/* =========================================
            CONTENT LAYER
           ========================================= */}
        <div className="relative z-30 w-full h-full flex flex-col">
            
            {/* A. Header (Client Component) */}
            <Header />

            {/* B. Children Content (Centered) */}
            <div className="flex-1 flex items-center justify-center pb-12 w-full px-4">
                {children}
            </div>

        </div>

      </div>
    </div>
  );
}