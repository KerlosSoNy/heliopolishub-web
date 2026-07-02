import { newProducts } from "@/data/products";
import Rating from "./Rating";

export default function ProductGrid() {
  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>

      <div className="product-grid">
        {newProducts.map((product) => (
          <div className="showcase" key={product.title + product.img}>
            <div className="showcase-banner">
              <img src={product.img} alt={product.alt} width={300} className="product-img default" />
              <img src={product.hoverImg ?? product.img} alt={product.alt} width={300} className="product-img hover" />

              {product.badge && (
                <p className={`showcase-badge${product.badge.variant ? ` ${product.badge.variant}` : ""}`}>
                  {product.badge.text}
                </p>
              )}

              <div className="showcase-actions">
                <button className="btn-action">
                  Love
                </button>

                <button className="btn-action">
                  View
                </button>

                <button className="btn-action">
                  Repeat
                </button>

                <button className="btn-action">
                  +
                </button>
              </div>
            </div>

            <div className="showcase-content">
              {product.category && (
                <a href="#" className="showcase-category">
                  {product.category}
                </a>
              )}

              <h3>
                <a href="#" className="showcase-title">
                  {product.title}
                </a>
              </h3>

              <Rating value={product.rating ?? 5} outlineEmpty />

              <div className="price-box">
                <p className="price">{product.price}</p>
                {product.oldPrice && <del>{product.oldPrice}</del>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
