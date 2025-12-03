"use client";

import React from "react";
import HeroBackground from "@/components/shared/Backgrounds/BannerBackground.jsx"; 
import BasketWidget from "@/components/widgets/basket/BasketWidget"; // <--- Import

export default function BasketPage() {
  return (
    <HeroBackground>
        <div className="w-full min-h-screen flex flex-col justify-center items-center pt-6 pb-12">
            <BasketWidget />
        </div>
    </HeroBackground>
  );
}