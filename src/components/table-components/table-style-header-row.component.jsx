import React from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
  color: #355acc;
  padding: 12px 16px;
  text-align: center;
  position: relative; 
`;

function TableStyleHeaderRow({ children, ...rest }) {
  return (
    <StyledTh {...rest}>
      {children}
    </StyledTh>
  );
}

export default TableStyleHeaderRow;