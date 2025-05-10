import React from 'react';
import TemplateIcon from '../../components/icons/template-icon.icon.jsx';
import icons from '../../utils/icons-library.js';
import styles from '../../modules/slide.module.css';
import { SlideCloseMenuIcon, SlideContainer } from '../../styled/slide.styles.js';
import useHeaderSlide from '../../hooks/use-header-slide.hook';
import usePageRefresh from '../../hooks/use-page-refresh.hook.jsx';
import SlideMenu from './slide-components/slide-menu.component.jsx';
import MenuItems from '../../utils/menu-items.js';
import SlideHamburger from './slide-components/slide-hamburger.component.jsx';
import SlideLogo from './slide-components/slide-logo.component.jsx';
import SlideBarGreen from './slide-components/slide-side-bar-green.component.jsx';

function SlidePendingRequests() {
  const { isMobile, isMenuOpen, toggleMenu } = useHeaderSlide();
  const handleRefresh = usePageRefresh('/pending-requests');

  const updatedMenuItems = MenuItems.map(item => {
    if (item.href === '/pending-requests') {
      return { ...item, onClick: () => handleRefresh('/pending-requests'), showGreenBar: true, greenBarMarginTop: '180px' };
    }
    return item;
  });

  return (
    <SlideContainer $isMobile={isMobile}>
      <div className={styles.slideContent}>
        <SlideLogo isMenuOpen={isMenuOpen} />
        <SlideHamburger toggleMenu={toggleMenu} />

        {isMenuOpen && (
          <SlideCloseMenuIcon onClick={toggleMenu}>
            <TemplateIcon icon={icons.faTimes} />
          </SlideCloseMenuIcon>
        )}

        <SlideMenu isMobile={isMobile} isMenuOpen={isMenuOpen} handleRefresh={handleRefresh} menuItems={updatedMenuItems} selectedPath="/pending-requests" />
        <SlideBarGreen marginTop="380px" />
      </div>
    </SlideContainer>
  );
}

export default SlidePendingRequests;