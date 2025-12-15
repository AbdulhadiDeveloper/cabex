"use client";

import React, { useRef, useState, useEffect } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Static Data
const reviews = [
  {
    id: 1,
    title: "Great Customer Service",
    text: "Great Customer Service from Start to Finish 👍. The driver was waiting exactly where stated and the car was immaculate.",
    author: "Guest",
    time: "1 day ago",
    stars: 5,
  },
  {
    id: 2,
    title: "A delightful and relaxing journey",
    text: "A delightful and relaxing journey, with light banter throughout. One of the best taxi experiences I've had in London.",
    author: "Patrick Shannon",
    time: "2 days ago",
    stars: 5,
  },
  {
    id: 3,
    title: "Recommended",
    text: "On time, polite, clean vehicle. The booking process was simple and the price was very competitive for Heathrow.",
    author: "J Kowal",
    time: "3 days ago",
    stars: 5,
  },
  {
    id: 4,
    title: "Very reliable. Excellent service",
    text: "Very reliable. Excellent service. Driver was professional and helped with all our heavy luggage.",
    author: "Gareth J",
    time: "30 November",
    stars: 5,
  },
  {
    id: 5,
    title: "Smooth Airport Transfer",
    text: "Seamless transfer from Gatwick to Central London. Driver was early and text me on landing. 5 stars.",
    author: "Sarah M",
    time: "28 November",
    stars: 5,
  },
  {
    id: 6,
    title: "Professional & Timely",
    text: "Used their service for a business trip. Driver was impeccably dressed and knew the quickest route during rush hour.",
    author: "David L",
    time: "25 November",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // 1. SCROLL FUNCTION (Manual + Auto)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = 340; // Card Width + Gap

      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        // Infinite Loop Logic: If near end, go back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  // 2. AUTO PLAY LOGIC
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        scroll("right");
      }, 3000); // Scrolls every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-[#EBEBEB] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
            Trusted by millions of travellers, <span className="text-[#9C0E0F]">UK wide</span>
          </h2>
        </div>

        {/* CAROUSEL WRAPPER */}
        {/* Added Event Listeners to Pause Auto-Scroll when user hovers/touches */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          
          {/* Navigation Buttons (Absolute Left/Right) */}
         

          {/* SCROLLABLE CONTAINER */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="max-w-[300px] lg:max-w-[320px] bg-white rounded-[20px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-center border border-gray-100 flex-shrink-0"
              >
                {/* Stars & Verified */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                        <Star size={10} className="text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <CheckCircle size={12} fill="#A0A0A0" className="text-white" />
                    <span className="text-[10px] font-medium">Verified</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#1A1A1A] font-bold text-sm mb-2 line-clamp-1">
                  {review.title}
                </h3>

                {/* Body Text */}
                <p className="text-gray-600 text-xs leading-relaxed mb-4 min-h-[48px] line-clamp-3">
                  {review.text}
                </p>

                {/* Author & Date */}
                <div className="text-[11px] text-gray-400 font-medium">
                  <span className="font-bold text-gray-600">{review.author},</span> <span>{review.time}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        <div className="flex flex-col items-center">
    
    {/* Logos Container */}
    <div className="flex flex-wrap items-center justify-center gap-20 lg:gap-32 border-t border-gray-200 pt-10 w-full max-w-7xl">
        
        {/* Google Reviews - Increased 50% */}
        <div className="relative w-56 h-36 cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image 
                src="/images/googleFull.png" 
                alt="Google Reviews" 
                fill 
                className="object-contain" 
            />
        </div>

        {/* Trustpilot - Increased 50% */}
        <div className="relative w-56 h-72 cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image 
                src="/images/trustpilotFull.png" 
                alt="Trustpilot" 
                fill 
                className="object-contain" 
            />
        </div>

        {/* TripAdvisor - Increased 50% */}
        <div className="relative w-60 h-72 cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image 
                src="/images/tripadvisor.png" 
                alt="TripAdvisor" 
                fill 
                className="object-contain" 
            />
        </div>

        {/* Yelp - Increased 50% */}
        <div className="relative w-44 h-48 cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image 
                src="/images/Yelp.png" 
                alt="Yelp" 
                fill 
                className="object-contain" 
            />
        </div>

    </div>
</div>

      </div>
    </section>
  );
}