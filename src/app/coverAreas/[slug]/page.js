import React from "react";
import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";

// 1. IMPORT DATA
import { areaDestinationsData } from "@/data/areaDestinations";

// 2. IMPORT LAYOUT & UI COMPONENTS
import DynamicHero from "@/components/widgets/airports/DynamicHero";


// 3. IMPORT WIDGETS (The components we built in checkpoints)
import AreaStatsOverview from "@/components/widgets/coverAreas(Areas)/AreaStatsOverview"; // Checkpoint 1
import AreaSpotlightSection from "@/components/widgets/coverAreas(Areas)/AreaSpotlightSection"; // Checkpoint 2
import AreaAttractionsGrid from "@/components/widgets/coverAreas(Areas)/AreaAttractionsGrid"; // <--- ADDED CORRECT COMPONENT
import SurroundingMapWidget from "@/components/widgets/coverAreas(Areas)/SurroundingMapWidget"; // Checkpoint 4
import AreaInfoBlock from "@/components/widgets/coverAreas(Areas)/AreaInfoBlock"; // Checkpoint 5

// 4. IMPORT REUSABLE SHARED WIDGETS
import FleetCarouselSection from "@/components/shared/ui/FleetSection";
import WhyChooseUsSection from "@/components/widgets/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/shared/ui/TestimonialsSection"; // <--- Reusing existing
import ContactCTASection from "@/components/widgets/airports/ContactCTASection";


// --- METADATA ---
export async function generateMetadata({ params }) {
  const data = areaDestinationsData.find(item => item.slug === params.slug);
  if (!data) return { title: "Location Not Found" };
  
  return {
    title: `${data.name} Chauffeur Service | Airport Driven`,
    description: data.intro.description,
  };
}


// --- MAIN PAGE ---
export default function CoverAreaDetailPage({ params }) {
  // 1. Find Specific Data based on URL
  const data = areaDestinationsData.find((item) => item.slug === params.slug);

  if (!data) return notFound();

  // 2. Construct Header Title (White/Red Split)
  const heroTitle = (
    <>
      {data.heroTitle.word1} <br />
      <span className="text-[#9C0E0F]">{data.heroTitle.word2}</span>
    </>
  );

  return (
    <main className="w-full bg-[#EBEBEB] min-h-screen font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
      <DynamicHero 
        title={heroTitle}
        description={data.intro.description} // Using intro description as hero description
        backgroundImage={data.heroImage}
      />

      {/* 2. STATS BANNER (Redesigned with Glassmorphism) */}
      {/* 2. STATS BANNER (Component) */}
      <AreaStatsOverview 
        introTitle={data.intro.heading}
        description={data.intro.description}
        stats={data.intro.stats}
      />

       {/* 3. ATTRACTIONS GRID (Visual Gallery) */}
      <AreaAttractionsGrid 
        title={`Near ${data.name}`}
        subtitle="Explore Surroundings"
        attractions={data.relatedPlaces} // Passes the 'relatedPlaces' array from data
      />

      {/* 4. SPOTLIGHT FEATURE */}
      <AreaSpotlightSection 
        heading={data.spotlight.heading}
        description={data.spotlight.description}
        image={data.spotlight.image}
        locationLabel={data.spotlight.locationLabel}
      />

      {/* 5. TRAVEL INFO & TIPS */}
      <AreaInfoBlock 
        locationName={data.name}
        introText={data.details.introText}
        paragraphs={data.details.paragraphs}
      />

      {/* 6. FLEET CAROUSEL */}
      <div className="pt-20 border-t border-gray-200">
        <FleetCarouselSection />
      </div>

      {/* 7. WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* 8. TESTIMONIALS */}
      <div className="bg-[#F5F5F5]">
        <TestimonialsSection />
      </div>

      {/* 9. LOCATION SPECIFIC FAQ */}
      <section className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
             Location <span className="text-[#9C0E0F]">FAQ</span>
          </h2>
          <p className="text-gray-500 font-medium">Common questions about traveling to {data.name}.</p>
        </div>
        
        <div className="flex flex-col gap-5">
           {data.faqs.map((faq, index) => (
             <details 
               key={index} 
               className="group bg-white rounded-[25px] p-6 shadow-sm border border-gray-100 open:shadow-md transition-all cursor-pointer [&_summary::-webkit-details-marker]:hidden"
             >
               <summary className="flex items-center justify-between font-bold text-[#1A1A1A] text-base lg:text-lg list-none">
                 {faq.question}
                 <span className="text-[#9C0E0F] bg-[#9C0E0F]/10 p-2 rounded-full transition-transform duration-300 group-open:rotate-180">
                   <ChevronDown size={20} />
                 </span>
               </summary>
               <p className="mt-4 text-gray-500 text-sm lg:text-[15px] leading-relaxed animate-fadeIn">
                 {faq.answer}
               </p>
             </details>
           ))}
        </div>
      </section>

      {/* 10. MAP VERIFICATION (Utility) */}
      <SurroundingMapWidget locationName={data.name} />

      {/* 11. FINAL CTA CARD */}
      <div className="mb-[-100px] relative z-30 pt-10">
         <ContactCTASection airportName={data.name} />
      </div>

      {/* 12. FOOTER GROUP */}

      

    </main>
  );
}