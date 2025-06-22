
export interface Project {
  id: string;
  name: string;
  location: string;
  price: string;
  image: string;
  heroImage: string;
  bhk: string;
  possession: string;
  rera: string;
  badges: string[];
  sqft: string;
  builder: string;
  totalArea: string;
  reraNumber: string;
  status: string;
  amenities: string[];
  locationHighlights: string[];
  priceTable: {
    type: string;
    area: string;
    price: string;
  }[];
  offers?: string;
}

const projects: Project[] = [
  {
    id: "space-green",
    name: "Space Green",
    location: "Rithghar, Panvel",
    price: "₹21.9L - ₹25.5L",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=600&fit=crop",
    bhk: "1 BHK",
    possession: "Dec 2025",
    rera: "VERIFIED",
    badges: ["RERA", "Under Construction", "Near Station"],
    sqft: "420 sq.ft",
    builder: "Space Developers",
    totalArea: "2.5 acres",
    reraNumber: "P52000001234",
    status: "Under Construction",
    amenities: ["Gym", "Swimming Pool", "Kids Play Area", "Parking", "Garden", "Lift", "CCTV", "24x7 Water", "Power Backup"],
    locationHighlights: [
      "5 min from Panvel Railway Station",
      "Direct connectivity to Mumbai",
      "Close to D-Mart and shopping centers",
      "Well-connected bus routes",
      "Upcoming Metro connectivity"
    ],
    priceTable: [
      { type: "1BHK", area: "420 sq.ft", price: "₹21.9 Lakhs" },
      { type: "1BHK Premium", area: "450 sq.ft", price: "₹25.5 Lakhs" }
    ],
    offers: "Free Modular Kitchen worth ₹2 Lakhs"
  },
  {
    id: "amulyam",
    name: "Amulyam",
    location: "Taloja Phase 2",
    price: "₹34.9L - ₹41L",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=600&fit=crop",
    bhk: "1-2 BHK",
    possession: "Ready to Move",
    rera: "VERIFIED",
    badges: ["RERA", "Ready", "IT Hub"],
    sqft: "550-720 sq.ft",
    builder: "Amulyam Constructions",
    totalArea: "3.2 acres",
    reraNumber: "P52000005678",
    status: "Ready to Move",
    amenities: ["Gym", "Swimming Pool", "Kids Play Area", "Parking", "Garden", "Lift", "CCTV", "24x7 Water"],
    locationHighlights: [
      "Walking distance to Taloja MIDC",
      "15 min from Kharghar",
      "Close to proposed Navi Mumbai Airport",
      "IT companies nearby",
      "Good school and hospital connectivity"
    ],
    priceTable: [
      { type: "1BHK", area: "550 sq.ft", price: "₹34.9 Lakhs" },
      { type: "2BHK", area: "720 sq.ft", price: "₹41.0 Lakhs" }
    ]
  },
  {
    id: "payal-kalp",
    name: "Payal Kalp",
    location: "Pushpak Nagar",
    price: "₹44.5L - ₹55L",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1200&h=600&fit=crop",
    bhk: "2 BHK",
    possession: "Mar 2026",
    rera: "VERIFIED",
    badges: ["RERA", "Luxury", "Prime Location"],
    sqft: "850-1000 sq.ft",
    builder: "Payal Developers",
    totalArea: "4.0 acres",
    reraNumber: "P52000009012",
    status: "Under Construction",
    amenities: ["Gym", "Swimming Pool", "Kids Play Area", "Parking", "Garden", "Lift", "CCTV", "24x7 Water", "Power Backup"],
    locationHighlights: [
      "Prime location in Pushpak Nagar",
      "Close to Panvel City Center",
      "Excellent connectivity to highways",
      "Premium residential area",
      "Top schools and hospitals nearby"
    ],
    priceTable: [
      { type: "2BHK", area: "850 sq.ft", price: "₹44.5 Lakhs" },
      { type: "2BHK Premium", area: "1000 sq.ft", price: "₹55.0 Lakhs" }
    ],
    offers: "₹50,000 Booking Discount + Free Car Parking"
  },
  {
    id: "rudra-heights",
    name: "Rudra Heights",
    location: "Karanjade, Panvel",
    price: "₹29.9L - ₹36L",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&h=600&fit=crop",
    bhk: "1-2 BHK",
    possession: "Ready to Move",
    rera: "VERIFIED",
    badges: ["RERA", "Ready", "Value for Money"],
    sqft: "480-650 sq.ft",
    builder: "Rudra Constructions",
    totalArea: "2.8 acres",
    reraNumber: "P52000003456",
    status: "Ready to Move",
    amenities: ["Gym", "Kids Play Area", "Parking", "Garden", "Lift", "CCTV", "24x7 Water", "Power Backup"],
    locationHighlights: [
      "Peaceful residential area",
      "10 min from Panvel Station",
      "Close to educational institutions",
      "Good bus connectivity",
      "Affordable luxury living"
    ],
    priceTable: [
      { type: "1BHK", area: "480 sq.ft", price: "₹29.9 Lakhs" },
      { type: "2BHK", area: "650 sq.ft", price: "₹36.0 Lakhs" }
    ]
  }
];

export const getAllProjects = (): Project[] => {
  return projects;
};

export const getProjectById = (id: string | undefined): Project | undefined => {
  if (!id) return undefined;
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 3);
};
