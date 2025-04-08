import React, { useState, useEffect } from 'react';
import FormLogo from '../../components/form-logo.component';
import SlideBarGreen from './slide-components/slide-side-bar-green.component.jsx';

import styles from '../../modules/slide.module.css'

import { SlideCloseMenuIcon } from '../../styled/slide.styles.js';
import { SlideItem } from '../../styled/slide.styles.js';
import { SlideMenuSection } from '../../styled/slide.styles.js';
import { SlideHamburgerMenu } from '../../styled/slide.styles.js';
import { SlideLogoSection } from '../../styled/slide.styles.js';
import { SlideLink } from '../../styled/slide.styles.js';
import { SlideContainer } from '../../styled/slide.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge,
  faPowerOff,
  faUser,
  faBell,
  faCheck,
  faScrewdriverWrench,
  faBarsProgress,
  faTag,
  faTags,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import useHeaderSlide from '../../hooks/use-header-slide.hook';
import usePageRefresh from '../../hooks/use-page-refresh.hook.jsx';

function SlideThemes() {
  
  const { isMobile, isMenuOpen, toggleMenu } = useHeaderSlide();
  const handleRefresh = usePageRefresh('/themes');

  return (
    <SlideContainer isMobile={isMobile}>
      <div className={styles.slideContent}>
        <SlideLogoSection isMenuOpen={isMenuOpen}>
          <SlideLink href="/">
            <FormLogo width="200px" height="80px" marginLeft="-1px" />
          </SlideLink>
        </SlideLogoSection>

        <SlideHamburgerMenu onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </SlideHamburgerMenu>

        {isMenuOpen && (
           <SlideCloseMenuIcon onClick={toggleMenu}>
             <FontAwesomeIcon icon={faTimes} />
           </SlideCloseMenuIcon>
         )}
         
        <SlideMenuSection isMobile={isMobile} isMenuOpen={isMenuOpen}>
          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/dashboard">
              <FontAwesomeIcon icon={faThLarge} style={{ marginRight: '0.7rem' }} />
              Dashboard
            </SlideLink>
          </SlideItem>
          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/pending-requirements">
              <FontAwesomeIcon icon={faTag} style={{ marginRight: '0.7rem' }} />
              Req. Pendientes
            </SlideLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/closed-requirements">
              <FontAwesomeIcon icon={faTags} style={{ marginRight: '0.7rem' }} />
              Req. Cerrados
            </SlideLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/pending-requests">
              <FontAwesomeIcon icon={faScrewdriverWrench} style={{ marginRight: '0.7rem' }} />
              Sol. Pendientes
            </SlideLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/closed-requests">
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '0.7rem' }} />
              Sol. Cerrados
            </SlideLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <div className={styles.slideSelectButton} href="/themes" onClick={handleRefresh}>
              <FontAwesomeIcon icon={faBarsProgress} style={{ marginRight: '0.7rem' }} />
              Temas
            </div>
            <SlideBarGreen marginTop="520px" />
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/users">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.7rem' }} />
              Usuarios
            </SlideLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/notifications">
              <FontAwesomeIcon icon={faBell} style={{ marginRight: '0.7rem' }} />
              Notificaciones
            </SlideLink>
          </SlideItem>

          <div className = {styles.slideFooterContainer}>
            <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen} className="logout-item">
              <SlideLink href="/login">
                <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: '0.5rem' }} />
                Salir
              </SlideLink>
            </SlideItem>
          </div>
        </SlideMenuSection>
      </div>
    </SlideContainer>
  );
}

export default SlideThemes;