
import React from "react";  
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "+20", label: "Years Of Experience" },
  { value: "70K", label: "Happy Customers" },
  { value: "+200", label: "Professional Drivers" },
];

export default function BabySeatSection() {
  return (
    <section className="py-6 lg:py-10 relative w-full h-[600px] lg:h-[550px] bg-[#0d0d0d] overflow-hidden font-sans flex flex-col lg:block">
      
  {/* 1. YOUR BACKGROUND IMAGE */}
  <Image 
    src="/images/BabySeatPIcture.jpg" 
    height={600} 
    width={1600} 
    alt="Baby Seat Background" 
    className="absolute top-0 left-0 w-full h-full object-cover opacity-30 lg:opacity-100 z-0"
  />

  {/* 2. DARK GRADIENT OVERLAY (Creates the dark left side for text) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10 lg:w-[65%]"></div>

  {/* 3. TEXT CONTENT CONTAINER */}
  <div className="relative z-20 max-w-[1400px] mx-auto h-full flex flex-col justify-center px-6 lg:px-12">
    
    <div className="max-w-xl relative">
      
      {/* Headings */}
      <div>
        <h2 className="text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] text-white tracking-wide">
          <span className="font-light">Baby Seat</span> <span className="font-bold">Services</span>
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] text-white font-bold tracking-wide">
          Available
        </h2>
      </div>

      {/* Subtext */}
      <p className="text-gray-300 text-sm lg:text-[1.05rem] font-normal tracking-wide leading-relaxed">
        Ensuring Comfort And Safety For Every Passenger, Every Time.
      </p>

      {/* buttons */}
       <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mx-3 my-8 mb-24">
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

      {/* Stats Section with Top Border */}
      <div className="flex flex-wrap items-center gap-8 lg:gap-16 border border-gray-300/50 p-3 w-full mt-3 ">
        <div className="flex flex-col">
          <span className="text-2xl lg:text-[1.75rem] font-bold text-white mb-1">
            +20
          </span>
          <span className="text-[11px] lg:text-[13px] text-gray-400 font-medium uppercase tracking-wide">
            Years Of Experience
          </span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-2xl lg:text-[1.75rem] font-bold text-white mb-1">
            70K
          </span>
          <span className="text-[11px] lg:text-[13px] text-gray-400 font-medium uppercase tracking-wide">
            Happy Customers
          </span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-2xl lg:text-[1.75rem] font-bold text-white mb-1">
            +200
          </span>
          <span className="text-[11px] lg:text-[13px] text-gray-400 font-medium uppercase tracking-wide">
            Professional Drivers
          </span>
        </div>
      </div>

      

    </div>
  </div>

</section>
  );
}