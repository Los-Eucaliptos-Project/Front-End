import React from 'react';
import styled from 'styled-components';

const StyleStatusActive = styled.span`
  background-color: ${props =>
    props.statusActive === 'Activo'
      ? '#d5f5e3'
      : props.statusActive === 'Inactivo'
      ? '#ffebee'
      : 'transparent'};
  color: ${props =>
    props.statusActive === 'Activo'
      ? '#237a03'
      : props.statusActive === 'Inactivo'
      ? '#f44336'
      : 'inherit'};
  padding: 4px 8px;
  border-radius: 4px;
`;

function TableStyleStatusActive({ children, statusActive, ...rest }) {
  return (
    <StyleStatusActive statusActive={statusActive} {...rest}>
      {children}
    </StyleStatusActive>
  );
}

export default TableStyleStatusActive;