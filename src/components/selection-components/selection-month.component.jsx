import React from 'react';

function SelectionMonth({ selectStyle }) {
  return (
    <select style={selectStyle}>
      <option>Mes</option>
      <option>Enero</option>
      <option>Febrero</option>
      <option>Marzo</option>
      <option>Abril</option>
      <option>Mayo</option>
      <option>Junio</option>
      <option>Julio</option>
      <option>Agosto</option>
      <option>Septiembre</option>
      <option>Octubre</option>
      <option>Noviembre</option>
      <option>Diciembre</option>
    </select>
  );
}

export default SelectionMonth;