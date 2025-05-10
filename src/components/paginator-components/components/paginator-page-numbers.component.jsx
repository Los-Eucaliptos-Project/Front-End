import React from 'react';
import styles from '../../../modules/paginator.module.css';


function PageNumbers({ children, ...rest }) {
  return (
    <div className={styles.PageNumbers} {...rest}>
      {children}
      </div>
  );
}

export default PageNumbers;