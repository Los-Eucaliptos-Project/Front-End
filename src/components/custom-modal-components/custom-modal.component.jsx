import React from 'react';
import styles from '../../modules/custom-modal.module.css';

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
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
        <div>
          {secondaryButtonText && (
            <button className={`${styles.button} ${styles.secondary}`} onClick={onSecondaryButtonClick}>
              {secondaryButtonText}
            </button>
          )}
          {primaryButtonText && (
            <button className={`${styles.button} ${styles.primary}`} onClick={onPrimaryButtonClick}>
              {primaryButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomModal;