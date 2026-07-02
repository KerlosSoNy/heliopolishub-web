import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import CategoryStrip from "@/components/CategoryStrip";
import ProductFeatured from "@/components/ProductFeatured";
import ProductGrid from "@/components/ProductGrid";
import ProductMinimal from "@/components/ProductMinimal";
import Sidebar from "@/components/Sidebar";
import TestimonialsCtaServices from "@/components/TestimonialsCtaServices";


export default function Home() {
  return (
    <main>
      <Banner />
      <CategoryStrip />
      <div className="product-container">
        <div className="container">
          <Sidebar />
          <div className="product-box">
            <ProductMinimal />
            <ProductFeatured />
            <ProductGrid />
          </div>
        </div>
      </div>
      <TestimonialsCtaServices />
      <Blog />
    </main>
  );
}
