/**
 * Portfolio Data — Petra Hospitality Management
 * =============================================
 * Edit this file to add, remove, or update hotel cards.
 * The website reads this data and renders the portfolio section automatically.
 *
 * STATUS OPTIONS:
 *   "operating"         → Dark charcoal badge "OPERATING"
 *   "underconstruction"  → Red badge "UNDER CONSTRUCTION"
 *   "coming-soon"        → Red badge "COMING SOON"
 *   "confidential"       → Dark muted badge "CONFIDENTIAL"
 *
 * To add a new hotel:
 *   1. Add a new object to the array below
 *   2. Put the hotel photo in assets/images/ (800×600 JPG, 4:3 ratio)
 *   3. Set the image filename
 *   4. Refresh the page
 *
 * To remove a hotel:
 *   Just delete or comment out its object from the array.
 */

const portfolioData = [
  // ── OPERATING ──
  {
    name: "Delta Hotels by Marriott Istanbul Levent",
    image: "./assets/images/WebVisuals_hotel-01-delta-marriott-istanbul.jpg",
    status: "operating",
    rooms: 232,
    location: "Istanbul, Türkiye",
    tags: "Business planning, project management, re-branding, pre-opening, white-label operating"
  },
  {
    name: "Four Points by Sheraton Istanbul Pendik",
    image: "./assets/images/WebVisuals_hotel-02-four-points-istanbul.jpg",
    status: "operating",
    rooms: 160,
    location: "Istanbul, Türkiye",
    tags: "Development advisory, pre-opening, hybrid lease-based management"
  },
  {
    name: "DoubleTree by Hilton Istanbul - Moda",
    image: "./assets/images/WebVisuals_hotel-03-doubletree-hilton-moda.jpg",
    status: "operating",
    rooms: 245,
    location: "Istanbul, Türkiye",
    tags: "Business planning, white-label operating"
  },
  {
    name: "Radisson Blu Hotel, Istanbul Pera",
    image: "./assets/images/WebVisuals_hotel-04-radisson-blu-pera.jpg",
    status: "operating",
    rooms: 130,
    location: "Istanbul, Türkiye",
    tags: "Business planning, white-label operating"
  },
  {
    name: "Radisson Blu Hotel, Diyarbakır",
    image: "./assets/images/WebVisuals_hotel-05-radisson-blu-diyarbakir.jpg",
    status: "operating",
    rooms: 160,
    location: "Diyarbakır, Türkiye",
    tags: "White-label operating"
  },
  {
    name: "Hilton Garden Inn Tirana",
    image: "./assets/images/WebVisuals_hotel-06-hilton-garden-tirana.jpg",
    status: "operating",
    rooms: 174,
    location: "Tirana, Albania",
    tags: "White-label operating"
  },

  // ── UNDER CONSTRUCTION ──
  {
    name: "Le Meridien Antalya",
    image: "./assets/images/WebVisuals_hotel-07-le-meridien-antalya.jpg",
    status: "underconstruction",
    rooms: 160,
    location: "Antalya, Türkiye",
    tags: "Business planning, development advisory, branding, pre-opening"
  },
  {
    name: "The Parsana Konya Hotel, Radisson Individuals",
    image: "./assets/images/WebVisuals_hotel-08-parsana-konya.jpg",
    status: "underconstruction",
    rooms: 160,
    location: "Konya, Türkiye",
    tags: "Business planning, development advisory, branding, white-label operating"
  },
  {
    name: "Marriott Executive Apartments Antalya",
    image: "./assets/images/WebVisuals_hotel-09-marriott-exec-antalya.jpg",
    status: "operating",
    rooms: 60,
    location: "Antalya, Türkiye",
    tags: "Business planning, development advisory, branding, pre-opening"
  },
  {
    name: "Residence Inn by Marriott Antalya",
    image: "./assets/images/WebVisuals_hotel-10-residence-inn-antalya.jpg",
    status: "operating",
    rooms: 40,
    location: "Antalya, Türkiye",
    tags: "Business planning, development advisory, branding, pre-opening"
  },
  {
    name: "Moxy Hotels Mauritius",
    image: "./assets/images/WebVisuals_hotel-12-moxy-mauritius.jpg",
    status: "underconstruction",
    rooms: 150,
    location: "Mauritius",
    tags: "Development advisory, pre-opening, white-label operating"
  },
  {
    name: "Residence Inn Mauritius",
    image: "./assets/images/WebVisuals_hotel-12-moxy-mauritius.jpg",
    status: "underconstruction",
    rooms: 60,
    location: "Mauritius",
    tags: "Development advisory, pre-opening, white-label operating"
  },

  // ── NEW HOTELS ──
  {
    name: "Caria Nova, Bodrum a Tribute Portfolio Hotel ",
    image: "./assets/images/WebVisuals_hotel-13-koyunbaba-bodrum.jpg",
    status: "underconstruction",
    rooms: 40,
    location: "Bodrum, Türkiye",
    tags: ""
  },
  {
    name: "Four Points by Sheraton Elazığ",
    image: "./assets/images/WebVisuals_hotel-15-fpbs-elazig.jpg",
    status: "operating",
    rooms: 141,
    location: "Elazığ, Türkiye",
    tags: ""
  },

  // ── COMING SOON ──
  {
    name: "Iskenderun, Turkey",
    image: null,
    status: "coming-soon",
    rooms: null,
    location: "Mauritius",
    tags: "",
    brand: "MARRIOTT INTERNATIONAL"
  },
  {
    name: "Madagascar",
    image: null,
    status: "coming-soon",
    rooms: null,
    location: "Madagascar",
    tags: "",
    brand: "MARRIOTT INTERNATIONAL"
  },
  {
    name: "Athens, Greece",
    image: null,
    status: "coming-soon",
    rooms: null,
    location: "Greece",
    tags: "",
    brand: "CONFIDENTIAL"
  }
];
