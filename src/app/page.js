import NewsletterSection from "@/components/shared/ui/NewsletterSection";
import AboutSection from "@/components/shared/ui/AboutSection";
import BabySeatSection from "@/components/widgets/home/BabySeatSection";
import BlogSection from "@/components/widgets/home/BlogSection";
import FAQSection from "@/components/widgets/home/FAQSection";
import FeaturesListSection from "@/components/widgets/home/FeaturesListSection";
import FleetSection from "@/components/widgets/home/FleetSection";
import HeroSection from "@/components/widgets/home/HeroSection";
import HowItWorksSection from "@/components/widgets/home/HowItWorksSection";
import MarqueeSection from "@/components/widgets/home/MarqueeSection";
import ReadyToBookSection from "@/components/shared/ui/ReadyToBookSection";
import ServicesSection from "@/components/widgets/home/ServicesSection";
import TestimonialsSection from "@/components/widgets/home/TestimonialsSection";
import WhyChooseUsSection from "@/components/widgets/home/WhyChooseUsSection";

export default function Home() {
  return (
   <>


   <HeroSection />
   <AboutSection /> 
   <FleetSection />
   <BabySeatSection />
   <WhyChooseUsSection />
   <ServicesSection />
   <HowItWorksSection />
   <FeaturesListSection />
   <MarqueeSection />
   <BlogSection />
   <TestimonialsSection />
   <ReadyToBookSection />
   <FAQSection />
   <NewsletterSection />
   </>
   
  );
}
