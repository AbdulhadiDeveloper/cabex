"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  ShoppingBag,
  Zap
} from "lucide-react";

// Mock Data
const carTypes = [
  {
    id: 1,
    title: "Saloon/Sedan",
    example: "e.g. Toyota Prius, VW Passat",
    tag: "For economy travel",
    passengers: 4,
    largeBags: 2,
    smallBags: 2,
    image: "/images/car1.png",
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
    isElectric: true,
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

export default function FleetCarouselSection() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 340;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] mb-8">
            Car Types{" "}
            <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">
              Available
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl">
            <ul className="space-y-3 list-disc pl-5 text-gray-700 text-sm lg:text-[15px] marker:text-[#9C0E0F]">
              <li>
                <span className="font-bold">Standard Taxis:</span> up to 3 passengers with luggage.
              </li>
              <li>
                <span className="font-bold">MPVs:</span> up to 6 passengers.
              </li>
              <li>
                <span className="font-bold">Wheelchair Accessible Vehicles:</span> Specially adapted cars with trained drivers offering door-to-door assistance.
              </li>
            </ul>
            <ul className="space-y-3 list-disc pl-5 text-gray-700 text-sm lg:text-[15px] marker:text-[#9C0E0F]">
              <li>
                <span className="font-bold">Executive Cars:</span> Luxury/Business travel with premium comfort.
              </li>
              <li>
                <span className="font-bold">Minibuses:</span> up to 16 passengers.
              </li>
            </ul>
          </div>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative">
          
          {/* Nav Buttons */}
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

          {/* SCROLLABLE CARDS */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {carTypes.map((car) => (
              <div
                key={car.id}
                className="snap-start shrink-0 w-[290px] md:w-[330px] bg-white border border-gray-200 rounded-[25px] p-5 shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* 1. IMAGE AREA (Zoomed) */}
                <div className="h-[150px] w-full relative mb-3 flex items-center justify-center">
                  {car.isElectric && (
                    <div className="absolute top-0 right-0 z-10 bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white p-1.5 px-3 rounded-full shadow-sm">
                      <Zap size={14} fill="currentColor" strokeWidth={0} />
                    </div>
                  )}

                  <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    className="object-contain scale-110 transition-transform duration-500 group-hover:scale-125 drop-shadow-lg"
                  />
                </div>

                {/* 2. CONTENT & ACTIONS */}
                <div className="space-y-3">
                  
                  {/* Titles */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#1A1A1A]">
                      {car.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 font-semibold line-clamp-1">
                      {car.example}
                    </p>
                    <p className="text-[11px] text-[#900c0c] font-medium">
                        {car.tag}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-gray-100"></div>

                  {/* BOTTOM ROW: Icons + Button */}
                  <div className="flex items-center justify-between">
                    
                    {/* Left: Icons Group */}
                    <div className="flex items-center gap-5 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-1.5" title="Passengers">
                      <User size={16} className="text-[#900c0c]" fill="currentColor" />
                      <span className="text-sm font-bold text-gray-700">{car.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Large Luggage">
                      <Briefcase size={16} className="text-[#900c0c]" fill="currentColor" />
                      <span className="text-sm font-bold text-gray-700">{car.largeBags}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Small Bags">
                      <ShoppingBag size={16} className="text-[#900c0c]" />
                      <span className="text-sm font-bold text-gray-700">{car.smallBags}</span>
                    </div>
                  </div>
                    {/* Right: Compact Button */}
                    <Link href="/book">
                        <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-[10px] uppercase tracking-wider shadow-md hover:shadow-red-900/30 transition-all transform hover:-translate-y-0.5">
                            Book Now
                        </button>
                    </Link>

                  </div>

                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#9C0E0F]/10 rounded-[25px] pointer-events-none transition-colors duration-300"></div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}