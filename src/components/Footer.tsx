import { IconEmailStamp } from "@tabler/icons-react";
import { LocateIcon, PhoneIcon } from "lucide-react";
import Facebook from "./footer/icons/Facebook";
import Instagram from "./footer/icons/Instagram";

export default function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <div className="container">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Popular Categories</h2>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Fashion
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Electronic
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Cosmetic
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Health
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Watches
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Products</h2>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Prices drop
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                New products
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Best sales
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Contact us
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Sitemap
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Our Company</h2>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Delivery
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Legal Notice
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Terms and conditions
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                About us
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Secure payment
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Services</h2>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Prices drop
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                New products
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Best sales
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Contact us
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Sitemap
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Contact</h2>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <LocateIcon />
              </div>

              <address className="content">
                12 Ahmed Zaki,El Nozha, Cairo, Egypt
              </address>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <PhoneIcon />
              </div>

              <a href="tel:+201019085973" className="footer-nav-link">
                01019085973
              </a>
            </li>

            <li className="footer-nav-item flex mt-2!">
              <div className="icon-box">
                <IconEmailStamp />
              </div>

              <a href="mailto:kerlosssony@gmail.com" className="footer-nav-link">
                Kerlosssony@gmail.com
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Follow Us</h2>
            </li>

            <li>
              <ul className="social-link">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <Facebook />
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <Instagram />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright &copy; <a href="#">Heliopolis Hub</a> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
