import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

function Pagination({ children }) {
  return (
    <PaginationContainer>
      {children}
    </PaginationContainer>
  );
}

export default Pagination;