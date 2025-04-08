import React, { useState, useEffect } from 'react';
import HeaderContainer from '../../components/header-components/header-container.component';
import FormLogo from '../../components/form-logo.component';
import HeaderMenuSection from '../../components/header-components/header-menu-section.component';
import HeaderHamburgerMenu from '../../components/header-components/header-hamburger-menu.component';
import HeaderLink from '../../components/header-components/header-link.component';
import HeaderLogoSection from '../../components/header-components/header-logo-section.component';
import SlideBarGreen from './slide-components/slide-side-bar-green.component.jsx';


import styles from '../../modules/slide.module.css'
import { SlideCloseMenuIcon } from '../../styled/slide.styles.js';
import { SlideItem } from '../../styled/slide.styles.js';


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

function SlideCloseRequests() {

  const { isMobile, isMenuOpen, toggleMenu } = useHeaderSlide();
  const handleRefresh = usePageRefresh('/closed-requests');

  return (
    <HeaderContainer isMobile={isMobile}>
      <div className={styles.slideContent}>
        <HeaderLogoSection isMenuOpen={isMenuOpen}>
          <HeaderLink href="/">
            <FormLogo width="200px" height="80px" marginLeft="-1px" />
          </HeaderLink>
        </HeaderLogoSection>

        <HeaderHamburgerMenu onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </HeaderHamburgerMenu>

          {isMenuOpen && (
             <SlideCloseMenuIcon onClick={toggleMenu}>
               <FontAwesomeIcon icon={faTimes} />
             </SlideCloseMenuIcon>
           )}

        <HeaderMenuSection isMobile={isMobile} isMenuOpen={isMenuOpen}>
          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/dashboard">
              <FontAwesomeIcon icon={faThLarge} style={{ marginRight: '0.7rem' }} />
              Dashboard
            </HeaderLink>
          </SlideItem>
          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/pending-requirements">
              <FontAwesomeIcon icon={faTag} style={{ marginRight: '0.7rem' }} />
              Req. Pendientes
            </HeaderLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/closed-requirements">
              <FontAwesomeIcon icon={faTags} style={{ marginRight: '0.7rem' }} />
              Req. Cerrados
            </HeaderLink>
            <SlideBarGreen marginTop="315px" />
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/pending-requests">
              <FontAwesomeIcon icon={faScrewdriverWrench} style={{ marginRight: '0.7rem' }} />
              Sol. Pendientes
            </HeaderLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <div className={styles.slideSelectButton} href="/closed-requests" onClick={handleRefresh}>
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '0.7rem' }} />
              Sol. Cerrados
            </div>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/themes">
              <FontAwesomeIcon icon={faBarsProgress} style={{ marginRight: '0.7rem' }} />
              Temas
            </HeaderLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/users">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.7rem' }} />
              Usuarios
            </HeaderLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/notifications">
              <FontAwesomeIcon icon={faBell} style={{ marginRight: '0.7rem' }} />
              Notificaciones
            </HeaderLink>
          </SlideItem>

          <div className = {styles.slideFooterContainer}>
              <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen} className="logout-item">
              <HeaderLink href="/login">
                <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: '0.5rem' }} />
                Salir
              </HeaderLink>
            </SlideItem>
          </div>
        </HeaderMenuSection>
      </div>
    </HeaderContainer>
  );
}

export default SlideCloseRequests;