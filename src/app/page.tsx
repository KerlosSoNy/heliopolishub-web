import Banner from "@/components/components/Banner";
import Blog from "@/components/components/Blog";
import CategoryStrip from "@/components/components/CategoryStrip";
import Footer from "@/components/components/Footer";
import Header from "@/components/components/Header";
import ProductFeatured from "@/components/components/ProductFeatured";
import ProductGrid from "@/components/components/ProductGrid";
import ProductMinimal from "@/components/components/ProductMinimal";
import Sidebar from "@/components/components/Sidebar";
import TestimonialsCtaServices from "@/components/components/TestimonialsCtaServices";

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
