'use strict';

const modal = document.querySelector<HTMLElement>('[data-modal]');
const modalCloseBtn = document.querySelector<HTMLButtonElement>('[data-modal-close]');
const modalCloseOverlay = document.querySelector<HTMLElement>('[data-modal-overlay]');

// Modal function
const modalCloseFunc = (): void => {
  modal?.classList.add('closed');
};

// Modal event listeners
modalCloseOverlay?.addEventListener('click', modalCloseFunc);
modalCloseBtn?.addEventListener('click', modalCloseFunc);

// ============ NOTIFICATION TOAST ============
const notificationToast = document.querySelector<HTMLElement>('[data-toast]');
const toastCloseBtn = document.querySelector<HTMLButtonElement>('[data-toast-close]');

// Notification toast event listener
toastCloseBtn?.addEventListener('click', (): void => {
  notificationToast?.classList.add('closed');
});

// ============ MOBILE MENU ============
const mobileMenuOpenBtn = document.querySelectorAll<HTMLButtonElement>('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll<HTMLElement>('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll<HTMLButtonElement>('[data-mobile-menu-close-btn]');
const overlay = document.querySelector<HTMLElement>('[data-overlay]');

mobileMenuOpenBtn.forEach((btn: HTMLButtonElement, i: number): void => {
  
  // Mobile menu function
  const mobileMenuCloseFunc = (): void => {
    mobileMenu[i].classList.remove('active');
    overlay?.classList.remove('active');
  };

  btn.addEventListener('click', (): void => {
    mobileMenu[i].classList.add('active');
    overlay?.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay?.addEventListener('click', mobileMenuCloseFunc);
});

// ============ ACCORDION ============
const accordionBtn = document.querySelectorAll<HTMLButtonElement>('[data-accordion-btn]');
const accordion = document.querySelectorAll<HTMLElement>('[data-accordion]');

accordionBtn.forEach((btn: HTMLButtonElement, i: number): void => {

  btn.addEventListener('click', function (this: HTMLButtonElement): void {

    const clickedBtn = this.nextElementSibling?.classList.contains('active') ?? false;

    for (let j = 0; j < accordion.length; j++) {
      
      if (clickedBtn) break;

      if (accordion[j].classList.contains('active')) {
        accordion[j].classList.remove('active');
        accordionBtn[j].classList.remove('active');
      }
    }

    this.nextElementSibling?.classList.toggle('active');
    this.classList.toggle('active');
  });
});