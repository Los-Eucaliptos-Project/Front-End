import React from 'react';
import { SlideLink } from '../../../styled/slide.styles.js';
import { SlideItem } from '../../../styled/slide.styles.js';

import TemplateIcon from '../../../components/icons/template-icon.icon.jsx';
import icons from '../../../utils/icons-library.js';

import styles from '../../../modules/slide.module.css'


const SlideFooter = ({ isMobile, isMenuOpen }) => (
  <div className={styles.slideFooterContainer}>
    <SlideItem $isMobile={isMobile} $isMenuOpen={isMenuOpen} className="logout-item">
      <SlideLink href="/login">
        <TemplateIcon icon={icons.faPowerOff} style={{ marginRight: '0.5rem' }} />
        Salir
      </SlideLink>
    </SlideItem>
  </div>
);

export default SlideFooter;