import styled from 'styled-components';

const HeaderLink = styled.a`
    color: rgb(20, 41, 89);
    text-decoration: none;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;

    &:hover {
        color: rgb(41, 105, 55);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export default HeaderLink;