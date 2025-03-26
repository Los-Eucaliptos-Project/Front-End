import React from 'react';
import styles from '../../modules/custom-modal.module.css';

function CustomModalWhiteAndRed({
  isOpen,
  onClose,
  title,
  children,
  destroyButtonText,
  secondaryButtonText,
  onDestroyButtonClick,
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
          {destroyButtonText && (
            <button className={`${styles.button} ${styles.destroy}`} onClick={onDestroyButtonClick}>
              {destroyButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomModalWhiteAndRed;