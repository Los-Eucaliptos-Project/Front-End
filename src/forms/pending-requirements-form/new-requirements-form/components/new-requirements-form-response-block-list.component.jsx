import React from 'react';
import NewRequirementsFormResponseBlock from './new-requirements-form-response-block.component';
import styles from '../../../../modules/form-input-field.module.css';
import CustomModalStyleButton from '../../../../components/custom-modal-components/custom-modal-style-buttoncomponent..jsx';

function NewRequirementsFormResponseBlockList({ label, bloques, onAgregar, onEliminar }) {
  return (
    <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label className={styles.label}> {label}</label>
      {bloques.map((bloque) => (
        <NewRequirementsFormResponseBlock key={bloque.id} id={bloque.id} onEliminar={onEliminar} />
      ))}
      <div style={{alignSelf: 'flex-start', marginTop: '10px'}}>
        <CustomModalStyleButton onClick={onAgregar} primary={true}>Agregar</CustomModalStyleButton>
      </div>
    </div>
  );
}

export default NewRequirementsFormResponseBlockList;