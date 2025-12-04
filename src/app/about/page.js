import React from "react";
import InnerHero from "@/components/shared/ui/SamllHero";
import AboutSection from "@/components/shared/ui/AboutSection";
import OurStorySection from "@/components/widgets/about/OurStorySection";
import WhatSetsUsApartSection from "@/components/widgets/about/WhatSetsUsApartSection";
import MissionVisionSection from "@/components/widgets/about/MissionVisionSection";
import NewsletterSection from "@/components/shared/ui/NewsletterSection";

export const metadata = {
  title: "About Us | Airport Driven",
  description: "Learn more about our luxury chauffeur services.",
};

export default function AboutPage() {
  return (
    <main>
      
      {/* Passing content via Children */}
      <InnerHero>
        <h1 className="text-5xl lg:text-[4.5rem] font-bold tracking-tight capitalize">
            <span className="text-white">About </span>
            <span className="text-[#9C0E0F]">Us</span>
        </h1>
      </InnerHero>

      <AboutSection />
      <OurStorySection/>
      <WhatSetsUsApartSection/>
      <MissionVisionSection/>
      <NewsletterSection/>

      
      
    </main>
  );
}