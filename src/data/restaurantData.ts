import { MenuItem, CustomerReview, DayHours } from '../types';

export const RESTAURANT_INFO = {
  name: "Nimba",
  tagline: "West African & Liberian homestyle kitchen in Bridgeport, Chicago",
  address: "3252 S Morgan St, Chicago, IL 60608",
  neighborhood: "Bridgeport, Chicago",
  phone: "(708) 517-3547",
  phoneRaw: "+17085173547",
  owner: "London",
  rating: 4.5,
  reviewCount: "80+",
  hoursSummary: "Closed Mon & Tue · Wed–Sun 12:00 PM – 8:00 PM",
  patio: "Outdoor garden patio seating available (weather permitting)",
  cuisine: "West African / Liberian",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Nimba+3252+S+Morgan+St+Chicago+IL+60608",
  doorDashLink: "https://www.doordash.com/search/store/nimba%20chicago/",
  uberEatsLink: "https://www.ubereats.com/search?q=nimba%20chicago",
};

export const WEEKLY_HOURS: DayHours[] = [
  { day: "Monday", short: "Mon", hours: "Closed", isOpen: false },
  { day: "Tuesday", short: "Tue", hours: "Closed", isOpen: false },
  { day: "Wednesday", short: "Wed", hours: "12:00 PM – 8:00 PM", isOpen: true },
  { day: "Thursday", short: "Thu", hours: "12:00 PM – 8:00 PM", isOpen: true },
  { day: "Friday", short: "Fri", hours: "12:00 PM – 8:00 PM", isOpen: true },
  { day: "Saturday", short: "Sat", hours: "12:00 PM – 8:00 PM", isOpen: true },
  { day: "Sunday", short: "Sun", hours: "12:00 PM – 8:00 PM", isOpen: true },
];

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: "jollof-rice",
    name: "Jollof Rice",
    description: "Fragrant long-grain rice slowly stewed in a rich, deeply spiced tomato and red bell pepper reduction.",
    price: "$14.00",
    category: "mains",
    badge: "House Signature",
    dietary: "Gluten-Free"
  },
  {
    id: "cassava-leaf",
    name: "Cassava Leaf Stew",
    description: "Tender, slow-simmered cassava greens simmered in rich palm oil broth with savory smoked seasoning.",
    price: "$17.50",
    category: "mains",
    badge: "Liberian Classic",
    dietary: "Hearty & Rich"
  },
  {
    id: "potato-greens",
    name: "Potato Greens with Smoked Turkey",
    description: "Silky, braised sweet potato greens infused with tender pulled smoked turkey and aromatic spices.",
    price: "$18.00",
    category: "mains",
    badge: "Guest Favorite",
    dietary: "Savory Stew"
  },
  {
    id: "salmon-pepper-soup",
    name: "Salmon Pepper Soup",
    description: "Warming, herb-infused clear broth seasoned with traditional West African wild pepper and tender salmon.",
    price: "$16.50",
    category: "soups",
    badge: "Spiced & Restorative",
    dietary: "Pescatarian"
  },
  {
    id: "fufu",
    name: "Fufu",
    description: "Smooth, velvety pounded cassava and plantain mash — the essential staple made for dipping in rich stews.",
    price: "$6.50",
    category: "sides",
    badge: "Traditional Staple",
    dietary: "Vegan · Gluten-Free"
  },
  {
    id: "fried-plantains",
    name: "Fried Plantains",
    description: "Sweet ripe plantains fried golden with tender centers and delicious caramelized, crispy edges.",
    price: "$7.00",
    category: "sides",
    badge: "Always Fresh",
    dietary: "Vegetarian"
  },
  {
    id: "truffled-yuca-fries",
    name: "Truffled Yuca Fries",
    description: "Crisp golden cassava spears drizzled with aromatic truffle essence and finished with sea salt.",
    price: "$8.50",
    category: "sides",
    badge: "Specialty",
    dietary: "Vegetarian"
  },
  {
    id: "samosas",
    name: "Samosas",
    description: "Flaky, handmade golden pastry parcels stuffed with warmly spiced savory filling.",
    price: "$7.50",
    category: "sides",
    badge: "Handmade",
    dietary: "Crowd Pleaser"
  }
];

export const MARQUEE_ITEMS = [
  "Jollof Rice",
  "Cassava Leaf",
  "Fufu",
  "Salmon Pepper Soup",
  "Fried Plantains",
  "Truffled Yuca Fries",
  "Potato Greens",
  "Samosas"
];

export const REAL_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    quote: "The food is absolutely fantastic! We tried the potato greens with smoked turkey, the dry rice bowl, plantains, and the house slaw. I was wowed by every single item.",
    author: "Local Bridgeport Diner",
    highlight: "Wowed by every single item",
    rating: 5,
    date: "Google Review"
  },
  {
    id: "rev-2",
    quote: "The business owner London reached out and did everything she could to fulfill and actually deliver my order to me. She let me try a new menu item too. So grateful.",
    author: "Dedicated Regular",
    highlight: "London reached out and delivered my order",
    rating: 5,
    date: "Google Review"
  },
  {
    id: "rev-3",
    quote: "I Love Love Love NIMBA — the food is amazing, customer service is amazing, owner is such a sweetheart. Cooked with love and passion.",
    author: "South Side Food Lover",
    highlight: "Cooked with love and passion",
    rating: 5,
    date: "Google Review"
  }
];
