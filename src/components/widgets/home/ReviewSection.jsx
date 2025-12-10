"use client";

import React, { useRef } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

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
];

export default function ReviewSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Card width + gap
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className=" py-16 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
            Trusted by millions of travellers, <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">UK wide</span>
          </h2>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative">
          
          {/* Navigation Buttons (Absolute Left/Right) */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-[#9C0E0F] rounded-full flex items-center justify-center text-[#9C0E0F] hover:bg-[#9C0E0F] hover:text-white transition-colors shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>

          <button 
            onClick={() => scroll("right")}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-[#9C0E0F] rounded-full flex items-center justify-center text-[#9C0E0F] hover:bg-[#9C0E0F] hover:text-white transition-colors shadow-lg"
          >
            <ChevronRight size={20} />
          </button>

          {/* SCROLLABLE CONTAINER */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="min-w-[300px] lg:min-w-[320px] bg-white rounded-[20px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-center border border-gray-100"
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

        {/* BOTTOM RATING SUMMARY */}
        <div className="text-center mt-10">
            <p className="text-sm text-[#1A1A1A] font-medium mb-2">
                Rated <span className="font-bold">4.9 / 5</span> based on <span className="underline decoration-gray-400 cursor-pointer hover:text-[#9C0E0F]">9,325 reviews</span>.
            </p>
            <div className="flex items-center justify-center gap-2">
                <Star size={24} className="text-[#00b67a] fill-[#00b67a]" />
                <span className="text-lg font-bold text-[#1A1A1A]">Trustpilot</span>
            </div>
        </div>

      </div>
    </section>
  );
}