import React from 'react';
import styled from 'styled-components';

const StyledStatusBadge = styled.span`
  background-color: ${props =>
    props.status === 'En espera'
      ? '#ebf5fb'
      : props.status === 'Aprobado'
      ? '#fcf3cf'
      : props.status === 'En avance'
      ? '#d5f5e3'
      : props.status === 'Completado'
      ? '#d5f5e3'
      : props.status === 'Rechazado'
      ? '#fadbd8'
      : 'transparent'};
  color: ${props =>
    props.status === 'En espera'
      ? '#5dade2'
      : props.status === 'Aprobado'
      ? '#cb4335'
      : props.status === 'En avance'
      ? '#237a03'
      : props.status === 'Completado'
      ? '#2e7d32'
      : props.status === 'Rechazado'
      ? '#d32f2f'
      : 'inherit'};
  padding: 4px 8px;
  border-radius: 4px;
`;

function TableStyleStatusBadge({ children, status, ...rest }) {
  return (
    <StyledStatusBadge status={status} {...rest}>
      {children}
    </StyledStatusBadge>
  );
}

export default TableStyleStatusBadge;