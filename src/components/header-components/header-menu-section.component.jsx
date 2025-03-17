import styled from 'styled-components';

const HeaderMenuSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 90px;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        background-color: white;
        padding: 1rem;
        z-index: 1000;
        transform: translateX(${(props) => (props.isMenuOpen ? '0' : '-100%')});
    }

    @media (min-width: 769px) {
        display: flex;

        @media (max-width: 992px) {
            display: none;
        }
    }
`;

export default HeaderMenuSection;
