import React from "react";
import Image from "next/image";

export default function MissionVisionSection() {
  return (
    <section className="bg-[#EBEBEB] py-16 lg:py-24 px-4 md:px-8 font-sans w-full flex justify-center">
      
      {/* WRAPPER */}
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row items-center justify-center relative gap-6 lg:gap-0">
        
        {/* =========================================
            1. LEFT CARD (Vision)
            - Mobile: Order 2, Full Width
            - Desktop: Order 1, Fixed Width, Pushed Right
           ========================================= */}
        <div className="relative z-10 order-2 lg:order-1 w-full max-w-[400px] lg:w-[350px] min-h-[350px] lg:h-[420px] bg-[#F5F5F5] rounded-[20px] shadow-lg flex flex-col justify-center p-8 lg:p-10 border-l-[6px] border-[#900c0c] lg:-mr-6">
            
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4 lg:mb-5 tracking-tight">
                Vision
            </h3>
            
            <p className="text-gray-500 text-xs lg:text-[13px] leading-relaxed font-medium">
                Our Vision Is To Become The Most Trusted Name In Airport Transportation, Known For Innovation, Accessibility, And Exceptional Customer Care. Together, We’re Redefining The Way People Travel To And From The Airport.
            </p>
        </div>

        {/* =========================================
            2. CENTER CARD (The Focal Point)
            - Mobile: Order 1, Full Width, Normal Shadow
            - Desktop: Order 2, Taller, Overlaps sides
           ========================================= */}
        <div className="relative z-20 order-1 lg:order-2 w-full max-w-[400px] lg:w-[450px] h-[500px] lg:h-[580px] rounded-[40px] shadow-2xl bg-black overflow-hidden border border-gray-800/50">
            
            {/* A. Background Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/london.jpg" 
                    alt="City Background" 
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80"></div>
            </div>

            {/* B. Content Wrapper */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between pt-16 lg:pt-20">
                
                {/* Title */}
                <div className="text-center px-6">
                    <h2 className="text-4xl lg:text-[3.2rem] font-bold text-white mb-2 tracking-tighter leading-none drop-shadow-xl">
                        Our Mission
                    </h2>
                    <h2 className="text-3xl lg:text-[2.8rem] font-light text-gray-200 tracking-wide drop-shadow-md">
                        & Vision
                    </h2>
                </div>

                {/* 
                   C. Car Image (Responsive Positioning)
                   - It sits inside this card to guarantee alignment on all screens.
                   - Anchored to bottom.
                */}
                <div className="relative w-full h-[60%] lg:h-[60%] mt-auto">
                    <Image 
                        src="/images/carImage.png" 
                        alt="Luxury Mercedes" 
                        fill
                        className="object-contain object-bottom drop-shadow-[0_-15px_30px_rgba(0,0,0,0.6)]"
                    />
                </div>

            </div>
        </div>

        {/* =========================================
            3. RIGHT CARD (Mission)
            - Mobile: Order 3, Full Width
            - Desktop: Order 3, Fixed Width, Pushed Left
           ========================================= */}
        <div className="relative z-10 order-3 lg:order-3 w-full max-w-[400px] lg:w-[350px] min-h-[350px] lg:h-[420px] bg-[#F5F5F5] rounded-[20px] shadow-lg flex flex-col justify-center p-8 lg:p-10 border-r-[6px] border-[#900c0c] lg:-ml-6">
            
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4 lg:mb-5 tracking-tight">
                Mission
            </h3>
            
            <p className="text-gray-500 text-xs lg:text-[13px] leading-relaxed font-medium">
                At Airport Driven, Our Mission Is To Offer Seamless, Reliable, And Inclusive Airport Transfers Tailored To Every Traveler’s Needs. We Strive To Ensure Comfort, Safety, And Punctuality In Every Journey.
            </p>
        </div>

      </div>
      
    </section>
  );
}