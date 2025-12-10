export const airportsData = [
{ // HEATHROW
    id: 1,
    name: "Heathrow Airport Taxi",
    slug: "heathrow-airport-taxi",
    image: "/images/airport-transfer/heathrow.jpeg",
    description: "Experience premium chauffeur services to and from London Heathrow (LHR). We monitor all flights to ensure punctual pickups at all terminals.",
    features: ["Meet & Greet", "Flight Monitoring", "Terminal 2, 3, 4 & 5", "Free 60 Mins Waiting"],
    distance: "15 miles from Central London",

    // --- 1. SERVICES GRID DATA (Specific to Heathrow) ---
    servicesGrid: [
      {
        title: "Flight Monitoring",
        desc: "We track all Heathrow arrivals in real-time. If your flight is delayed, we adjust the pickup time automatically so your driver is there when you land."
      },
      {
        title: "60 Mins Free Waiting",
        desc: "Heathrow customs can be busy. We offer 60 minutes of complimentary waiting time after your flight lands to ensure you aren't rushed."
      },
      {
        title: "Meet & Greet",
        desc: "Navigate the busy Heathrow terminals with ease. Your driver will wait in the arrivals hall with a name board to assist you with luggage."
      },
      {
        title: "Licensed & Insured",
        desc: "All our drivers are TfL licensed professionals, background checked, and fully insured for your safety and peace of mind."
      },
      {
        title: "Fixed Prices",
        desc: "The price you see is the price you pay to or from Heathrow. No surge pricing during peak hours or hidden costs for traffic delays."
      },
      {
        title: "24/7 Support",
        desc: "Our dedicated support team is available around the clock to assist with your Heathrow booking, changes, or queries."
      }
    ],


    // --- EXISTING SEO CONTENT DATA ---
    fleetData: [
      { type: "Saloon Cars", desc: "Comfortable and economical, perfect for solo travellers or small groups.", ideal: "Solo, Couples" },
      { type: "Estate Cars", desc: "Spacious boot area without compromising comfort. Great for extra luggage.", ideal: "Families, Golfers" },
      { type: "MPVs", desc: "Accommodates up to 6 passengers with generous legroom.", ideal: "Groups, Families" },
      { type: "Executive", desc: "Premium travel experience with luxury interiors like Mercedes E-Class.", ideal: "Business, VIPs" },
      { type: "8-Seater", desc: "Suitable for larger groups combining comfort with practicality.", ideal: "Large Families, Events" }
    ],
    bookingSteps: [
      { title: "Visit Our Booking Page", desc: "Go to the Airport Driven online booking widget." },
      { title: "Enter Travel Details", desc: "Add your pickup location, date, time, and passenger details." },
      { title: "Choose Your Vehicle", desc: "Select from standard saloons, executive cars, or MPVs." },
      { title: "Confirm & Pay", desc: "Pay securely online to receive instant confirmation." }
    ],
    highlights: [
      { title: "Professional Drivers", desc: "Experienced and courteous drivers well-versed in London routes." },
      { title: "24/7 Availability", desc: "Pre-book a ride for early mornings or late nights." },
      { title: "Real-Time Monitoring", desc: "We track your flight to adjust for delays automatically." },
      { title: "Fixed Pricing", desc: "No hidden charges or surge prices." }
    ],
    fareRoutes: [
      { destination: "Paddington, London", price: "55" },
      { destination: "London Bridge Station", price: "62" },
      { destination: "Kings Cross Station", price: "55" },
      { destination: "Oxford", price: "107" },
      { destination: "Birmingham", price: "199" },
      { destination: "Manchester", price: "289" },
      { destination: "Brighton", price: "109" },
      { destination: "Southampton", price: "120" }
    ],
    content: [
      { type: "main-heading", text: "Reliable Heathrow Airport Taxi Transfer Today" },
      { type: "paragraph", text: "Looking for a reliable taxi to Heathrow? Compare and book your airport taxi through Airport Driven, connecting you with professional licensed chauffeurs across the UK. Whether you need a taxi to Heathrow Terminal 2, Terminal 3, Terminal 5, or any other terminal, we ensure competitive prices and hassle-free travel." },
      { type: "sub-heading", text: "Why Choose Airport Driven for Your Heathrow Airport Transfer?" },
      { type: "list", items: ["Instant Price Comparison: Compare taxi fare to Heathrow airport instantly.", "All-Inclusive Pricing: No hidden fees – what you see is what you pay.", "Flight Tracking: Your driver adjusts to early or delayed arrivals.", "Meet & Greet Service: Professional drivers meet you at arrivals with a name board."] },
      { type: "sub-heading", text: "Heathrow Terminal-Specific Services" },
      { type: "paragraph", text: "We provide dedicated taxi services to all Heathrow terminals:" },
      { type: "list", items: ["Taxi to Heathrow Terminal 2: Direct drop-off at The Queen's Terminal.", "Taxi to Heathrow Terminal 3: Convenient access to departure areas.", "Airport taxi Heathrow Terminal 5: Reliable transfers to BA's main terminal."] }
    ],
    dynamicDestinations: [
  {
    title: "Central London",
    route: `To Heathrow Terminal`,
    image: "/images/london.jpg",
    slug: "central-london"
  },
  {
    title: "Oxford University",
    route: `From Heathrow Arrivals`,
    image: "/images/london.jpg",
    slug: "oxford"
  }
]
  },

  // 2. GATWICK
  {
    id: 2,
    name: "Gatwick Airport Taxi",
    slug: "gatwick-airport-taxi",
    image: "/images/airports/gatwick.jpg",
    description: "Reliable transfers to London Gatwick (LGW). Avoid the train hassle and travel in the comfort of our luxury fleet directly to North or South Terminal.",
    features: ["North & South Terminals", "Fixed Pricing", "24/7 Service"],
    distance: "29 miles from Central London",
    fleetData: [
      { type: "Standard Saloon", desc: "Economy option for up to 3 passengers.", ideal: "Budget Travel" },
      { type: "Executive Car", desc: "Travel in style with leather seats and climate control.", ideal: "Business" },
      { type: "Minibus", desc: "Spacious transport for large families with luggage.", ideal: "Groups" }
    ],
    bookingSteps: [
      { title: "Select Gatwick", desc: "Choose Gatwick as your pickup or dropoff point." },
      { title: "Pick Your Ride", desc: "Select a vehicle that fits your luggage needs." },
      { title: "Secure Checkout", desc: "Complete your booking with our secure payment gateway." }
    ],
    highlights: [
      { title: "Terminal Knowledge", desc: "Drivers know exactly where to drop you off for your airline." },
      { title: "No Parking Fees", desc: "We handle the drop-off charges so you don't have to." },
      { title: "Free Waiting Time", desc: "45 minutes free waiting time after your flight lands." }
    ],
    fareRoutes: [
      { destination: "Central London", price: "75" },
      { destination: "Heathrow Airport", price: "65" },
      { destination: "Brighton", price: "55" },
      { destination: "Cambridge", price: "145" }
    ],
    content: [
      { type: "main-heading", text: "Stress-Free Gatwick Airport Transfers" },
      { type: "paragraph", text: "Gatwick is the UK's second busiest airport. Skip the crowded trains and book a direct transfer with Airport Driven. We service both North and South terminals with precision and care." },
      { type: "sub-heading", text: "Connecting Gatwick to the UK" },
      { type: "paragraph", text: "Whether you are heading to Brighton, Central London, or transferring to Heathrow, our fixed-price promise ensures you never pay more for traffic delays." }
    ]
  },

  // 3. LUTON
  {
    id: 3,
    name: "Luton Airport Taxi",
    slug: "luton-airport-taxi",
    image: "/images/airports/luton.jpg",
    description: "Seamless connections to London Luton Airport (LTN). Perfect for business travelers and holidaymakers flying with low-cost carriers.",
    features: ["Door to Door", "No Hidden Charges", "Executive Cars"],
    distance: "34 miles from Central London",
    fleetData: [
      { type: "Saloon", desc: "Standard comfortable ride.", ideal: "Solo/Couples" },
      { type: "MPV5", desc: "Extra space for 5 passengers.", ideal: "Small Groups" },
      { type: "MPV8", desc: "Maximum capacity for large parties.", ideal: "Large Groups" }
    ],
    bookingSteps: [
      { title: "Enter Details", desc: "Input your flight number and pickup time." },
      { title: "Select Car", desc: "Choose the best car for your group size." },
      { title: "Book", desc: "Confirm your booking instantly via email." }
    ],
    highlights: [
      { title: "Flight Tracking", desc: "We monitor Luton arrivals for delays." },
      { title: "Express Drop-off", desc: "We get you as close to the terminal entrance as possible." },
      { title: "Reliable Service", desc: "Trusted by thousands of travelers annually." }
    ],
    fareRoutes: [
      { destination: "London Victoria", price: "70" },
      { destination: "Milton Keynes", price: "45" },
      { destination: "Oxford", price: "85" }
    ],
    content: [
      { type: "main-heading", text: "Luton Airport Taxi Specialists" },
      { type: "paragraph", text: "Luton Airport is a key hub for European travel. Airport Driven ensures your journey to or from Luton is relaxing and punctual." },
      { type: "sub-heading", text: "Avoid the Queue" },
      { type: "paragraph", text: "Don't wait in long taxi queues at the terminal. Pre-book with us and your driver will be waiting for you." }
    ]
  },

  // 4. LONDON CITY
  {
    id: 4,
    name: "London City Airport Taxi",
    slug: "london-city-airport-taxi",
    image: "/images/airports/london-city.jpg",
    description: "The fastest way to travel to London City Airport (LCY). Executive service tailored for business professionals working in Canary Wharf and the City.",
    features: ["Business Class", "Priority Pickup", "Canary Wharf Specialists"],
    distance: "9 miles from Central London",
    fleetData: [
      { type: "Executive Saloon", desc: "Mercedes E-Class or similar.", ideal: "Business Meetings" },
      { type: "Luxury Saloon", desc: "Mercedes S-Class for VIPs.", ideal: "VIP Travel" }
    ],
    bookingSteps: [
      { title: "Quote", desc: "Get an instant quote online." },
      { title: "Reserve", desc: "Secure your executive car." },
      { title: "Travel", desc: "Enjoy a smooth ride to the City." }
    ],
    highlights: [
      { title: "City Specialists", desc: "Expert knowledge of London City routes." },
      { title: "Time Efficient", desc: "We use bus lanes where permitted to speed up your journey." }
    ],
    fareRoutes: [
      { destination: "Canary Wharf", price: "35" },
      { destination: "Bank Station", price: "40" },
      { destination: "Westminster", price: "45" }
    ],
    content: [
      { type: "main-heading", text: "Executive Transfers to London City Airport" },
      { type: "paragraph", text: "Located in the heart of the docks, LCY is the preferred airport for business travelers. Our service reflects the high standards required by corporate clients." }
    ]
  },

  // 5. STANSTED
  {
    id: 5,
    name: "Stansted Airport Taxi",
    slug: "stansted-airport-taxi",
    image: "/images/airports/stansted.jpg",
    description: "Comfortable long-distance journeys to Stansted Airport (STN). Start your holiday or business trip the right way with Airport Driven.",
    features: ["Spacious MPVs", "On-Time Guarantee", "Luggage Assistance"],
    distance: "40 miles from Central London",
    fleetData: [
      { type: "Standard", desc: "Efficient and reliable.", ideal: "Holidaymakers" },
      { type: "Estate", desc: "Extra room for suitcases.", ideal: "Families" }
    ],
    bookingSteps: [
      { title: "Search", desc: "Find your route to Stansted." },
      { title: "Select", desc: "Pick a car with enough boot space." },
      { title: "Pay", desc: "Secure payment processing." }
    ],
    highlights: [
      { title: "Early Morning Rides", desc: "We operate 24/7 for those 4 AM flights." },
      { title: "Fixed Fares", desc: "Know the price before you travel, regardless of traffic." }
    ],
    fareRoutes: [
      { destination: "Liverpool Street", price: "80" },
      { destination: "Cambridge", price: "55" },
      { destination: "Stratford", price: "70" }
    ],
    content: [
      { type: "main-heading", text: "Reliable Stansted Airport Taxis" },
      { type: "paragraph", text: "Stansted is a major gateway for budget airlines. Ensure your savings aren't lost on expensive last-minute travel by pre-booking a fixed-rate taxi with Airport Driven." }
    ]
  },

  // 6. MANCHESTER
  {
    id: 6,
    name: "Manchester Airport Taxi",
    slug: "manchester-airport-taxi",
    image: "/images/airports/manchester.jpg",
    description: "Premium long-distance transfers to Manchester Airport. Travel across the UK in ultimate luxury and comfort.",
    features: ["Long Distance", "Comfort Stops", "Nationwide Coverage"],
    distance: "200 miles from London",
    fleetData: [
      { type: "Long Haul Saloon", desc: "Optimized for comfort on long drives.", ideal: "Cross-Country" },
      { type: "Executive MPV", desc: "Group travel with conference seating.", ideal: "Corporate Teams" }
    ],
    bookingSteps: [
      { title: "Plan", desc: "Schedule your long-distance pickup." },
      { title: "Customize", desc: "Request stops if needed." },
      { title: "Confirm", desc: "Receive driver details in advance." }
    ],
    highlights: [
      { title: "Fixed Long Distance Rates", desc: "Competitive pricing for inter-city travel." },
      { title: "Comfort Guarantee", desc: "Modern vehicles with air-con and refreshments." }
    ],
    fareRoutes: [
      { destination: "Central London", price: "289" },
      { destination: "Birmingham", price: "110" },
      { destination: "Leeds", price: "85" }
    ],
    content: [
      { type: "main-heading", text: "Manchester Airport Connections" },
      { type: "paragraph", text: "Serving the North of England, our Manchester Airport transfers offer a luxurious alternative to trains. Relax in the back of a Mercedes while we drive you door-to-door." }
    ]
  },

  // 7. EDINBURGH
  {
    id: 7,
    name: "Edinburgh Airport Taxi",
    slug: "edinburgh-airport-taxi",
    image: "/images/airports/edinburgh.jpg",
    description: "Luxury travel to and from Edinburgh Airport. Reliable service for Scotland's busiest airport tailored to your schedule.",
    features: ["Scottish Transfers", "Luxury Saloons", "Professional Drivers"],
    distance: "400 miles from London",
    fleetData: [
      { type: "Saloon", desc: "City transfer vehicle.", ideal: "Tourists" },
      { type: "Executive", desc: "High-end vehicle for business.", ideal: "Executives" }
    ],
    bookingSteps: [
      { title: "Book", desc: "Select Edinburgh Airport." },
      { title: "Details", desc: "Enter flight details." },
      { title: "Ride", desc: "Meet your driver at arrivals." }
    ],
    highlights: [
      { title: "Local Drivers", desc: "Expert knowledge of Edinburgh streets." },
      { title: "Scenic Routes", desc: "Enjoy the views on your way to the city." }
    ],
    fareRoutes: [
      { destination: "Edinburgh City Centre", price: "45" },
      { destination: "Glasgow", price: "95" }
    ],
    content: [
      { type: "main-heading", text: "Welcome to Edinburgh" },
      { type: "paragraph", text: "Arrive in Scotland's capital in style. Our drivers will meet you at Edinburgh Airport and whisk you away to your hotel, castle, or meeting." }
    ]
  },

  // 8. GLASGOW
  {
    id: 8,
    name: "Glasgow Airport Taxi",
    slug: "glasgow-airport-taxi",
    image: "/images/airports/glasgow.jpg",
    description: "Professional transfers for Glasgow Airport. Ensuring you arrive on time, every time, with our fleet of modern vehicles.",
    features: ["City Transfers", "24/7 Support", "Flight Tracking"],
    distance: "415 miles from London",
    fleetData: [
      { type: "Standard", desc: "Reliable city transport.", ideal: "All Travelers" },
      { type: "Minivan", desc: "For groups with golf clubs or luggage.", ideal: "Groups" }
    ],
    bookingSteps: [
      { title: "Input", desc: "Enter pickup postcode." },
      { title: "Choose", desc: "Select vehicle class." },
      { title: "Travel", desc: "Relax and enjoy the ride." }
    ],
    highlights: [
      { title: "Golf Transfers", desc: "Space for sports equipment." },
      { title: "Punctuality", desc: "We value your time above all." }
    ],
    fareRoutes: [
      { destination: "Glasgow City Centre", price: "40" },
      { destination: "Loch Lomond", price: "75" }
    ],
    content: [
      { type: "main-heading", text: "Glasgow Airport Transfers" },
      { type: "paragraph", text: "From the busy city center to the beautiful lochs, Airport Driven provides the perfect start to your Scottish journey from Glasgow Airport." }
    ]
  },

  // 9. BIRMINGHAM
  {
    id: 9,
    name: "Birmingham Airport Taxi",
    slug: "birmingham-airport-taxi",
    image: "/images/airports/birmingham.jpg",
    description: "Efficient transfers to Birmingham Airport. The smart choice for Midlands travel, connecting you to the NEC and beyond.",
    features: ["Midlands Specialist", "Fixed Fares", "Executive Fleet"],
    distance: "120 miles from London",
    fleetData: [
      { type: "Saloon", desc: "Comfortable sedan.", ideal: "1-3 Passengers" },
      { type: "Executive", desc: "Business class comfort.", ideal: "Corporate" }
    ],
    bookingSteps: [
      { title: "Select", desc: "Choose Birmingham BHX." },
      { title: "Time", desc: "Set your pickup time." },
      { title: "Go", desc: "Your driver arrives on time." }
    ],
    highlights: [
      { title: "NEC Transfers", desc: "Direct routes to the exhibition center." },
      { title: "Central Location", desc: "Easy access to all UK motorways." }
    ],
    fareRoutes: [
      { destination: "Birmingham City Centre", price: "35" },
      { destination: "Coventry", price: "45" },
      { destination: "London Heathrow", price: "145" }
    ],
    content: [
      { type: "main-heading", text: "Birmingham Airport Specialists" },
      { type: "paragraph", text: "Located in the heart of the UK, Birmingham Airport is a vital hub. We offer reliable connections to the NEC, city center, and surrounding areas." }
    ]
  },

  // 10. LIVERPOOL
  {
    id: 10,
    name: "Liverpool Airport Taxi",
    slug: "liverpool-airport-taxi",
    image: "/images/airports/liverpool.jpg",
    description: "Reliable taxi services for Liverpool John Lennon Airport. Travel in style and comfort to the home of the Beatles.",
    features: ["North West Travel", "Group Transfers", "Meet & Greet"],
    distance: "210 miles from London",
    fleetData: [
      { type: "Standard", desc: "Affordable and clean.", ideal: "Students/Solo" },
      { type: "MPV", desc: "Space for groups.", ideal: "Friends/Family" }
    ],
    bookingSteps: [
      { title: "Find", desc: "Search Liverpool Airport routes." },
      { title: "Book", desc: "Reserve your car online." },
      { title: "Arrive", desc: "Reach your destination safely." }
    ],
    highlights: [
      { title: "Music Tours", desc: "Ask about our local tours." },
      { title: "Football Transfers", desc: "Direct to Anfield or Goodison Park." }
    ],
    fareRoutes: [
      { destination: "Liverpool City Centre", price: "30" },
      { destination: "Manchester", price: "65" }
    ],
    content: [
      { type: "main-heading", text: "Liverpool John Lennon Airport Taxi" },
      { type: "paragraph", text: "Whether you are visiting for football, music, or business, Airport Driven ensures a smooth transfer from Liverpool Airport to your final destination." }
    ]
  }
];