import React from 'react';
import styled from 'styled-components';

const ContainerPage = styled.div`
  margin-left: 15rem;
  padding: 2rem;
  min-height: 98vh;
  box-sizing: border-box;
  width: calc(96% - 15rem);
    margin-top: 2rem;

  @media (max-width: 1024px) {
    margin-left: 12rem;
    width: calc(100% - 12rem);
  }

  @media (max-width: 992px) {
    margin-left: 0;
    padding: 1.5rem;
    width: 100%;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export default ContainerPage;


