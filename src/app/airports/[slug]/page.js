"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, CheckCircle, ShieldCheck, Star, Car } from "lucide-react";

// Imports
import { airportsData } from "@/data/airport";
import DynamicHero from "@/components/widgets/airports/DynamicHero";
import NewsletterSection from "@/components/shared/ui/NewsletterSection";

// --- NEW IMPORTS ---
import FleetTableSection from "@/components/widgets/airports/FleetTableSection";
import StepsAndHighlightsSection from "@/components/widgets/airports/StepsAndHighlightsSection";
import FareTableSection from "@/components/widgets/airports/FareTableSection";
import ContactCTASection from "@/components/widgets/airports/ContactCTASection";
import AirportContentSection from "@/components/widgets/airports/AirportContentSection";

import AirportServicesGrid from "@/components/widgets/airports/AirportServicesGrid"; // <--- New
import TestimonialsSection from "@/components/shared/ui/TestimonialsSection"; // <--- Reusing existing
import FleetSection from "@/components/shared/ui/FleetSection";
import AirportDestinationsSection from "@/components/widgets/airports/AirportDestinationsSection";

export default function AirportDynamicPage({ params }) {
  const airport = airportsData.find((item) => item.slug === params.slug);

  if (!airport) {
    return notFound();
  }

  // Custom Title Logic
  const heroTitle = (
    <>
      {airport.name.replace(" Taxi", "")} <br />
      <span className="text-[#9C0E0F]">Taxi</span>
    </>
  );

  return (
    <main className="w-full bg-[#F5F5F5]">
      {/* 1. HERO & BOOKING */}
      <DynamicHero title={heroTitle} description={airport.description} />

      {/* 2. INTRO / VISUAL DETAILS */}
      <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#9C0E0F]/10 text-[#9C0E0F] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Premium Transfer
              </span>
              <div className="flex items-center gap-1 text-[#FFC107]">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-bold text-black">
                  4.9/5 Rating
                </span>
              </div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Reliable Transfers to <br />
              <span className="bg-gradient-to-r from-[#9C0E0F] to-[#360505] bg-clip-text text-transparent">{airport.name}</span>
            </h2>
            <p className="text-gray-600 text-sm lg:text-[15px] leading-7 mb-8 font-medium">
              Navigating {airport.name} can be stressful. With Airport Driven,
              you get a seamless door-to-terminal experience. Our chauffeurs are
              familiar with all terminals, parking zones, and the best routes to
              avoid traffic.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {airport.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <CheckCircle size={16} className="text-[#9C0E0F]" />
                  <span className="text-sm font-bold text-gray-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Right Image */}
          <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src={airport.image}
              alt={airport.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 5. STEPS & HIGHLIGHTS */}
      <StepsAndHighlightsSection
        bookingSteps={airport.bookingSteps}
        highlights={airport.highlights}
        airportName={airport.name} // <--- Pass the name here
      />

      {/* fleet section */}
      <FleetSection />

      {/* 3. AIRPORT SERVICES GRID (New - Features) */}
      <AirportServicesGrid />

      {/* 4. FLEET TABLE */}
      <FleetTableSection fleetData={airport.fleetData} />

      {/* Insert Component Here */}
      <AirportDestinationsSection
        title={`Popular Journeys from ${airport.name}`}
        destinations={airport.dynamicDestinations}
      />

      {/* 6. FARE TABLE */}
      <FareTableSection
        airportName={airport.name}
        routes={airport.fareRoutes}
      />

      {/* 7. DYNAMIC CONTENT (Rich Text from Data) */}
      <AirportContentSection content={airport.content} />

      {/* 8. TESTIMONIALS (Social Proof) */}
      <div className="py-10 bg-white">
        <TestimonialsSection />
      </div>

      {/* 9. CTA */}
      <ContactCTASection airportName={airport.name} />

      {/* 10. FOOTER */}
      <div className="relative mt-20">
        <NewsletterSection />
      </div>
    </main>
  );
}
