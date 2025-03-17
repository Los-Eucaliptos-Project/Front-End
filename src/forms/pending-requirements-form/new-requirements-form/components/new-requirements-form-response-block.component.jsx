import React from 'react';
import DeleteButton from '../../../../components/buttons/button-delete.btn';
import ClipButton from '../../../../components/buttons/button-clip.btn';


function NewRequirementsFormResponseBlock({ id, onEliminar }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <input type="text" placeholder="Cantidad" />
      <input type="text" placeholder="Unidad de medida" />
      <input type="text" placeholder="Descripción" />
      <textarea placeholder="Observaciones"></textarea>
      <icon onClick={() => (id)} aria-label="Eliminar">
        <ClipButton />
      </icon>
      <icon onClick={() => onEliminar(id)} aria-label="Eliminar">
        <DeleteButton />
      </icon>
    </div>
  );
}

export default NewRequirementsFormResponseBlock;