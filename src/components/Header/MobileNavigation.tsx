import { PlusIcon, MinusIcon } from 'lucide-react';
import Facebook from '../footer/icons/Facebook';
import Instagram from '../footer/icons/Instagram';

interface MobileNavigationProps {
    accordionState: { [key: number]: boolean };
    onAccordionToggle: (index: number) => void;
    onMenuClose: () => void;
    menuState: {
        activeMenuIndex: number | null;
        isOverlayActive: boolean;
    };
}

const MENU_ITEMS = [
    {
        title: 'Men\'s',
        submenu: ['Shirt', 'Shorts & Jeans', 'Safety Shoes', 'Wallet'],
    },
    {
        title: 'Women\'s',
        submenu: ['Dress & Frock', 'Earrings', 'Necklace', 'Makeup Kit'],
    },
    {
        title: 'Jewelry',
        submenu: ['Earrings', 'Couple Rings', 'Necklace', 'Bracelets'],
    },
    {
        title: 'Perfume',
        submenu: ['Clothes Perfume', 'Deodorant', 'Flower Fragrance', 'Air Freshener'],
    },
];

export default function MobileNavigation({
    accordionState,
    onAccordionToggle,
    onMenuClose,
}: MobileNavigationProps) {
    return (
        <nav
            className="mobile-navigation-menu backdrop-blur-2xl text-white! has-scrollbar"
            data-mobile-menu
        >
            <div className="menu-top">
                <h2 className="menu-title">Menu</h2>

                <button
                    className="menu-close-btn"
                    data-mobile-menu-close-btn
                    onClick={onMenuClose}
                    aria-label="Close menu"
                >
                    <svg
                        className="w-2 h-2"
                        fill="#000000"
                        height="200px"
                        width="200px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                    <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "></polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>

            <ul className="mobile-menu-category-list">
                <li className="menu-category">
                    <a href="#" className="menu-title text-white!">
                        Home
                    </a>
                </li>

                {MENU_ITEMS.map((item, index) => (
                    <li key={index} className="menu-category">
                        <button
                            className={`accordion-menu ${accordionState[index] ? 'active' : ''}`}
                            data-accordion-btn
                            onClick={() => onAccordionToggle(index)}
                            aria-expanded={accordionState[index]}
                            aria-label={`Toggle ${item.title} menu`}
                        >
                            <p className="menu-title text-white!">{item.title}</p>
                            <div>
                                {!accordionState[index] ? (
                                    <PlusIcon name="add-outline" className="add-icon" />
                                ) : (
                                    <MinusIcon name="remove-outline" className="remove-icon" />
                                )}
                            </div>
                        </button>

                        <ul
                            className={`submenu-category-list ${accordionState[index] ? 'active' : ''}`}
                            data-accordion
                            hidden={!accordionState[index]}
                        >
                            {item.submenu.map((submenuItem, subIndex) => (
                                <li key={subIndex} className="submenu-category">
                                    <a href="#" className="submenu-title">
                                        {submenuItem}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}

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

            <div className="menu-bottom">
                <ul className="menu-social-container">
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
            </div>
        </nav>
    );
}