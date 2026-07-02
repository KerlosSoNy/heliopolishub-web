export interface ShowcaseProduct {
  img: string;
  hoverImg?: string;
  alt: string;
  title: string;
  category?: string;
  price: string;
  oldPrice?: string;
  rating?: number; // out of 5, supports .5
  badge?: { text: string; variant?: "angle black" | "angle pink" | "" };
}

export interface SidebarSubCategory {
  name: string;
  stock: string;
}

export interface SidebarCategory {
  icon: string;
  label: string;
  items: SidebarSubCategory[];
}

export interface MainCategory {
  icon: string;
  title: string;
  amount: string;
}

export interface BlogPost {
  img: string;
  alt: string;
  category: string;
  title: string;
  author: string;
  date: string;
  dateISO: string;
}

export const bannerSlides = [
  {
    img: "/images/cars/1.JPG",
    alt: "1:18 scale classic muscle car collection sale",
    subtitle: "Trending collection",
    title: "Classic Muscle Cars, 1:18 Scale",
    priceWhole: "20",
    priceDecimal: "00",
  },
  {
    img: "/images/cars/2.JPG",
    alt: "diecast motorcycle replicas",
    subtitle: "Trending models",
    title: "Detailed Diecast Motorcycles",
    priceWhole: "15",
    priceDecimal: "00",
  },
  {
    img: "/images/cars/3.JPG",
    alt: "new diecast construction equipment summer sale",
    subtitle: "Sale Offer",
    title: "New Construction Fleet Sale",
    priceWhole: "29",
    priceDecimal: "99",
  },
];

export const topCategories: MainCategory[] = [
  { icon: "/images/cars/1.JPG", title: "Sports cars", amount: "(53)" },
  { icon: "/images/cars/2.JPG", title: "Pickup trucks", amount: "(58)" },
  { icon: "/images/cars/3.JPG", title: "Motorcycles", amount: "(68)" },
  { icon: "/images/cars/4.JPG", title: "Construction rigs", amount: "(84)" },
  { icon: "/images/cars/5.JPG", title: "Farm tractors", amount: "(35)" },
  { icon: "/images/cars/6.JPG", title: "Military vehicles", amount: "(16)" },
  { icon: "/images/cars/7.JPG", title: "Aircraft", amount: "(27)" },
  { icon: "/images/cars/8.JPG", title: "Trains & rail", amount: "(39)" },
];

export const sidebarCategories: SidebarCategory[] = [
  {
    icon: "/images/cars/1.JPG",
    label: "Passenger cars",
    items: [
      { name: "Sports cars", stock: "300" },
      { name: "Classic & muscle cars", stock: "60" },
      { name: "Sedans", stock: "50" },
      { name: "Concept cars", stock: "87" },
    ],
  },
  {
    icon: "/images/cars/2.JPG",
    label: "Trucks & SUVs",
    items: [
      { name: "Pickup trucks", stock: "45" },
      { name: "SUVs", stock: "75" },
      { name: "Semi trucks & trailers", stock: "35" },
      { name: "Tow trucks", stock: "26" },
    ],
  },
  {
    icon: "/images/cars/3.JPG",
    label: "Motorcycles",
    items: [
      { name: "Sport bikes", stock: "46" },
      { name: "Cruisers", stock: "73" },
      { name: "Dirt bikes", stock: "61" },
    ],
  },
  {
    icon: "/images/cars/4.JPG",
    label: "Construction & farm",
    items: [
      { name: "Excavators", stock: "12 pcs" },
      { name: "Bulldozers", stock: "60 pcs" },
      { name: "Cranes", stock: "50 pcs" },
      { name: "Tractors", stock: "87 pcs" },
    ],
  },
  {
    icon: "/images/cars/5.JPG",
    label: "Aircraft & aviation",
    items: [
      { name: "Fighter jets", stock: "68" },
      { name: "Airliners", stock: "46" },
      { name: "Helicopters", stock: "79" },
      { name: "WWII warbirds", stock: "23" },
    ],
  },
  {
    icon: "/images/cars/7.JPG",
    label: "Trains & rail",
    items: [
      { name: "Steam locomotives", stock: "50" },
      { name: "Diesel engines", stock: "48" },
    ],
  },
  {
    icon: "/images/cars/6.JPG",
    label: "Accessories",
    items: [
      { name: "Display cases", stock: "62" },
      { name: "Turntable risers", stock: "35" },
      { name: "Diorama sets", stock: "80" },
      { name: "Decal sheets", stock: "75" },
    ],
  },
];

