"use client";

import React from "react";
import Image from "next/image";
import { Mail, Youtube, Instagram, Phone, Facebook } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="bg-[#EBEBEB] py-20 px-6 md:px-20 font-sans mb-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* =========================================
            LEFT SIDE: CONTACT FORM
           ========================================= */}
        <div className="flex flex-col gap-6">
            
            {/* 1. The Bordered Form Container */}
            <div className="border-[3px] border-[#5e0808] rounded-[15px] p-6 lg:p-8 flex flex-col gap-5 bg-[#EBEBEB]">
                
                {/* Row 1: Names */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-600">First Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-[#D9D9D9] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-600">Last Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-[#D9D9D9] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                        />
                    </div>
                </div>

                {/* Row 2: Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-600">E-Mail Address</label>
                    <div className="relative">
                        <input 
                            type="email" 
                            className="w-full bg-[#D9D9D9] rounded-md pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                        />
                        <Mail size={18} className="absolute left-3 top-3 text-gray-600" />
                    </div>
                </div>

                {/* Row 3: Subject */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-600">Subject</label>
                    <input 
                        type="text" 
                        className="w-full bg-[#D9D9D9] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                    />
                </div>

                {/* Row 4: Message */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-600">Message</label>
                    <textarea 
                        rows={6}
                        placeholder="Write Your Message Here...."
                        className="w-full bg-[#D9D9D9] rounded-md px-4 py-3 text-xs lg:text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-900 resize-none"
                    ></textarea>
                </div>

            </div>

            {/* 2. Submit Button (Outside the border) */}
            <button className="w-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold py-4 rounded-full shadow-lg hover:bg-[#4a0404] transition-all text-sm tracking-wide">
                Submit
            </button>

        </div>

        {/* =========================================
            RIGHT SIDE: INFO & MAP
           ========================================= */}
        <div className="flex flex-col pt-2">
            
            {/* Heading */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-6">
                Find <span className="text-[#900c0c]">Us</span> Here
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-xs lg:text-sm leading-relaxed mb-8 font-medium max-w-md">
                Strategically Located To Ensure Easy Access, Our Office Is A Hub Of Convenience For All Your Airport Transfer Needs.
            </p>

            {/* Map Container */}
            <div className="w-full h-[200px] lg:h-[250px] relative rounded-[15px] overflow-hidden border-[2px] border-black shadow-md mb-8">
                <Image 
                    src="/images/map2.png" // Save your uploaded map image here
                    alt="Map Location"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Social Media */}
            <div>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-4">Social Media</h3>
                
                <div className="flex items-center gap-4">
                    {/* YouTube */}
                    <a href="#" className="hover:scale-110 transition-transform">
                        <Youtube size={36} className="text-[#900c0c]"  />
                    </a>
                    {/* Instagram */}
                    <a href="#" className="hover:scale-110 transition-transform">
                        <Instagram size={28} className="text-[#900c0c]" />
                    </a>
                    {/* WhatsApp */}
                    <a href="#" className="hover:scale-110 transition-transform">
                        {/* Using Phone icon to represent WhatsApp as per generic library, or use custom SVG */}
                        <div className="w-7 h-7 rounded-full border-2 border-[#900c0c] flex items-center justify-center">
                             <Phone size={16} className="text-[#900c0c]" fill="currentColor" />
                        </div>
                    </a>
                    {/* Facebook */}
                    <a href="#" className="border-2 border-[#900c0c] rounded-lg hover:scale-110 transition-transform">
                        <Facebook size={26} className="text-[#900c0c]" fill="currentColor" strokeWidth={0} />
                    </a>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}