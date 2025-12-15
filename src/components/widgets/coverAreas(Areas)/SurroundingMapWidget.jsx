"use client";

import React from "react";
import Image from "next/image";

export default function SurroundingMapWidget({ locationName }) {
  return (
    <section className="py-20 px-4 md:px-8 bg-white border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/airport-transfer/map.png" // Ensure this image exists or use a fallback
            alt={`Map of ${locationName}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <span className="text-xs font-bold text-black">{locationName} Area Map</span>
          </div>
        </div>
        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">Explore the Surroundings</h2>
          <p className="text-gray-500 leading-loose mb-6">
            Our coverage extends throughout the {locationName} area, ensuring you have reliable transport to all major nearby cities and attractions.
          </p>
          <button className="px-8 py-3 rounded-full border border-[#1A1A1A] text-[#1A1A1A] font-bold text-sm hover:bg-[#1A1A1A] hover:text-white transition-all">
            View Coverage Map
          </button>
        </div>
      </div>
    </section>
  );
}