export const bestSellers: ShowcaseProduct[] = [
  { img: "/images/cars/1.JPG", alt: "1:64 scale rally car", title: "1:64 Scale Rally Car", price: "$4.00", oldPrice: "$5.00", rating: 5 },
  { img: "/images/cars/2.JPG", alt: "1:24 scale pickup truck", title: "1:24 Scale Pickup Truck", price: "$7.00", oldPrice: "$17.00", rating: 4.5 },
  { img: "/images/cars/3.JPG", alt: "1:64 scale delivery van", title: "1:64 Scale Delivery Van", price: "$3.00", oldPrice: "$5.00", rating: 4.5 },
  { img: "/images/cars/4.JPG", alt: "1:43 scale formula race car", title: "1:43 Scale Formula Race Car", price: "$12.00", oldPrice: "$15.00", rating: 5 },
];

export const newArrivals: ShowcaseProduct[] = [
  { img: "/images/cars/5.JPG", alt: "1:18 scale convertible roadster", title: "1:18 Scale Convertible Roadster", category: "Sports cars", price: "$45.00", oldPrice: "$12.00" },
  { img: "/images/cars/6.JPG", alt: "1:24 scale hot rod coupe", title: "1:24 Scale Hot Rod Coupe", category: "Classic cars", price: "$61.00", oldPrice: "$9.00" },
  { img: "/images/cars/7.JPG", alt: "1:18 scale off-road suv", title: "1:18 Scale Off-Road SUV", category: "SUVs", price: "$76.00", oldPrice: "$25.00" },
  { img: "/images/cars/8.JPG", alt: "1:24 scale cruiser motorcycle", title: "1:24 Scale Cruiser Motorcycle", category: "Motorcycles", price: "$68.00", oldPrice: "$31.00" },
  { img: "/images/cars/9.JPG", alt: "1:50 scale wheel loader", title: "1:50 Scale Wheel Loader", category: "Construction", price: "$61.00", oldPrice: "$11.00" },
  { img: "/images/cars/10.JPG", alt: "1:24 scale crawler excavator", title: "1:24 Scale Crawler Excavator", category: "Construction", price:"$32.00", oldPrice: "$20.00" },
  { img: "/images/cars/11.JPG", alt: "1:50 scale mobile crane", title: "1:50 Scale Mobile Crane", category: "Heavy equipment", price:"$50.00", oldPrice:"$25.00" },
  { img: "/images/cars/12.JPG", alt: "1:64 scale farm tractor", title: "1:64 Scale Farm Tractor", category: "Farm vehicles", price: "$20.00", oldPrice: "$10.00" },
];

export const trending: ShowcaseProduct[] = [
  { img: "/images/cars/13.JPG", alt: "1:18 scale sport bike - white", title: "1:18 Scale Sport Bike - White", category: "Motorcycles", price: "$49.00", oldPrice: "$15.00" },
  { img: "/images/cars/14.JPG", alt: "1:18 scale sport bike - black", title: "1:18 Scale Sport Bike - Black", category: "Motorcycles", price: "$78.00", oldPrice: "$36.00" },
  { img: "/images/cars/15.JPG", alt: "1:18 scale touring sedan", title: "1:18 Scale Touring Sedan", category: "Sedans", price: "$94.00", oldPrice: "$42.00" },
  { img: "/images/cars/16.JPG", alt: "1:24 scale dirt bike", title: "1:24 Scale Dirt Bike", category: "Motorcycles", price: "$54.00", oldPrice: "$65.00" },
  { img: "/images/cars/1.JPG", alt: "1:18 scale rally hatchback - white", title: "1:18 Scale Rally Hatchback - White", category: "Sports cars", price: "$52.00", oldPrice: "$55.00" },
  { img: "/images/cars/2.JPG", alt: "1:64 scale armored truck", title: "1:64 Scale Armored Truck", category: "Military vehicles", price: "$20.00", oldPrice: "$30.00" },
  { img: "/images/cars/3.JPG", alt: "1:24 scale formal town car", title: "1:24 Scale Town Car", category: "Sedans", price: "$56.00", oldPrice: "$78.00" },
  { img: "/images/cars/4.JPG", alt: "1:24 scale tow truck", title: "1:24 Scale Tow Truck", category: "Trucks", price: "$50.00", oldPrice: "$55.00" },
];

