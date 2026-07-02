import { useEffect, useRef, useState } from 'react';

interface MenuState {
  activeMenuIndex: number | null;
  isOverlayActive: boolean;
}

export const useHeaderMenu = () => {
  const [menuState, setMenuState] = useState<MenuState>({
    activeMenuIndex: null,
    isOverlayActive: false,
  });

  const menuRefs = useRef<HTMLElement[]>([]);
  const overlayRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Store references to DOM elements
    const mobileMenus = document.querySelectorAll<HTMLElement>('[data-mobile-menu]');
    const overlay = document.querySelector<HTMLElement>('[data-overlay]');

    menuRefs.current = Array.from(mobileMenus);
    overlayRef.current = overlay;
  }, []);

  const openMenu = (index: number) => {
    setMenuState({
      activeMenuIndex: index,
      isOverlayActive: true,
    });
  };

  const closeMenu = (index?: number) => {
    setMenuState({
      activeMenuIndex: null,
      isOverlayActive: false,
    });
  };

  const closeAllMenus = () => {
    setMenuState({
      activeMenuIndex: null,
      isOverlayActive: false,
    });
  };

  // Apply active class to DOM elements based on state
  useEffect(() => {
    menuRefs.current.forEach((menu, index) => {
      if (menuState.activeMenuIndex === index) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    });

    if (overlayRef.current) {
      if (menuState.isOverlayActive) {
        overlayRef.current.classList.add('active');
      } else {
        overlayRef.current.classList.remove('active');
      }
    }
  }, [menuState]);

  return {
    menuState,
    openMenu,
    closeMenu,
    closeAllMenus,
  };
};