import styled from 'styled-components';

const HeaderLogoSection = styled.div`
    display: flex;
    justify-content: center;
    transition: opacity 0.3s ease;
    align-items: center;

    @media (max-width: 992px) {
        flex-grow: 1;
    }
`;

export default HeaderLogoSection;
