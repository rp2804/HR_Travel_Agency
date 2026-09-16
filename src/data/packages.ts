import { Package } from "../types";

export const packages: Package[] = [
  {
    id: "ooty-escape",
    title: "Ooty & Coonoor Misty Hills",
    destination: "Ooty, Tamil Nadu",
    destinationSlug: "ooty",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    price: 12999,
    originalPrice: 15499,
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
    category: "Weekend Trips",
    badge: "Popular",
    featured: true,
    popular: true,
    shortDescription: "Charming tea gardens, heritage mountain toy train ride, and cool Nilgiri hill vistas.",
    overview:
      "Escape the city heat into the misty embrace of the Nilgiri hills. This package combines scenic drives, botanical gardens, authentic tea tasting, and the UNESCO heritage toy train journey from Ooty to Coonoor with private AC cab transfers throughout.",
    highlights: [
      "Heritage toy train ride from Ooty to Coonoor",
      "Panoramic views from Doddabetta Peak (2,637 m)",
      "Botanical & Rose Gardens with thousands of exotic species",
      "Pykara boat ride and cascading waterfalls",
      "Private sightseeing cab with local English/Tamil speaking driver",
    ],
    inclusions: [
      "2 Nights stay in premium 3-star hill resort with valley view",
      "Daily buffet breakfast at the hotel",
      "Private AC Sedan for all transfers and sightseeing",
      "Driver allowances, toll taxes, parking fees, and fuel charges",
      "Assistance at arrival and departure points (Coimbatore/Ooty)",
      "Nilgiri Toy train booking assistance",
    ],
    exclusions: [
      "Airfare / Train tickets to arrival point",
      "Entry tickets to monuments, gardens, and boat rides",
      "Lunch, dinner, and personal beverage expenses",
      "Camera fees, laundry, tips, and optional activities",
      "Any item not explicitly mentioned in inclusions",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ooty | Botanical Gardens & Lakeside Evening",
        description:
          "Pick-up from Coimbatore airport or railway station. Scenic uphill drive through Mettupalayam ghats. Check-in to your hotel. Afternoon visit to the Government Botanical Garden and tranquil Ooty Lake boating. Evening at leisure exploring the local market.",
        meals: "Breakfast (hotel)",
        stay: "Sterling Ooty Fern Hill / Similar",
      },
      {
        day: 2,
        title: "Nilgiri Toy Train to Coonoor & Doddabetta Peak",
        description:
          "Board the heritage mountain toy train for a breathtaking ride across bridges and ravines to Coonoor. Visit Sim's Park, Lamb's Rock, and Dolphin's Nose viewpoint. In the afternoon, return to Ooty and drive up to Doddabetta Peak for sweeping valley panoramas.",
        meals: "Breakfast (hotel)",
        stay: "Sterling Ooty Fern Hill / Similar",
      },
      {
        day: 3,
        title: "Pykara Waterfalls, Tea Factory & Departure",
        description:
          "Morning excursion to Pykara Waterfalls and boat house. Visit an authentic Nilgiri tea factory to learn tea processing with tasting. Afternoon drop-off at Coimbatore railway station or airport with pleasant holiday memories.",
        meals: "Breakfast (hotel)",
      },
    ],
    bestTime: "September to May",
    gallery: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "kerala-highlights",
    title: "Kerala Backwaters & Munnar Escapade",
    destination: "Munnar & Alleppey, Kerala",
    destinationSlug: "munnar",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    durationNights: 4,
    price: 24999,
    originalPrice: 28999,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
    category: "Family Holidays",
    badge: "Best Seller",
    featured: true,
    popular: true,
    shortDescription: "Sprawling tea hills of Munnar combined with an unforgettable luxury houseboat cruise in Alleppey.",
    overview:
      "Experience the best of 'God's Own Country' in one seamless journey. Wander through cloud-draped tea gardens in Munnar, encounter wild elephants and exotic fauna, and relax on a private traditional houseboat drifting over Alleppey's peaceful lagoons.",
    highlights: [
      "2 Nights amidst misty tea plantations in Munnar",
      "1 Night inside a luxury private houseboat in Alleppey with all meals",
      "1 Night in historic Fort Kochi with Chinese fishing nets",
      "Eravikulam National Park and Nilgiri Tahr sanctuary",
      "Spice garden walk and authentic Kathakali cultural show",
    ],
    inclusions: [
      "4 Nights accommodation (3 nights 4-star hotels + 1 night private AC Houseboat)",
      "Daily buffet breakfast at hotels; all meals (Lunch, Dinner, Breakfast) on Houseboat",
      "Private AC Sedan/SUV for full itinerary with dedicated driver",
      "All toll taxes, state permits, parking fees, and driver allowances",
      "Traditional welcome drink and flower bed decoration on houseboat",
    ],
    exclusions: [
      "Flight or train tickets to/from Kochi",
      "Entry tickets for national parks, museums, and boat safaris",
      "Personal expenses such as laundry, phone calls, Ayurvedic spa",
      "Travel insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi & Scenic Drive to Munnar",
        description:
          "Arrival at Cochin International Airport (COK). Meet your driver and drive through winding Ghat roads with stops at Cheeyappara and Valara waterfalls. Check-in at your tea garden resort. Rest of the day free for relaxation.",
        meals: "Welcome drink",
        stay: "Blanket Hotel & Spa / Similar, Munnar",
      },
      {
        day: 2,
        title: "Munnar Tea Trails & Wildlife Exploration",
        description:
          "Morning visit to Eravikulam National Park to spot the rare Nilgiri Tahr. Tour the Tata Tea Museum followed by Mattupetty Dam, Echo Point, and Kundala Lake. Evening visit to a spice garden and cultural Kathakali performance.",
        meals: "Breakfast",
        stay: "Blanket Hotel & Spa / Similar, Munnar",
      },
      {
        day: 3,
        title: "Munnar to Alleppey | Board Private Houseboat",
        description:
          "Depart Munnar for the peaceful waterways of Alleppey. Board your luxury private houseboat at noon. Enjoy a traditional Kerala lunch as you cruise along Vembanad Lake, watching village life and palm canopies.",
        meals: "Breakfast, Lunch, Evening Snacks & Dinner",
        stay: "Deluxe AC Houseboat, Alleppey",
      },
      {
        day: 4,
        title: "Alleppey to Fort Kochi Heritage Walk",
        description:
          "Watch the sunrise over misty backwaters while enjoying Kerala breakfast. Disembark at 9:00 AM and drive to Fort Kochi. Visit the iconic Chinese Fishing Nets, St. Francis Church, Jewish Synagogue, and Mattancherry Dutch Palace.",
        meals: "Breakfast",
        stay: "Heritage Hotel, Fort Kochi",
      },
      {
        day: 5,
        title: "Departure from Cochin",
        description:
          "Morning shopping in Kochi for Malabar spices, banana chips, and handlooms. Transfer to Cochin International Airport for your onward flight home.",
        meals: "Breakfast",
      },
    ],
    bestTime: "October to April",
    gallery: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "tamil-nadu-temples",
    title: "Tamil Nadu Divine Temple Trail",
    destination: "Madurai, Rameswaram & Tanjore",
    destinationSlug: "rameswaram",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    durationNights: 3,
    price: 18999,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80",
    category: "Pilgrimage",
    badge: "Best Seller",
    featured: true,
    popular: true,
    shortDescription: "Sacred darshans at Meenakshi Amman, holy Char Dham Rameswaram, and Brihadeeswarar UNESCO temple.",
    overview:
      "A soulful pilgrimage through South India's greatest living Chola and Pandya architectural marvels. Experience divine rituals at Madurai Meenakshi, holy theertham baths at Rameswaram, and the engineering majesty of Tanjore's Big Temple with hassle-free VIP darshan coordination.",
    highlights: [
      "Special darshan guidance at Sri Meenakshi Sundareswarar Temple",
      "Pamban Bridge drive and holy dip in 22 Rameswaram theerthams",
      "Off-road excursion to the ghost town of Dhanushkodi & Arichal Munai",
      "UNESCO World Heritage Brihadeeswarar Temple (Big Temple) in Thanjavur",
      "Comfortable air-conditioned private vehicle with experienced pilgrim driver",
    ],
    inclusions: [
      "3 Nights stay in verified 3-star pilgrim-friendly hotels",
      "Daily South Indian vegetarian breakfast",
      "Dedicated AC vehicle (Dzire / Innova) throughout the tour",
      "Toll fees, parking, driver bata, and interstate permits",
      "24/7 telephonic assistance for temple timings and priest rituals",
    ],
    exclusions: [
      "Special archana / VIP ticket fees inside temple sanctums",
      "Lunch, dinner, and personal offerings",
      "Jeep charge for Dhanushkodi beach stretch",
      "Train/flight tickets to Madurai and from Trichy/Madurai",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Madurai | Meenakshi Amman Temple & Nayak Palace",
        description:
          "Receive welcome at Madurai Junction or Airport. Transfer to hotel. In the afternoon, visit Thirumalai Nayakkar Mahal and witness the spectacular evening rituals and night palliyarai procession at Meenakshi Amman Temple.",
        meals: "Vegetarian breakfast",
        stay: "Courtyard / Heritage Hotel, Madurai",
      },
      {
        day: 2,
        title: "Madurai to Rameswaram | Pamban Bridge & 22 Theerthams",
        description:
          "Morning drive across the magnificent Pamban Sea Bridge to Rameswaram island. Check-in, followed by holy bath at Agni Theertham and the 22 sacred temple theerthams. Darshan of Lord Ramanathaswamy in the legendary 1000-pillar corridor.",
        meals: "Vegetarian breakfast",
        stay: "Hotel Daiwik / Similar, Rameswaram",
      },
      {
        day: 3,
        title: "Dhanushkodi Land's End & Transfer to Thanjavur",
        description:
          "Early morning excursion to Dhanushkodi ghost town and the Ram Setu view point at Arichal Munai. Visit Dr. APJ Abdul Kalam Memorial. Post lunch, drive to the Chola capital of Thanjavur.",
        meals: "Vegetarian breakfast",
        stay: "Svatma / Hotel Gnanam, Thanjavur",
      },
      {
        day: 4,
        title: "Brihadeeswarar Temple & Departure via Trichy",
        description:
          "Morning exploration of the 1,000-year-old Brihadeeswarar Temple with its monolithic Nandi and 80-tonne granite cupola. Drive to Tiruchirappalli (Trichy) to visit Srirangam Ranganathaswamy Temple. Transfer to Trichy/Madurai airport for departure.",
        meals: "Vegetarian breakfast",
      },
    ],
    bestTime: "October to March",
    gallery: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010f443b350?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "coorg-weekend",
    title: "Coorg Coffee Country Getaway",
    destination: "Coorg, Karnataka",
    destinationSlug: "coorg",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    price: 14999,
    originalPrice: 17500,
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
    category: "Weekend Trips",
    badge: "Popular",
    featured: true,
    popular: true,
    shortDescription: "Aromatic coffee estate stays, Bylakuppe Golden Temple, and cascading Abbey Falls.",
    overview:
      "Escape into the verdant hills of Kodagu. Stay amidst flourishing coffee and black pepper plantations, listen to chants at the magnificent Namdroling Monastery, interact with gentle giants at Dubare Elephant Camp, and taste authentic Kodava delicacies.",
    highlights: [
      "Stay in an authentic private coffee estate plantation retreat",
      "Visit Namdroling Tibetan Monastery (Golden Temple) in Bylakuppe",
      "Bathe and feed gentle elephants at Dubare Camp on River Cauvery",
      "Spectacular Abbey Falls inside private coffee groves",
      "Sunset views from Raja's Seat in Madikeri",
    ],
    inclusions: [
      "2 Nights accommodation in a boutique coffee estate resort",
      "Daily fresh buffet breakfast & plantation coffee",
      "Private AC vehicle for all transfers and sightseeing from Bangalore/Mangalore",
      "Guided coffee plantation walking tour with host",
      "All toll taxes, parking, and driver allowances",
    ],
    exclusions: [
      "Meals other than breakfast",
      "Entry tickets for Dubare elephant activities and viewpoints",
      "Personal purchases of spices, chocolates, and coffee beans",
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangalore / Mysore to Coorg via Bylakuppe Golden Temple",
        description:
          "Pick-up from Bangalore or Mysore. Stop en-route at Bylakuppe to explore the largest Tibetan settlement in South India and marvel at the 40-foot golden Buddha statues. Arrive at Coorg and check in to your estate resort.",
        meals: "Welcome drink & coffee",
        stay: "Coorg Wilderness / Boutique Estate Stay",
      },
      {
        day: 2,
        title: "Dubare Elephant Camp, Abbey Falls & Raja's Seat",
        description:
          "Early morning visit to Dubare Elephant Camp for elephant bathing. Next, explore the cascading Abbey Falls and walk through coffee trees. In the evening, witness a glorious sunset at Raja's Seat overlooking misty valleys.",
        meals: "Breakfast",
        stay: "Coorg Wilderness / Boutique Estate Stay",
      },
      {
        day: 3,
        title: "Talacauvery Pilgrimage & Return Journey",
        description:
          "Drive to Talacauvery, the sacred birthplace of River Cauvery nestled in the Brahmagiri hills. Enjoy panoramic views. After lunch, begin your return journey to Bangalore or Mangalore airport.",
        meals: "Breakfast",
      },
    ],
    bestTime: "October to April",
    gallery: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "kodaikanal-honeymoon",
    title: "Kodaikanal Romantic Misty Pines",
    destination: "Kodaikanal, Tamil Nadu",
    destinationSlug: "kodaikanal",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    price: 13999,
    originalPrice: 16500,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    category: "Honeymoon",
    badge: "Honeymoon Special",
    featured: false,
    popular: true,
    shortDescription: "Cozy pine forest strolls, star-shaped lake cycling, and candlelight dinners in the clouds.",
    overview:
      "Kodaikanal is the romantic crown jewel of Tamil Nadu. Wrapped in clouds and fragrant eucalyptus trees, this handcrafted couple's itinerary includes serene lakeside moments, private sightseeing, candlelight dinner, and cozy mountain resort stays.",
    highlights: [
      "Romantic candle-lit dinner with cake & floral room decoration",
      "Cycling or boating on the iconic star-shaped Kodai Lake",
      "Pillar Rocks and cloud-filled valleys along Coaker's Walk",
      "Walking hand-in-hand through dense, scented Pine Forests",
      "Private car for undisturbed sightseeing",
    ],
    inclusions: [
      "2 Nights stay in a premium Valley View room",
      "Daily breakfast and 1 special candlelit dinner with cake",
      "Private AC Sedan for transfers from Madurai or Coimbatore",
      "Honeymoon floral bed decoration on arrival night",
      "Driver bata, parking, and toll fees",
    ],
    exclusions: [
      "Entry tickets to Bryant Park and viewpoints",
      "Lunch and personal expenses",
      "Boating / horse riding charges",
    ],
    itinerary: [
      {
        day: 1,
        title: "Scenic Ghat Climb to Kodai & Lakeside Evening",
        description:
          "Pick-up from Madurai airport or railway station. Ascend the lush Palani Ghats with views of Silver Cascade waterfall. Check-in to your resort with romantic room decoration. Evening stroll along Kodai Lake.",
        meals: "Candlelight dinner",
        stay: "The Carlton / Sterling Kodai Lake",
      },
      {
        day: 2,
        title: "Coaker's Walk, Pillar Rocks & Pine Forest",
        description:
          "Morning walk along Coaker's Walk admiring the deep valley mist. Visit the towering 122-meter Pillar Rocks and explore Guna Caves. Spend afternoon walking through the enchanted Pine Forest.",
        meals: "Breakfast",
        stay: "The Carlton / Sterling Kodai Lake",
      },
      {
        day: 3,
        title: "Bryant Park, Homemade Chocolates & Departure",
        description:
          "Visit the colorful Bryant Botanical Park. Shop for warm woolens, organic jams, and artisan handmade chocolates. Descend the hills and transfer to Madurai for return journey.",
        meals: "Breakfast",
      },
    ],
    bestTime: "September to May",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "wayanad-rainforest",
    title: "Wayanad Rainforest & Wildlife Retreat",
    destination: "Wayanad, Kerala",
    destinationSlug: "wayanad",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    durationNights: 2,
    price: 13499,
    originalPrice: 16000,
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    category: "Adventure",
    badge: "Trending",
    featured: false,
    popular: true,
    shortDescription: "Prehistoric cave carvings, bamboo rafting on river islands, and misty earth dam vistas.",
    overview:
      "Venture deep into the verdant Western Ghats rainforests of Wayanad. Uncover Neolithic petroglyphs at Edakkal Caves, speed across India's largest earth dam, and experience bamboo rafting across Kuruva island streams.",
    highlights: [
      "Explore the prehistoric rock carvings inside Edakkal Caves",
      "Speedboat across Banasura Sagar Dam's scenic island archipelago",
      "Bamboo rafting experience in Kuruva Dweep islands",
      "Stay in an eco-resort nestled among rainforest trees and streams",
      "Spice plantation walk with native pepper and cardamom tasting",
    ],
    inclusions: [
      "2 Nights stay in an eco-friendly jungle resort",
      "Daily wholesome breakfast with Kerala specialities",
      "Private AC cab for all transfers from Calicut (Kozhikode)",
      "Guided spice plantation walk",
      "Tolls, permits, parking, and driver allowances",
    ],
    exclusions: [
      "Entry fees and boat tickets at Banasura and Edakkal",
      "Forest department jungle safari jeep fees",
      "Meals other than breakfast",
    ],
    itinerary: [
      {
        day: 1,
        title: "Calicut to Wayanad | Thamarassery Churam & Banasura Dam",
        description:
          "Pick-up from Kozhikode (Calicut). Drive up the dramatic 9 hairpin bends of Thamarassery Churam. Visit Banasura Sagar Dam for speed boating. Check-in to your rainforest retreat.",
        meals: "Welcome drink",
        stay: "Vythiri Village / Wayanad Silverwoods",
      },
      {
        day: 2,
        title: "Edakkal Caves & Soochipara Waterfalls",
        description:
          "Hike up Ambukuthi Mala to Edakkal Caves to admire Neolithic carvings dating back 6,000 years. In the afternoon, trek through tea estates to the three-tiered Soochipara Waterfalls.",
        meals: "Breakfast",
        stay: "Vythiri Village / Wayanad Silverwoods",
      },
      {
        day: 3,
        title: "Kuruva Island Bamboo Rafting & Departure",
        description:
          "Morning bamboo rafting on the pristine waters of the Kabini River at Kuruva Island. Pick up authentic Malabar spices and forest honey. Drop-off at Calicut airport or railway station.",
        meals: "Breakfast",
      },
    ],
    bestTime: "September to May",
    gallery: [
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "royal-mysore-coorg",
    title: "Heritage Mysore & Royal Karnataka",
    destination: "Mysore & Coorg, Karnataka",
    destinationSlug: "coorg",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    durationNights: 3,
    price: 19999,
    originalPrice: 23500,
    image: "https://images.unsplash.com/photo-1600100397608-f010f443b350?auto=format&fit=crop&w=1000&q=80",
    category: "Family Holidays",
    badge: "Family Favourite",
    featured: false,
    popular: false,
    shortDescription: "Illuminated Mysore Palace, Brindavan musical fountains, and peaceful coffee hills of Coorg.",
    overview:
      "A quintessential South Indian vacation blending majestic royal palaces with refreshing hill station coffee estates. Ideal for multi-generational families looking for easy travel and rich cultural discovery.",
    highlights: [
      "Night illumination of the iconic Mysore Amba Vilas Palace",
      "Brindavan Gardens musical dancing water fountain show",
      "Namdroling Golden Temple in Bylakuppe",
      "Dubare Elephant Camp interaction on River Cauvery",
      "Abbey Falls and Raja's Seat in Madikeri",
    ],
    inclusions: [
      "1 Night stay in Mysore + 2 Nights stay in Coorg (3-Star+ hotels)",
      "Daily buffet breakfast",
      "Private AC Sedan/Ertiga for full tour from Bangalore",
      "Driver bata, parking, and state border permits",
    ],
    exclusions: [
      "Palace entry and camera fees",
      "Lunch, dinner, and personal shopping",
      "Bangalore flight/train tickets",
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangalore to Mysore | Srirangapatna & Palace Illumination",
        description:
          "Drive from Bangalore to Mysore with a stop at Tipu Sultan's summer palace in Srirangapatna. In the afternoon, tour Mysore Palace and witness the 97,000 bulbs illuminated on Sunday evening.",
        meals: "Breakfast on arrival",
        stay: "Radisson Blu / Southern Star, Mysore",
      },
      {
        day: 2,
        title: "Mysore to Coorg via Bylakuppe Tibetan Settlement",
        description:
          "Visit Chamundeshwari temple atop Chamundi Hill. Drive to Coorg, stopping at Bylakuppe's Namdroling Monastery. Arrive at Madikeri and check in to your resort.",
        meals: "Breakfast",
        stay: "Heritage Resort / Similar, Coorg",
      },
      {
        day: 3,
        title: "Dubare Elephants, Abbey Falls & Madikeri Fort",
        description:
          "Morning with elephants at Dubare Camp. Explore Abbey Falls amidst coffee bushes and take in the panoramic sunset at Raja's Seat.",
        meals: "Breakfast",
        stay: "Heritage Resort / Similar, Coorg",
      },
      {
        day: 4,
        title: "Coffee Shopping & Bangalore Return",
        description:
          "Morning coffee estate walk. Taste pure filter coffee and shop for homemade Kodava spices. Relaxed drive back to Bangalore for departure.",
        meals: "Breakfast",
      },
    ],
    bestTime: "October to March",
    gallery: [
      "https://images.unsplash.com/photo-1600100397608-f010f443b350?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "bali-escape",
    title: "Exotic Bali Tropical Getaway",
    destination: "Bali, Indonesia",
    destinationSlug: "bali",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    durationNights: 5,
    price: 45999,
    originalPrice: 54000,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    category: "Honeymoon",
    badge: "Best Seller",
    featured: false,
    popular: true,
    shortDescription: "Private pool villa, Ubud jungle swings, dramatic sunset at Uluwatu, and Nusa Penida island tour.",
    overview:
      "A dream international holiday tailored for Indian travelers. Includes 2 nights in an Ubud jungle pool villa, 3 nights in a Kuta/Seminyak beachside resort, Indian lunch/dinner options, and curated sightseeing.",
    highlights: [
      "2 Nights stay in private pool villa in cultural Ubud",
      "3 Nights stay in 4-star beach resort in Seminyak/Kuta",
      "Nusa Penida West Island tour with Kelingking T-Rex Beach",
      "Ubud jungle swing with picturesque nest photo shoot",
      "Uluwatu cliff temple & fire dance at sunset",
    ],
    inclusions: [
      "5 Nights accommodation with daily breakfast",
      "Private AC vehicle for all transfers and tours with English-speaking guide",
      "Fast boat tickets to and from Nusa Penida island",
      "Bali Swing tickets with jungle dress photos",
      "Indonesian SIM card with data allowance",
    ],
    exclusions: [
      "International flights to Bali (DPS)",
      "Bali Visa on Arrival (approx $35)",
      "Lunch and dinners unless specified",
      "Water sports activities in Tanjung Benoa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Denpasar & Check-in to Ubud Villa",
        description:
          "Arrive at Ngurah Rai International Airport. Meet your private driver and transfer to your luxury jungle villa in Ubud. Rest of the evening at leisure.",
        meals: "Welcome drink",
        stay: "Dedary Resort Ubud / Similar",
      },
      {
        day: 2,
        title: "Ubud Bali Swing, Rice Terraces & Waterfall",
        description:
          "Visit Tegallalang rice terraces. Experience the iconic giant Bali Swing over lush valleys. Cool off at Tegenungan waterfall and visit Ubud Art Market.",
        meals: "Breakfast",
        stay: "Dedary Resort Ubud / Similar",
      },
      {
        day: 3,
        title: "Ubud to Seminyak & Uluwatu Sunset Temple",
        description:
          "Drive to Seminyak. Check in to beach resort. In the late afternoon, drive to dramatic Uluwatu Cliff Temple and witness the sacred Kecak fire dance against ocean sunset.",
        meals: "Breakfast",
        stay: "Courtyard by Marriott Bali Seminyak",
      },
      {
        day: 4,
        title: "Nusa Penida Island Day Tour",
        description:
          "Early morning speed boat to Nusa Penida. Visit the world-famous Kelingking T-Rex cliff, Angel's Billabong natural infinity pool, and Broken Beach.",
        meals: "Breakfast & Island Lunch",
        stay: "Courtyard by Marriott Bali Seminyak",
      },
      {
        day: 5,
        title: "Water Sports & Jimbaran Sunset Dinner",
        description:
          "Morning water sports at Tanjung Benoa (Banana Boat, Jet Ski). Afternoon free for beach club lounging. Romantic seafood dinner on Jimbaran beach.",
        meals: "Breakfast",
        stay: "Courtyard by Marriott Bali Seminyak",
      },
      {
        day: 6,
        title: "Souvenir Shopping & Departure",
        description:
          "Morning souvenir shopping at Krishna Oleh-Oleh. Transfer to Denpasar airport for your flight back home.",
        meals: "Breakfast",
      },
    ],
    bestTime: "April to October",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
  },
];
