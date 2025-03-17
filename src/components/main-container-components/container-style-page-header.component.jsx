
import React from 'react';
import styled from 'styled-components';

const StyledPageHeader = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InnerDiv = styled.div`
  width: 100%; 
  display: flex;
  align-items: center;
`;

function ContainerStylePageHeader({ children, ...rest }) {
  return (
    <StyledPageHeader {...rest}>
      <InnerDiv>
        {children}
      </InnerDiv>
    </StyledPageHeader>
  );
}

export default ContainerStylePageHeader;