import { sidebarCategories, bestSellers } from "@/data/products";
import Rating from "./Rating";

export default function Sidebar() {
  return (
    <div className="sidebar has-scrollbar" data-mobile-menu>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>

          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            {/* <ion-icon name="close-outline"></ion-icon> */}
          </button>
        </div>

        <ul className="sidebar-menu-category-list">
          {sidebarCategories.map((cat) => (
            <li className="sidebar-menu-category" key={cat.label}>
              <button className="sidebar-accordion-menu" data-accordion-btn>
                <div className="menu-title-flex">
                  <img src={cat.icon} alt={cat.label.toLowerCase()} className="menu-title-img" width={20} height={20} />
                  <p className="menu-title">{cat.label}</p>
                </div>

                <div>
                  {/* <ion-icon name="add-outline" className="add-icon"></ion-icon> */}
                  {/* <ion-icon name="remove-outline" className="remove-icon"></ion-icon> */}
                </div>
              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>
                {cat.items.map((item) => (
                  <li className="sidebar-submenu-category" key={item.name}>
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">{item.name}</p>
                      <data value={item.stock.replace(/\D/g, "")} className="stock" title="Available Stock">
                        {item.stock}
                      </data>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-showcase">
        <h3 className="showcase-heading">best sellers</h3>

        <div className="showcase-wrapper">
          <div className="showcase-container">
            {bestSellers.map((product) => (
              <div className="showcase" key={product.title}>
                <a href="#" className="showcase-img-box">
                  <img src={product.img} alt={product.alt} width={75} height={75} className="showcase-img" />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.title}</h4>
                  </a>

                  <Rating value={product.rating ?? 5} />

                  <div className="price-box">
                    <del>{product.oldPrice}</del>
                    <p className="price">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
