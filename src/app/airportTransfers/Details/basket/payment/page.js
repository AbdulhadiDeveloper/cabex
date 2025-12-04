"use client";

import React from "react";
import HeroBackground from "@/components/shared/Backgrounds/BannerBackground"; 
import PaymentOptionsWidget from "@/components/widgets/payment/PaymentOptionsWidget";

export default function SummaryPage() {
  return (
    <HeroBackground>
        <div className="w-full min-h-screen flex flex-col justify-center items-center pt-6 pb-12">
            <PaymentOptionsWidget />
        </div>
    </HeroBackground>
  );
}