'use client';

import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import DesktopNavigation from './DesktopNavigation';
import MobileBottomNavigation from './MobileBottomNavigation';
import MobileNavigation from './MobileNavigation';
import { useHeaderMenu } from '@/lib/hooks/useHeaderMenu';
import { useAccordionMenu } from '@/lib/hooks/useAccordionMenu';

export default function Header() {
    const { menuState, openMenu, closeAllMenus } = useHeaderMenu();
    const { accordionState, toggleAccordion } = useAccordionMenu();

    return (
        <header>
            {/* Overlay */}
            <div
                className={`overlay ${menuState.isOverlayActive ? 'active' : ''}`}
                data-overlay
                onClick={closeAllMenus}
            ></div>

            <HeaderTop />
            <HeaderMain />
            <DesktopNavigation />
            <MobileBottomNavigation
                onMenuOpen={() => openMenu(0)}
                menuState={menuState}
            />
            <MobileNavigation
                accordionState={accordionState}
                onAccordionToggle={toggleAccordion}
                onMenuClose={closeAllMenus}
                menuState={menuState}
            />
        </header>
    );
}