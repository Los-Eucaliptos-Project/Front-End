import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const zoomIn = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;  
  width: 90vw;
  background-color: rgba(71, 143, 104, 0.23);
  font-family: 'Arial', sans-serif;
`;

export const TextNotFound = styled.div`
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
  animation: ${zoomIn} 1s ease;
`;

export const ErrorMessage = styled.p`
  font-size: 24px;
  color: #555;
  margin-top: 10px;
  font-weight: 300;
  color: rgb(39, 69, 128);
  animation: ${fadeInUp} 1.5s ease-in-out;
`;
