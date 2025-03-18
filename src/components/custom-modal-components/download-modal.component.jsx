import React from 'react';
import styles from '../../modules/custom-modal.module.css';
import useDownloadData from '../hooks/useDownloadData';

function DownloadModal({
  isOpen,
  onClose,
  title,
  apiUrl,
  primaryButtonText = 'Descargar',
  secondaryButtonText = 'Cancelar',
  children,
}) {
  const { data, loading, error, downloadData } = useDownloadData(apiUrl);

  const handlePrimaryButtonClick = () => {
    downloadData();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
        {loading && <p>Descargando...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <p>Descarga completada.</p>}
        <div>
          {secondaryButtonText && (
            <button
              className={`${styles.button} ${styles.secondary}`}
              onClick={onClose}
            >
              {secondaryButtonText}
            </button>
          )}
          {primaryButtonText && (
            <button
              className={`${styles.button} ${styles.primary}`}
              onClick={handlePrimaryButtonClick}
            >
              {primaryButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DownloadModal;