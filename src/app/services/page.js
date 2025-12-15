// 1. Layout & UI
import InnerHero from "@/components/shared/ui/SamllHero";

// 2. Page Specific Widgets
import ServicesListGrid from "@/components/widgets/services/ServicesListGrid"; 
import FleetCarouselSection from "@/components/shared/ui/FleetSection";
import WhyChooseUsSection from "@/components/widgets/home/WhyChooseUsSection"; 
import TestimonialsSection from "@/components/shared/ui/TestimonialsSection";
import ContactCTASection from "@/components/widgets/airports/ContactCTASection";

export const metadata = {
  title: "Our Services | Airport Driven",
  description: "Luxury transportation services including Airport Transfers, Railway Station Pickups, and Cruise Terminal connections.",
};

export default function ServicesPage() {
  return (
    <main>
      
      {/* --- SECTION 1: HERO --- */}
      <InnerHero>
                      <h1 className="text-5xl lg:text-[4.5rem] font-bold tracking-tight capitalize">
                          <span className="text-white">Our </span>
                          <span className="text-[#9C0E0F]">Services</span>
                      </h1>
          </InnerHero>

      {/* --- SECTION 2: SERVICES GRID (Core 3) --- */}
      {/* -mt-20 creates the overlap effect over the Hero section */}
      <div className="relative z-40 mb-10">
        <ServicesListGrid />
      </div>

      {/* --- SECTION 3: FLEET SHOWCASE --- */}
      <div className="border-t border-gray-200">
        <FleetCarouselSection />
      </div>

      {/* --- SECTION 4: WHY CHOOSE US --- */}
      <WhyChooseUsSection />

      {/* --- SECTION 5: REVIEWS --- */}
      <div className="bg-[#F5F5F5]">
        <TestimonialsSection />
      </div>

      {/* --- SECTION 6: CTA CARD --- */}
      <div className="pb-12">
        <ContactCTASection airportName="London" />
      </div>



    </main>
  );
}