export const topRated: ShowcaseProduct[] = [
  { img: "/images/cars/5.JPG", alt: "1:48 scale fighter jet with display stand", title: "1:48 Scale Fighter Jet, Display Stand", category: "Aircraft", price: "$50.00", oldPrice: "$34.00" },
  { img: "/images/cars/5.JPG", alt: "1:64 scale steam locomotive", title: "1:64 Scale Steam Locomotive", category: "Trains", price: "$84.00", oldPrice: "$30.00" },
  { img: "/images/cars/5.JPG", alt: "diecast diorama base plate", title: "Diecast Diorama Base Plate", category: "Accessories", price: "$42.00", oldPrice: "$10.00" },
  { img: "/images/cars/5.JPG", alt: "diecast model display tray", title: "Diecast Model Display Tray", category: "Accessories", price: "$24.00", oldPrice: "$10.00" },
  { img: "/images/cars/5.JPG", alt: "1:18 scale classic convertible", title: "1:18 Scale Classic Convertible", category: "Classic cars", price: "$62.00", oldPrice: "$65.00" },
  { img: "/images/cars/5.JPG", alt: "1:72 scale airliner model", title: "1:72 Scale Airliner Model", category: "Aircraft", price: "$56.00", oldPrice: "$78.00" },
  { img: "/images/cars/5.JPG", alt: "diecast cleaning & polish kit", title: "Diecast Cleaning & Polish Kit", category: "Accessories", price: "$20.00", oldPrice: "$30.00" },
  { img: "/images/cars/5.JPG", alt: "1:64 scale vintage pickup", title: "1:64 Scale Vintage Pickup", category: "Classic trucks", price: "$20.00", oldPrice: "$30.00" },
];

export interface DealProduct {
  img: string;
  alt: string;
  title: string;
  desc: string;
  price: string;
  oldPrice: string;
  rating: number;
  sold: number;
  available: number;
}

export const dealsOfTheDay: DealProduct[] = [
  {
    img: "/images/cars/5.JPG",
    alt: "diecast cleaning, polish & display care set",
    title: "Diecast Cleaning, Polish & Display Care Set",
    desc: "A complete care kit for keeping diecast paint and chrome detailing showroom-fresh between display rotations.",
    price: "$150.00",
    oldPrice: "$200.00",
    rating: 3,
    sold: 20,
    available: 40,
  },
  {
    img: "/images/cars/5.JPG",
    alt: "1:18 scale limited edition supercar",
    title: "1:18 Scale Limited Edition Supercar",
    desc: "Hand-finished die-cast body, opening doors and hood, detailed engine bay, and a numbered certificate of authenticity.",
    price: "$1990.00",
    oldPrice: "$2000.00",
    rating: 3,
    sold: 15,
    available: 40,
  },
];

export const newProducts: ShowcaseProduct[] = [
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:24 scale crawler excavator", title: "1:24 Scale Crawler Excavator", category: "construction", price: "$48.00", oldPrice: "$75.00", rating: 3, badge: { text: "15%" } },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:24 scale cruiser motorcycle", title: "1:24 Scale Cruiser Motorcycle", category: "motorcycle", price: "$45.00", oldPrice: "$56.00", rating: 3, badge: { text: "sale", variant: "angle black" } },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:50 scale wheel loader", title: "1:50 Scale Wheel Loader", category: "construction", price: "$58.00", oldPrice: "$65.00", rating: 3 },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:18 scale off-road suv", title: "1:18 Scale Off-Road SUV", category: "suv", price: "$25.00", oldPrice: "$35.00", rating: 5, badge: { text: "new", variant: "angle pink" } },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:24 scale tow truck", title: "1:24 Scale Tow Truck", category: "truck", price: "$99.00", oldPrice: "$105.00", rating: 5 },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:48 scale fighter jet", title: "1:48 Scale Fighter Jet", category: "aircraft", price: "$150.00", oldPrice: "$170.00", rating: 3, badge: { text: "sale", variant: "angle black" } },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:72 scale airliner model", title: "1:72 Scale Airliner Model", category: "aircraft", price: "$100.00", oldPrice: "$120.00", rating: 4 },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:18 scale touring sedan", title: "1:18 Scale Touring Sedan", category: "sedan", price: "$25.00", oldPrice: "$30.00", rating: 3, badge: { text: "sale", variant: "angle black" } },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:24 scale crawler excavator - yellow", title: "1:24 Scale Crawler Excavator - Yellow", category: "construction", price: "$32.00", oldPrice: "$45.00", rating: 4 },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:18 scale sport bike - black", title: "1:18 Scale Sport Bike - Black", category: "motorcycle", price: "$58.00", oldPrice: "$64.00", rating: 3, badge: { text: "sale", variant: "angle black" } },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:24 scale town car", title: "1:24 Scale Town Car", category: "sedan", price: "$50.00", oldPrice: "$65.00", rating: 4 },
  { img: "/images/cars/5.JPG", hoverImg: "/images/cars/5.JPG", alt: "1:64 scale farm tractor", title: "1:64 Scale Farm Tractor", category: "farm", price: "$78.00", oldPrice: "$85.00", rating: 3, badge: { text: "sale", variant: "angle black" } },
];

