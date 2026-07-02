import Facebook from '../footer/icons/Facebook';
import Instagram from '../footer/icons/Instagram';

export default function HeaderTop() {
    return (
        <div className="header-top">
            <div className="container">
                <ul className="header-social-container">
                    <li className="footer-nav-item">
                        <a href="#" className="footer-nav-link" aria-label="Facebook">
                            <Facebook />
                        </a>
                    </li>
                    <li className="footer-nav-item">
                        <a href="#" className="footer-nav-link" aria-label="Instagram">
                            <Instagram />
                        </a>
                    </li>
                </ul>
                <div className="header-alert-news">
                    <p>
                        <b>Free Shipping</b> This Week Order Over - 2500EGP
                    </p>
                </div>
            </div>
        </div>
    );
}