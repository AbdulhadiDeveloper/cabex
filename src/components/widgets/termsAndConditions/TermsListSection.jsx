import React from "react";

const termsData = [
  {
    title: "Booking",
    points: [
      "When booking a taxi, you must allow sufficient time to meet airline check-in requirements and account for possible traffic delays. We are not liable for delays caused by insufficient planning or if passengers are not ready at the scheduled pick-up time.",
      "It is your responsibility to select a car size appropriate for the number of passengers and luggage. We cannot guarantee the accommodation of excessive luggage. Please note that every child, regardless of age, counts as one passenger.",
      "If a wheelchair is required for transport, you must specify this during the booking process."
    ]
  },
  {
    title: "Prices And Payment",
    points: [
      "The quoted price may be amended if there are changes to the itinerary, the number of passengers, or the type/size of vehicle required.",
      "The quotation includes a 45-minute waiting period after the flight's advertised landing time. Additional waiting time is charged at standard rates after the initial period (15 minutes for non-airport pick-ups). While we will endeavor to monitor flight delays, we are not obligated to do so.",
      "Please review your booking confirmation carefully and inform us promptly of any errors. We are not responsible for delays or costs arising from inaccurate information provided by you."
    ]
  },
  {
    title: "Service",
    points: [
      "Passengers are responsible for their behavior during the journey. A charge of £99 will apply for cleaning costs if the vehicle is soiled by a passenger.",
      "Eating, drinking, or smoking inside the vehicle is strictly prohibited.",
      "All children must be restrained appropriately based on their age, weight, and height. Parents or guardians are responsible for providing and fitting child seats.",
      "The vehicle will not carry more passengers than permitted by its insurance or licensing regulations."
    ]
  },
  {
    title: "Cancellations",
    points: [
      "If you need to cancel your booking, please notify us as soon as possible. Cancellations made less than 24 hours before the booking will not be refunded.",
      "No-shows will be charged the full fare."
    ]
  },
  {
    title: "Liability",
    points: [
      "We will make every effort to get you to your destination on time but are not liable for delays caused by traffic or road conditions beyond our control. Under no circumstances will we be responsible for any indirect or consequential losses, including loss of profits or business.",
      "All luggage is carried at your own risk.",
      "We reserve the right to cancel services and issue refunds in cases of national emergencies, riots, war, fuel shortages, extreme weather, terrorist attacks, or other circumstances beyond our control. If the vehicle breaks down during your journey, we will arrange an alternative vehicle, but no compensation will be provided."
    ]
  },
  {
    title: "Termination",
    points: [
      "We may refuse or terminate a booking immediately if a driver or vehicle is at risk of damage, violence, or abuse from you or any passengers. In such cases, passengers will be asked to vacate the vehicle as soon as it is safe to do so. No refunds will be issued for partially completed journeys."
    ]
  },
  {
    title: "Miscellaneous",
    points: [
      "We may subcontract our obligations under this Agreement. You may not assign, transfer, or delegate your rights or obligations.",
      "We may update these Terms and Conditions by posting changes online. Please review them regularly. Existing bookings will be honored at the rate quoted at the time of booking.",
      "We will handle your personal data in accordance with the Data Protection Act 1998.",
      "This Agreement, along with any accompanying quotation, constitutes the entire agreement between you and us. In case of discrepancies, the terms in this Agreement will prevail.",
      "This Agreement does not grant any rights to third parties under the Contracts (Rights of Third Parties) Act 1999 unless expressly stated."
    ]
  },
  {
    title: "Disputes",
    points: [
      "This Agreement is governed by English law. Both parties agree to submit to the exclusive jurisdiction of the English courts for any disputes arising under or in connection with this Agreement."
    ]
  },
  {
    title: "Conveying Of Children",
    points: [
      "UK law exempts taxis from requiring child seats or boosters. For health and safety reasons, we cannot provide child seats. Parents or guardians are responsible for providing, installing, and securing child seats. Drivers may assist at your discretion and responsibility."
    ]
  }
];

export default function TermsListSection() {
  return (
    <section className="bg-[#EBEBEB] pb-12 px-4 md:px-16 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Content Container - Aligned left to match the 'Definition' text block width */}
        <div className="max-w-4xl flex flex-col gap-12">
            
            {termsData.map((section, index) => (
                <div key={index}>
                    
                    {/* Heading */}
                    <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-5 tracking-tight">
                        {section.title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-3">
                        {section.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                {/* Custom Tiny Bullet to match previous design */}
                                <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                                
                                <p className="text-gray-600 text-xs lg:text-[13px] leading-relaxed font-medium text-justify lg:text-left">
                                    {point}
                                </p>
                            </li>
                        ))}
                    </ul>

                </div>
            ))}

        </div>

      </div>
    </section>
  );
}