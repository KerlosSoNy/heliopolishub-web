import Testimonial from "./Testimonial";
import Cta from "./Cta";
import Services from "./Services";

export default function TestimonialsCtaServices() {
  return (
    <div>
      <div className="container">
        <div className="testimonials-box">
          <Testimonial />
          <Cta />
          <Services />
        </div>
      </div>
    </div>
  );
}
