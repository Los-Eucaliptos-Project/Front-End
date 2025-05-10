import React from 'react';
import styled from 'styled-components';

const StyledTableContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  
`;

function TableStyleContainer({ children, ...rest }) {
  return (
    <StyledTableContainer {...rest}>
      {children}
    </StyledTableContainer>
  );
}

export default TableStyleContainer;