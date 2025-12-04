import React from "react";
import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="bg-[#EBEBEB] py-20 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* CONTAINER: Rounded corners + Fixed Height */}
        <div className="relative w-full h-[450px] lg:h-[400px]  overflow-hidden  bg-[#1a1a1a]">
            
            {/* 1. BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/OurStoryImage.jpg" // Save your uploaded image with this name
                    alt="Our Story Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* 
                   Safety Gradient: Ensures text readability on the left 
                   even if the image resizes differently on various screens 
                */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:w-[60%] z-10"></div>
            </div>

            {/* 2. CONTENT (Left Side) */}
            <div className="relative z-20 h-full flex flex-col justify-center px-8 lg:px-20 max-w-3xl">
                
                {/* Red Badge */}
                <div className="bg-[#900c0c] text-white text-base lg:text-xl font-bold px-6 py-2 rounded-md w-fit mb-6 shadow-md tracking-wide">
                    Our Story
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.15] mb-8 tracking-tight">
                    Founded With A Passion <br />
                    <span className="font-bold">For Excellence</span>
                </h2>

                {/* Paragraph */}
                <p className="text-gray-300 text-sm lg:text-[15px] font-normal leading-relaxed max-w-lg tracking-wide">
                    We Started Airport Driven To Fill The Need For Dependable And Inclusive Airport Transportation. Over The Years, We've Grown Into A Trusted Name, Serving Individual Travelers, Families, And Corporate Clients With Unmatched Professionalism.
                </p>

            </div>

        </div>

      </div>
    </section>
  );
}