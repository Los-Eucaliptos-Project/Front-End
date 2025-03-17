import React from 'react';
import styled from 'styled-components';

const StyledPageNumbers = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

function PageNumbers({ children, ...rest }) {
  return (
    <StyledPageNumbers {...rest}>
      {children}
    </StyledPageNumbers>
  );
}

export default PageNumbers;