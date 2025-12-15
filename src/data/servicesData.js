// Keep data clean - No direct imports of React Components
export const servicesData = [
  // --- 1. AIRPORT TRANSFERS ---
  {
    slug: "airport-transfers", // IMPORTANT: Matches the URL /services/airport-transfers
    name: "Airport Transfers",
    
    heroTitle: { word1: "Airport", word2: "Transfers" },
    
    description: "Reliable, fixed-price transfers to and from all major UK airports. Whether flying from Heathrow, Gatwick, or Stansted, start your journey in comfort.",
    
    benefits: [
      {
        title: "Flight Monitoring",
        desc: "We track your flight in real-time. If you are delayed, we adjust your pickup time automatically at no extra cost.",
        icon: "Plane"
      },
      {
        title: "60 Mins Free Waiting",
        desc: "Take your time clearing customs. Your driver will wait for 60 minutes free of charge after your flight lands.",
        icon: "Clock"
      },
      {
        title: "Meet & Greet",
        desc: "Professional drivers wait in the arrivals hall with a clearly visible name board to assist with your luggage.",
        icon: "User"
      }
    ],

    logistics: {
      heading: "Arrival Procedures",
      content: "Your driver will be parked in the official short-stay car park. Upon landing, you will receive a text. We meet inside the Arrivals Hall specific to your terminal (e.g. Opposite Costa Coffee at LHR T5)."
    },

    terminals: ["Heathrow (LHR)", "Gatwick (LGW)", "Stansted (STN)", "Luton (LTN)", "London City (LCY)", "Southend (SEN)"]
  },

  // --- 2. RAILWAY TRANSFERS ---
  {
    slug: "railway-transfers",
    name: "Railway Transfers",
    
    heroTitle: { word1: "Station", word2: "Links" },
    
    description: "Seamless door-to-platform chauffeur services for St Pancras, Euston, Victoria, and all major UK stations.",
    
    benefits: [
      {
        title: "Platform Meet & Greet",
        desc: "Your driver will meet you at the platform end with a name board to assist with luggage immediately.",
        icon: "User"
      },
      {
        title: "Fixed Station Fares",
        desc: "Competitive fixed rates to St Pancras (Eurostar), Euston, and Waterloo regardless of central London traffic.",
        icon: "Clock" 
      },
      {
        title: "Flight to Train Connections",
        desc: "Specialized inter-transit service connecting Heathrow arrivals directly to your train departure.",
        icon: "Train"
      }
    ],

    logistics: {
      heading: "Meeting Points at Major Stations",
      content: "Rail stations can be chaotic. We take the stress out by assigning precise meeting points. For St Pancras Eurostar arrivals, we meet at the 'Arrivals Gate' opposite Le Pain Quotidien."
    },
    
    terminals: ["St Pancras International", "London Euston", "London Victoria", "London Waterloo", "Paddington Station", "Kings Cross"]
  },
  
  // --- 3. CRUISE TRANSFERS ---
  {
    slug: "cruise-transfers",
    name: "Cruise Transfers",
    
    heroTitle: { word1: "Cruise", word2: "Connect" },
    
    description: "Luxury chauffeur transfers to Southampton, Dover, and Tilbury. Start your holiday from your doorstep.",
    
    benefits: [
      {
        title: "Portside Drop-off",
        desc: "We have clearance to drop you directly at the baggage handling area of the terminal.",
        icon: "Ship"
      },
      {
        title: "Generous Luggage Allowance",
        desc: "Our MPV and Estate vehicles fit all your cruise trunks and carry-ons comfortably.",
        icon: "Briefcase"
      },
      {
        title: "Tour on the Way",
        desc: "Turn your transfer into a day trip. Add a stop at Stonehenge on your way to Southampton.",
        icon: "MapPin"
      }
    ],

    logistics: {
      heading: "Southampton & Dover Procedures",
      content: "For departures, we aim to arrive 3 hours prior to sailing. For arrivals, we track your ship's docking time. Drivers wait in the dedicated 'Pre-booked Taxis' lane for swift exiting."
    },

    terminals: ["Southampton Docks", "Dover Port", "Tilbury Docks", "Harwich International", "Portsmouth Port"]
  }
];