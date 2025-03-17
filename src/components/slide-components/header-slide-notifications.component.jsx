import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../header-components/header-container.component'
import FormLogo from '../form-logo.component';
import HeaderMenuSection from '../header-components/header-menu-section.component';
import HeaderHamburgerMenu from '../header-components/header-hamburger-menu.component'
import HeaderItem from '../header-components/header-item.component'
import HeaderLink from '../header-components/header-link.component'
import HeaderCloseMenuIcon from '../header-components/header-close-menu-icon.components'
import HeaderContent from '../header-components/header-content.component';
import HeaderLogoSection from '../header-components/header-logo-section.component'
import HeaderFooterContainer from '../header-components/header-footer-container.component';
import HeaderSelectButton from '../header-components/header-select-button.components'
import HeaderSlideBarGreen from '../header-components/header-sidebar-green.component'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faPowerOff, faUser, faBell, faCheck, faScrewdriverWrench, 
    faBarsProgress, faTag, faTags, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function HeaderSlideNotifications() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContainer isMobile={isMobile}>
            <HeaderContent>
                <HeaderLogoSection isMenuOpen={isMenuOpen}>
                    <HeaderLink href="/">
                        <FormLogo width="200px" height="80px" marginLeft="-1px" />
                    </HeaderLink>
                </HeaderLogoSection>

                <HeaderHamburgerMenu onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </HeaderHamburgerMenu>

                {isMenuOpen && <HeaderCloseMenuIcon onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </HeaderCloseMenuIcon>}

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
                        <HeaderLink href="/users">
                            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.7rem' }} />
                            Usuarios
                        </HeaderLink>
                    </HeaderItem>

                    <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen}>
                        <HeaderSelectButton href="/notifications">
                            <FontAwesomeIcon icon={faBell} style={{ marginRight: '0.7rem' }} />
                            Notificaciones
                        </HeaderSelectButton>
                        <HeaderSlideBarGreen marginTop="660px"/>
                    </HeaderItem>

                    <HeaderFooterContainer>
                        <HeaderItem isMobile={isMobile} isMenuOpen={isMenuOpen} className="logout-item">
                            <HeaderLink href="/login">
                                <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: '0.5rem' }} />
                                Salir
                            </HeaderLink>
                        </HeaderItem>
                    </HeaderFooterContainer>
                </HeaderMenuSection>
            </HeaderContent>
        </HeaderContainer>
    );
}

export default HeaderSlideNotifications;
