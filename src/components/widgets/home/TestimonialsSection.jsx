"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "N Gupta",
    role: "Business Traveler",
    rating: 5,
    text: "Airport Driven Took Our London Sightseeing Tour To The Next Level. The Chauffeur's Personalized Approach And The Comfortable Ride Made It An Exceptional Experience. Highly Recommend",
    image: "/images/blogImage.jpg"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Event Planner",
    rating: 5,
    text: "The professionalism shown by the drivers was outstanding. From the clean vehicles to the punctual arrival, everything was perfect for our corporate event transportation.",
    image: "/images/blogImage.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Frequent Flyer",
    rating: 5,
    text: "I rely on Airport Driven for all my airport transfers. Reliable, safe, and incredibly comfortable. It takes the stress out of my weekly travel routine completely.",
    image: "/images/blogImage.jpg"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle slide changes with a cooldown to prevent spam-clicking glitches
  const handleSlide = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    // Match this timeout to the CSS duration (700ms)
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Helper to determine the position of a card relative to the active index
  const getCardPosition = (index) => {
    if (index === currentIndex) return "active";
    if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) return "left";
    if (index === (currentIndex + 1) % testimonials.length) return "right";
    return "hidden";
  };

  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 1. HEADER */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-[4rem] font-bold text-[#1A1A1A] tracking-tight">
            Testimonials
          </h2>
        </div>

        {/* 2. CAROUSEL CONTAINER */}
        <div className="relative flex items-center justify-center h-[380px] lg:h-[450px]">
            
            {/* RENDER ALL CARDS */}
            {testimonials.map((data, index) => {
                const position = getCardPosition(index);
                
                // Base styles for positioning and transition
                let positionStyles = "opacity-0 scale-50 z-0 pointer-events-none"; 
                
                if (position === "active") {
                    positionStyles = "opacity-100 scale-100 z-30 translate-x-0 pointer-events-auto";
                } else if (position === "left") {
                    // Move Left and Blur
                    positionStyles = "opacity-40 scale-90 z-10 -translate-x-[15%] lg:-translate-x-[60%] blur-[2px]";
                } else if (position === "right") {
                    // Move Right and Blur
                    positionStyles = "opacity-40 scale-90 z-10 translate-x-[15%] lg:translate-x-[60%] blur-[2px]";
                }

                return (
                    <div 
                        key={data.id}
                        className={`absolute w-full max-w-[680px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${positionStyles}`}
                    >
                        <TestimonialCard 
                            data={data} 
                            isActive={position === "active"} 
                            onNext={() => handleSlide("next")}
                            onPrev={() => handleSlide("prev")}
                        />
                    </div>
                );
            })}

        </div>

      </div>
    </section>
  );
}

// Sub-component for individual cards
function TestimonialCard({ data, isActive, onNext, onPrev }) {
    return (
        <div className="relative">
            <div 
                className={`
                    rounded-[30px] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 shadow-2xl h-auto min-h-[280px]
                    transition-colors duration-700
                    ${isActive 
                        ? "bg-gradient-to-r from-[#9C0E0F] to-[#360505]" // Active Red
                        : "bg-gray-200" // Inactive Grey
                    }
                `}
            >
                {/* Profile Image */}
                <div className="relative shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[200px] lg:w-[220px] lg:h-[240px] rounded-[20px] overflow-hidden shadow-lg">
                    <Image 
                        src={data.image} 
                        alt={data.name} 
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col text-center md:text-left pr-0 md:pr-4">
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="text-[#FFC107] fill-[#FFC107]" />
                        ))}
                    </div>

                    {/* Name */}
                    <h3 className={`text-2xl font-bold mb-2 ${isActive ? "text-white" : "text-gray-800"}`}>
                        {data.name}
                    </h3>

                    {/* Text */}
                    <p className={`text-md lg:text-[13px] leading-relaxed font-sm ${isActive ? "text-gray-300" : "text-gray-600"}`}>
                        {data.text}
                    </p>

                </div>
            </div>

            {/* NAVIGATION BUTTONS (Only visible on Active Card) */}
            {/* We use opacity to hide them on inactive cards so they fade out smoothly */}
            <div className={`absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 transition-opacity duration-300 ${isActive ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"}`}>
                
                {/* Left Button */}
                <button 
                    onClick={onPrev}
                    className="absolute -left-4 lg:-left-8 w-12 h-12 lg:w-14 lg:h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white border-2 border-white shadow-xl hover:bg-[#333] hover:scale-110 transition-all z-40"
                >
                    <ArrowLeft size={24} />
                </button>

                {/* Right Button */}
                <button 
                    onClick={onNext}
                    className="absolute -right-4 lg:-right-8 w-12 h-12 lg:w-14 lg:h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white border-2 border-white shadow-xl hover:bg-[#333] hover:scale-110 transition-all z-40"
                >
                    <ArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}