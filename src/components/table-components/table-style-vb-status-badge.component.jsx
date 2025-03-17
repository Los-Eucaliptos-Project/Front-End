import React from 'react';
import styled from 'styled-components';

const StyledVBStatusBadge = styled.span`
  background-color: ${props =>
    props.status === 'Firmado' ? '#d5f5e3' : 
    props.status === 'En revisión' ? '#fcf3cf' : 
    props.status === 'Derivado' ? '#ebf5fb' :
    'transparent'};
  color: ${props =>
    props.status === 'Firmado' ? '#237a03' : 
    props.status === 'En revisión' ? '#cd3515' :
    props.status === 'Derivado' ? '#5dade2' :
    'inherit'};
  padding: 4px 8px;
  border-radius: 4px;
`;

function TableStyleVBStatusBadge({ children, status, ...rest }) {
  return (
    <StyledVBStatusBadge status={status} {...rest}>
      {children}
    </StyledVBStatusBadge>
  );
}

export default TableStyleVBStatusBadge;