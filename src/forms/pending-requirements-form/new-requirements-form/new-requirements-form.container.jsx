import React, { useState, useEffect } from 'react';
import FormInputField from './components/form-input-field.jsx';
import FormDateField from './components/form-date-field.jsx';
import FormTextAreaField from './components/form-text-area-field.jsx';
import NewRequirementsFormResponseBlockList from './components/new-requirements-form-response-block-list.component';
import CustomModalStyleButton from '../../../components/custom-modal-components/custom-modal-style-buttoncomponent..jsx';

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
    <div style={{ padding: '20px' }}> 
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px',  flexDirection: 'column', boxSizing: 'border-box'}}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr 1fr', gap: '10px' }}>
          <FormInputField
            label="N° de requerimiento"
            id="numeroRequerimiento"
            placeholder="000000"
            value={numeroRequerimiento}
            onChange={(e) => setNumeroRequerimiento(e.target.value)}
            inputWidth="100%"
          />
          <FormInputField
            label="Solicitante"
            id="solicitante"
            placeholder="Escribir nombre"
            value={solicitante}
            onChange={(e) => setSolicitante(e.target.value)}
            inputWidth="100%"
          />
          <FormDateField
            label="Fecha"
            id="fecha"
            placeholder="DD/MM/AA"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            inputWidth="100%"
          />
        </div>
      </div>
      <FormTextAreaField
        label="Motivo"
        id="motivo"
        value={motivo}
        placeholder="Motivo del requerimiento"
        onChange={(e) => setMotivo(e.target.value)}
        inputWidth="100%"
      />
      <NewRequirementsFormResponseBlockList
        label="Items"
        bloques={bloquesRespuestas}
        onAgregar={agregarBloque}
        onEliminar={eliminarBloque}
      />
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex' }}>
        <CustomModalStyleButton primary={false} style={{ marginRight: '10px' }}>
          Cancelar
        </CustomModalStyleButton>
        <CustomModalStyleButton primary={true} style={{ marginRight: '10px' }}>
          Aceptar
        </CustomModalStyleButton>
      </div>
    </div>
  );
}

export default NewRequirementsForm;