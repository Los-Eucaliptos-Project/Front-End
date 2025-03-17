import React from 'react';
import styled from 'styled-components';
import ContainerPage from './container-page-componet';
import ContainerResponsiveMargin from './contrainer-responsive-margin'

function BaseContainer({ children }) {
  return (
    <ContainerPage>
      <ContainerResponsiveMargin />
      {children}
    </ContainerPage>
  );
}

export default BaseContainer;