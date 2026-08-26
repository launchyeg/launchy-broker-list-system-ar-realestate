const siteConfig = {
  // ── Broker Identity ────────────────────────────────────────
  brokerName: "AR Real Estate Redsea",
  brokerTagline: "Curated Homes. Trusted Expertise.",
  brokerLicense: "RE-2024-00123",
  ogImage: "/public/ogImage.png",

  // ── Contact Details ────────────────────────────────────────
  contact: {
    phone: "+20 106 0630544",
    whatsapp: "+20 103 3709904",
    email: "info@ar-realestate-redsea.com",
    address: "Floor 3, Building 2, Inter District, Hurghada, Red Sea, Egypt",
    googleMapsUrl: "https://maps.app.goo.gl/TwjiXwdJrjJrsCNN8",
  },

  // ── Social Media ───────────────────────────────────────────
  social: [
    {
      name: "facebook",
      href: "https://www.facebook.com/share/1EqDVfX168/?mibextid=wwXIfr",
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/a.r_realestate/",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
  ],

  // ── Typography ─────────────────────────────────────────────
  fonts: {
    display: "Playfair Display SC",
    body: "Inter",
  },

  // ── SEO & Meta ─────────────────────────────────────────────
  seo: {
    siteUrl: "https://www.ar-realestate-redsea.com",
    defaultTitle:
      "AR Real Estate Redsea | Premier Coastal Living in Egypt, Red Sea",
    defaultDescription:
      "Discover your dream coastal home with AR Real Estate. Specializing in luxury properties, villas, and seaside apartments across the Red Sea destinations.",
    ogImage: "/public/ogImage.png",
  },

  // ── Feature Flags ──────────────────────────────────────────
  features: {
    showPrices: true,
    showStatusBadge: true,
    enableWhatsApp: true,
  },

  // ── Destinations / Areas ───────────────────────────────────
  destinations: [
    {
      slug: "el-gouna",
      label: "El Gouna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYOFBpATjKIkbknWl4D0Q6-_qqmTLxxzEVeJKEFmaig&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HL9rJ9rfRodXUcwUlE99CuTA2zCVl3s9MvIfztFlyqxLPXHJG6dtTt8&s=10",
      tagline: "A self-contained island town like no other.",
      description:
        "El Gouna is a unique lagoon city built across islands, 22km north of Hurghada. Developed by Orascom, it is entirely self-sustained with its own hospital, airport, international schools, and a vibrant marina — attracting a sophisticated international crowd.",
      stats: [
        { label: "Projects", value: "8" },
        { label: "Payment Plan", value: "5" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Unique lagoon and island city layout",
        "Own airstrip, hospital and international school",
        "Active marina and watersports scene",
        "Vibrant nightlife and dining",
        "Premium property values with strong resale",
      ],
      whyInvest:
        "El Gouna consistently commands a price premium over other Red Sea destinations. Its self-contained nature, strong community, and international appeal ensure long-term value retention.",
    },
    {
      slug: "soma-bay",
      label: "Soma Bay",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/somabayimage.jpeg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/somabayhero.jpeg",
      tagline: "A peninsula of pure luxury.",
      description:
        "At Somabay, we believe in turning dreams into reality. Our story is one of passion, dedication, and a deep appreciation for the natural beauty that surrounds us. Nestled along Egypt’s Red Sea coastline, Somabay has become synonymous with luxury living and breathtaking landscapes.",
      stats: [
        { label: "Projects", value: "14" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "30 minutes from Hurghada",
        "School",
        "Beach Clubs",
        "Golf Course",
        "Marina and Waterfront Promenade",
        "Kids Play Areas",
        "Water Sports",
        "Tennis Sport",
        "Padel Court",
        "Commercial Area",
      ],
      whyInvest:
        "Soma Bay represents the top end of the Red Sea market. Limited land supply and an ultra-premium resort offering ensure strong capital preservation and appreciation over time.",
    },
    {
      slug: "makadi-heights",
      label: "Makadi Heights",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-7A15v0xHibScfdK7Sme23O468duFZtndn0boDWz4w&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIITg2tOnwdAt0PXox5IpULcJi_AC9OBnW74Q1k2mzCJSWpWO2w47v5g&s=10",
      tagline: "Peaceful bay living with resort-grade amenities.",
      description:
        "Makadi Heights sits 30km south of Hurghada in a protected natural bay. Known for its calm, crystal-clear waters and spectacular coral reefs, it is home to several all-inclusive resorts and a growing residential community seeking tranquility.",
      stats: [
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "8 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Commercial Area",
        "Health and Wellness",
        "Green Spaces",
        "Clubhouse",
        "School",
        "Restaurants",
      ],
      whyInvest:
        "Makadi Heights offers excellent value compared to more established destinations, with significant upside as infrastructure continues to develop. Ideal for buyers seeking affordable beachfront entry.",
    },
    {
      slug: "ras-soma",
      label: "Ras Soma",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/3.png",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBBZHmEhKu5nKZE7zpuFilmPrXbqsfjGxRK0jkCyY1Q&s=10",
      tagline: "A peninsula of pure luxury.",
      description:
        "Nestled on the bay of Ras Abu Soma, Travco Group’s latest destination on the Red Sea is flourishing and ready to be the next flagship town on Egypt’s East Coast. The unique combination of world-class service and years of experience in the hospitality industry, births a one-of-a-kind International residential destination and tourist hot spot, that celebrates nature and all the wonders it has to offer- The Ras Soma resort is primed to become one of the most desirable holiday destinations along the Egyptian Red Sea.",
      stats: [
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "6" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Private beach",
        "Hospitality",
        "Landscapes and walkways",
        "GYM",
        "2 hotels",
        "Security and Services",
      ],
      whyInvest:
        "Located on the Red Sea Coast, Ras Soma is a mere 35-minute drive from Hurghada International Airport. We are also conveniently 60 km from Downtown Hurghada. If you are into roadtrips, we are a scenic 4.5 hr drive from Cairo.",
    },
    {
      slug: "makadina",
      label: "Makadina",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/Screenshot-2026-03-10-131215.png",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCLQRXwSljXbfnwZ1arU00535Fz6LUf71gZ0HIh9BTw&s=10",
      tagline: "A peninsula of pure luxury.",
      description:
        "Makadina features waterfront serviced homes, a wide array of outdoor experiences from various themed swimmable water features and walkable pathways throughout the development, a clubhouse, padel, tennis, football, volley, and basketball courts, bicycle lanes, kids areas to a wellness center and a variety of outdoor parks. It will also feature outdoor communal areas for residents to hangout, a shopping mall and various F&B and retail outlets",
      stats: [
        { label: "Projects", value: "1" },
        { label: "Payment Plan", value: "8" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Private beach",
        "Hospitality",
        "Landscapes and walkways",
        "GYM",
        "2 hotels",
        "Security and Services",
      ],
      whyInvest:
        "Developed in line with Travco Properties’ vision for sustainable, self-sufficient communities, Makadina sets a modern benchmark for residential development where comfort, connectivity, and lifestyle come together in one cohesive and evolving destination.",
    },
    {
      slug: "sahl-hasheesh",
      label: "Sahl Hasheesh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jYSIoI1hoGGYbFDVmtTfwyF7DyPlrYU6AzurYmSPnw&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8JyGoDwalPNQfhPhumiTjQvPwwL5xIBKwBJ8DXh9wg&s=10",
      tagline: "Where the Red Sea meets private paradise.",
      description:
        "Sahl Hasheesh is one of Egypt's most exclusive coastal destinations — a master-planned resort town 18km south of Hurghada. Its crescent bay, pristine beaches, and car-free promenade make it a sanctuary for those seeking luxury without compromise.",
      stats: [
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "8" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Private car-free promenade along the beach",
        "World-class diving and snorkeling reefs",
        "5-star hotel and resort facilities",
        "High rental yield investment destination",
        "Gated and secured master-planned community",
      ],
      whyInvest:
        "Sahl Hasheesh has seen consistent price growth year-on-year, driven by international demand and limited supply. Rental yields of 8–12% make it one of Egypt's strongest investment destinations.",
    },
    {
      slug: "hurghada",
      label: "Hurghada",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/sunset-8627419_1280.jpg",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQnWFGGT8BcAiv-G7c05f63cZynGBPqdp93KjcuTXIw&s=10",
      tagline: "Egypt's most connected Red Sea city.",
      description:
        "Hurghada is the beating heart of Egypt's Red Sea Riviera. A full-service city with international airport, world-class hospitals, schools, and a thriving expat community — it offers the perfect balance of resort lifestyle and everyday convenience.",
      stats: [
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "5" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Infinty Pools",
        "Fitness Facilites",
        "24/7 Security",
        "Gourmet Dining",
        "Events",
        "Paking Facilites",
      ],
      whyInvest:
        "Hurghada offers the widest range of property types and price points in Egypt. Its established infrastructure and growing tourism numbers make it a reliable and liquid real estate market.",
    },
  ],

  // ── Projects ───────────────────────────────────
  projects: [
    {
      slug: "aden",
      label: "Aden",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBD0AEBCtCNx77KAfrdN1VWvZY4rXgcsixbgoyEEd2Aopn9j1rmIUUzScX&s=10",
      heroImage:
        "https://assets.live.beyond-creation.net/makadi/336021e46700d4efb06a8331167bd19f.jpg",
      destination: "makadi-heights",
      destinationLabel: "Makadi Heights",
      tagline: "Sophisticated coastal living in the heart of Makadi Heights.",
      description:
        "Aden offers an exclusive residential experience located along the stunning Red Sea coastline. Designed with elegance and comfort in mind, every unit provides residents with seamless access to elite resort amenities, breathtaking sea vistas, and a lifestyle defined by serenity and prestige.",
      stats: [
        { label: "Location", value: "Makadi Heights" },
        { label: "Delivery", value: "2027" },
        { label: "Payment Plan", value: "8 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Unobstructed views of the Red Sea coast",
        "Exclusive access to private sandy beaches",
        "World-class clubhouse and infinity pools",
        "Premium finishing with modern aesthetics",
        "Advanced smart-home system integration",
        "Secure gated community with 24/7 support",
      ],
      whyInvest:
        "Aden represents a prime investment opportunity within Sahl Hasheesh's expanding luxury market. Its strategic location, combined with high-end amenities and long-term capital appreciation potential, makes it a premier choice for discerning property investors in Hurghada.",
    },
    {
      slug: "ledge-valley",
      label: "Ledge Valley",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/Ledge-Valley1.jpeg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/Ledge-Valley2.jpeg",
      destination: "makadi-heights",
      destinationLabel: "Makadi Heights",
      tagline: "Where nature’s heights meet architectural grace.",
      description:
        "Ledge Valley is a sanctuary of serenity, nestled within the natural topography of Makadi Heights. Designed for those who value privacy, the project integrates seamless landscape design with modern, low-impact architecture.",
      stats: [
        { label: "Location", value: "Makadi Heights" },
        { label: "access", value: "Private Beach" },
        { label: "Payment Plan", value: "8 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Innovative terraced design for maximum privacy",
        "Nature-integrated landscaping",
        "Spacious outdoor living areas",
        "Quiet, low-density residential community",
        "Sustainable building practices",
        "Access to exclusive Makadi Heights beach club",
      ],
      whyInvest:
        "Ledge Valley offers a unique proposition for buyers looking for exclusivity and a deep connection to the environment, making it a highly desirable option for long-term hold appreciation.",
    },
    {
      slug: "siyal-villas",
      label: "Siyal Villas",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/Ledge-Valley2.jpeg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/Ledge-Valley3.jpeg",
      destination: "makadi-heights",
      destinationLabel: "Makadi Heights",
      tagline: "Timeless elegance on the shores of Makadi Heights.",
      description:
        "Siyal Villas represent the pinnacle of coastal luxury, offering expansive footprints and sophisticated design. Each villa is a masterpiece of light and space, created for refined family living.",
      stats: [
        { label: "Location", value: "Makadi Heights" },
        { label: "access", value: "Private Beach" },
        { label: "Payment Plan", value: "8 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Grand standalone villa designs",
        "Direct, unobstructed sea views",
        "Private pools and expansive gardens",
        "High-end finishing and architectural details",
        "Dedicated concierge services",
        "Located in the most prestigious sector of Makadi Heights",
      ],
      whyInvest:
        "Siyal Villas are positioned as the elite tier of Makadi Heights real estate. With limited supply and premium demand, they provide an unmatched combination of luxury living and wealth preservation.",
    },
    {
      slug: "arc-soma",
      label: "Arc Soma",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToQvobqV5xXah8NpWmgWvVRDjC4qrKynjqKlzvTnM_weVNXhOa7oohvA&s=10",
      heroImage:
        "https://somabay.com/wp-content/uploads/arc-8-1-scaled-1-1030x686.jpg",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Modern coastal architecture meets the tranquil Red Sea.",
      description:
        "Arc Soma is a contemporary residential development located in the prestigious Soma Bay area. Designed with clean, artistic lines and an emphasis on open space, the project offers a sophisticated lifestyle where modern design blends perfectly with the natural beauty of the Red Sea shores.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Delivery", value: "2027" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Architecturally distinct modern design",
        "Panoramic vistas of the Red Sea horizon",
        "Access to world-class Soma Bay golf facilities",
        "Resort-style infinity pools and lounge areas",
        "High-end finishes throughout every unit",
        "Integrated smart residential technology",
      ],
      whyInvest:
        "Investing in Arc Soma provides entry into one of the Red Sea's most exclusive destinations. Its focus on modern design and proximity to premium leisure amenities ensures high appeal for both long-term residents and luxury holiday seekers, driving consistent capital growth.",
    },
    {
      slug: "blanca-collection",
      label: "Blanca Collection",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Blanca-Collection2.jpeg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Blanca-Collection1.jpeg",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Elevated coastal living with panoramic vistas.",
      description:
        "Perched at a natural elevation, Blanca Collection offers an exclusive residential address in Soma Bay, featuring 360° panoramic views of the Red Sea, lush golf courses, and dramatic coastal landscapes.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        {
          label: "Unit Types",
          value: "Chalets, Penthouses, Standalone Villas",
        },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Unrivaled natural elevation for unobstructed views",
        "Diverse range of units from 1-bedroom chalets to private villas",
        "Contemporary, clean architectural design",
        "Close proximity to the Cascades Golf Course and ORCA Dive Centre",
        "Access to world-class Soma Bay amenities and S. Cape Beach",
        "Secure, gated community with professional management",
      ],
      whyInvest:
        "Blanca Collection represents a 'Legacy Asset' in Soma Bay. Its unique elevated position ensures scarcity value and high appreciation potential, making it an ideal choice for investors seeking premium, high-yield coastal property.",
    },
    {
      slug: "blanca-gardens-1",
      label: "Blanca Gardens 1",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/blanca-gardens.jpeg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/blanca-gardens.jpeg",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Elevated coastal living with panoramic vistas.",
      description:
        "Perched at a natural elevation, Blanca Collection offers an exclusive residential address in Soma Bay, featuring 360° panoramic views of the Red Sea, lush golf courses, and dramatic coastal landscapes.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        {
          label: "Unit Types",
          value: "Chalets, Penthouses, Standalone Villas",
        },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Unrivaled natural elevation for unobstructed views",
        "Diverse range of units from 1-bedroom chalets to private villas",
        "Contemporary, clean architectural design",
        "Close proximity to the Cascades Golf Course and ORCA Dive Centre",
        "Access to world-class Soma Bay amenities and S. Cape Beach",
        "Secure, gated community with professional management",
      ],
      whyInvest:
        "Blanca Collection represents a 'Legacy Asset' in Soma Bay. Its unique elevated position ensures scarcity value and high appreciation potential, making it an ideal choice for investors seeking premium, high-yield coastal property.",
    },
    {
      slug: "bay-west-valley",
      label: "Bay West Valley",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUDi32B9drIUcA1p_6Sw1Dufxu0l7IrhsrDoR6tKxxa5vE49kEzhBKBU&s=10",
      heroImage:
        "https://somabay.com/wp-content/uploads/Baywest-2-1-1030x773.png",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Unrivaled luxury nestled in the heart of Soma Bay.",
      description:
        "Bay West Valley offers an exclusive residential escape where modern architecture meets the serene Red Sea landscape, providing residents with privacy, premium amenities, and stunning views.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Exclusive access to private beach clubs",
        "Sophisticated contemporary architecture",
        "Panoramic sea and mountain views",
        "Integrated world-class golf amenities",
        "24/7 high-end security and concierge",
        "Serene eco-friendly landscaping design",
      ],
      whyInvest:
        "Bay West Valley represents a premier investment in one of the Red Sea's most sought-after destinations, ensuring high rental demand and long-term asset appreciation in a secure, master-planned community.",
    },
    {
      slug: "blanca-gardens-2",
      label: "Blanca Gardens 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUfKCy1-314yFukBADcKXCWQyE_WIFrz1QOi9XVDIOH1Yk7wYL99d6YE&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgRHJVQ35EK2ogNpvx2bK5yRL5Rjg68HH3TOrDWfTWw&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Purity and prestige on the Red Sea coast.",
      description:
        "Blanca is a refined residential project characterized by its minimalist aesthetic and seamless connection to the azure waters of Soma Bay, offering a tranquil sanctuary for luxury living.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Prime waterfront location in Soma Bay",
        "Bespoke interior design and high-end finishes",
        "Infinity edge pools overlooking the sea",
        "Access to elite diving and water sports",
        "Private residential lounge and community hub",
        "Sustainable cooling and infrastructure",
      ],
      whyInvest:
        "With its iconic design and strategic position within Soma Bay, Blanca provides a unique opportunity for investors to own a high-yield property in a mature, high-growth luxury destination.",
    },
    {
      slug: "coral-coves",
      label: "Coral Coves",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Coral-Coves2.jpeg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Coral-Coves.jpeg",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Where the sea coral coves meets refined living.",
      description:
        "Coral Coves captures the essence of coastal relaxation with spacious units designed for light, air, and comfort, situated in the vibrant and established community of Soma Bay.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Spacious open-plan living arrangements",
        "Expansive balconies with coastal views",
        "Direct walking paths to sandy beaches",
        "Proximity to marina and retail zones",
        "Family-oriented resort infrastructure",
        "Professional property management services",
      ],
      whyInvest:
        "Coral Coves offers an exceptional balance of lifestyle and investment potential, catering to the growing market of vacation home seekers who value both natural beauty and world-class resort facilities.",
    },
    {
      slug: "cala",
      label: "Cala",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784212366372-wz5eiv74lbh.jpg",
      heroImage:
        "https://thehorizonrealestate.com/wp-content/uploads/2025/01/Cala-sahl-hasheesh-exterior-1.jpeg",
      destination: "sahl-hasheesh",
      destinationLabel: "Sahl Hasheesh",
      tagline: "Your private gateway to Sahl Hasheesh.",
      description:
        "Cala defines elegance with its Mediterranean-inspired architecture, offering residents a secluded living experience surrounded by the crystal-clear waters and white sands of Sahl Hasheesh.",
      stats: [
        { label: "Location", value: "Sahl Hasheesh" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "7" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Mediterranean-themed waterfront aesthetics",
        "Private beach accessibility for residents",
        "Proximity to the Sahl Hasheesh Old Town",
        "World-class swimming and fitness centers",
        "Quiet, lush, and landscaped surroundings",
        "Advanced gated security systems",
      ],
      whyInvest:
        "Cala is situated in Sahl Hasheesh's premium residential core, providing investors with a stable, high-demand asset that benefits from the area's reputation as a top-tier luxury tourism hotspot.",
    },
    {
      slug: "coves",
      label: "Coves",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSm5TxQGa3el6GIoydd2Gmr3kPb8DXs48Uw9tiXA5LqamZfMckZkjg50&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DT9Um9Bi-s_5IVlKGv9P3aJ_9WPdV2Ob1OTGBppTTA&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Hidden luxury along the pristine Red Sea.",
      description:
        "Coves is an exclusive enclave featuring intimate residential clusters designed to offer absolute privacy, set against the dramatic backdrop of the rugged Soma Bay coastline.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Intimate and private residential clusters",
        "Dramatic coastal and reef vistas",
        "Exclusive clubhouse and swimming lagoon",
        "High-end smart home infrastructure",
        "Pedestrian-friendly green pathways",
        "Unmatched peace and seclusion",
      ],
      whyInvest:
        "Coves targets the ultra-premium niche, offering scarcity and exclusivity in a prime location. This makes it a highly desirable asset for long-term holders seeking significant capital appreciation.",
    },
    {
      slug: "dua",
      label: "DUA",
      image:
        "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/inventory/brochure_images/Orascom%20Development%20Egypt/dua/a/a.png",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Fqpqw5kYwwNEUYnDPtfoTAjcuaHLOpLBy4RprtOLg9E0EePSw6hnBZZj&s=10",
      destination: "makadi-heights",
      destinationLabel: "Makadi Heights",
      tagline: "Serene architectural harmony in Makadi Heights.",
      description:
        "DUA offers a refined residential experience where clean design meets the tranquil nature of Makadi Heights, providing a sophisticated atmosphere for those seeking peace and modern comfort.",
      stats: [
        { label: "Location", value: "Makadi Heights" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "8 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Modern minimalist architectural design",
        "Prime access to Makadi Heights beaches",
        "Serene landscaped community gardens",
        "High-end clubhouse and leisure facilities",
        "Proximity to premier diving spots",
        "Secure gated community environment",
      ],
      whyInvest:
        "DUA provides a unique entry point into the established Makadi Heights luxury market, offering high potential for both rental yields and property value appreciation due to its focus on design and location.",
    },
    {
      slug: "golftown",
      label: "Golftown",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEmMgi_uie8ZKoccsmApBC0N7Ypt3xPAo58Qs3j1tILUbEkPYN6-2G3d6&s=10",
      heroImage: "https://roi-eg.b-cdn.net//photos/projects/1_a67cf_lg.webp",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Golf-front living in the heart of Soma Bay.",
      description:
        "Golftown is a premier residential destination perfectly positioned along the championship golf courses of Soma Bay, offering an active, luxury lifestyle for golf enthusiasts and families alike.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Direct views of championship golf courses",
        "Access to world-class sporting facilities",
        "Sophisticated clubhouse and dining options",
        "Spacious units with modern interiors",
        "Vibrant community atmosphere",
        "Proximity to marina and beach clubs",
      ],
      whyInvest:
        "Golftown leverages the high demand for sports-integrated luxury living in Soma Bay, making it an excellent investment for long-term rental income and consistent capital growth.",
    },
    {
      slug: "il-bayou",
      label: "Il Bayou",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvMvkxLVBjsBc8PXPsC-UEF1TGcPRDbiTbANu14jPm3z4Ivaa5-fAQ819&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8MhJk6nFbKMB3p7vPBbSqRM5xXwjLXk9gXPKEsNzyqUJi_jUrZbW3ncx&s=10",
      destination: "sahl-hasheesh",
      destinationLabel: "Sahl Hasheesh",
      tagline: "Unmatched coastal elegance in Sahl Hasheesh.",
      description:
        "Il Bayou brings a boutique residential feel to Sahl Hasheesh, emphasizing privacy, lush greenery, and architectural excellence in a world-class tourism destination.",
      stats: [
        { label: "Location", value: "Sahl Hasheesh" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "6" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Boutique residential community design",
        "Lush, expansive greenery and gardens",
        "Proximity to Sahl Hasheesh's white sands",
        "Privacy-focused site planning",
        "High-end community amenities",
        "Modern and sustainable infrastructure",
      ],
      whyInvest:
        "Il Bayou serves as a prestigious address in Sahl Hasheesh, offering investors a rare blend of boutique exclusivity and the stability of a high-growth, high-demand coastal location.",
    },
    {
      slug: "makadina",
      label: "Makadina",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6EGYseL7jKSgOc6cVWVdJ43rd7Rntf4Tnfg6SXicrw&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV94gD7QQO6kx43ml1QosyVdvyfqahdXxS6cCnikZvcEjyuNnJ0GeErAYb&s=10",
      destination: "makadina",
      destinationLabel: "Makadina",
      tagline: "Boutique coastal living in Makadi Heights.",
      description:
        "Makadina offers a curated residential experience in Makadi Heights, blending comfortable, modern units with access to all the recreational and leisure benefits of this renowned Red Sea destination.",
      stats: [
        { label: "Location", value: "Makadina" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Boutique residential community",
        "Easy access to Makadi Bay’s marina",
        "Modern interiors and efficient layouts",
        "Proximity to high-end resort amenities",
        "Beautifully landscaped surroundings",
        "Strong demand for vacation rentals",
      ],
      whyInvest:
        "Makadina provides an excellent balance of affordability and luxury lifestyle, attracting a wide range of investors looking for steady returns in one of the Red Sea's most established tourist zones.",
    },
    {
      slug: "mesca",
      label: "Mesca",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4VoWuHGPAGkTG31CrngDAVaXs0m2QN2k7zkanGsNYQ&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTGmOL44LjSrV-VIC52kZwEe9ZejHJXcDSixz3axG9_zLUWyN8qD1UmXg&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Architectural purity on the Soma Bay shore.",
      description:
        "Mesca is a signature project in Soma Bay, known for its bold design, private beach access, and dedication to creating an ultra-premium lifestyle on the serene Red Sea coastline.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Iconic modern design and architecture",
        "Exclusive private beach and marina access",
        "Bespoke residential villa and apartment mix",
        "High-end resort and spa amenities",
        "Panoramic views of the Red Sea",
        "Ultra-premium community standards",
      ],
      whyInvest:
        "As a signature development, Mesca offers significant status and capital appreciation potential, making it the top choice for discerning investors seeking premium real estate in Soma Bay.",
    },
    {
      slug: "fanadir-shores",
      label: "Fanadir Shores",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Fanadir2.jpg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Fanadir1.jpg",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline:
        "Ultra luxury living next to Fanadir Marina with direct Red Sea views.",
      description:
        "FANADIR SHORES - Ultra Luxury represents the pinnacle of elite coastal living right next to Fanadir Marina. Featuring an exclusive collection of only 57 expansive 2-4 BR apartments with private lagoon access and massive outdoor spaces.",
      stats: [
        { label: "Unit Types", value: "Apartments 2-4 BR (57 Units Total)" },
        { label: "Delivery", value: "Q3 2028 (2 Years)" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Prime ultra-luxury setting next to Fanadir Marina with direct Red Sea waterfront",
        "Extremely limited collection of only 57 total units ensuring ultimate exclusivity",
        "Massive floor plans ranging from 268-337 sqm with private gardens up to 160 sqm",
        "Private lagoon access and world-class marina lifestyle infrastructure",
        "Scheduled delivery by Q3 2028 with premier scarcity-driven appreciation",
        "The absolute crown jewel for high-net-worth real estate portfolios",
      ],
      whyInvest:
        "Fanadir Shores stands as the most prestigious ultra-luxury development in El Gouna, offering unrivaled scarcity, elite demographics, and unmatched long-term wealth preservation.",
    },
    {
      slug: "kamaran",
      label: "kamaran",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/kamaran2.jpg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/kamaran1.jpg",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "Boho chic entry living in central El Gouna near Downtown.",
      description:
        "KAMARAN - Boho Chic Entry brings a vibrant, relaxed lifestyle to central El Gouna near Downtown. Featuring chalet studios, 1BR, and 2BR residences with gorgeous boho aesthetics and private garden options.",
      stats: [
        { label: "Unit Types", value: "Chalet Studio, 1BR, 2BR" },
        { label: "Delivery", value: "1 & 2 Years (Fastest Entry)" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Prime central location near El Gouna Downtown",
        "Distinctive boho chic architectural style and natural ambiance",
        "Variety of compact and spacious units with 25-107 sqm private gardens",
        "Fastest delivery timeline (1 & 2 years options)",
        "Exceptional best-entry price point for high rental demand",
        "Ideal for short-term holiday rentals and personal getaways",
      ],
      whyInvest:
        "Kamaran offers the fastest delivery and most accessible entry pricing in central El Gouna, ensuring immediate rental utilization and high yield potential.",
    },
    {
      slug: "north-bay-highland",
      label: "North Bay Highland",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/NorthBayHighland1.jpg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/NorthBayHighland2.jpg",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "North waterfront, open-to-sea living designed by Legorreta.",
      description:
        "NORTH BAY HIGHLAND - by Legorreta is a masterclass in architectural pedigree, featuring spectacular north waterfront, open-to-sea views with private boat docks. Offering luxury 3BR lofts, 3BR twin villas, and grand 4BR standalone villas.",
      stats: [
        { label: "Unit Types", value: "Lofts, Twin Villas, Standalone Villas" },
        { label: "Delivery", value: "Q3 2028 (2 Years)" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Prime north waterfront location with open-to-sea views and private boat docks",
        "Iconic architectural design by the renowned Legorreta studio",
        "Spacious 3BR lofts, 3BR twin villas, and 4BR standalone villas with huge gardens",
        "Unmatched architectural pedigree and elite community status",
        "Secure delivery by Q3 2028",
        "Exceptional long-term capital appreciation and prestige value",
      ],
      whyInvest:
        "North Bay Highland offers legendary architectural design combined with prime open-to-sea waterfront positioning, making it one of the absolute premier trophy assets in El Gouna.",
    },
    {
      slug: "tuban-islands",
      label: "Tuban Islands (Tuban 1)",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/TUBAN%20ISLANDS2.jpg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/TUBAN%20ISLANDS1.jpg",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline:
        "Exclusive island living experience on Tuban Islands / Art Island.",
      description:
        "TUBAN ISLANDS (Tuban 1) offers a unique island living experience featuring a diverse selection of 2-3BR apartments, middle/corner townhouses, and expansive standalone villas with generous garden spaces.",
      stats: [
        { label: "Location", value: "Tuban Islands / Art Island" },
        { label: "Delivery", value: "2 Years (39 Units Inventory)" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Uniquely positioned on Tuban Islands / Art Island with waterfront views",
        "Diverse inventory ranging from 112-156 sqm apartments to luxury villas",
        "Spacious townhouses and standalone villas with massive private gardens",
        "Largest inventory offering with 39 available units",
        "Quick 2-year delivery timeline",
        "Premium master-planned community infrastructure",
      ],
      whyInvest:
        "Tuban Islands provides a rare island-style community living option with deep liquidity and variety, making it one of the most sought-after phases for diverse investment budgets.",
    },
    {
      slug: "tuban-marina-island",
      label: "Tuban Marina Island",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYINmZv4sj09BN-ZyNWyVsocCHSwTrMU_Yl59fQnjdAFbL_ikOS_z3MBo&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGlpRou0YaEMnc_9xGOI1V3DriVolizj3awVVxbcMvc0XK-qOmP7uw06T&s=10",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "The largest district in El Gouna.",
      description:
        "Launched in 2024, this 1,000,000 sqm district features signature cascading waterfalls along its central waterway and a mix of premium residences.",
      stats: [
        { label: "Location", value: "El Gouna" },
        { label: "Down Payment", value: "15%" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Unique central cascading waterfalls",
        "Largest district in El Gouna",
        "Waterfront promenade and boat docks",
        "Boutique hotel and luxury senior living",
        "Fully finished with AC and cabinetry",
        "Quarterly installments over 5 years",
      ],
      whyInvest:
        "As the newest and largest flagship district in El Gouna, Tuban offers the best potential for early-stage capital appreciation.",
    },
    {
      slug: "nuba",
      label: "Nuba",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/NUBA1.png",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/NUBA2.png",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline:
        "Quiet pocket near downtown & beach with premium serviced living.",
      description:
        "NUBA - Serviced Apartments offers a serene boutique living experience in a quiet pocket close to both downtown and the beach. Featuring exquisite 1BR and 2BR serviced apartments with private garden options and luxury resort management.",
      stats: [
        { label: "Location", value: "El Gouna" },
        { label: "Delivery", value: "2 Years" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Quiet, private location near downtown and beach",
        "Fully serviced luxury apartments with hotel management",
        "Spacious 1BR options with private gardens (32-35 sqm)",
        "Generous 110 sqm 2BR floor plans",
        "Furnished option available upon request",
        "High rental yield potential through managed services",
      ],
      whyInvest:
        "NUBA combines the lifestyle of fully serviced hospitality with the strong capital appreciation of El Gouna, making it an exceptional turnkey investment for rental returns.",
    },
    {
      slug: "shedwan",
      label: "Shedwan",
      image:
        "https://elgounahomes.com/wp-content/uploads/2022/02/Screenshot-2024-09-18-at-10-26-30-Shedwan-Brochure_TypeABC-Final-Digital-Medium-Res.pdf.png",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsPHhZfrZJyAUO7WeXy-KkarP7YRYorlWjbnP1qcGuw&s=10",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "Lakefront tranquility in El Gouna.",
      description:
        "A 419,000 sqm development centered around a 125,000 sqm lake, offering a high-end active lifestyle with extensive green corridors.",
      stats: [
        { label: "Location", value: "El Gouna" },
        { label: "Unit Types", value: "1-2 BR Apts" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Lakefront views for every unit",
        "3.1 km cycling track and jogging lanes",
        "Outdoor gym and yoga spaces",
        "22,000 sqm landscaped park",
        "Dog park and family amenities",
        "Fully finished modern interiors",
      ],
      whyInvest:
        "Shedwan’s focus on outdoor wellness and lakefront living makes it highly desirable for both families and short-term vacationers.",
    },
    {
      slug: "siba",
      label: "Siba",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/SIBA.jfif",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/SIBA2.webp",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "Exclusive multi-architect villas located near North Bay.",
      description:
        "SIBA - Multi-Architect Villas represents the peak of architectural creativity and coastal luxury. Situated in a prime corridor near North Bay, offering exquisite 3BR twin and standalone villas with high-end finishes and limited availability.",
      stats: [
        { label: "Unit Types", value: "Twin & Standalone Villas 3BR" },
        { label: "Delivery", value: "2 Years (Limited Units)" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Prime corridor location near North Bay",
        "Designed by multiple renowned architects for unique aesthetics",
        "Spacious 3BR twin villas (164-166 sqm) and standalone options (161 sqm)",
        "Private pools, lush landscaping, and exceptional outdoor spaces",
        "High investment value with very limited unit availability",
        "Flexible delivery timeline within 2 years",
      ],
      whyInvest:
        "SIBA offers ultimate exclusivity, prestige architecture, and strong scarcity value in a premier Red Sea location, making it an elite legacy holding.",
    },
    {
      slug: "miramar-residences",
      label: "Miramar Residences",
      image: "https://cms.elgouna.com/api/media/file/1707133518-a15659e4.webp",
      heroImage:
        "https://beeyoot.b-cdn.net/photos/projects/Miramar%20residence%20El%20gouna%20750%208_495ea_lg.webp",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "Architectural elegance on the El Gouna lagoons.",
      description:
        "A tranquil neighborhood of four exclusive buildings, offering studio, apartment, and penthouse living with direct access to Sheraton Miramar amenities.",
      stats: [
        { label: "Location", value: "El Gouna" },
        { label: "Developer", value: "Orascom" },
        { label: "Lifestyle", value: "Lagoonfront" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Access to Sheraton Miramar hotel facilities",
        "Prime location near Abu Tig Marina",
        "Units with private gardens or pontoons",
        "Stunning views of sparkling lagoons",
        "Full concierge and housekeeping services",
        "Infinity pool for residents only",
      ],
      whyInvest:
        "As a prestigious neighborhood by Orascom, it offers high-end luxury appeal and proximity to the most popular hubs in El Gouna, ensuring consistent value.",
    },
    {
      slug: "the-nines",
      label: "The Nines",
      image:
        "https://new-projects-media.propertyfinder.com/project/4b48b7da-0ae7-411b-b1cc-edd60d53b1fd/gallery/image/jiYimnTWIFaxYJy81AcXh-D4SFPuzLxnLeTTd4fqpP0=/medium.webp",
      heroImage: "https://devodirect.com/wp-content/uploads/2025/10/12.png",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "Nature-inspired luxury golf living.",
      description:
        "Spanning 87,000 sqm, this exclusive neighborhood features units spaced 12 meters apart for privacy, with sweeping views of the Ancient Hills Golf Course.",
      stats: [
        { label: "Location", value: "El Gouna" },
        { label: "Developer", value: "Orascom" },
        { label: "Views", value: "Golf Course" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "12-meter distance between properties",
        "Views of Ancient Hills Golf Course",
        "Desert-inspired modern finishes",
        "Integrated private water features",
        "Gated community security",
        "Near major El Gouna educational hubs",
      ],
      whyInvest:
        "The unique emphasis on privacy and golf course frontage positions The Nines as a premium, low-density asset in the El Gouna market.",
    },
    {
      slug: "nautilus",
      label: "Nautilus",
      image: "https://somabay.com/wp-content/uploads/NAUTILUS-pic8-495x400.jpg",
      heroImage:
        "https://somabay-homes.com/wp-content/uploads/2025/02/nautilus-somabay57-1170x785.jpg?83e451&83e451",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Premium peninsula living in Soma Bay.",
      description:
        "A sophisticated residential neighborhood featuring signature villas designed for seamless indoor-outdoor living along the private Soma Bay peninsula.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Price", value: "From EGP 77M" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Exclusive peninsula location",
        "Private beach access with day beds",
        "Signature and Prime villa layouts",
        "Access to The Social Lab hub",
        "On-site retail, dining, and clinics",
        "Modern floor-to-ceiling sea views",
      ],
      whyInvest:
        "Nautilus represents the peak of luxury in Soma Bay, offering scarcity and high-end demand for those seeking the ultimate Red Sea lifestyle.",
    },
    {
      slug: "one-7-residence",
      label: "One 7 Residence",
      image:
        "https://hurghadiansproperty.com/wp-content/uploads/2024/12/11-1024x689.webp",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbk80XwRMW2fwBRKjcdhowvrSItcMRPH0_ntyZFxOQrg4wVZGGoQArcw&s=10",
      destination: "hurghada",
      destinationLabel: "Hurghada",
      tagline: "Where coastal serenity meets city convenience.",
      description:
        "One 7 Residence is a premium residential community located at KM 17 on the Village Road in Hurghada. Nestled between Hurghada and Sahl Hasheesh, it offers an oasis-inspired lifestyle with lagoon-style pools, lush landscapes, and a diverse range of homes.",
      stats: [
        { label: "Location", value: "Village Road, Hurghada" },
        {
          label: "Unit Types",
          value: "Studios, Apartments, Penthouses, Villas",
        },
        { label: "Views", value: "Lagoons, Gardens, Sea & Mountains" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Prime location between Hurghada and Sahl Hasheesh",
        "Lagoon-style swimming pools and sandy beach areas",
        "Integrated commercial mall and clubhouse",
        "Private gardens and pool options for villas",
        "Secure gated community with 24/7 services",
        "Close proximity to Senzo Mall and the Airport",
      ],
      whyInvest:
        "One 7 offers a unique investment opportunity due to its strategic location on the vibrant Village Road, catering to both holidaymakers and those seeking a permanent residence with high rental potential.",
    },
    {
      slug: "lake-villas",
      label: "Lake Villas",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/3.png",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/LakeVillas.png",
      destination: "ras-soma",
      destinationLabel: "Ras Soma",
      tagline:
        "Serene waterfront luxury surrounded by pristine lakes in Ras Soma.",
      description:
        "Lake Villas in Ras Soma offers an exclusive collection of luxury standalone and semi-detached villas seamlessly integrated with breathtaking crystal-clear water lagoons and lush green landscapes, offering ultimate privacy and serenity.",
      stats: [
        { label: "Location", value: "Ras Soma Waterfront" },
        { label: "Unit Types", value: "Luxury Waterfront Villas" },
        { label: "Payment Plan", value: "6 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Stunning direct views over crystal-clear private lakes",
        "Spacious villa layouts designed for maximum natural light and privacy",
        "Low density community surrounded by expansive greenery",
        "Direct access to walking promenades and water activities",
        "Flexible 6-year payment plan with 10% downpayment",
        "World-class community infrastructure and 24/7 gated security",
      ],
      whyInvest:
        "Lake Villas provides a rare blend of waterside luxury and privacy within Ras Soma, ensuring high capital appreciation and exceptional lifestyle value.",
    },
    {
      slug: "marina-gate",
      label: "Marina Gate",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/MarinaGate1.png",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/MarinaGate2.png",
      destination: "ras-soma",
      destinationLabel: "Ras Soma",
      tagline:
        "The vibrant gateway to coastal sailing and upscale retail living.",
      description:
        "Marina Gate in Ras Soma positions residents at the heartbeat of the coastal town, combining chic residential apartments and townhomes with direct proximity to the vibrant marina promenade, dining, and yacht docks.",
      stats: [
        { label: "Location", value: "Marina District, Ras Soma" },
        { label: "Unit Types", value: "Marina Residences & Townhomes" },
        { label: "Payment Plan", value: "6 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Pivotal position right at the entrance of the Ras Soma Marina",
        "Walking distance to gourmet restaurants, cafes, and boutique retail",
        "Sleek contemporary architecture with expansive terraces",
        "Unmatched rental demand and liquidity potential",
        "Convenient 6-year payment installment plan",
        "Integrated marina-front community lifestyle",
      ],
      whyInvest:
        "Marina Gate acts as the commercial and social epicenter of Ras Soma, making it the top choice for investors seeking high rental yields and lively urban coastal living.",
    },
    {
      slug: "the-condos",
      label: "The Condos",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv0l8vlNpEna97xXOUp-qrm3V7bxiZ7TXJ9NoMzRstw&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGuK1y4_ueHBu69ugY4V1BvmfNQeaDPCjkNFRC7e1r_bHXhxEo0K58L0B&s=10",
      destination: "ras-soma",
      destinationLabel: "Ras Soma",
      tagline:
        "Modern resort-style apartment living designed for effortless holidays.",
      description:
        "The Condos in Ras Soma delivers contemporary, maintenance-free coastal apartments tailored for ultimate relaxation, featuring resort-style pools, landscaped community courtyards, and close proximity to the beach.",
      stats: [
        { label: "Location", value: "Ras Soma Resort Center" },
        { label: "Unit Types", value: "1BR, 2BR & 3BR" },
        { label: "Payment Plan", value: "6 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Fully serviced, contemporary low-rise apartment buildings",
        "Private resort-style swimming pools and sun decks",
        "Efficient layouts ranging from cozy 1BR units to spacious 3BR family homes",
        "Proximity to pristine sandy beaches and central amenities",
        "Accessible 6-year payment schedule with 10% downpayment",
        "Turnkey property management options available",
      ],
      whyInvest:
        "The Condos offer an accessible entry point into the lucrative Ras Soma market, combining lower initial capital outlay with strong short-term vacation rental potential.",
    },
    {
      slug: "reeftown",
      label: "Reeftown",
      image: "https://somabay.com/wp-content/uploads/Reef-Town-1-710x375.webp",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9eMJoSq4h-x92ftp8XvO_KAfBFMJvL82QczGn-4Ylw&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Turnkey comfort in Soma Bay.",
      description:
        "A well-established residential enclave within Soma Bay, featuring 52 buildings designed for efficient, turnkey resort living.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Lifestyle", value: "Active/Green" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Turnkey project with 300 units",
        "Efficient residential building design",
        "Access to all Soma Bay amenities",
        "Prime coastal community setting",
        "Proven infrastructure standards",
        "Ideal for immediate rental income",
      ],
      whyInvest:
        "Reeftown offers stability and immediate utility, making it an excellent choice for investors looking to generate rental income without waiting for construction.",
    },
    {
      slug: "red-hills-resort",
      label: "Red Hills Resort",
      image:
        "https://redhillssahlhasheesh.com/wp-content/uploads/2025/12/9.jpeg",
      heroImage:
        "https://redhillssahlhasheesh.com/wp-content/uploads/2025/12/9.jpeg",
      destination: "sahl-hasheesh",
      destinationLabel: "Sahl Hasheesh",
      tagline: "Where modern luxury meets Red Sea serenity.",
      description:
        "Red Hills Sahl Hasheesh is a premium residential and resort-style project located in the prestigious Sahl Hasheesh area on Egypt’s Red Sea coast, offering a perfect combination of modern luxury, natural beauty, and a serene lifestyle.",
      stats: [
        { label: "Location", value: "Sahl Hasheesh" },
        { label: "Unit Types", value: "Luxury Apartments, Villas" },
        { label: "Payment Plan", value: "6 Years" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Breathtaking views of the Red Sea",
        "Lush landscaped gardens throughout",
        "Resort-style swimming pools",
        "Prime Sahl Hasheesh location",
        "Modern architectural design",
        "Secure gated community",
      ],
      whyInvest:
        "Red Hills offers a unique living experience blending comfort, relaxation, and elegance in one of the most sought-after coastal destinations on the Red Sea, ensuring high quality of life and long-term investment potential.",
    },
    {
      slug: "riva-hurghada",
      label: "Riva",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/1.webp",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/2.webp",
      destination: "hurghada",
      destinationLabel: "Hurghada",
      tagline:
        "Where coastal serenity meets modern city convenience in Hurghada.",
      description:
        "Riva is an exclusive residential destination in Hurghada, designed to provide residents with an oasis of calm and luxury. Featuring contemporary architecture, lush landscaping, and direct access to vibrant coastal amenities.",
      stats: [
        { label: "Location", value: "Hurghada" },
        { label: "Unit Types", value: "Luxury Apartments & Suites" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Prime coastal location in Hurghada with easy city access",
        "Modern, open-plan architectural design with high-end finishes",
        "Scenic pool views and landscaped green spaces",
        "Gated community with 24/7 security and property management",
        "Flexible 5-year installment plan with 15% downpayment",
        "High potential for holiday rentals and capital appreciation",
      ],
      whyInvest:
        "Riva offers a fantastic opportunity to own a premium coastal home in Hurghada, balancing strong rental demand with a relaxed resort-style environment.",
    },
    {
      slug: "the-view-residence",
      label: "The View Residence",
      image:
        "https://aqarproperty.com/wp-content/uploads/2025/08/The-View-Hurghada-residence-5-1170x700.webp",
      heroImage:
        "https://aqarproperty.com/wp-content/uploads/2025/08/The-View-Hurghada-residence-1.webp",
      destination: "hurghada",
      destinationLabel: "Hurghada",
      tagline: "Panoramic sea views in Hurghada.",
      description:
        "A luxury resort residential project featuring 150 apartments with 360-degree views, blending urban and oriental architecture.",
      stats: [
        { label: "Location", value: "Hurghada" },
        { label: "Unit Range", value: "84-873 m2" },
        { label: "Payment Plan", value: "5 Years" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "90% of units feature sea views",
        "Private beach and beach bar",
        "Serviced hotel suites available",
        "Eco-friendly waste and EV charging",
        "On-site clubhouse and gym",
        "Handicap accessible infrastructure",
      ],
      whyInvest:
        "The massive range of unit sizes and hotel-serviced model make it an excellent choice for diverse investment strategies in central Hurghada.",
    },
    {
      slug: "town-walk",
      label: "Town Walk",
      image:
        "https://assets.live.beyond-creation.net/makadi/7afe478682166ba4f401dbb24c666909.jpg",
      heroImage:
        "https://assets.live.beyond-creation.net/makadi/a53ff134f5dd79c77ae7fdb322b6b095.jpg",
      destination: "makadi-heights",
      destinationLabel: "Makadi Heights",
      tagline: "Vibrant living at Makadi Heights.",
      description:
        "A diverse residential phase within the Makadi Heights community, offering apartments, duplexes, and townhouses with modern architectural layouts.",
      stats: [
        { label: "Location", value: "Makadi Heights" },
        { label: "Starting Price", value: "EGP 8.5M" },
        { label: "Payment Plan", value: "8 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Variety of unit sizes (79-152m2)",
        "Integrated community facilities",
        "Modern penthouses with terraces",
        "Access to Makadi Heights amenities",
        "Family-friendly environment",
        "Strong established developer",
      ],
      whyInvest:
        "Being part of the massive, successful Makadi Heights community guarantees high rental demand and ongoing infrastructure support.",
    },
    {
      slug: "veranda",
      label: "Veranda",
      image:
        "https://veranda.selena-development.com/wp-content/uploads/2024/06/Group-1-1024x683.jpg",
      heroImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
      destination: "sahl-hasheesh",
      destinationLabel: "Sahl Hasheesh",
      tagline: "Beachfront resort living.",
      description:
        "A premier beachfront residential project in Sahl Hasheesh designed for those who value privacy, resort-grade amenities, and high rental yield potential.",
      stats: [
        { label: "Location", value: "Sahl Hasheesh" },
        { label: "Delivery", value: "2026" },
        { label: "Payment Plan", value: "6 Years" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Direct private beach access",
        "Fully managed rental program",
        "Resort pools, spa, and fitness",
        "Furnished options available",
        "Flexible payment plans (8 years)",
        "High historical occupancy (75%)",
      ],
      whyInvest:
        "Veranda’s proven rental program and beachfront location make it an ideal set-it-and-forget-it investment for income-focused buyers.",
    },
    {
      slug: "wadi-jebal",
      label: "Wadi Jebal",
      image: "https://somabay.com/wp-content/uploads/Wadi-Soma-1-1-495x400.jpg",
      heroImage:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/Wadi.jpeg",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Refined coastal villas and lodges.",
      description:
        "An exclusive community in Soma Bay featuring a curated collection of sea-view villas, duplexes, and lodges with refined architecture.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Unit Types", value: "Villas, Duplexes" },
        { label: "Payment Plan", value: "5 or 8 Years" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Sea-front cliff villas available",
        "Exclusive residential community",
        "Direct beach access",
        "Close proximity to Soma Bay activities",
        "Varied lodge and villa sizes",
        "Elegant, tranquil design aesthetic",
      ],
      whyInvest:
        "Wadi Soma targets the luxury segment of the Soma Bay market, offering high-status coastal properties with strong resale value.",
    },
  ],
};

module.exports = siteConfig;
