'use client';

import { useEffect } from 'react';
import { HomeIcon, MenuIcon, MinusIcon, PlusIcon } from 'lucide-react';
import Facebook from './footer/icons/Facebook';
import Instagram from './footer/icons/Instagram';

export default function Header() {
  useEffect(() => {
    initializeHeader();
  }, []);

  const initializeHeader = () => {
    // Mobile Menu
    const mobileMenuOpenBtns = document.querySelectorAll<HTMLButtonElement>('[data-mobile-menu-open-btn]');
    const mobileMenus = document.querySelectorAll<HTMLElement>('[data-mobile-menu]');
    const mobileMenuCloseBtns = document.querySelectorAll<HTMLButtonElement>('[data-mobile-menu-close-btn]');
    const overlay = document.querySelector<HTMLElement>('[data-overlay]');

    mobileMenuOpenBtns.forEach((btn: HTMLButtonElement, i: number): void => {
      btn.addEventListener('click', (): void => {
        mobileMenus[i]?.classList.add('active');
        overlay?.classList.add('active');
      });
    });

    mobileMenuCloseBtns.forEach((btn: HTMLButtonElement, i: number): void => {
      const closeMenu = (): void => {
        mobileMenus[i]?.classList.remove('active');
        overlay?.classList.remove('active');
      };

      btn.addEventListener('click', closeMenu);
    });

    overlay?.addEventListener('click', (): void => {
      mobileMenus.forEach((menu: HTMLElement): void => {
        menu.classList.remove('active');
      });
      overlay.classList.remove('active');
    });

    // Accordion Menu
    const accordionBtns = document.querySelectorAll<HTMLButtonElement>('[data-accordion-btn]');
    const accordions = document.querySelectorAll<HTMLElement>('[data-accordion]');

    accordionBtns.forEach((btn: HTMLButtonElement, i: number): void => {
      btn.addEventListener('click', function (this: HTMLButtonElement): void {
        const isActive = this.nextElementSibling?.classList.contains('active') ?? false;

        // Close all other accordions
        accordions.forEach((accordion: HTMLElement, index: number): void => {
          if (index !== i) {
            accordion.classList.remove('active');
            accordionBtns[index].classList.remove('active');
          }
        });

        // Toggle current accordion
        this.nextElementSibling?.classList.toggle('active');
        this.classList.toggle('active');
      });
    });
  };

  return (
    <header>
      {/* Overlay */}
      <div className="overlay" data-overlay></div>

      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
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
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b> This Week Order Over - 2500EGP
            </p>
          </div>
        </div>
      </div>

      <div className="header-main p-0!">
        <div className="container">
          <a href="#" className="header-logo">
            <img src="/images/withShadow.png" alt="Heliopolis Hub logo" width={120} height={36} />
          </a>

          <div className="header-search-container">
            <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />

            <button className="search-btn">
              {/* <ion-icon name="search-outline"></ion-icon> */}
            </button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn">
              {/* <ion-icon name="person-outline"></ion-icon> */}
            </button>

            <button className="action-btn">
              {/* <ion-icon name="heart-outline"></ion-icon> */}
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              {/* <ion-icon name="bag-handle-outline"></ion-icon> */}
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
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
                      <img src="/assets/images/electronics-banner-1.jpg" alt="headphone collection" width={250} height={119} />
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
                      <img src="/assets/images/mens-banner.jpg" alt="men's fashion" width={250} height={119} />
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
                      <img src="/assets/images/womens-banner.jpg" alt="women's fashion" width={250} height={119} />
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
                      <img src="/assets/images/electronics-banner-2.jpg" alt="mouse collection" width={250} height={119} />
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

      {/* MOBILE NAVIGATION */}
      <div className="mobile-bottom-navigation border-r-0!">
        <button className="action-btn" data-mobile-menu-open-btn>
          <MenuIcon />
        </button>

        <button className="action-btn">
          Cart
          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <HomeIcon />
        </button>

        <button className="action-btn">
          Cart
          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
          {/* <ion-icon name="grid-outline"></ion-icon> */}
        </button>
      </div>

      <nav className="mobile-navigation-menu backdrop-blur-2xl text-white! has-scrollbar" data-mobile-menu>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button className="menu-close-btn" data-mobile-menu-close-btn>
            <svg className="w-2 h-2" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "></polygon> </g> </g> </g></svg>
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className=" menu-category">
            <a href="#" className="menu-title text-white!">
              Home
            </a>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title text-white!">Men&apos;s</p>
              <div>
                <PlusIcon name="add-outline" className="add-icon" />
                <MinusIcon name="remove-outline" className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shirt
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shorts &amp; Jeans
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Safety Shoes
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Wallet
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Women&apos;s</p>
              <div>
                <PlusIcon name="add-outline" className="add-icon" />
                <MinusIcon name="remove-outline" className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Dress &amp; Frock
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Makeup Kit
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Jewelry</p>
              <div>
                <PlusIcon name="add-outline" className="add-icon" />
                <MinusIcon name="remove-outline" className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Couple Rings
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Bracelets
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Perfume</p>
              <div>
                <PlusIcon name="add-outline" className="add-icon" />
                <MinusIcon name="remove-outline" className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Clothes Perfume
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Deodorant
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Flower Fragrance
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Air Freshener
                </a>
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
    </header>
  );
}