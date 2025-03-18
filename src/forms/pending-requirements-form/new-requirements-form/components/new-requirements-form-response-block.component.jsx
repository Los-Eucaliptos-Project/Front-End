import React from 'react';
import DeleteButton from '../../../../components/buttons/button-delete.btn';
import ClipButton from '../../../../components/buttons/button-clip.btn';
import styles from '../../../../modules/form-input-field.module.css';

function NewRequirementsFormResponseBlock({ id, onEliminar }) {
  return (
    <div className={styles.container} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}> {/* Línea y margen agregados */}
      <div style={{ padding: '10px', margin: '10px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 2fr 1fr', gap: '10px' }}> {/* Borde eliminado */}
        <input 
          type="text" 
          placeholder="Cantidad" 
          className={styles.input} 
        />
        <input 
          type="text" 
          placeholder="Unidad de medida" 
          className={styles.input} 
        />
        <input 
          type="text" 
          placeholder="Descripción" 
          className={styles.input} 
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <icon onClick={() => (id)} aria-label="Eliminar">
            <ClipButton />
          </icon>
          <icon onClick={() => onEliminar(id)} aria-label="Eliminar" style={{ marginLeft: '5px' }}>
            <DeleteButton />
          </icon>
        </div>
        <textarea 
          placeholder="Observaciones"
          className={styles.textarea} 
          style={{ gridColumn: '1 / -1', marginTop: '10px' }}
        />
      </div>
    </div>
  );
}

export default NewRequirementsFormResponseBlock;