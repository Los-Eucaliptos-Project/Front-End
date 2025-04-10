import React, { useState, useEffect } from 'react';
import FormLogo from '../../components/form-logo.component';
import SlideBarGreen from './slide-components/slide-side-bar-green.component.jsx';

import TemplateIcon from '../../components/icons/template-icon.icon.jsx';
import icons from '../../utils/icons-library.js';

import styles from '../../modules/slide.module.css'

import { SlideCloseMenuIcon } from '../../styled/slide.styles.js';
import { SlideItem } from '../../styled/slide.styles.js';
import { SlideMenuSection } from '../../styled/slide.styles.js';
import { SlideHamburgerMenu } from '../../styled/slide.styles.js';
import { SlideLogoSection } from '../../styled/slide.styles.js';
import { SlideLink } from '../../styled/slide.styles.js';
import { SlideContainer } from '../../styled/slide.styles.js';

import useHeaderSlide from '../../hooks/use-header-slide.hook';
import usePageRefresh from '../../hooks/use-page-refresh.hook.jsx';

function SlideCloseRequests() {

  const { isMobile, isMenuOpen, toggleMenu } = useHeaderSlide();
  const handleRefresh = usePageRefresh('/closed-requests');

  return (
    <SlideContainer isMobile={isMobile}>
      <div className={styles.slideContent}>
        <SlideLogoSection isMenuOpen={isMenuOpen}>
          <SlideLink href="/">
            <FormLogo width="200px" height="80px" marginLeft="-1px" />
          </SlideLink>
        </SlideLogoSection>

        <SlideHamburgerMenu onClick={toggleMenu}>
          <TemplateIcon icon={icons.faBars} />
        </SlideHamburgerMenu>

          {isMenuOpen && (
             <SlideCloseMenuIcon onClick={toggleMenu}>
              <TemplateIcon icon={icons.faTimes} />
             </SlideCloseMenuIcon>
           )}

        <SlideMenuSection isMobile={isMobile} isMenuOpen={isMenuOpen}>
          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/dashboard">
              <TemplateIcon icon={icons.faThLarge} style={{ marginRight: '0.7rem' }} />
              Dashboard
            </SlideLink>
          </SlideItem>
          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/pending-requirements">
              <TemplateIcon icon={icons.faTag} style={{ marginRight: '0.7rem' }} />
              Req. Pendientes
            </SlideLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/closed-requirements">
              <TemplateIcon icon={icons.faTags}  style={{ marginRight: '0.7rem' }} />
              Req. Cerrados
            </SlideLink>
            <SlideBarGreen marginTop="315px" />
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/pending-requests">
              <TemplateIcon icon={icons.faScrewdriverWrench} style={{ marginRight: '0.7rem' }} />
              Sol. Pendientes
            </SlideLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <div className={styles.slideSelectButton} href="/closed-requests" onClick={handleRefresh}>
              <TemplateIcon icon={icons.faCheck} style={{ marginRight: '0.7rem' }} />
              Sol. Cerrados
            </div>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/themes">
              <TemplateIcon icon={icons.faBarsProgress} style={{ marginRight: '0.7rem' }} />
              Temas
            </SlideLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/users">
              <TemplateIcon icon={icons.faUser} style={{ marginRight: '0.7rem' }} />
              Usuarios
            </SlideLink>
          </SlideItem>

          <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
            <SlideLink href="/notifications">
              <TemplateIcon icon={icons.faBell} style={{ marginRight: '0.7rem' }} />
              Notificaciones
            </SlideLink>
          </SlideItem>

          <div className = {styles.slideFooterContainer}>
              <SlideItem isMobile={isMobile} isMenuOpen={isMenuOpen} className="logout-item">
              <SlideLink href="/login">
                <TemplateIcon icon={icons.faPowerOff} style={{ marginRight: '0.5rem' }} />
                Salir
              </SlideLink>
            </SlideItem>
          </div>
        </SlideMenuSection>
      </div>
    </SlideContainer>
  );
}

export default SlideCloseRequests;