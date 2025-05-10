import React from 'react';
import styles from '../../../../modules/form-input-field.module.css'

function FormTextAreaField({ label, id, value, onChange, placeholder}) {
  return (
    <div className={styles.container}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      <textarea id={id}
       value={value}
       onChange={onChange}
       placeholder={placeholder}
       className={styles.textarea}
       />
    </div>
  );
}

export default FormTextAreaField;