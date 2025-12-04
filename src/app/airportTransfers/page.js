"use client";

import React from "react";
import HeroBackground from "@/components/shared/Backgrounds/BannerBackground.jsx"; // Import the wrapper below
import BookOnlineWidget from "@/components/widgets/airportTransfer/BookOnlineWidget";   // The white booking box

export default function airportTransfers() {
  return (
    <HeroBackground>
      {/* 
         The content is centered vertically and horizontally within the HeroBackground.
         We add some top padding to clear the Header.
      */}
      <div className="w-full h-full flex flex-col justify-center items-center pt-6 pb-12">
        <BookOnlineWidget />
      </div>
    </HeroBackground>
  );
}