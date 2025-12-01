"use client";

import React from "react";
import Image from "next/image";

// Custom Steering Wheel Icon matching the reference (Black Outline)
const SteeringWheelIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    className={className}
  >
    <circle cx="12" cy="12" r="9" strokeWidth="2" />
    <path d="M12 3 L12 12" strokeWidth="2" />
    <path d="M12 12 L4.5 16.5" strokeWidth="2" />
    <path d="M12 12 L19.5 16.5" strokeWidth="2" />
  </svg>
);

export default function MarqueeSection() {
  // We repeat the content enough times to ensure it covers wide screens
  const content = Array(12).fill("AIRPORT DRIVEN");

  return (
    <section className="bg-[#EBEBEB] py-20 overflow-hidden font-sans relative z-10">
      
      {/* 
          WRAPPER DIV
          - Rotated exactly -1.82 degrees as requested
          - Scaled up (1.05) to ensure edges don't show white gaps due to rotation
      */}
      <div 
        className="bg-[#9F0507] py-4 shadow-xl relative left-[-2%] w-[105%]"
        style={{ transform: "rotate(-1.82deg)" }}
      >
        
        {/* MARQUEE TRACK (Infinite Scrolling) */}
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
            
          {/* Render List Twice for seamless looping */}
          {[...content, ...content].map((text, index) => (
            <div key={index} className="flex items-center gap-12">
              
              {/* TEXT */}
              <span className="text-white font-black text-xl lg:text-2xl tracking-wide uppercase">
                {text}
              </span>

              {/* ICON (Black) */}
                <Image
                src="/images/Vector.png"
                alt="Steering Wheel Icon"
                width={40}
                height={40}
                className="w-8 h-8 lg:w-10 lg:h-10 mr-6"
              />
            </div>
          ))}

        </div>
      </div>

      {/* 
          CSS FOR ANIMATION 
          (You can add this to your global.css or tailwind config, 
           but included here for copy-paste portability)
      */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}