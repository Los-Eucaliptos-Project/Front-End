import styled from 'styled-components';

export const SlideBarGreenContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 7%;
  background-color: rgb(36, 102, 51);
  margin-top: ${({ marginTop }) => marginTop};
`;


export const SlideCloseMenuIcon = styled.div`
    display: block;
    cursor: pointer;
    font-size: 2rem;
    margin-top: 1rem;
    z-index: 1001;
    transition: opacity 0.3s ease;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: black;

    @media (min-width: 769px) {
      display: none;
    }
`;

