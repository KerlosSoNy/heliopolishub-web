import Image from "next/image";
import Link from "next/link";

export default function DesktopNavigation() {
    return (
        <nav className="desktop-navigation-menu" aria-label="Main navigation">
            <div className="container">
                <ul className="desktop-menu-category-list">
                    <li className="menu-category">
                        <Link href="/" className="menu-title">
                            Home
                        </Link>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">
                            Categories
                        </a>

                        <div className="dropdown-panel">
                            <ul className="dropdown-panel-list">
                                <li className="menu-title">
                                    <a href="#">Electronics</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Desktop</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Laptop</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Camera</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Tablet</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Headphone</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">
                                        <Image
                                            src="/images/cars/1.JPG"
                                            alt="headphone collection"
                                            width={250}
                                            height={119}
                                        />
                                    </a>
                                </li>
                            </ul>

                            <ul className="dropdown-panel-list">
                                <li className="menu-title">
                                    <a href="#">Men&apos;s</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Formal</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Casual</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Sports</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Jacket</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Sunglasses</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">
                                        <Image
                                            src="/images/cars/2.JPG"
                                            alt="men's fashion"
                                            width={250}
                                            height={119}
                                        />
                                    </a>
                                </li>
                            </ul>

                            <ul className="dropdown-panel-list">
                                <li className="menu-title">
                                    <a href="#">Women&apos;s</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Formal</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Casual</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Perfume</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Cosmetics</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Bags</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">
                                        <Image
                                            src="/images/cars/3.JPG"
                                            alt="women's fashion"
                                            width={250}
                                            height={119}
                                        />
                                    </a>
                                </li>
                            </ul>

                            <ul className="dropdown-panel-list">
                                <li className="menu-title">
                                    <a href="#">Electronics</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Smart Watch</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Smart TV</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Keyboard</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Mouse</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">Microphone</a>
                                </li>
                                <li className="panel-list-item">
                                    <a href="#">
                                        <Image
                                            src="/images/cars/4.JPG"
                                            alt="mouse collection"
                                            width={250}
                                            height={119}
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">
                            Men&apos;s
                        </a>

                        <ul className="dropdown-list">
                            <li className="dropdown-item">
                                <a href="#">Shirt</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Shorts &amp; Jeans</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Safety Shoes</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Wallet</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">
                            Women&apos;s
                        </a>

                        <ul className="dropdown-list">
                            <li className="dropdown-item">
                                <a href="#">Dress &amp; Frock</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Earrings</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Necklace</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Makeup Kit</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">
                            Jewelry
                        </a>

                        <ul className="dropdown-list">
                            <li className="dropdown-item">
                                <a href="#">Earrings</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Couple Rings</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Necklace</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Bracelets</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">
                            Perfume
                        </a>

                        <ul className="dropdown-list">
                            <li className="dropdown-item">
                                <a href="#">Clothes Perfume</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Deodorant</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Flower Fragrance</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="#">Air Freshener</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">
                            Blog
                        </a>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">
                            Hot Offers
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}