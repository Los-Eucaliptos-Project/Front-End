import styled from 'styled-components';

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 15rem;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    color: black;
    padding: 1.5rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    z-index: 999;
    transition: width 0.3s ease;

    @media (max-width: 992px) {
        width: 5rem;
        padding: 1rem;
    }

    @media (max-width: 992px) {
        width: 100%;
        height: auto;
        padding: 0.8rem;
    }
`;

export default HeaderContainer;
