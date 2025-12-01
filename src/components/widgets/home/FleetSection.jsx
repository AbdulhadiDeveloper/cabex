"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Mock Data for the Fleet (You can add more cars here)
const fleetData = [
  {
    id: 1,
    name: "Premium People Carrier",
    description: "At Airport Driven, We Stock Exceptional Vehicles. We Are Connoisseurs Of Outstanding Driving Experiences. Our Vehicle Range Includes Executive, Premium Saloons And Luxury Cars From The World's Most Exclusive Car Manufacturers. These Cars Look And Feel Opulent, Perform Superbly And Are Available To You At A Surprisingly Affordable Price. Why Not Escape Your Routine In A Vehicle That's Truly Out Of The Ordinary?",
    // Using a transparent PNG of a black luxury car side view
    image: "/images/jeep.png", 
    specs: {
      people: 4,
      briefcase: 2,
      luggage: 2
    }
  },
  {
    id: 2,
    name: "Executive Saloon Class",
    description: "Experience the ultimate in comfort and style with our Executive Saloons. Perfect for business travel, offering a quiet environment to work or relax while we handle the driving.",
    image: "/images/car1.png", 
    specs: {
      people: 3,
      briefcase: 2,
      luggage: 3
    }
  }
];

export default function FleetSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === fleetData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? fleetData.length - 1 : prev - 1));
  };

  const currentCar = fleetData[currentIndex];

  return (
    <section className=" py-20 px-4 md:px-8 font-sans border-t border-white/20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 1. Header & Description */}
        <div className="mb-12">
          <h2 className="text-5xl lg:text-[4rem] font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Our <span className="text-[#900c0c]">Fleet</span>
          </h2>
          <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed max-w-5xl font-medium">
            {currentCar.description}
          </p>
        </div>

        {/* 2. Car Carousel Area */}
        <div className="relative flex items-center justify-between min-h-[300px] lg:min-h-[400px] mb-8">
            
            {/* Left Button */}
            <button 
                onClick={prevSlide}
                className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer z-20 group"
            >
                <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-[#900c0c] group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Car Image */}
            <div className="flex-1 flex justify-center items-center px-4 lg:px-10 relative">
                {/* 
                   Using an img tag for the car. 
                   Added a drop shadow filter to ground the car on the background.
                */}
                <Image 
                    src={currentCar.image} 
                    alt={currentCar.name}
                    className="w-full max-w-[800px] object-contain drop-shadow-2xl transition-all duration-500 ease-in-out transform"
                    style={{ filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.3))" }}
                    width={800}
                    height={400}
                />
            </div>

            {/* Right Button */}
            <button 
                onClick={nextSlide}
                className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer z-20 group"
            >
                <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#900c0c] group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* 3. Bottom Info Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-2 lg:px-12">
            
            {/* Car Name */}
            <h3 className="text-3xl lg:text-4xl font-bold text-[#333] tracking-tight text-center lg:text-left">
                {currentCar.name}
            </h3>

            {/* Specs Pill */}
            {/* This uses the specific dark red gradient and shadow from your image */}
            <div className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white/90 px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-6 text-sm lg:text-lg font-light tracking-wide">
                <div className="flex items-center gap-2">
                    <span className="text-[#bf6a6a]">•</span>
                    <span>{currentCar.specs.people} person</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[#bf6a6a]">•</span>
                    <span>{currentCar.specs.briefcase} Briefcase</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[#bf6a6a]">•</span>
                    <span>{currentCar.specs.luggage} luggage</span>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}