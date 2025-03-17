import styled from 'styled-components';

const HeaderHamburgerMenu = styled.div`
    display: none;
    cursor: pointer;
    font-size: 2rem;
    margin-top: 1rem;
    z-index: 1001;
    transition: opacity 0.3s ease;

    @media (max-width: 992px) {
        display: block;
    }

    @media (min-width: 993px) {
        display: none;
    }
`;

export default HeaderHamburgerMenu;
