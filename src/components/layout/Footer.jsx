"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import NewsletterSection from "@/components/shared/ui/NewsletterSection";

// Social Media Data
// Make sure to save your PNGs in 'public/images/social/' with these names
const socialIcons = [
  { name: "Facebook", src: "/images/Facebook.png" },
  { name: "Instagram", src: "/images/Instagram.png" },
  { name: "WhatsApp", src: "/images/whatsapp.png" },
  { name: "YouTube", src: "/images/Youtube.png" },
];

export default function Footer() {
  return (
    <footer className="bg-[#181A1F] text-white pt-48 pb-8 overflow-visible font-sans relative">
      
      {/* NEWSLETTER SECTION (Floating on top) */}
      <div className="absolute top-0 w-full -translate-y-1/2 z-50">
        <NewsletterSection />
      </div>
      
      {/* =========================================
          BACKGROUND WATERMARKS
         ========================================= */}
      {/* =========================================
          BACKGROUND WATERMARKS (Clipped)
         ========================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Wheel */}
        <div className="absolute hidden md:block bg-white bg-clip-text text-transparent top-[-50px] left-[-200px] w-[500px] h-[600px] opacity-[0.7]">
           <Image 
              src="/images/wheelImage1.png" 
              alt="Watermark"
              fill
              className="object-contain rotate-[-15deg]"
           />
        </div>
        {/* Right Wheel */}
        <div className="absolute hidden md:block bg-white bg-clip-text text-transparent top-[-50px] right-[-260px] w-[600px] h-[600px] opacity-[0.7]">
           <Image 
              src="/images/wheelImage2.png"
              alt="Watermark"
              fill
              className="object-contain rotate-[15deg]"
           />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* =========================================
            TOP SECTION (Grid)
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            
            {/* COLUMN 1: BRAND & SOCIALS */}
            <div className="flex flex-col">
                
                {/* LOGO */}
                <div className="mb-8 relative w-[180px] h-[60px]">
                    <Image 
                        src="/images/logo2.png" 
                        alt="Airport Driven Logo"
                        fill
                        className="object-contain object-left"
                    />
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                    Reliable, luxurious, and always on time— our airport transfer service is designed to make your travel experience effortless.
                </p>

                {/* Social Icons (Using PNGs) */}
                <div className="flex items-center gap-4">
                    {socialIcons.map((social, index) => (
                        <Link 
                            key={index}
                            href="#" 
                            className="relative group w-8 h-8 bg-[#9C0E0F] bg-clip-text text-transparent flex items-center justify-center     transition-colors duration-300"
                        >
                            
                                <Image 
                                    src={social.src} 
                                    alt={social.name}
                                    fill
                                    className="object-contain transition-all duration-300 brightness-100 group-hover:brightness-100 group-hover:invert"
                                />
                            
                        </Link>
                    ))}
                </div>
            </div>

            {/* COLUMN 2: ABOUT US */}
            <div className="lg:pl-8">
                <h3 className="text-xl font-bold mb-8">About Us</h3>
                <ul className="flex flex-col gap-4 text-sm text-gray-400">
                    <li><Link href="#" className="hover:text-white transition-colors">Our History</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Why Us</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Our Users</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Our Values</Link></li>
                </ul>
            </div>

            {/* COLUMN 3: QUICK LINK */}
            <div>
                <h3 className="text-xl font-bold mb-8">Quick Link</h3>
                <ul className="flex flex-col gap-4 text-sm text-gray-400">
                    <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Product</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Blogs</Link></li>
                </ul>
            </div>

            {/* COLUMN 4: CONTACT US */}
            <div>
                <h3 className="text-xl font-bold mb-8">Contact Us</h3>
                <ul className="flex flex-col gap-4 text-sm text-gray-400">
                    <li>
                        <span className="block text-gray-300 mb-1">Phone: UK: +44 2080504099</span>
                    </li>
                    <li>
                        <span className="block text-gray-300 mb-1">Address: 62 Bath Rd, London UB3 5AH, United</span>
                    </li>
                    <li>
                        <span className="block text-gray-300">Operating Hours: 24/7</span>
                    </li>
                </ul>
            </div>

        </div>

        {/* =========================================
            BOTTOM BAR
           ========================================= */}
        <div className="border-t border-[#9F9F9F] pt-8 text-center">
            <p className="text-[#FFFFFF] text-sm">
                © 2024 Airport Driven. all right products
            </p>
        </div>

      </div>
    </footer>
  );
}