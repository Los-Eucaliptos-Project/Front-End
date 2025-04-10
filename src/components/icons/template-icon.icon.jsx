import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TemplateIcon({ icon, ...props }) {
  return <FontAwesomeIcon icon={icon} {...props} />;
}

export default TemplateIcon;