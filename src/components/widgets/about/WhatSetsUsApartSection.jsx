import React from "react";

const points = [
  {
    label: "Customer Focus:",
    text: "Services designed to meet your unique needs."
  },
  {
    label: "Inclusive Fleet:",
    text: "From luxury cars to accessible vehicles and baby seat options."
  },
  {
    label: "Punctuality:",
    text: "Always on time, every time."
  },
  {
    label: "Professional Drivers:",
    text: "Skilled, friendly, and focused on your safety"
  }
];

export default function WhatSetsUsApartSection() {
  return (
    <section className="bg-[#EBEBEB] py-20 px-6 md:px-16 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Container to limit text width as per screenshot design */}
        <div className="max-w-3xl">
            
            {/* 1. Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-10 tracking-tight">
                What Sets <span className="text-[#9C0E0F]">Us Apart</span>
            </h2>

            {/* 2. Bullet List */}
            <ul className="flex flex-col gap-3">
                {points.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        {/* Custom Bullet Dot */}
                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                        
                        {/* Text Content */}
                        <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed">
                            <span className="font-bold text-[#444]">{item.label}</span>{" "}
                            {item.text}
                        </p>
                    </li>
                ))}
            </ul>

        </div>

      </div>
    </section>
  );
}