"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  ShoppingBag,
  Zap
} from "lucide-react";

// Mock Data - Replace '/images/cars/...' with your actual transparent PNGs
const carTypes = [
  {
    id: 1,
    title: "Saloon/Sedan",
    example: "e.g. Toyota Prius, VW Passat",
    tag: "For economy travel",
    passengers: 4,
    largeBags: 2,
    smallBags: 2,
    image: "/images/car1.png", // Reusing your existing car asset
    isElectric: false,
  },
  {
    id: 2,
    title: "Electric Vehicle (EV)",
    example: "e.g. Tesla Model 3, Ioniq 5",
    tag: "For greener travel",
    passengers: 4,
    largeBags: 2,
    smallBags: 2,
    image: "/images/car1.png",
    isElectric: true, // Will show badge
  },
  {
    id: 3,
    title: "Estate/Station Wagon",
    example: "e.g. Vauxhall Zafira",
    tag: "For more luggage space",
    passengers: 4,
    largeBags: 3,
    smallBags: 3,
    image: "/images/car1.png",
    isElectric: false,
  },
  {
    id: 4,
    title: "MPV/Minivan",
    example: "e.g. VW Sharan, Ford Galaxy",
    tag: "Ideal for families",
    passengers: 6,
    largeBags: 4,
    smallBags: 4,
    image: "/images/car1.png",
    isElectric: false,
  },
  {
    id: 5,
    title: "Executive Car",
    example: "e.g. Mercedes E-Class",
    tag: "Luxury business travel",
    passengers: 3,
    largeBags: 2,
    smallBags: 2,
    image: "/images/car1.png",
    isElectric: false,
  },
];

export default function FleetSection() {
  const scrollContainerRef = useRef(null);

  // Scroll Handler
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; // Approx card width + gap
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className=" py-16 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* =========================================
            HEADER & INFO LIST
           ========================================= */}
        <div className="mb-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] mb-8">
            Car Types{" "}
            <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">
              Availables
            </span>
          </h2>

          {/* Feature List (Two Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl">
            <ul className="space-y-3 list-disc pl-5 text-gray-700 text-sm lg:text-[15px] marker:text-[#9C0E0F]">
              <li>
                <span className="font-bold">Standard Taxis:</span> up to 3
                passengers with luggage.
              </li>
              <li>
                <span className="font-bold">MPVs:</span> up to 6 passengers.
              </li>
              <li>
                <span className="font-bold">
                  Wheelchair Accessible Vehicles:
                </span>{" "}
                Specially adapted cars with trained drivers offering
                door-to-door assistance.
              </li>
            </ul>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 text-sm lg:text-[15px] marker:text-[#9C0E0F]">
              <li>
                <span className="font-bold">Executive Cars:</span>{" "}
                Luxury/Business travel with premium comfort.
              </li>
              <li>
                <span className="font-bold">Minibuses:</span> up to 16
                passengers.
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================
            CAROUSEL CONTROLS
           ========================================= */}
        <div className="relative">
          {/* Nav Buttons (Floating) */}
          <div className="absolute -top-12 right-0 flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#9C0E0F] text-gray-500 hover:text-[#9C0E0F] flex items-center justify-center transition-all bg-white shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#9C0E0F] text-gray-500 hover:text-[#9C0E0F] flex items-center justify-center transition-all bg-white shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* =========================================
                SCROLLABLE CARDS ROW
               ========================================= */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hides scrollbar
          >
            {carTypes.map((car) => (
              <div
                key={car.id}
                className="snap-start shrink-0 w-[280px] md:w-[320px] bg-white border border-gray-200 rounded-[20px] p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* 1. IMAGE AREA */}
                <div className="h-[140px] w-full relative mb-6 flex items-center justify-center">
                  {/* EV Badge */}
                  {car.isElectric && (
                    <div className="absolute top-0 right-0 z-10 bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white p-1.5 px-4 rounded-full shadow-sm">
                      <span className="flex items-center justify-center">
                        {/* Make sure to import { Zap } from "lucide-react" at the top */}
                        <Zap size={14} fill="currentColor" strokeWidth={0} />
                      </span>
                    </div>
                  )}

                  <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* 2. TEXT CONTENT */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#1A1A1A]">
                    {car.title}
                  </h3>
                  <p className="text-xs text-gray-800 font-semibold">
                    {car.example}
                  </p>
                  <p className="text-xs text-gray-700 font-lg">{car.tag}</p>
                </div>

                {/* 3. ICONS ROW (Stats) */}
                <div className="flex items-center gap-6 mt-6 border-t border-gray-100 pt-4">
                  {/* Passengers */}
                  <div className="flex items-center gap-2" title="Passengers">
                    <User
                      size={16}
                      className="text-[#900c0c]"
                      fill="currentColor"
                    />
                    <span className="text-sm font-bold text-gray-700">
                      {car.passengers}
                    </span>
                  </div>

                  {/* Large Bags */}
                  <div
                    className="flex items-center gap-2"
                    title="Large Luggage"
                  >
                    <Briefcase
                      size={16}
                      className="text-[#900c0c]"
                      fill="currentColor"
                    />
                    <span className="text-sm font-bold text-gray-700">
                      {car.largeBags}
                    </span>
                  </div>

                  {/* Small Bags */}
                  <div className="flex items-center gap-2" title="Small Bags">
                    <ShoppingBag size={16} className="text-[#900c0c]" />
                    <span className="text-sm font-bold text-gray-700">
                      {car.smallBags}
                    </span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#9C0E0F]/20 rounded-[20px] pointer-events-none transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
