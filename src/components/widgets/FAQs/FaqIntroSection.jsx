import React from "react";
import Image from "next/image";

export default function FaqIntroSection() {
  return (
    <section className="bg-[#EBEBEB] py-20 lg:py-28 px-6 md:px-28 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* =========================================
            LEFT SIDE: WELCOME TEXT
           ========================================= */}
        <div className="flex flex-col justify-center items-center order-2 lg:order-1">
            
            <div className="max-w-xl text-center">
                <p className="text-[#444444] text-sm lg:text-[15px] leading-[2.4] font-medium tracking-wide">
                    Welcome To The FAQ Section Of Airport Driven! Here, We’ve 
                    Compiled Answers To The Most Commonly Asked Questions To 
                    Help You Understand Our Services Better. Whether You’re Curious 
                    About Our Booking Process, Payment Options, Or Cookie Policy, 
                    You’ll Find The Answers Here. Can’t Find What You’re Looking For? 
                    Contact Us Anytime, And We’ll Be Happy To Assist You!
                </p>
            </div>

        </div>

        {/* =========================================
            RIGHT SIDE: VISUAL CARD
           ========================================= */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            
            <div className="relative w-full max-w-[400px] lg:w-[450px] h-[550px] rounded-[40px] shadow-2xl bg-black overflow-hidden border border-gray-800/50">
                
                {/* A. Background Image (City) */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/heroBg.jpg" // Use your city skyline image
                        alt="City Background" 
                        fill
                        className="object-cover opacity-70"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/500"></div>
                </div>

                {/* B. Content Wrapper */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between pt-24">
                    
                    {/* Title */}
                    <div className="text-center px-6">
                        <h2 className="text-4xl lg:text-[3rem] font-bold text-white mb-2 tracking-tighter leading-none drop-shadow-xl">
                            Our Mission
                        </h2>
                        <h2 className="text-3xl lg:text-[2.6rem] font-light text-gray-200 tracking-wide drop-shadow-md">
                            & Vision
                        </h2>
                    </div>

                    {/* C. Car Image */}
                    <div className="relative w-full h-[60%] mt-auto">
                        <Image 
                            src="/images/carImage.png" // Use your car image
                            alt="Luxury Mercedes" 
                            fill
                            className="object-contain object-bottom "
                        />
                    </div>

                </div>
            </div>

        </div>

      </div>
    </section>
  );
}