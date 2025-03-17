import React from 'react';
import NewRequirementsFormResponseBlock from './new-requirements-form-response-block.component'

function NewRequirementsFormResponseBlockList({ bloques, onAgregar, onEliminar }) {
  return (
    <div>
      <label>Items</label>
      {bloques.map((bloque) => (
        <NewRequirementsFormResponseBlock key={bloque.id} id={bloque.id} onEliminar={onEliminar} />
      ))}
      <button onClick={onAgregar}>Agregar</button>
    </div>
  );
}

export default NewRequirementsFormResponseBlockList;