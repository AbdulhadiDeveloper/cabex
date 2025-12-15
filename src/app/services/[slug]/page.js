import React from "react";
import { notFound } from "next/navigation";

// 1. IMPORT DATA
import { servicesData } from "@/data/servicesData";

// 2. IMPORT LAYOUT & UI
import InnerHero from "@/components/shared/ui/SamllHero";

// 3. IMPORT PAGE SPECIFIC WIDGETS
import ServiceBenefitsGrid from "@/components/widgets/servicesDynamic/ServiceBenefitsGrid"; 
import LogisticsInfoSection from "@/components/widgets/servicesDynamic/LogisticsInfoSection"; 
import PopularTerminalsList from "@/components/widgets/servicesDynamic/PopularTerminalsList"; 

// 4. IMPORT SHARED WIDGETS
import FleetCarouselSection from "@/components/shared/ui/FleetSection";
import WhyChooseUsSection from "@/components/widgets/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/shared/ui/TestimonialsSection";
import ContactCTASection from "@/components/widgets/airports/ContactCTASection";

// --- METADATA ---
export async function generateMetadata({ params }) {
  const data = servicesData.find((item) => item.slug === params.slug);
  
  if (!data) return { title: "Service Not Found" };
  
  return {
    title: `${data.name} | Airport Driven Luxury Travel`,
    description: data.description,
  };
}

// --- MAIN PAGE COMPONENT ---
export default function ServiceDynamicPage({ params }) {
  // 1. Find Data by Slug
  const data = servicesData.find((item) => item.slug === params.slug);

  // 2. Handle 404
  if (!data) return notFound();

  return (
    <main className="w-full bg-[#EBEBEB] min-h-screen font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      {/* Passing word1/word2 separately for the White/Red color styling */}
      <InnerHero 
        word1={data.heroTitle.word1} 
        word2={data.heroTitle.word2} 
      />

      {/* 2. INTRODUCTION TEXT */}
      <div className="relative z-40 max-w-3xl mx-auto px-4 -mt-16 mb-16 text-center">
        <div className="bg-white rounded-[25px] p-8 shadow-xl border-t-4 border-[#9C0E0F]">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Premium {data.name}</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
                {data.description}
            </p>
        </div>
      </div>

      {/* 3. BENEFITS GRID */}
      <ServiceBenefitsGrid 
        benefits={data.benefits} 
        title={data.name}
      />

      {/* 4. KEY TERMINALS / STATIONS LIST */}
      <PopularTerminalsList 
        terminals={data.terminals} 
      />

      {/* 5. LOGISTICS INFO (Procedures) */}
      <LogisticsInfoSection 
        heading={data.logistics?.heading} 
        content={data.logistics?.content} 
      />

      {/* 6. FLEET CAROUSEL */}
      <div className="bg-white border-y border-gray-100">
         <FleetCarouselSection />
      </div>

      {/* 7. WHY CHOOSE US (Generic USP) */}
      <WhyChooseUsSection />

      {/* 8. TESTIMONIALS */}
      <div className="bg-[#F5F5F5]">
        <TestimonialsSection />
      </div>

      {/* 9. FINAL CALL TO ACTION */}
      <div className="pb-12">
        <ContactCTASection airportName="London" />
      </div>


    </main>
  );
}