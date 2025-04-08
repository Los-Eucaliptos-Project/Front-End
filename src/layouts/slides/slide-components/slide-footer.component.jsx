import React from 'react';
import HeaderLink from '../header-components/header-link.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { SlideItem } from '../../styled/slide.styles.js';

const SlideFooter = () => (
  <div className={styles.HeaderFooterContainer}>
    <SlideItem className="logout-item">
      <HeaderLink href="/login">
        <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: '0.5rem' }} />
        Salir
      </HeaderLink>
    </SlideItem>
  </div>
);

export default SlideFooter;




