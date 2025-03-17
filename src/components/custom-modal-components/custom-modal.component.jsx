import React from 'react';
import CustomModalStyleOverlay from './custom-modal-style-over-lay.component';
import CustomModalStyleContent from './custom-modal-style-content.component';
import CustomModalStyleButton from './custom-modal-style-buttoncomponent.';

function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) {
  if (!isOpen) return null;

  return (
    <CustomModalStyleOverlay onClick={onClose}>
      <CustomModalStyleContent onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
        <div>
          {secondaryButtonText && (
            <CustomModalStyleButton onClick={onSecondaryButtonClick}>
              {secondaryButtonText}
            </CustomModalStyleButton>
          )}
          {primaryButtonText && (
            <CustomModalStyleButton primary onClick={onPrimaryButtonClick}>
              {primaryButtonText}
            </CustomModalStyleButton>
          )}
        </div>
      </CustomModalStyleContent>
    </CustomModalStyleOverlay>
  );
}

export default CustomModal;