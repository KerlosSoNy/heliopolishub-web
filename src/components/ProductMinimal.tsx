import ProductShowcaseSection from "./ProductShowcaseSection";
import { newArrivals, trending, topRated } from "@/data/products";

export default function ProductMinimal() {
  return (
    <div className="product-minimal">
      <ProductShowcaseSection title="New Arrivals" items={newArrivals} />
      <ProductShowcaseSection title="Trending" items={trending} />
      <ProductShowcaseSection title="Top Rated" items={topRated} />
    </div>
  );
}
