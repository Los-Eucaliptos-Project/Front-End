import React from 'react';
import NewRequirementsFormResponseBlock from './new-requirements-form-response-block.component';
import styles from '../../../../modules/form-input-field.module.css';
import stylesCustom from '../../../../modules/custom-modal.module.css';

function NewRequirementsFormResponseBlockList({ label, bloques, onAgregar, onEliminar }) {
  return (
    <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label className={styles.label}> {label}</label>
      {bloques.map((bloque) => (
        <NewRequirementsFormResponseBlock key={bloque.id} id={bloque.id} onEliminar={onEliminar} />
      ))}
      <div style={{alignSelf: 'flex-start', marginTop: '10px'}}>
        <button  className={`${stylesCustom.button} ${stylesCustom.primary}`} onClick={onAgregar}>Agregar</button>
      </div>
    </div>
  );
}

export default NewRequirementsFormResponseBlockList;