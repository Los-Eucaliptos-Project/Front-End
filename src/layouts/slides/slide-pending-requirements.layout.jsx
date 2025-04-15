import React from 'react';
import TemplateIcon from '../../components/icons/template-icon.icon.jsx';
import icons from '../../utils/icons-library.js';
import styles from '../../modules/slide.module.css';
import { SlideCloseMenuIcon, SlideContainer } from '../../styled/slide.styles.js';
import useHeaderSlide from '../../hooks/use-header-slide.hook';
import usePageRefresh from '../../hooks/use-page-refresh.hook.jsx';
import SlideMenu from './slide-components/slide-menu.component.jsx';
import SlideFooter from './slide-components/slide-footer.component';
import MenuItems from '../../utils/menu-items.js';
import SlideHamburger from './slide-components/slide-hamburger.component.jsx';
import SlideLogo from './slide-components/slide-logo.component.jsx';
import SlideBarGreen from './slide-components/slide-side-bar-green.component.jsx';

function SlideDashboard() {
  const { isMobile, isMenuOpen, toggleMenu } = useHeaderSlide();
  const handleRefresh = usePageRefresh('/pending-requirements');

  const updatedMenuItems = MenuItems.map(item => {
    if (item.href === '/pending-requirements') {
      return { ...item, onClick: () => handleRefresh('/pending-requirements'), showGreenBar: true, greenBarMarginTop: '180px' };
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

        <SlideMenu isMobile={isMobile} isMenuOpen={isMenuOpen} handleRefresh={handleRefresh} menuItems={updatedMenuItems} selectedPath="/pending-requirements" />
        <SlideBarGreen marginTop="240px" />
      </div>
    </SlideContainer>
  );
}

export default SlideDashboard;