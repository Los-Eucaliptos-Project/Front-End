import React from 'react';
import { SlideItem, SlideLink } from '../../../styled/slide.styles.js';
import TemplateIcon from '../../../components/icons/template-icon.icon.jsx';
import styles from '../../../modules/slide.module.css';
import SlideBarGreen from './slide-side-bar-green.component.jsx';

function SlideMenuItem({ icon, text, href, onClick, isSelectButton, isMobile, isMenuOpen, showGreenBar, greenBarMarginTop }) {
  if (isSelectButton) {
    return (
      <SlideItem $isMobile={isMobile} $isMenuOpen={isMenuOpen}>
        <div className={styles.slideSelectButton} href={href} onClick={onClick}>
          <TemplateIcon icon={icon} style={{ marginRight: '0.7rem' }} />
          {text}
          {showGreenBar && <SlideBarGreen marginTop={greenBarMarginTop} />}
        </div>
      </SlideItem>
    );
  }

  return (
    <SlideItem $isMobile={isMobile} $isMenuOpen={isMenuOpen}>
      <SlideLink href={href}>
        <TemplateIcon icon={icon} style={{ marginRight: '0.7rem' }} />
        {text}
      </SlideLink>
      {showGreenBar && <SlideBarGreen marginTop={greenBarMarginTop} />}
    </SlideItem>
  );
}

export default SlideMenuItem;