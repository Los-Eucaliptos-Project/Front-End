import React from 'react';
import SlideMenuItem from './slide-menu-item.component.jsx';
import SlideBarGreen from './slide-side-bar-green.component';
import MenuItems from '../../../utils/menu-items';
import { SlideMenuSection } from '../../../styled/slide.styles.js'; // Asegúrate de importar SlideMenuSection
import SlideFooter from './slide-footer.component'; // Asegúrate de importar SlideFooter

function SlideMenu({ isMobile, isMenuOpen, handleRefresh, selectedPath }) {
  return (
    <SlideMenuSection $isMobile={isMobile} $isMenuOpen={isMenuOpen}>
      {MenuItems.map((item) => {
        const isItemSelected = selectedPath === item.href;
        return (
          <React.Fragment key={item.href}>
            <SlideMenuItem
              icon={item.icon}
              text={item.text}
              href={item.href}
              onClick={item.onClick}
              isSelectButton={isItemSelected}
              isMobile={isMobile}
              isMenuOpen={isMenuOpen}
              showGreenBar={isItemSelected && item.showGreenBar}
              greenBarMarginTop={item.greenBarMarginTop}
            />
            {isItemSelected && item.showGreenBar && <SlideBarGreen marginTop={item.greenBarMarginTop} />}
          </React.Fragment>
        );
      })}
      <SlideFooter isMobile={isMobile} isMenuOpen={isMenuOpen} />
    </SlideMenuSection>
  );
}

export default SlideMenu;