import React from 'react';
import styled from 'styled-components';

const ContainerResponsiveMargin = styled.div`
  @media (min-width: 993px) {
    display: none;
  }

  @media (max-width: 992px) {
    margin-top: 19rem;
  }

  @media (max-width: 768px) {
    margin-top: 11rem;
  }

  @media (max-width: 480px) {
    margin-top: 6rem;
  }
`;

export default ContainerResponsiveMargin;