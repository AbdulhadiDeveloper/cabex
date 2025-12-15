export const areaDestinationsData = [
  {
    slug: "heathrow",
    name: "Heathrow Airport",
    
    // --- SECTION 1: HERO TITLES ---
    heroTitle: { 
      word1: "Covering", 
      word2: "Heathrow" 
    },
    heroImage: "/images/heroBg.jpg", // Add your specific Heathrow background image here

    // --- SECTION 2: FLOATING STATS OVERVIEW ---
    intro: {
      heading: "London's Premier Aviation Hub",
      description: "As the UK's busiest airport and a global gateway, Heathrow (LHR) serves over 80 million passengers annually. Whether arriving at Terminal 5 or departing from Terminal 2, our chauffeurs ensure a seamless transition from air to road.",
      stats: [
        { label: "Distance to City", value: "15 Miles" },
        { label: "Avg Travel Time", value: "50 Mins" },
        { label: "Operating Prices", value: "From £70" } // Stat 3 matches the 'Pricing' slot
      ]
    },

    // --- SECTION 3: RELATED PLACES / ATTRACTIONS GRID ---
    // Highlighting popular stops near LHR
    relatedPlaces: [
      {
        title: "Windsor Castle",
        category: "Royal Heritage",
        distance: "15 mins drive",
        description: "The oldest and largest occupied castle in the world. A perfect stopover for history lovers right next to the airport.",
        image: "https://images.unsplash.com/photo-1599573860020-f421b5c2d36d?q=80&w=1000&auto=format&fit=crop" 
      },
      {
        title: "Central London",
        category: "The Capital",
        distance: "45-60 mins drive",
        description: "Direct executive transfers to Mayfair, Kensington, and The City. Skip the Heathrow Express and travel door-to-door.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Hampton Court Palace",
        category: "Historic Site",
        distance: "25 mins drive",
        description: "Experience the Tudor majesty of King Henry VIII's favorite royal residence, featuring world-famous gardens.",
        image: "https://images.unsplash.com/photo-1678119859226-aa926601616c?q=80&w=1000&auto=format&fit=crop"
      }
    ],

    // --- SECTION 4: AREA SPOTLIGHT (Image + Text Feature) ---
    spotlight: {
      heading: "Navigating The Terminals",
      locationLabel: "Heathrow T5",
      description: "Heathrow operates across four active terminals (2, 3, 4, and 5). Navigating between them can be complex, but with Airport Driven, your chauffeur will track your flight to arrive at the correct terminal forecourt or arrivals hall. We specialize in inter-terminal transfers and connections to Gatwick or Stansted.",
      image: "https://images.unsplash.com/photo-1542296332-2e44a99cfef9?q=80&w=2000&auto=format&fit=crop" // Placeholder: Plane/Runway
    },

    // --- SECTION 5: AREA INFO BLOCK (Long Text + Travel Tips) ---
    details: {
      introText: "Traveling to or from Heathrow requires precision. Located off the M4 and M25 motorways, traffic conditions can vary. Our experienced drivers monitor these routes 24/7 to ensure your departure is stress-free and your arrival is welcoming.",
      paragraphs: [
        "Upon landing, our Meet & Greet service ensures you aren't left wandering the terminals. Your driver will be waiting in the arrivals hall with a name board, ready to assist with luggage and escort you to the VIP parking area.",
        "For business travelers, our vehicles serve as a mobile office with complimentary Wi-Fi, allowing you to work uninterrupted from the moment you leave the lounge to your final destination."
      ]
    },

    // --- SECTION 8: FAQS (Specific to LHR) ---
    faqs: [
      { 
        question: "Where is the meeting point for Terminal 5?", 
        answer: "For International arrivals, we meet at the Costa Coffee opposite the arrivals gate. For Domestic, we meet near the dedicated domestic arrivals exit. Your driver will send a text on landing." 
      },
      { 
        question: "How much is a taxi from Heathrow to Central London?", 
        answer: "Our fixed fares start from approximately £70 for a saloon car. This includes 60 minutes of free waiting time and all parking charges." 
      },
      { 
        question: "Do I need to pay for the Drop-off charge?", 
        answer: "No, all our quotes are fully inclusive of the Heathrow Terminal Drop-off charge (£5). The price you see is the final price." 
      },
      {
        question: "What happens if my flight to Heathrow is delayed?",
        answer: "We monitor all flights using official flight radar software. If your flight is delayed, we automatically adjust your driver's dispatch time so they arrive when you do. No extra charge."
      }
    ]
  },
  
  // You can add 'gatwick' object here next...
];