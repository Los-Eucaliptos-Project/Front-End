import React from 'react';
import styled from 'styled-components';

const StyledPaginatorButton = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  margin: 0 4px;
  cursor: pointer;
  color: darkblue;
  background-color: white;
  font-weight: 'bold';

`;

function PaginatorButton({ children, isActive, ...rest }) {
  return (
    <StyledPaginatorButton isActive={isActive} {...rest}>
      {children}
    </StyledPaginatorButton>
  );
}

export default PaginatorButton;