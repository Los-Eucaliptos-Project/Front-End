import React from 'react';
import HeaderItem from '../header-components/header-item.component';
import HeaderLink from '../header-components/header-link.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const SlideFooter = () => (
  <div className={styles.HeaderFooterContainer}>
    <HeaderItem className="logout-item">
      <HeaderLink href="/login">
        <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: '0.5rem' }} />
        Salir
      </HeaderLink>
    </HeaderItem>
  </div>
);

export default SlideFooter;


//falta arreglar

