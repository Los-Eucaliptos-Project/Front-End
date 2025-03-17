import styled from 'styled-components';

const HeaderCloseMenuIcon = styled.div`
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

export default HeaderCloseMenuIcon;