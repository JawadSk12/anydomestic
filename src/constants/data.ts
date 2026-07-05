export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string;
}

export interface Employee {
  id: string;
  name: string;
  category: string;
  experience: number;
  rating: number;
  salary: number;
  verification: 'Police Verified' | 'Aadhaar Verified' | 'Medical Check' | 'Fully Verified';
  img: string;
  city: string;
  availability: 'Part Time' | 'Full Time' | 'Live In';
  languages: string[];
  age: number;
  gender: 'Male' | 'Female';
  description: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  city: string;
  img: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  img: string;
}

export const CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", 
  "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", 
  "Noida", "Gurgaon"
];

export const SERVICES: Service[] = [
  {
    id: "house-maid",
    name: "House Maid",
    price: 10000,
    description: "Dusting, mopping, laundry, utensil cleaning, and complete daily household organization.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
  },
  {
    id: "babysitter",
    name: "Babysitter",
    price: 12000,
    description: "Caring, playful, and responsive child carers focused on infant and toddler milestone stimulation.",
    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"
  },
  {
    id: "nanny",
    name: "Nanny",
    price: 18000,
    description: "Highly trained professional child educators and caregivers offering full-day child development support.",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e017ddd3?w=600&q=80"
  },
  {
    id: "cook",
    name: "Cook",
    price: 15000,
    description: "Culinary experts specializing in healthy home meals, multi-cuisine preparations, and kitchen hygiene.",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80"
  },
  {
    id: "driver",
    name: "Driver",
    price: 16000,
    description: "Licensed, background-verified personal chauffeurs with clean driving records and route expertise.",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
  },
  {
    id: "elder-care",
    name: "Elder Care",
    price: 20000,
    description: "Specialized caregivers to help elders with mobility, medicine tracking, meals, and companionship.",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80"
  },
  {
    id: "patient-care",
    name: "Patient Care",
    price: 22000,
    description: "Trained medical attendants for post-operative recovery, chronic care management, and bedridden patient support.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
  },
  {
    id: "caretaker",
    name: "Caretaker",
    price: 18000,
    description: "Trustworthy individuals to manage properties, run household errands, and coordinate vendors.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
  },
  {
    id: "housekeeping",
    name: "Housekeeping",
    price: 14000,
    description: "Deep cleaners and house stewards for villa and premium residence upkeep.",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80"
  },
  {
    id: "office-boy",
    name: "Office Boy",
    price: 13000,
    description: "Reliable support staff for corporate pantry, filing, couriers, and office hospitality.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80"
  },
  {
    id: "security-guard",
    name: "Security Guard",
    price: 18000,
    description: "Alert, disciplined, and physically fit security guards for home and gated community safety.",
    img: "https://images.unsplash.com/photo-1628084599197-6a19f868c225?w=600&q=80"
  },
  {
    id: "japa-maid",
    name: "Japa Maid",
    price: 25000,
    description: "Post-pregnancy experts providing traditional massage and specialized care for newborns and new mothers.",
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&q=80"
  },
  {
    id: "home-helper",
    name: "Home Helper",
    price: 11000,
    description: "General helpers for grocery shopping, elderly support, and minor household tasks.",
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80"
  }
];

