import { bannerSlides } from "@/data/products";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          {bannerSlides.map((slide) => (
            <div className="slider-item" key={slide.title}>
              <img src={slide.img} alt={slide.alt} className="banner-img" />

              <div className="banner-content">
                <p className="banner-subtitle">{slide.subtitle}</p>

                <h2 className="banner-title">{slide.title}</h2>

                <p className="banner-text">
                  starting at &dollar; <b>{slide.priceWhole}</b>.{slide.priceDecimal}
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
