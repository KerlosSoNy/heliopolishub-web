import { services } from "@/data/products";

export default function Services() {
  return (
    <div className="service">
      <h2 className="title">Our Services</h2>

      <div className="service-container">
        {services.map((service) => (
          <a href="#" className="service-item" key={service.title}>
            <div className="service-icon">
              {/* <ion-icon name={service.icon}></ion-icon> */}
            </div>

            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
