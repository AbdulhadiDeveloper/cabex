"use client";

import React from "react";
import { Phone, MapPin, ChevronDown, Plus, CalendarDays } from "lucide-react";
import Header from "../../layout/Header";

export default function HeroSection() {
  return (
    <main className="min-h-screen p-0 md:p-4 lg:p-8 flex items-center justify-center font-sans ">
      <div className="relative w-full max-w-[1400px] mx-auto ">
        
        {/* =========================================
            1. SVG DEFINITION (Hidden helper for shape)
           ========================================= */}
        

        {/* =========================================
            2. MAIN WRAPPER
           ========================================= */}
        {/* 
            Change: Added 'relative' and 'min-h'. 
            On Desktop (lg), height is fixed/compact. 
            On Mobile, it grows with content.
        */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 min-h-[1000px] lg:h-[1000px] rounded-[50px] overflow-hidden ">

          {/* =========================================
              3. BACKGROUND LAYER (The Clipped Image)
             ========================================= */}
          {/* 
              Desktop: 'absolute inset-0' (Sits behind everything, fixed size)
              Mobile: 'absolute inset-0' (Covers background, but content sits on top via z-index)
          */}
          <div className="col-span-1 lg:col-span-12 absolute inset-0 w-full h-full z-0">
            
            {/* The Shape Container */}
            <div
              className="w-full h-full relative bg-black"
              style={{ 
                 // We apply the clip-path only on Large screens to prevent mobile weirdness,
                 // or we can keep it if the mobile content is positioned safely.
                 // Here I keep it consistent but ensure mobile content has padding.
                 clipPath: "url(#hero-clip)" 
              }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop"
                  alt="London Street"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent/40 z-10" />
              </div>

              {/* Red Slash (Desktop Only) */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[42%] bg-[#750a0a]/95 z-10 hidden lg:block"
                style={{ clipPath: "polygon(25% 0%, 100% 0, 100% 100%, 0% 100%)" }}
              ></div>

              {/* Blue Dotted Line (Desktop Only) */}
              <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none hidden xl:block">
                <path
                  d="M 580 500 Q 800 500 1020 500"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="opacity-50"
                />
                <circle cx="580" cy="500" r="4" fill="#3b82f6" className="opacity-80" />
              </svg>
            </div>
          </div>

          {/* =========================================
              4. CONTENT LAYER (Text, Form, Header)
             ========================================= */}
          {/* 
              CRITICAL FIX: 
              - Mobile: 'relative' (So it stacks and pushes layout down, preventing overlap)
              - Desktop (lg): 'absolute inset-0' (So it overlays the image perfectly like your old structure)
          */}
          <div className="col-span-1 lg:col-span-12 relative lg:absolute lg:inset-0 z-40 w-full h-full pointer-events-none">
            
            {/* Enable pointer events for children */}
            <div className="pointer-events-auto w-full h-full flex flex-col">
                
                {/* Header */}
                <Header />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full px-4 lg:px-16 pb-10 lg:pb-32 gap-12 lg:gap-0 mt-10 lg:mt-0">
                  
                  {/* LEFT SIDE: Text + Contact Widget */}
                  <div className="flex flex-col justify-center pl-0 lg:pl-12 pt-0 lg:pt-0">
                    <h1 className="text-4xl lg:text-[4rem] font-bold text-white leading-[1.05] mb-6 lg:mb-8 tracking-tight text-center lg:text-left">
                      Your Gateway To <br />
                      <span className="text-[#bf1515]">Stress-Free</span> Travel
                    </h1>
                    <p className="text-gray-300 text-sm lg:text-lg max-w-xl leading-relaxed mb-10 lg:mb-16 font-light text-center lg:text-left">
                      Reliable And Efficient Transportation Solutions For Modern Travelers. Get A Ride To Or From The Airport In Luxury.
                    </p>

                    {/* Contact Widget */}
                    {/* On Desktop: It sits in the "cutout" space naturally. On Mobile: It stacks. */}
                    <div className="flex flex-col items-center lg:items-start justify-end z-20 relative">
                      <div className="bg-[#1A1A1A] text-white rounded-[30px] p-8 space-y-6 w-full max-w-[300px] shadow-2xl">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full border border-gray-600 text-gray-300">
                            <Phone size={20} />
                          </div>
                          <div className="text-sm flex flex-col font-medium">
                            <span className="text-gray-400">UK: +44 2080504059</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full border border-gray-600 text-gray-300">
                            <MapPin size={20} />
                          </div>
                          <div className="text-sm text-gray-400 leading-snug">
                            <p>82 Bath Rd, London UB3</p>
                            <p>5AN, United Kingdom</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Form */}
                  <div className="flex flex-col justify-center items-center lg:items-end h-full pr-0 lg:pr-4 pb-10 lg:pb-0">
                    <div className="bg-white rounded-[35px] p-8 w-full max-w-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      {/* Form Header */}
                      <div className="flex justify-center mb-8 mt-2">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <CalendarDays className="text-[#bf1515] w-12 h-12" strokeWidth={1.5} />
                            <div className="absolute -right-1 -bottom-1 bg-[#bf1515] rounded-full p-0.5 border-2 border-white">
                              <Plus className="text-white w-3 h-3" />
                            </div>
                          </div>
                          <div className="flex flex-col leading-[0.9]">
                            <span className="text-[2rem] font-black text-[#1a1a1a] tracking-tighter">BOOK</span>
                            <span className="text-[2rem] font-black text-[#bf1515] tracking-tighter">ONLINE</span>
                          </div>
                        </div>
                      </div>

                      {/* Inputs */}
                      <div className="relative flex flex-col gap-7 mb-10">
                        <div className="absolute left-[calc(100%-13px)] top-4 bottom-4 w-[2px] bg-gray-200 rounded-full"></div>
                        
                        <div className="relative group">
                          <div className="relative">
                            <select className="w-full border-b-2 border-gray-200 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#bf1515] bg-transparent appearance-none">
                              <option>Pick Up Address</option>
                            </select>
                            <ChevronDown className="absolute right-10 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
                          </div>
                          <div className="absolute right-0 top-3 w-7 h-7 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full border-[3px] border-[#bf1515] bg-white z-10 shadow-sm"></div>
                          </div>
                        </div>

                        <div className="relative group">
                          <div className="relative">
                            <select className="w-full border-b-2 border-gray-200 py-3 text-sm font-semibold text-gray-400 focus:outline-none focus:border-[#bf1515] bg-transparent appearance-none">
                              <option>Via (Optional)</option>
                            </select>
                            <ChevronDown className="absolute right-10 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
                          </div>
                          <div className="absolute right-0 top-3 w-7 h-7 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-[#750a0a] text-white flex items-center justify-center z-10 shadow-md hover:scale-110 transition-all cursor-pointer">
                              <Plus className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        </div>

                        <div className="relative group">
                          <div className="relative">
                            <select className="w-full border-b-2 border-gray-200 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#bf1515] bg-transparent appearance-none">
                              <option>Drop Off Address</option>
                            </select>
                            <ChevronDown className="absolute right-10 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
                          </div>
                          <div className="absolute right-0 top-3 w-7 h-7 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full border-[3px] border-[#bf1515] bg-white z-10 shadow-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4">
                        <button className="flex-1 bg-gradient-to-r from-[#9C0E0F] to-[#360505] text-white py-4 rounded-full font-bold text-xs tracking-widest shadow-xl hover:bg-[#750a0a] transition-all">
                          LOG IN
                        </button>
                        <button className="flex-1 bg-white border border-[#750a0a] text-[#750a0a] py-4 rounded-full font-bold text-xs tracking-widest hover:bg-gray-50 transition-all">
                          QUOTE NOW
                        </button>
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