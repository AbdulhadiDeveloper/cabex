"use client";

import React from "react";
import { ShieldCheck, CreditCard, CarFront, AlarmClock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
  },
  {
    icon: CreditCard,
    title: "Easy Online Booking & Payment",
    description:
      "Our secure platform offers a simple online experience. Create an account to manage your regular trips and pay with major credit cards.",
  },
  {
    icon: CarFront,
    title: "Professional Drivers",
    description:
      "Our knowledgeable and courteous chauffeurs ensure smooth journeys, always knowing the way and catering to your needs.",
  },
  {
    icon: AlarmClock,
    title: "Punctuality & Reliability",
    description:
      "On location at least 10 minutes ahead of the scheduled pick up time. We are on time every time.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#EBEBEB] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* 1. Section Header */}
        <div className="mb-14">
          <h2 className="text-5xl lg:text-[4rem] font-bold text-[#1A1A1A] mb-8 tracking-tight">
            Why <span className="text-[#900c0c]">Choose Us?</span>
          </h2>
          <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed max-w-6xl font-medium text-justify lg:text-left">
            Experience The Perfect Balance Of Affordability And Excellence In
            Every Product And Service We Provide. Our Commitment To Quality
            Ensures That You Receive Only The Best, While Our Competitive
            Pricing Ensures You Get More For Your Money.
          </p>
        </div>

        {/* 2. Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              // Change: Added 'min-h-[400px]' for height and 'justify-center' to align text vertically
              className="bg-white rounded-[20px] p-8 lg:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[400px] justify-center"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-[#F5F5F5] rounded-full flex items-center justify-center mb-8">
                <feature.icon
                  className="w-9 h-9 text-[#bf1515]"
                  strokeWidth={1.8}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-5 min-h-[56px] flex items-center justify-center leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[11px] lg:text-xs leading-relaxed max-w-[260px] font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
