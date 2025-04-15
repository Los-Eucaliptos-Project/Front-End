import React from 'react';
import { Container, TextNotFound, ErrorCode, ErrorMessage } from '../styled/not-found.styles'

const NotFound = () => {
  return (
    <Container>
      <TextNotFound>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>¡Ups! La página que buscas no se encuentra.</ErrorMessage>
      </TextNotFound>
    </Container>
  );
};

export default NotFound;
