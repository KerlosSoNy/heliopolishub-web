import { topCategories } from "@/data/products";

export default function CategoryStrip() {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {topCategories.map((cat) => (
            <div className="category-item" key={cat.title}>
              <div className="category-img-box">
                <img src={cat.icon} alt={cat.title.toLowerCase()} width={30} />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">{cat.title}</h3>
                  <p className="category-item-amount">{cat.amount}</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
