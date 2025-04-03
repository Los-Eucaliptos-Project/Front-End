import React, { useState, useEffect } from 'react';
import HeaderContainer from '../../components/header-components/header-container.component';
import FormLogo from '../../components/form-logo.component';
import HeaderMenuSection from '../../components/header-components/header-menu-section.component';
import HeaderHamburgerMenu from '../../components/header-components/header-hamburger-menu.component';
import HeaderItem from '../../components/header-components/header-item.component';
import HeaderLink from '../../components/header-components/header-link.component';
import HeaderLogoSection from '../../components/header-components/header-logo-section.component';
import SlideBarGreen from './slide-components/slide-side-bar-green.component.jsx';

import styles from '../../modules/slide.module.css'
import { SlideCloseMenuIcon } from '../../styled/slide.styles.js';

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

function SlideUser() {

  const { isMobile, isMenuOpen, toggleMenu } = useHeaderSlide();
  const handleRefresh = usePageRefresh('/users');

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
          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/dashboard">
              <FontAwesomeIcon icon={faThLarge} style={{ marginRight: '0.7rem' }} />
              Dashboard
            </HeaderLink>
          </HeaderItem>
          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/pending-requirements">
              <FontAwesomeIcon icon={faTag} style={{ marginRight: '0.7rem' }} />
              Req. Pendientes
            </HeaderLink>
          </HeaderItem>

          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/closed-requirements">
              <FontAwesomeIcon icon={faTags} style={{ marginRight: '0.7rem' }} />
              Req. Cerrados
            </HeaderLink>
          </HeaderItem>

          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/pending-requests">
              <FontAwesomeIcon icon={faScrewdriverWrench} style={{ marginRight: '0.7rem' }} />
              Sol. Pendientes
            </HeaderLink>
          </HeaderItem>

          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/closed-requests">
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '0.7rem' }} />
              Sol. Cerrados
            </HeaderLink>
          </HeaderItem>

          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/themes">
              <FontAwesomeIcon icon={faBarsProgress} style={{ marginRight: '0.7rem' }} />
              Temas
            </HeaderLink>
          </HeaderItem>

          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <div className={styles.slideSelectButton} href="/users" onClick={handleRefresh}>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.7rem' }} />
              Usuarios
            </div>
            <SlideBarGreen marginTop="590px" />
          </HeaderItem>

          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/notifications">
              <FontAwesomeIcon icon={faBell} style={{ marginRight: '0.7rem' }} />
              Notificaciones
            </HeaderLink>
          </HeaderItem>

          <div className = {styles.slideFooterContainer}>
            <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen} className="logout-item">
              <HeaderLink href="/login">
                <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: '0.5rem' }} />
                Salir
              </HeaderLink>
            </HeaderItem>
          </div>
        </HeaderMenuSection>
      </div>
    </HeaderContainer>
  );
}

export default SlideUser;