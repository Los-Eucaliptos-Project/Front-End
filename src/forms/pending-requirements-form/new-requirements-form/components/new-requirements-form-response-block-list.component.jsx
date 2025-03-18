import React from 'react';
import NewRequirementsFormResponseBlock from './new-requirements-form-response-block.component'
import styles from '../../../../modules/form-input-field.module.css'
import CustomModalStyleButton from '../../../../components/custom-modal-components/custom-modal-style-buttoncomponent..jsx';


function NewRequirementsFormResponseBlockList({label, bloques, onAgregar, onEliminar }) {
  return (
    <div style={{marginTop: '30px', textAlign: 'left'}}>
      <label className={styles.label}> {label}</label>
      {bloques.map((bloque) => (
        <NewRequirementsFormResponseBlock key={bloque.id} id={bloque.id} onEliminar={onEliminar} />
      ))}
      <CustomModalStyleButton  onClick={onAgregar} primary={true} style={{ marginLeft: '-1100px' }}>Agregar</CustomModalStyleButton>
    </div>
  );
}

export default NewRequirementsFormResponseBlockList;