import React from 'react';
import TemplateIcon from '../../../components/icons/template-icon.icon.jsx';
import Icons from '../../../utils/icons-library.js';
import { SlideHamburgerMenu } from '../../../styled/slide.styles.js';

function SlideHamburger({ toggleMenu }) {
  return (
    <SlideHamburgerMenu onClick={toggleMenu}>
      <TemplateIcon icon={Icons.faBars} />
    </SlideHamburgerMenu>
  );
}

export default SlideHamburger;