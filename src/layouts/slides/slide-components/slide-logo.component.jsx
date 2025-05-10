import React from 'react';
import LogoImage from '../../../components/logo-image.component.jsx';
import { SlideLogoSection, SlideLink } from '../../../styled/slide.styles.js';

function SlideLogo({ isMenuOpen }) {
  return (
    <SlideLogoSection $isMenuOpen={isMenuOpen}>
      <SlideLink href="/">
        <LogoImage width="200px" height="80px" marginLeft="-1px" />
      </SlideLink>
    </SlideLogoSection>
  );
}

export default SlideLogo;