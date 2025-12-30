// Icons are now string references handled by the component map

export const servicesData = [
  
  // =============================================
  // CATEGORY: CORE TRANSFERS
  // =============================================

  {
    slug: "airport-transfers",
    name: "Airport Transfers",
    heroTitle: { word1: "Airport", word2: "Transfers" },
    description: "Reliable, fixed-price transfers to and from all major UK airports. Start your journey in comfort with our meet & greet service.",
    benefits: [
      { title: "Flight Monitoring", desc: "We track your flight in real-time. If you are delayed, we adjust pickup automatically.", icon: "Plane" },
      { title: "60 Mins Waiting", desc: "Free waiting time included after your flight lands to clear customs.", icon: "Clock" },
      { title: "Meet & Greet", desc: "Driver waits in arrivals with a name board to assist with luggage.", icon: "User" }
    ],
    logistics: {
      heading: "Arrival Procedures",
      content: "Your driver will be parked in the official short-stay car park. Upon landing, you will receive a text. We meet inside the Arrivals Hall specific to your terminal."
    },
    terminals: ["Heathrow", "Gatwick", "Stansted", "Luton", "London City", "Southend"]
  },

  {
    slug: "railway-transfers",
    name: "Railway Transfers",
    heroTitle: { word1: "Station", word2: "Links" },
    description: "Seamless door-to-platform chauffeur services for St Pancras, Euston, Victoria, and all major UK stations.",
    benefits: [
      { title: "Platform Pickup", desc: "Driver meets you at the platform end for immediate luggage help.", icon: "User" },
      { title: "Fixed Fares", desc: "Competitive rates to all London stations regardless of traffic.", icon: "Clock" },
      { title: "Inter-City", desc: "Connecting Heathrow arrivals directly to your train departure.", icon: "Train" }
    ],
    logistics: {
      heading: "Station Meeting Points",
      content: "Rail stations can be chaotic. We take the stress out by assigning precise meeting points. For St Pancras Eurostar arrivals, we meet at the 'Arrivals Gate' opposite Le Pain Quotidien."
    },
    terminals: ["St Pancras", "Euston", "Victoria", "Waterloo", "Paddington", "Kings Cross"]
  },

  {
    slug: "cruise-transfers",
    name: "Cruise Port Transfers",
    heroTitle: { word1: "Cruise", word2: "Connect" },
    description: "Luxury chauffeur transfers to Southampton, Dover, and Tilbury ports. Start your holiday from your doorstep.",
    benefits: [
      { title: "Portside Drop-off", desc: "Clearance to drop you directly at the terminal baggage area.", icon: "Ship" },
      { title: "High Capacity", desc: "Vehicles with space for all cruise trunks and carry-ons.", icon: "Briefcase" },
      { title: "Sightseeing", desc: "Add a stop at Stonehenge or Windsor on your way to the ship.", icon: "MapPin" }
    ],
    logistics: {
      heading: "Port Procedures",
      content: "We track your ship's docking time. Drivers wait in the dedicated 'Pre-booked Taxis' lane for swift exiting."
    },
    terminals: ["Southampton", "Dover", "Tilbury", "Harwich", "Portsmouth"]
  },

  // =============================================
  // CATEGORY: CHAUFFEUR SERVICES
  // =============================================

  {
    slug: "business-meetings",
    name: "Business Chauffeur",
    heroTitle: { word1: "Business", word2: "Class" },
    description: "Executive travel for corporate roadshows and meetings. Arrive prepared with our Wi-Fi enabled luxury fleet.",
    benefits: [
      { title: "On-Board Wi-Fi", desc: "Work on the go with high-speed 4G/5G.", icon: "Briefcase" },
      { title: "Confidentiality", desc: "Drivers trained in discretion and NDA compliance.", icon: "ShieldCheck" },
      { title: "Hourly Hire", desc: "Flexible hourly rates for day-long roadshows.", icon: "Clock" }
    ],
    terminals: ["Canary Wharf", "City of London", "Excel Centre", "Mayfair", "Tech City"]
  },

  {
    slug: "event-transport",
    name: "Event Transport",
    heroTitle: { word1: "Event", word2: "Logistics" },
    description: "From Ascot to Wimbledon, we handle group travel for major sporting and cultural events.",
    benefits: [
      { title: "Group Coord", desc: "Manage multiple cars via one account manager.", icon: "User" },
      { title: "VIP Access", desc: "Drop-offs at exclusive VIP entrances.", icon: "Star" },
      { title: "Standby", desc: "Drivers wait nearby for immediate departure.", icon: "Clock" }
    ],
    terminals: ["Royal Ascot", "Wimbledon", "Wembley", "O2 Arena", "Silverstone"]
  },

  {
    slug: "wedding-chauffeur",
    name: "Wedding Chauffeur",
    heroTitle: { word1: "Wedding", word2: "Day" },
    description: "Arrive in elegance on your special day. White-glove service with ribbons and champagne.",
    benefits: [
      { title: "Decor Included", desc: "Custom ribbons to match your theme.", icon: "Heart" },
      { title: "Uniformed", desc: "Impeccably dressed chauffeurs.", icon: "User" },
      { title: "Red Carpet", desc: "VIP treatment for the happy couple.", icon: "Star" }
    ],
    logistics: {
      heading: "The Big Day",
      content: "We arrive 30 minutes early for photos. We coordinate directly with your wedding planner to ensure smooth convoy movement."
    }
  },

  {
    slug: "private-tours",
    name: "Private Tours",
    heroTitle: { word1: "Discover", word2: "UK" },
    description: "Customized sightseeing tours of London, Stonehenge, Windsor, and Bath with a knowledgeable driver guide.",
    benefits: [
      { title: "Your Schedule", desc: "You decide the stops and the pace.", icon: "MapPin" },
      { title: "Driver Guide", desc: "Drivers with local historical knowledge.", icon: "Info" },
      { title: "Comfort", desc: "Luxury travel between historic sites.", icon: "CalendarDays" }
    ],
    terminals: ["Stonehenge", "Windsor Castle", "Bath Spa", "Cotswolds", "Oxford"]
  },

  {
    slug: "vip-protection",
    name: "VIP Close Protection",
    heroTitle: { word1: "Secure", word2: "Travel" },
    description: "Enhanced security transport for diplomats, celebrities, and high-net-worth individuals.",
    benefits: [
      { title: "Vetted Drivers", desc: "Background checked and security trained.", icon: "ShieldCheck" },
      { title: "Privacy Glass", desc: "Maximum privacy tinting on vehicles.", icon: "Car" },
      { title: "Convoy", desc: "Multiple vehicle coordination available.", icon: "Briefcase" }
    ]
  },

  // =============================================
  // CATEGORY: SPECIALIZED
  // =============================================

  {
    slug: "hotel-transfers",
    name: "Hotel Transfers",
    heroTitle: { word1: "Hotel", word2: "Link" },
    description: "Direct shuttles between London hotels and airports. Concierge partnerships for seamless booking.",
    benefits: [
      { title: "Concierge Liaison", desc: "We coordinate with hotel staff for luggage.", icon: "Hotel" },
      { title: "Early Pickup", desc: "Reliable 4 AM pickups for early flights.", icon: "Clock" },
      { title: "Group Vans", desc: "Mini-buses available for tour groups.", icon: "User" }
    ]
  },

  {
    slug: "student-travel",
    name: "Student Services",
    heroTitle: { word1: "Student", word2: "Safe" },
    description: "Safe, tracked, and reliable transfers for university students moving to/from campus.",
    benefits: [
      { title: "Tracked Journey", desc: "Parents can monitor the ride in real-time.", icon: "ShieldCheck" },
      { title: "Large Vans", desc: "Room for all university gear and boxes.", icon: "Truck" },
      { title: "Campus Drops", desc: "Direct delivery to halls of residence.", icon: "GraduationCap" }
    ]
  },
  
  {
    slug: "flight-monitoring",
    name: "Flight Monitoring",
    heroTitle: { word1: "Smart", word2: "Tracking" },
    description: "Our advanced system monitors your flight status. If you are early or delayed, we know.",
    benefits: [
      { title: "Auto-Adjust", desc: "Pickup time updates automatically.", icon: "Clock" },
      { title: "No Extra Fees", desc: "You don't pay for flight delay waiting time.", icon: "Star" },
      { title: "Global Tracking", desc: "We track flights from any origin airport.", icon: "Eye" }
    ]
  },

  {
    slug: "child-seats",
    name: "Child Seat Service",
    heroTitle: { word1: "Family", word2: "Safety" },
    description: "Safety is our priority. We provide diverse baby and child seats for all ages upon request.",
    benefits: [
      { title: "All Ages", desc: "Infant, Toddler, and Booster seats available.", icon: "Baby" },
      { title: "Sanitized", desc: "Seats are cleaned before every journey.", icon: "ShieldCheck" },
      { title: "Free of Charge", desc: "We provide seats at no extra cost.", icon: "Star" }
    ]
  },

  // =============================================
  // CATEGORY: FLEET PAGES
  // =============================================

  {
    slug: "saloon-class",
    name: "Saloon Car",
    heroTitle: { word1: "Economy", word2: "Class" },
    description: "Our most popular choice. Perfect for solo travelers or couples looking for value without compromising quality.",
    benefits: [
      { title: "Affordable", desc: "Premium service at standard prices.", icon: "Briefcase" },
      { title: "Hybrid", desc: "Toyota Prius hybrids for eco-friendly city driving.", icon: "BatteryCharging" },
      { title: "Capacity", desc: "Fits 3 adults and 2 medium suitcases.", icon: "User" }
    ]
  },

  {
    slug: "executive-class",
    name: "Executive Class",
    heroTitle: { word1: "Business", word2: "Premier" },
    description: "Mercedes-Benz E-Class or BMW 5 Series. Designed for business professionals requiring comfort.",
    benefits: [
      { title: "Luxury Interior", desc: "Leather seating and extra legroom.", icon: "Star" },
      { title: "Laptop Ready", desc: "Smooth suspension allows working on the go.", icon: "Briefcase" },
      { title: "Amenities", desc: "Water and newspapers provided.", icon: "Coffee" }
    ]
  },

  {
    slug: "mpv-class",
    name: "MPV Family",
    heroTitle: { word1: "Group", word2: "Travel" },
    description: "Spacious VW Sharan or Ford Galaxy. Perfect for families needing extra headroom and luggage space.",
    benefits: [
      { title: "5 Passengers", desc: "Space for the whole family.", icon: "User" },
      { title: "Big Trunk", desc: "Fits 4 large suitcases and strollers.", icon: "Briefcase" },
      { title: "Child Seats", desc: "Isofix points for safe installation.", icon: "ShieldCheck" }
    ]
  },
  
  {
    slug: "electric-class",
    name: "Electric Fleet",
    heroTitle: { word1: "Zero", word2: "Emission" },
    description: "Book our Tesla Model 3 or Polestar vehicles for a sustainable, silent journey.",
    benefits: [
      { title: "100% Electric", desc: "Zero emissions for a cleaner city.", icon: "BatteryCharging" },
      { title: "Silent Ride", desc: "Experience whisper-quiet travel.", icon: "Clock" },
      { title: "Tech", desc: "Advanced climate control and charging ports.", icon: "Star" }
    ]
  }

];