"use client";

import React from "react";
import HeroBackground from "@/components/shared/Backgrounds/BannerBackground.jsx"; 
import LoginWidget from "@/components/widgets/login/LoginWidget.jsx";

export default function LoginPage() {
  return (
    <HeroBackground>
        <div className="w-full min-h-screen flex flex-col justify-center items-center pt-32 pb-12">
            <LoginWidget />
        </div>
    </HeroBackground>
  );
}