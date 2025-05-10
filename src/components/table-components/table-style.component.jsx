import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;

  th:first-child,
  td:first-child {
    border-left: none;
    padding-left: 0;
  }
`;

function TableStyle({ children, ...rest }) {
  return (
    <StyledTable {...rest}>
      {children}
    </StyledTable>
  );
}

export default TableStyle;