import React from 'react';

function SelectionYear({ years, selectStyle }) {
  return (
    <select style={{ ...selectStyle, marginRight: '0.5rem' }}>
      <option>Año</option>
      {years.map(year => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  );
}

export default SelectionYear;