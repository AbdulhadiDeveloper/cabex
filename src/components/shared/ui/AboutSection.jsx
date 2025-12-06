

import React from "react";
// We need a specific icon for the steering wheel. 
// Lucide's 'SteeringWheel' is close, but I'll create a custom SVG to match the reference exactly.
 import Image from "next/image";


const SteeringWheelIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2 L12 12" />
    <path d="M12 12 L4 18" />
    <path d="M12 12 L20 18" />
    <path d="M2 12 L22 12" strokeWidth="1" className="opacity-0" /> {/* Spacer */}
  </svg>
);

export default function AboutSection() {
  return (
    <section className="py-6 lg:py-10 px-4 md:px-8 flex justify-center overflow-hidden">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* =========================================
            LEFT SIDE: IMAGE COLLAGE & RED SLASH
           ========================================= */}
        <div className="relative w-full aspect-[10/9] lg:aspect-square max-w-[650px] mx-auto flex justify-center items-center">
  <Image
    src="/images/Frame 49.png"
    width={500}
    height={500}
    alt="About Us" // Always good to add an alt tag
  />
</div>


        {/* =========================================
            RIGHT SIDE: TEXT CONTENT
           ========================================= */}
        <div className="flex flex-col items-start justify-center space-y-8 pl-0 lg:pl-10">
            
            {/* Pill Label */}
            <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white text-md font-xs py-2 px-20 rounded-[8px] shadow-lg inline-block tracking-wide">
                Making Your Journey
            </div>

            {/* Headings */}
            <div className="space-y-2">
                <h2 className="text-5xl lg:text-[4rem] font-bold text-[#1A1A1A] leading-tight tracking-tight">
                    Effortless And
                </h2>
                <h2 className="text-5xl lg:text-[4rem] font-bold bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent leading-tight tracking-tight">
                    Luxurious
                </h2>
            </div>

            {/* Paragraph */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                At Airport Driven, We Are Committed To Making Airport Transportation 
                Stress-Free And Luxurious. With A Fleet Of High-End Vehicles And A 
                Team Of Professional Drivers, We Ensure Every Ride Is Seamless, 
                Punctual, And Comfortable. Whether You’re Traveling For Business Or 
                Pleasure, We’re Here To Offer Reliable Transportation Tailored To Your 
                Needs.
            </p>

        </div>

      </div>
    </section>
  );
}