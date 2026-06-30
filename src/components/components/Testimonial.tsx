export default function Testimonial() {
  return (
    <div className="testimonial">
      <h2 className="title">testimonial</h2>

      <div className="testimonial-card">
        <img src="/assets/images/testimonial-1.jpg" alt="alan doe" className="testimonial-banner" width={80} height={80} />

        <p className="testimonial-name">Alan Doe</p>

        <p className="testimonial-title">CEO &amp; Founder Invision</p>

        <img src="/assets/images/icons/quotes.svg" alt="quotation" className="quotation-img" width={26} />

        <p className="testimonial-desc">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.</p>
      </div>
    </div>
  );
}
