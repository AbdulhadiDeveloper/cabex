import React from "react";
import Image from "next/image";

export default function DefinitionSection() {
  return (
    <section className="bg-[#EBEBEB] py-20 lg:py-28 px-4 md:px-16 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        
        {/* =========================================
            LEFT SIDE: TEXT CONTENT
           ========================================= */}
        <div className="flex flex-col justify-center order-1 lg:order-1">
            
            {/* Top Paragraph */}
            <p className="text-gray-500 text-xs lg:text-[13px] leading-relaxed mb-10 max-w-xl font-medium text-justify lg:text-left">
                These Terms And Conditions Constitute The Entire Agreement Between You And Airport Driven Regarding The Provision Of Airport Transfer Or Car Services (“Service”). By Completing The Booking Form And Using The Service, You Unconditionally Accept The Terms And Conditions Outlined In This Agreement.
            </p>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-8 tracking-tight">
                Definition
            </h2>

            {/* Definitions List */}
            <ul className="flex flex-col gap-4">
                
                {/* Item 1 */}
                <li className="flex items-start gap-3">
                    {/* Custom Bullet */}
                    <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                    
                    <p className="text-gray-600 text-xs lg:text-[13px] leading-relaxed font-medium max-w-md">
                        <span className="text-gray-800 font-bold">Airport Driven:</span> Refers to &qout;we&ldquo;&qout; &qout;us&ldquo;&qout; or &qout;the company&ldquo;&qout; with a registered office at 24 Burnham Gardens, TW4 6LR.
                    </p>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-3">
                    {/* Custom Bullet */}
                    <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                    
                    <p className="text-gray-600 text-xs lg:text-[13px] leading-relaxed font-medium max-w-md">
                        <span className="text-gray-800 font-bold">You or Your:</span> Refers to any individual, company, firm, organization, or business placing a booking with us.
                    </p>
                </li>

            </ul>

        </div>

        {/* =========================================
            RIGHT SIDE: VISUAL CARD
           ========================================= */}
        <div className="flex justify-center lg:justify-center order-2 lg:order-2">
            
            <div className="relative w-full max-w-[400px] lg:w-[450px] h-[550px] rounded-[40px] shadow-2xl bg-black overflow-hidden border border-gray-800/50">
                
                {/* A. Background Image (City) */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/london.jpg" // Use your city/london image
                        alt="City Background" 
                        fill
                        className="object-cover opacity-70"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80"></div>
                </div>

                {/* B. Content Wrapper */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between pt-24">
                    
                    {/* Title */}
                    <div className="text-center px-6">
                        <h2 className="text-4xl lg:text-[3rem] font-bold text-white mb-2 tracking-tighter leading-none drop-shadow-xl">
                            Our Mission
                        </h2>
                        <h2 className="text-3xl lg:text-[2.6rem] font-light text-gray-200 tracking-wide drop-shadow-md">
                            & Vision
                        </h2>
                    </div>

                    {/* C. Car Image */}
                    <div className="relative w-full h-[60%] mt-auto">
                        <Image 
                            src="/images/carImage.png" // Use your car image
                            alt="Luxury Mercedes" 
                            fill
                            className="object-contain object-bottom drop-shadow-[0_-15px_30px_rgba(0,0,0,0.6)]"
                        />
                    </div>

                </div>
            </div>

        </div>

      </div>
    </section>
  );
}