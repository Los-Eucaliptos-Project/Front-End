import styled from 'styled-components';

const HeaderItem = styled.div`
    margin-bottom: 2.5rem;
    transition: opacity 0.3s ease, transform 0.3s ease;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
        opacity: ${(props) => (props.isMenuOpen ? 1 : 0)};
        transform: translateX(${(props) => (props.isMenuOpen ? 0 : -20)}px);
    }

    @media (max-width: 480px) {
        margin-bottom: 1rem;
    }

    &.logout-item {
        margin-bottom: 0;
        margin-top: auto;
    }
`;

export default HeaderItem;
