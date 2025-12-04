import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section className="bg-[#EBEBEB] py-20 lg:py-28 px-6 md:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* =========================================
            LEFT SIDE: CONTACT INFO
           ========================================= */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
            
            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
                <span className="text-[#900c0c]">Get In Touch</span> <span className="text-[#1A1A1A]">With Us</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-xs lg:text-[13px] leading-relaxed mb-12 max-w-md font-medium">
                Got Questions Or Need Assistance? Reach Out To Us Anytime, And We’ll Ensure You Get The Support You Need.
            </p>

            {/* Contact Grid (3 Columns) */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
                
                {/* 1. Phone */}
                <div className="flex flex-col items-center text-center">
                    {/* Icon Box */}
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#900c0c] rounded-t-full flex items-center justify-center text-white shadow-md mb-4 hover:scale-110 transition-transform">
                        <Phone size={20}  />
                    </div>
                    {/* Text */}
                    <h4 className="text-[11px] lg:text-xs font-bold text-[#1A1A1A] mb-1">
                        UK: +44 2080504099
                    </h4>
                    <span className="text-[9px] lg:text-[10px] text-gray-500 leading-tight">
                        Available 24/7 For All Inquiries
                    </span>
                </div>

                {/* 2. Email */}
                <div className="flex flex-col items-center text-center">
                    {/* Icon Box */}
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#900c0c] rounded-t-full flex items-center justify-center text-white shadow-md mb-4 hover:scale-110 transition-transform">
                        <Mail size={20} />
                    </div>
                    {/* Text */}
                    <h4 className="text-[11px] lg:text-xs font-bold text-[#1A1A1A] mb-1">
                        Hello@Airportdriven.Com
                    </h4>
                    <span className="text-[9px] lg:text-[10px] text-gray-500 leading-tight">
                        We&#39;ll Respond Within 24 Hours.
                    </span>
                </div>

                {/* 3. Address */}
                <div className="flex flex-col items-center text-center">
                    {/* Icon Box */}
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#900c0c] rounded-t-full flex items-center justify-center text-white shadow-md mb-4 hover:scale-110 transition-transform">
                        <MapPin size={20}  />
                    </div>
                    {/* Text */}
                    <h4 className="text-[11px] lg:text-xs font-bold text-[#1A1A1A] mb-1 max-w-[120px]">
                        62 Bath Rd, London UB3 5AH,
                    </h4>
                    <span className="text-[9px] lg:text-[10px] text-gray-500 leading-tight">
                        United Kingdom
                    </span>
                </div>

            </div>

        </div>

        {/* =========================================
            RIGHT SIDE: IMAGE COLLAGE
           ========================================= */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[450px] h-auto">
                <Image 
                    src="/images/Frame 49.png" // Save your uploaded image with this name
                    alt="Get In Touch Visual" 
                    width={600}
                    height={500}
                    className="object-contain drop-shadow-xl"
                />
            </div>
        </div>

      </div>
    </section>
  );
}