import React from 'react';
import styles from '../../modules/paginator.module.css';

function Pagination({ children }) {
  return (
    <div className={styles.paginationContainer}>
      {children}
    </div>
  );
}

export default Pagination;