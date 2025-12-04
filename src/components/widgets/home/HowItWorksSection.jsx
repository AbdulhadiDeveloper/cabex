import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Create Your Route",
    description: "Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for.",
    activeColor: "bg-gradient-to-r from-[#9C0E0F] to-[#360505]", // Red Circle
    lineColor: "border-[#750a0a]" // Red Line
  },
  {
    id: 2,
    title: "Choose Vehicle For You",
    description: "Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for.",
    activeColor: "bg-[#1A1A1A]", // Black Circle
    lineColor: "border-[#1A1A1A]" // Black Line
  },
  {
    id: 3,
    title: "Enjoy The Journey",
    description: "Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for.",
    activeColor: "bg-[#1A1A1A]", // Black Circle
    lineColor: "border-transparent" // No Line
  }
];

export default function HowItWorksSection() {
  return (
    <section className=" py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Grid: Left (Text/Timeline) - Right (Video/Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT SIDE */}
            <div>
                {/* Heading */}
                <h2 className="text-5xl lg:text-[4rem] font-bold text-[#1A1A1A] mb-16 tracking-tight">
                    How <span className=" bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">It Works</span>
                </h2>

                {/* Timeline Container */}
                <div className="flex flex-col gap-12">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex gap-8 relative">
                            
                            {/* 1. The Timeline Column (Circle + Line) */}
                            <div className="flex flex-col items-center">
                                {/* The Circle */}
                                <div className={`w-10 h-10 rounded-full ${step.activeColor} text-white flex items-center justify-center font-bold text-sm shadow-md z-10 shrink-0`}>
                                    {step.id}
                                </div>
                                
                                {/* The Vertical Dotted Line */}
                                {/* We only show the line if it's NOT the last item */}
                                {index !== steps.length - 1 && (
                                    <div className={`absolute top-10 bottom-[-48px] left-[19px] w-[2px] border-l-2 border-dotted ${step.lineColor}`}></div>
                                )}
                            </div>

                            {/* 2. The Text Content */}
                            <div className="pt-1 pb-4">
                                <h3 className="text-lg lg:text-xl font-bold text-[#1A1A1A] mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed max-w-md font-medium">
                                    {step.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: Video / Image Section */}
            <div className="relative w-[320px] lg:w-[420px] h-[300px] lg:h-[400px]  group cursor-pointer">
                
                {/* Image Container with Sepia/Warm tone filter */}
                <div className="w-full h-full overflow-hidden rounded-[4px] shadow-2xl relative">
                    <Image
                        src="/images/thumbnail.jpg" 
                        alt="Chauffeur Service Video" 
                        className="w-full h-full object-cover sepia-[0.25] brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105"
                        width={420}
                        height={400}
                    />
                    {/* Dark overlay for cinema feel */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                </div>

                {/* Play Button Overlay (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-[#1A1A1A] px-8 py-4 rounded-[8px] font-bold text-sm flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform hover:scale-105 hover:bg-gray-50">
                        <Play size={18} fill="currentColor" />
                        Play Video
                    </button>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
}