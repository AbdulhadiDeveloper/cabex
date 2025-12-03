"use client";

import React from "react";
import HeroBackground from "@/components/shared/Backgrounds/BannerBackground.jsx"; 
import PassengerDetailsWidget from "@/components/widgets/details/PassengerDetailsWidget.jsx";

export default function Details() {
  return (
    <HeroBackground>
        {/* 
           Center the content vertically. 
           Add paddingTop to clear the fixed header area inside the background 
        */}
        <div className="w-full min-h-screen flex flex-col justify-center items-center pt-6 pb-12">
            <PassengerDetailsWidget />
        </div>
    </HeroBackground>
  );
}