import React from 'react';
import styles from '../../../../modules/form-input-field.module.css';

function FormDateField({ label, id, value, onChange, placeholder, inputWidth }) {
  
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        style={{ width: inputWidth }}
      />
    </div>
  );
}

export default FormDateField;