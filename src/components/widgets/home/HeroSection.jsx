"use client";

import React from "react";
import {
  Phone,
  MapPin,
  ChevronDown,
  Plus,
  CalendarDays,
  Loader2,
  Star,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  // =========================================================================
  // PIXEL PERFECT FULLY ROUNDED PATH
  // Based on Polygon: 0 7%, 10% 7%, 10% 0, 90% 0, 90% 7%, 100% 7%, 100% 100%, 17% 100%, 17% 85%, 0 85%
  //
  // LOGIC: Every corner (Inner and Outer) uses a Quadratic Bezier (Q) for roundness.
  // 1. Start Left Edge (Above bottom cutout)
  // 2. Curve RIGHT (Inner) then UP (Inner) to form the "Step Up" to the Tab.
  // 3. Curve RIGHT (Outer) to form Top-Left Tab corner.
  // 4. Line across Top.
  // 5. Curve DOWN (Outer) to form Top-Right Tab corner.
  // 6. Curve RIGHT (Inner) to form the "Step Down" from the Tab.
  // 7. Curve DOWN (Outer) for the far Right edge.
  // 8. Curve LEFT for Bottom-Right corner.
  // 9. Curve UP (Inner) then LEFT (Outer) for Bottom-Left Cutout.
  // 10. Curve UP (Outer) to close loop.
  // =========================================================================
  const HERO_SHAPE_PATH = `
    M 0,0.85
     L 0,0.11 Q 0,0.08 0.03,0.08 
    L 0.07,0.08 Q 0.10,0.08 0.10,0.05 
    L 0.10,0.03 Q 0.10,0 0.13,0 
    L 0.87,0 Q 0.90,0 0.90,0.03 
    L 0.90,0.05 Q 0.90,0.08 0.93,0.08 
    L 0.97,0.08 Q 1,0.08 1,0.11 
    L 1,0.97 Q 1,1 0.97,1 
    L 0.20,1 Q 0.17,1 0.17,0.97 
    L 0.17,0.88 Q 0.17,0.85 0.14,0.85 
    L 0.03,0.85 Q 0,0.85 0,0.82 
    Z
  `;

  return (
    <main className="bg-white min-h-screen  p-0 lg:p-6 flex items-center justify-center font-sans overflow-hidden">
      <div className="relative w-full max-w-[1400px] mx-auto">
        {/* =========================================
            1. HEADER (Sits in the Top Tab Area)
           ========================================= */}
        <div className="lg:absolute top-0 left-0 w-full z-50 ">
          <Header />
        </div>

        {/* =========================================
            2. SVG DEFINITION
           ========================================= */}
        <svg className="absolute w-0 h-0 hidden lg:block">
          <defs>
            <clipPath id="hero-rounded-clip" clipPathUnits="objectBoundingBox">
              <path d={HERO_SHAPE_PATH} />
            </clipPath>
          </defs>
        </svg>

        {/* =========================================
            3. MAIN WRAPPER
           ========================================= */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 min-h-[00px] lg:h-[850px]">
          {/* =========================================
              4. BACKGROUND LAYER (Clipped)
             ========================================= */}
          <div className="col-span-1 lg:col-span-12 absolute inset-0 w-full h-full z-0 filter drop-shadow-2xl">
            <div
              className="w-full h-full relative bg-black"
              style={{
                clipPath: "url(#hero-rounded-clip)",
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/heroBg.jpg"
                  alt="London Street"
                  className="w-full h-full object-cover opacity-80"
                  fill
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent/30 z-10" />
              </div>

              {/* Red Slash Image */}
              <div className="absolute left-14 right-0 top-0 bottom-0 w-full h-full z-10">
                <Image
                  src="/images/red-slash.png"
                  alt="Red Decoration"
                  fill
                  className="object-fill"
                  priority
                />
              </div>
            </div>
          </div>

          {/* =========================================
              5. CONTENT LAYER
             ========================================= */}
          <div className="col-span-1 lg:col-span-12 relative z-40 w-full h-full pointer-events-none">
            <div className="pointer-events-auto w-full h-full flex flex-col pt-22 lg:pt-22">
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full px-4 lg:px-16 gap-12 lg:gap-0 pb-20">
                {/* LEFT SIDE: Text */}
                <div className="flex flex-col justify-center pl-0 lg:pl-12 text-center lg:text-left relative">
                  {/* --- NEW: REVIEW PILL SECTION --- */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-4 w-fit shadow-lg">
                      {/* Left Side: Google Reviews */}
                      <div className="flex items-center gap-2 border-r border-white/20 pr-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 p-1.5 shadow-sm">
                          {/* Google Logo */}
                          <Image
                            src="/images/google.png"
                            width={20}
                            height={20}
                            alt="Google"
                            className="object-contain"
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          {/* Google Stars (Yellow) */}
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={10}
                                className="text-[#FFC107] fill-[#FFC107]"
                              />
                            ))}
                          </div>
                          <span className="text-[9px] text-gray-300 font-medium mt-0.5">
                            2000+ reviews
                          </span>
                        </div>
                      </div>

                      {/* Right Side: Trustpilot Reviews */}
                      <div className="flex items-center gap-2 pl-1">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 p-1.5 shadow-sm">
                          {/* Trustpilot Logo */}
                          <Image
                            src="/images/trustpilot.png"
                            width={20}
                            height={20}
                            alt="Trustpilot"
                            className="object-contain"
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          {/* Trustpilot Stars (Green) */}
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-[#00b67a] p-[1.5px] rounded-[1px]"
                              >
                                <Star
                                  size={7}
                                  className="text-white fill-white"
                                />
                              </div>
                            ))}
                          </div>
                          <span className="text-[9px] text-gray-300 font-medium mt-0.5">
                            1000+ reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h1 className="text-4xl lg:text-[4rem] font-bold text-white leading-[1.05] mb-6 tracking-tight">
                    Your Gateway To <br />
                    <span className="text-[#9F0507]">Stress-Free</span> Travel
                  </h1>
                  <p className="text-gray-300 text-sm lg:text-lg max-w-xl leading-relaxed mb-8 font-light">
                    Reliable And Efficient Transportation Solutions For Modern
                    Travelers. Get A Ride To Or From The Airport In Luxury.
                  </p>

                  {/* CTA BUTTONS WITH NEW THEME */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    {/* Primary Button */}
                    <Link href="/login">
                      <button
                        type="button"
                        className="px-10 py-4 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white font-bold text-sm shadow-xl hover:shadow-red-900/40 transition-all transform hover:-translate-y-1"
                      >
                        Book Your Ride
                      </button>
                    </Link>
                    <Link
                      href="/airportTransfers"
                      className="px-10 py-4 rounded-full bg-white border border-[#360505] text-[#750a0a] font-bold text-sm hover:bg-gray-50 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                    >
                      <button className="">View Services</button>
                    </Link>
                  </div>
                </div>

                {/* RIGHT SIDE: Form */}
                <div className="flex flex-col justify-center items-center lg:items-end pr-0 lg:pr-4">
                  <form className="bg-white rounded-[35px] p-8 w-full max-w-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Header */}
                    <div className="flex justify-center mb-8 mt-2">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <CalendarDays
                            className="text-[#bf1515] w-12 h-12"
                            strokeWidth={1.5}
                          />
                          <div className="absolute -right-1 -bottom-1 bg-[#bf1515] rounded-full p-0.5 border-2 border-white">
                            <Plus className="text-white w-3 h-3" />
                          </div>
                        </div>
                        <div className="flex flex-col leading-[0.9]">
                          <span className="text-[2rem] font-black text-[#1a1a1a] tracking-tighter">
                            BOOK
                          </span>
                          <span className="text-[2rem] font-black text-[#bf1515] tracking-tighter">
                            ONLINE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="relative flex flex-col gap-7 mb-10">
                      <div className="absolute left-[calc(100%-13px)] top-4 bottom-4 w-[2px] bg-gray-200 rounded-full"></div>

                      <div className="relative group">
                        <div className="relative">
                          <input
                            type="text"
                            name="pickup"
                            placeholder="Pick Up Address"
                            className="w-full border-b-2 border-gray-200 py-3 text-sm font-semibold text-gray-800 placeholder-gray-800 focus:outline-none focus:border-[#bf1515] bg-transparent"
                          />
                          <ChevronDown className="absolute right-10 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
                        </div>
                        <div className="absolute -right-[1px] top-1 w-7 h-7 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full border-[3px] border-[#360505] bg-white z-10 shadow-sm"></div>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="relative">
                          <input
                            type="text"
                            name="via"
                            placeholder="Via (Optional)"
                            className="w-full border-b-2 border-gray-200 py-3 text-sm font-semibold text-gray-400 placeholder-gray-400 focus:outline-none focus:border-[#bf1515] bg-transparent"
                          />
                          <ChevronDown className="absolute right-10 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
                        </div>
                        <div className="absolute -right-[1px] top-3 w-7 h-7 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white flex items-center justify-center z-10 shadow-md hover:scale-110 transition-all cursor-pointer">
                            <Plus className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="relative">
                          <input
                            type="text"
                            name="dropoff"
                            placeholder="Drop Off Address"
                            className="w-full border-b-2 border-gray-200 py-3 text-sm font-semibold text-gray-800 placeholder-gray-800 focus:outline-none focus:border-[#bf1515] bg-transparent"
                          />
                          <ChevronDown className="absolute right-10 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
                        </div>
                        <div className="absolute -right-[1px] top-4 w-7 h-7 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full border-[3px] border-[#360505] bg-white z-10 shadow-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <Link href="/login" className="flex-1">
                        <button
                          type="button"
                          className="w-full bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white hover:shadow-red-900/40 border border-transparent py-4 rounded-full font-bold text-xs tracking-widest shadow-xl  transition-all flex items-center justify-center  transform hover:-translate-y-1"
                        >
                          LOG IN
                        </button>
                      </Link>
                      <Link
                        href="/airportTransfers"
                        className="flex-1 bg-white border border-[#750a0a] text-[#750a0a] py-4 rounded-full font-bold text-xs tracking-widesthover:bg-gray-50 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
                      >
                        <button className="">QUOTE NOW</button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>

              {/* C. Contact Widget (Sits in the Bottom-Left Cutout) */}
              <div className="absolute bottom-0 left-0 w-[16%] h-[14%] hidden lg:flex items-center justify-start z-50  pb-2">
                <div className="bg-[#1A1A1A] text-white rounded-[25px] p-5 w-full h-full shadow-2xl border border-gray-800 flex flex-col justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full border border-gray-600 text-gray-300">
                      <Phone size={14} />
                    </div>
                    <span className="text-[10px] font-medium text-gray-300">
                      UK: +44 2080504059
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full border border-gray-600 text-gray-300">
                      <MapPin size={14} />
                    </div>
                    <div className="text-[10px] text-gray-300 leading-tight">
                      <p>82 Bath Rd, London UB3</p>
                      <p>5AN, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
