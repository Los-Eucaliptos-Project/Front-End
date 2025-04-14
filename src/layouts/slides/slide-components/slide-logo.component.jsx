import React from 'react';
import FormLogo from '../../../components/form-logo.component';
import { SlideLogoSection, SlideLink } from '../../../styled/slide.styles.js';

function SlideLogo({ isMenuOpen }) {
  return (
    <SlideLogoSection $isMenuOpen={isMenuOpen}>
      <SlideLink href="/">
        <FormLogo width="200px" height="80px" marginLeft="-1px" />
      </SlideLink>
    </SlideLogoSection>
  );
}

export default SlideLogo;