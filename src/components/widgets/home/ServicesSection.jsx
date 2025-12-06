"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    title: "BUSINESS CHAUFFEUR",
    image: "/images/carasol3.jpg",
    description: "Elevate Your Business Travel With Our Professional Chauffeur Service. Punctual, Discreet, And Luxurious, We Ensure You Arrive In Style And Comfort."
  },
  {
    id: 2,
    title: "Airport Transfers",
    image: "/images/carasol1.jpg",
    description: "Experience Smooth And Timely Transfers To And From The Airport With Our Professional Chauffeurs. We Ensure A Comfortable, Stress-Free Journey."
  },
  {
    id: 3,
    title: "EVENT CHAUFFEUR",
    image: "/images/carasol2.jpg",
    description: "Whether It's A Wedding, Gala, Or Special Occasion, Our Professional Chauffeurs Provide Luxury Transportation Tailored To Your Event."
  },
  // Added a 4th item to demonstrate the loop effect better (optional)
  {
    id: 4,
    title: "PRIVATE TOURS",
    image: "/images/carasol1.jpg",
    description: "Explore the city in comfort with our private tour services. Customized routes and knowledgeable drivers make for an unforgettable experience."
  }
];

// SVG Path for the "Notch" shape
const CARD_PATH = "M 30,55 Q 60,55 60,25 L 60,20 Q 60,0 80,0 L 280,0 Q 300,0 300,20 L 300,220 L 300,280 Q 300,300 280,300 L 250,300 Q 220,300 220,330 L 220,335 Q 220,355 200,355 L 20,355 Q 0,355 0,335 L 0,85 Q 0,55 30,55 Z";

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // LOGIC: Infinite Loop
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length);
  };

  // LOGIC: Get the 3 items to show based on currentIndex
  // This rotates the array so the cards appear to slide left/right
  const getVisibleServices = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % servicesData.length;
      items.push(servicesData[index]);
    }
    return items;
  };

  const visibleServices = getVisibleServices();

  return (
    <section className="bg-[#EBEBEB] my-6 lg:my-10 px-4 md:px-8 font-sans ">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-[4rem] font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Our <span className="text-[#900c0c]">Services</span>
          </h2>
          <p className="text-gray-600 text-sm lg:text-[15px] font-medium leading-relaxed max-w-2xl">
            Discover How Our Services Ensure A Smooth, Reliable, And Enjoyable Airport Transfer Experience.
          </p>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative flex items-center justify-center mx-20">
            
            {/* LEFT BUTTON */}
            <button 
                onClick={prevSlide}
                className="hidden lg:flex absolute -left-16 z-30 w-14 h-14 bg-[#1a1a1a] rounded-full items-center justify-center text-white hover:bg-[#900c0c] transition-all duration-300 shadow-xl hover:scale-110"
            >
                <ArrowLeft size={24} />
            </button>

            {/* CARDS GRID (Responsive: 1 col mobile, 2 col tablet, 3 col desktop) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-2">
                {visibleServices.map((service) => (
                    <div key={service.id} className="flex flex-col items-center group animate-fadeIn">
                        
                        {/* =========================================
                            DIV 1: UPPER (Picture + Shape + Label)
                           ========================================= */}
                        <div className="relative w-full max-w-[400px] aspect-[300/355] drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                            
                            <svg 
                                viewBox="0 0 300 355" 
                                className="w-full h-full"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <clipPath id={`clip-${service.id}`}>
                                        <path d={CARD_PATH} />
                                    </clipPath>
                                </defs>

                                {/* 1. The Red Outline (Offset Background) */}
                                <path 
                                    d={CARD_PATH} 
                                    fill="none" 
                                    stroke="#900c0c" 
                                    strokeWidth="2"
                                    transform="translate(10, 10)" 
                                />

                                {/* 2. The Image Mask */}
                                <g clipPath={`url(#clip-${service.id})`}>
                                    {/* Placeholder BG */}
                                    <rect width="100%" height="100%" fill="#e5e5e5" />
                                    
                                    {/* ACTUAL IMAGE */}
                                    <image 
                                        href={service.image} 
                                        width="100%" 
                                        height="100%" 
                                        preserveAspectRatio="xMidYMid slice"
                                        className="transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    
                                    {/* Dark overlay */}
                                    <rect width="100%" height="100%" fill="black" fillOpacity="0.05" />
                                </g>
                            </svg>

                            {/* 3. The Red Title Label */}
                            <div className="absolute top-[65px] left-0 z-20">
                                <div className="bg-[#900c0c]/95 backdrop-blur-sm text-white font-bold text-sm px-5 py-3 uppercase tracking-wider shadow-md rounded-r-sm">
                                    {service.title}
                                </div>
                            </div>
                        </div>

                        {/* =========================================
                            DIV 2: BOTTOM (Text Content)
                           ========================================= */}
                        <div className="mt-8 text-center max-w-[320px]">
                            <p className="text-gray-500 text-[11px] lg:text-xs font-medium leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            {/* RIGHT BUTTON */}
            <button 
                onClick={nextSlide}
                className="hidden lg:flex absolute -right-16 z-30 w-14 h-14 bg-[#1a1a1a] rounded-full items-center justify-center text-white hover:bg-[#900c0c] transition-all duration-300 shadow-xl hover:scale-110"
            >
                <ArrowRight size={24} />
            </button>

        </div>

        {/* Pagination Dots (Visual Indicator of rotation) */}
        <div className="flex justify-center gap-3 mt-12">
            {servicesData.map((_, idx) => (
                <div 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                        idx === currentIndex ? "w-8 bg-[#900c0c]" : "w-2.5 bg-gray-300 hover:bg-[#900c0c]/50"
                    }`}
                ></div>
            ))}
        </div>

      </div>
    </section>
  );
}