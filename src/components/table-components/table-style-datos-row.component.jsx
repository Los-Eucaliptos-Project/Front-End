  import React from 'react';
  import styled from 'styled-components';

  const StyledTd = styled.td`
    padding: 16px 16px;
    border-bottom: 1px solid #eee;
    color: #28408b;
    text-align: center;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  `;

  function TableStyleDatosRow({ children, bold, ...rest }) {
    return (
      <StyledTd bold={bold} {...rest}>
        {children}
      </StyledTd>
    );
  }

  export default TableStyleDatosRow;