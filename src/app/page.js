
import AboutSection from "@/components/shared/ui/AboutSection";
import BabySeatSection from "@/components/widgets/home/BabySeatSection";
import BlogSection from "@/components/widgets/home/BlogSection";
import FAQSection from "@/components/widgets/home/FAQSection";
import FeaturesListSection from "@/components/widgets/home/FeaturesListSection";
import FleetSection from "@/components/shared/ui/FleetSection";
import HeroSection from "@/components/widgets/home/HeroSection";
import HowItWorksSection from "@/components/widgets/home/HowItWorksSection";
import MarqueeSection from "@/components/widgets/home/MarqueeSection";
import ReadyToBookSection from "@/components/shared/ui/ReadyToBookSection";
import ServicesSection from "@/components/widgets/home/ServicesSection";
import TestimonialsSection from "@/components/shared/ui/TestimonialsSection";
import WhyChooseUsSection from "@/components/widgets/home/WhyChooseUsSection";
import ReviewSection from "@/components/shared/ui/ReviewSection"
import TopDestinationsSection from "@/components/widgets/home/TopDestinationsSection";

export default function Home() {
  return (
   <>


   <HeroSection />
   <AboutSection /> 
   <FleetSection />
   <BabySeatSection />
   <TopDestinationsSection/>
   <ReviewSection/>
   <WhyChooseUsSection />
   <ServicesSection />
   <HowItWorksSection />
   <FeaturesListSection />
   <MarqueeSection />
   <BlogSection />
   <TestimonialsSection />
   <ReadyToBookSection />
   <FAQSection />

   </>
   
  );
}
