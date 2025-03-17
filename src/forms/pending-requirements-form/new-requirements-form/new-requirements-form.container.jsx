import React, { useState, useEffect } from 'react';
import FormInputField from './components/form-input-field.jsx';
import FormDateField from './components/form-date-field.jsx';
import FormTextAreaField from './components/form-text-area-field.jsx';
import NewRequirementsFormResponseBlockList from './components/new-requirements-form-response-block-list.component';

function NewRequirementsForm() {
  const [bloquesRespuestas, setBloquesRespuestas] = useState([]);
  const [numeroRequerimiento, setNumeroRequerimiento] = useState('');
  const [solicitante, setSolicitante] = useState('');
  const [fecha, setFecha] = useState('');
  const [motivo, setMotivo] = useState('');

  useEffect(() => {
    setBloquesRespuestas([
      { id: Date.now() },
      { id: Date.now() + 1 },
      { id: Date.now() + 2 },
    ]);
  }, []); 

  const agregarBloque = () => {
    setBloquesRespuestas([...bloquesRespuestas, { id: Date.now() }]);
  };

  const eliminarBloque = (id) => {
    setBloquesRespuestas(bloquesRespuestas.filter((bloque) => bloque.id !== id));
  };

  const enviarFormulario = () => {
    console.log(bloquesRespuestas);
  };

  return (
    <div style={{ padding: '20px' }}> {/* Agrega padding al formulario */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <FormInputField
            label="N° de requerimiento"
            id="numeroRequerimiento"
            placeholder="000000"
            value={numeroRequerimiento}
            onChange={(e) => setNumeroRequerimiento(e.target.value)}
          />
          <FormInputField
            label="Solicitante"
            id="solicitante"
            placeholder="Escribir nombre"
            value={solicitante}
            onChange={(e) => setSolicitante(e.target.value)}
          />
          <FormDateField
            label="Fecha"
            id="fecha"
            placeholder="DD/MM/AA"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
      </div>
      <FormTextAreaField
        label="Motivo"
        id="motivo"
        value={motivo}
        placeholder="Motivo del requerimiento"
        onChange={(e) => setMotivo(e.target.value)}
      />
      <NewRequirementsFormResponseBlockList
        bloques={bloquesRespuestas}
        onAgregar={agregarBloque}
        onEliminar={eliminarBloque}
      />
      <button className="primary" style={{ marginRight: '10px' }}>Crear</button> {/* Botón azul */}
      <button className="secondary">Cancelar</button> {/* Botón gris */}
    </div>
  );
}

export default NewRequirementsForm;