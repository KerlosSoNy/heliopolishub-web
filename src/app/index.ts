export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  rating: number; // 0-5, supports .5
  badge?: { label: string; tone: "default" | "dark" | "pink" };
  sold?: number;
  available?: number;
}

export interface ShowcaseProduct {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
}

export interface Category {
  id: string;
  title: string;
  count: number;
  icon: string; // lucide icon name, resolved in component
}

export interface SidebarCategory {
  id: string;
  title: string;
  icon: string;
  items: { name: string; stock: number }[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

export interface BannerSlide {
  id: string;
  image: string;
  subtitle: string;
  title: string;
  priceFrom: number;
}