export const PROFILES: Employee[] = [
  {
    id: "emp-1",
    name: "Priya S.",
    category: "Patient Care",
    experience: 5,
    rating: 4.9,
    salary: 22000,
    verification: "Fully Verified",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
    city: "Mumbai",
    availability: "Full Time",
    languages: ["Hindi", "English", "Marathi"],
    age: 32,
    gender: "Female",
    description: "Trained geriatric and patient care assistant with certification in Basic Life Support (BLS). Warm, attentive, and specialized in diabetes care.",
    skills: ["Post-Op Recovery", "Geriatric Care", "Blood Pressure Monitoring", "Hygiene Management"]
  },
  {
    id: "emp-2",
    name: "Anita R.",
    category: "Babysitter",
    experience: 3,
    rating: 4.8,
    salary: 15000,
    verification: "Police Verified",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    city: "Delhi",
    availability: "Full Time",
    languages: ["Hindi", "Punjabi"],
    age: 28,
    gender: "Female",
    description: "Highly energetic and gentle childcare professional with extensive experience managing toddlers. Loves storytelling and educational games.",
    skills: ["Infant Feeding", "Toddler Milestones", "First Aid", "Storytelling"]
  },
  {
    id: "emp-3",
    name: "Lakshmi K.",
    category: "House Maid",
    experience: 7,
    rating: 4.7,
    salary: 12000,
    verification: "Aadhaar Verified",
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&q=80",
    city: "Bangalore",
    availability: "Part Time",
    languages: ["Kannada", "Telugu", "Hindi"],
    age: 38,
    gender: "Female",
    description: "Extremely organized housemaid specialized in vacuuming, dusting, laundry care, and premium villa upkeep. Known for high punctuality.",
    skills: ["Deep Cleaning", "Garment Care", "Sanitization", "Punctuality"]
  },
  {
    id: "emp-4",
    name: "Sunita D.",
    category: "Cook",
    experience: 6,
    rating: 4.9,
    salary: 18000,
    verification: "Medical Check",
    img: "https://images.unsplash.com/photo-1595275870371-c8918eb80445?w=300&q=80",
    city: "Mumbai",
    availability: "Live In",
    languages: ["Hindi", "Gujarati"],
    age: 42,
    gender: "Female",
    description: "Experienced home cook specializing in authentic North Indian, Gujarati, and healthy low-oil diets. Maintains absolute kitchen hygiene.",
    skills: ["North Indian Cuisine", "Dietary Customization", "Kitchen Sanitization", "Baking"]
  },
  {
    id: "emp-5",
    name: "Rajesh K.",
    category: "Driver",
    experience: 8,
    rating: 4.9,
    salary: 19000,
    verification: "Fully Verified",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    city: "Pune",
    availability: "Full Time",
    languages: ["Marathi", "Hindi", "English"],
    age: 35,
    gender: "Male",
    description: "Reliable personal chauffeur with detailed knowledge of Pune and Mumbai highway routes. Experience driving premium automatic and manual SUVs.",
    skills: ["Premium Vehicle Driving", "GPS Navigation", "Basic Mechanics", "Defensive Driving"]
  },
  {
    id: "emp-6",
    name: "Vikram M.",
    category: "Security Guard",
    experience: 10,
    rating: 5.0,
    salary: 20000,
    verification: "Fully Verified",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&q=80",
    city: "Delhi",
    availability: "Live In",
    languages: ["Hindi", "English"],
    age: 40,
    gender: "Male",
    description: "Ex-serviceman security expert with quick crisis response and gate logs management. Physical fitness and security protocols certified.",
    skills: ["Crisis Management", "CCTV Monitoring", "Gate Log Management", "First Aid"]
  },
  {
    id: "emp-7",
    name: "Savitri B.",
    category: "Japa Maid",
    experience: 12,
    rating: 4.9,
    salary: 30000,
    verification: "Fully Verified",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
    city: "Bangalore",
    availability: "Live In",
    languages: ["Kannada", "Hindi", "Tamil"],
    age: 45,
    gender: "Female",
    description: "Veteran Japa care provider specializing in traditional mother and newborn massages, healthy lactation diets, and baby bath rituals.",
    skills: ["Newborn Care", "Mother Massage", "Lactation Diets", "Baby Bath & Massage"]
  },
  {
    id: "emp-8",
    name: "Ramesh P.",
    category: "Home Helper",
    experience: 4,
    rating: 4.6,
    salary: 13000,
    verification: "Police Verified",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    city: "Hyderabad",
    availability: "Full Time",
    languages: ["Telugu", "Hindi"],
    age: 26,
    gender: "Male",
    description: "Energetic and polite home helper. Excellent at grocery shopping, pet walking, watering plants, and coordinating vendor repairs.",
    skills: ["Errands Management", "Pet Care", "Vendor Coordination", "Punctuality"]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Police Verified",
    description: "Every professional undergoes rigorous criminal background verification through our partners."
  },
  {
    title: "Medical Check",
    description: "All staff complete standard physical and disease checks before placement in your household."
  },
  {
    title: "Aadhaar Verified",
    description: "Secure, government-issued biometric verification matches credentials exactly."
  },
  {
    title: "Free Replacement",
    description: "Not fully satisfied? We provide instant replacements within the first 3 months at zero cost."
  },
  {
    title: "24x7 Customer Support",
    description: "Dedicated account managers ready to handle emergency scheduling and general issues."
  },
  {
    title: "Transparent Pricing",
    description: "No hidden broker fees or commission cuts. Direct transparent salaries for the staff."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    text: "Found an outstanding patient caregiver for my elderly parents in Mumbai within 48 hours. Absolute peace of mind.",
    author: "Rajesh Mehta",
    city: "Mumbai",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5
  },
  {
    id: "testi-2",
    text: "The verification process is highly thorough. The nanny we hired has become an invaluable part of our child's life.",
    author: "Priya Sharma",
    city: "Delhi",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5
  },
  {
    id: "testi-3",
    text: "I appreciate the transparency and the 3-month free replacement guarantee. Their support team answers quickly.",
    author: "Amit Patel",
    city: "Bangalore",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    q: "How do you verify your domestic helpers?",
    a: "We conduct physical address verification, Aadhaar biometric linkage, medical checkups (infectious diseases/general fitness), and formal police verification via legal record checks."
  },
  {
    q: "What is your replacement policy?",
    a: "If your hired helper leaves or does not perform up to expectations, we offer unlimited free replacements within the first 90 days of hiring."
  },
  {
    q: "How long does it take to connect with candidates?",
    a: "Usually, we send shortlisted candidates' profiles to you within 24 to 48 hours. You can then interview them over a video call or face-to-face."
  },
  {
    q: "Do I pay the salary to the helper directly?",
    a: "Yes. The salary contract is directly between you and the helper. We charge a one-time placement verification fee when the hire is completed."
  },
  {
    q: "Are your workers vaccinated and medically fit?",
    a: "Yes. All candidates listed on our portal undergo standard medical checkups and vaccination checks to protect your household."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Crucial Checklist: Hiring a Childcare Specialist in India",
    summary: "From certification validation to medical records, here are the non-negotiable points to verify before bringing a nanny into your home.",
    date: "June 28, 2026",
    readTime: "5 min read",
    category: "Child Safety",
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80"
  },
  {
    id: "post-2",
    title: "Understanding Police Verification for Household Staff",
    summary: "An in-depth look at how digital police databases and local station verifications work, and why they are necessary.",
    date: "June 15, 2026",
    readTime: "4 min read",
    category: "Verification",
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=400&q=80"
  },
  {
    id: "post-3",
    title: "Nutritional Cooking: What to look for in a professional cook",
    summary: "How to screen professional home cooks for kitchen hygiene, spice management, and dietary custom capabilities.",
    date: "May 20, 2026",
    readTime: "6 min read",
    category: "Home Care",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80"
  }
];
