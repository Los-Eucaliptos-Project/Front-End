import React, { useState, useEffect } from 'react';
import HeaderContainer from '../../components/header-components/header-container.component';
import FormLogo from '../../components/form-logo.component';
import HeaderMenuSection from '../../components/header-components/header-menu-section.component';
import HeaderHamburgerMenu from '../../components/header-components/header-hamburger-menu.component';
import HeaderItem from '../../components/header-components/header-item.component';
import HeaderLink from '../../components/header-components/header-link.component';
import HeaderCloseMenuIcon from '../../components/header-components/header-close-menu-icon.components';
import HeaderLogoSection from '../../components/header-components/header-logo-section.component';
import HeaderSlideBarGreen from '../../components/header-components/header-sidebar-green.component';

import styles from '../../modules/slide.module.css'

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
import usePageRefresh from '../../hooks/use-page-refresh.hook,jsx';

function SlideDashboard() {

  const { isMobile, isMenuOpen, toggleMenu } = useHeaderSlide();
  const handleRefresh = usePageRefresh('/dashboard');


  return (
    <HeaderContainer isMobile={isMobile}>
      <div className={styles.headerContent}>
        <HeaderLogoSection isMenuOpen={isMenuOpen}>
          <HeaderLink href="/">
            <FormLogo width="200px" height="80px" marginLeft="-1px" />
          </HeaderLink>
        </HeaderLogoSection>

        <HeaderHamburgerMenu onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </HeaderHamburgerMenu>

        {isMenuOpen && (
          <HeaderCloseMenuIcon onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </HeaderCloseMenuIcon>
        )}

        <HeaderMenuSection isMobile={isMobile} isMenuOpen={isMenuOpen}>
          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <div className={styles.headerSelectButton}  href="/dashboard" onClick={handleRefresh}>
              <FontAwesomeIcon icon={faThLarge} style={{ marginRight: '0.7rem' }} />
              Dashboard
            </div>
            <HeaderSlideBarGreen marginTop="180px" />
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
            <HeaderLink href="/users">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.7rem' }} />
              Usuarios
            </HeaderLink>
          </HeaderItem>

          <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <HeaderLink href="/notifications">
              <FontAwesomeIcon icon={faBell} style={{ marginRight: '0.7rem' }} />
              Notificaciones
            </HeaderLink>
          </HeaderItem>

          <div className = {styles.HeaderFooterContainer}>
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

export default SlideDashboard;