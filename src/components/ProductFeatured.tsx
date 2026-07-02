import { dealsOfTheDay } from "@/data/products";
import Rating from "./Rating";

export default function ProductFeatured() {
  return (
    <div className="product-featured">
      <h2 className="title">Deal of the day</h2>

      <div className="showcase-wrapper has-scrollbar">
        {dealsOfTheDay.map((deal) => (
          <div className="showcase-container" key={deal.title}>
            <div className="showcase">
              <div className="showcase-banner">
                <img src={deal.img} alt={deal.alt} className="showcase-img" />
              </div>

              <div className="showcase-content">
                <Rating value={deal.rating} outlineEmpty />

                <a href="#">
                  <h3 className="showcase-title">{deal.title}</h3>
                </a>

                <p className="showcase-desc">{deal.desc}</p>

                <div className="price-box">
                  <p className="price">{deal.price}</p>
                  <del>{deal.oldPrice}</del>
                </div>

                <button className="add-cart-btn">add to cart</button>

                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      already sold: <b>{deal.sold}</b>
                    </p>

                    <p>
                      available: <b>{deal.available}</b>
                    </p>
                  </div>

                  <div className="showcase-status-bar"></div>
                </div>

                <div className="countdown-box">
                  <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                  <div className="countdown">
                    <div className="countdown-content">
                      <p className="display-number">360</p>
                      <p className="display-text">Days</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">24</p>
                      <p className="display-text">Hours</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">59</p>
                      <p className="display-text">Min</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">00</p>
                      <p className="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
