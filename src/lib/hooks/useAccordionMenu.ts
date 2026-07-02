import { useEffect, useRef, useState } from 'react';

interface AccordionState {
  [key: number]: boolean;
}

export const useAccordionMenu = () => {
  const [accordionState, setAccordionState] = useState<AccordionState>({});
  
  const accordionRefs = useRef<HTMLButtonElement[]>([]);
  const submenuRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Store references to DOM elements
    const buttons = document.querySelectorAll<HTMLButtonElement>('[data-accordion-btn]');
    const menus = document.querySelectorAll<HTMLElement>('[data-accordion]');

    accordionRefs.current = Array.from(buttons);
    submenuRefs.current = Array.from(menus);

    // Initialize state
    const initialState: AccordionState = {};
    buttons.forEach((_, index) => {
      initialState[index] = false;
    });
    
    setAccordionState(initialState);
  }, []);

  const toggleAccordion = (index: number) => {
    setAccordionState((prev) => {
      const newState: AccordionState = {};
      
      Object.keys(prev).forEach((key) => {
        const keyNum = parseInt(key);
        newState[keyNum] = keyNum === index ? !prev[index] : false;
      });

      return newState;
    });
  };

  const closeAccordion = (index: number) => {
    setAccordionState((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  // Apply active class to DOM elements based on state
  useEffect(() => {
    accordionRefs.current.forEach((btn, index) => {
      if (accordionState[index]) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    submenuRefs.current.forEach((menu, index) => {
      if (accordionState[index]) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    });
  }, [accordionState]);

  return {
    accordionState,
    toggleAccordion,
    closeAccordion,
  };
};