export const blogPosts: BlogPost[] = [
  {
    img:"/images/cars/5.JPG",
    alt: "Diecast Retail KPIs 2021 Guide for Hobby Shop Owners",
    category: "Collecting",
    title: "Diecast Retail KPIs 2021 Guide for Hobby Shop Owners.",
    author: "Mr Admin",
    date: "Apr 06, 2022",
    dateISO: "2022-04-06",
  },
  {
    img:"/images/cars/5.JPG",
    alt: "Curbside Pickup Trends: How Hobby Shops Can Win the Pickup Battle.",
    category: "Retail",
    title: "Curbside Pickup Trends: How Hobby Shops Can Win the Pickup Battle.",
    author: "Mr Robin",
    date: "Jan 18, 2022",
    dateISO: "2022-01-18",
  },
  {
    img: "/images/cars/5.JPG",
    alt: "Scale Guide: 1:18 vs 1:24 vs 1:64, Which Is Right for You?",
    category: "Scale Guide",
    title: "Scale Guide: 1:18 vs 1:24 vs 1:64, Which Is Right for You?",
    author: "Mr Selsa",
    date: "Feb 10, 2022",
    dateISO: "2022-02-10",
  },
  {
    img: "/images/cars/5.JPG",
    alt: "Display & Storage Trends: Protecting Your Diecast Collection.",
    category: "Display & Care",
    title: "Display & Storage Trends: Protecting Your Diecast Collection.",
    author: "Mr Pawar",
    date: "Mar 15, 2022",
    dateISO: "2022-03-15",
  },
];

export const services = [
  { icon: "boat-outline", title: "Worldwide Delivery", desc: "For Order Over $100" },
  { icon: "rocket-outline", title: "Next Day delivery", desc: "UK Orders Only" },
  { icon: "call-outline", title: "Best Online Support", desc: "Hours: 8AM - 11PM" },
  { icon: "arrow-undo-outline", title: "Return Policy", desc: "Easy & Free Return" },
  { icon: "ticket-outline", title: "30% money back", desc: "For Order Over $100" },
];

export const footerCategories = [
  {
    title: "Cars :",
    links: ["Sports cars", "Sedans", "Classic & muscle cars", "Concept cars", "Rally cars", "Convertibles", "Hatchbacks"],
  },
  {
    title: "Trucks & heavy equipment :",
    links: ["Pickup trucks", "Semi trucks & trailers", "Tow trucks", "Excavators", "Bulldozers", "Cranes", "Wheel loaders", "Tractors", "Farm equipment", "Dump trucks"],
  },
  {
    title: "Motorcycles & aircraft :",
    links: ["Sport bikes", "Cruisers", "Dirt bikes", "Fighter jets", "Airliners", "Helicopters", "WWII warbirds", "Choppers", "Touring bikes", "Vintage planes", "Drones"],
  },
  {
    title: "Accessories & display :",
    links: ["Display cases", "Turntable risers", "Diorama sets", "Decal sheets", "Polish kits", "Storage racks", "Track sets", "Garage dioramas", "Light kits", "Magnetic mounts", "Display stands", "Cleaning cloths", "Replacement wheels", "Scale figures", "Garage signs", "Carrying cases"],
  },
];
