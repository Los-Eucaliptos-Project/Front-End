import styled from 'styled-components';

export const HeaderSlideBarGreenContainer=styled.div` position: absolute;
top: 0;
right: 0;
width: 10px;
height: 7%;
background-color: rgb(36, 102, 51);

margin-top: $ {
    ({
        marginTop
    })=>marginTop
}

;
`;

export const HeaderMenuSection=styled.div` display: flex;
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

    transform: translateX($ {
            (props)=> (props.isMenuOpen ? '0' : '-100%')
        });
}

@media (min-width: 769px) {
    display: flex;

    @media (max-width: 992px) {
        display: none;
    }
}

`;

export const HeaderLogoSection=styled.div` display: flex;
justify-content: center;
transition: opacity 0.3s ease;
align-items: center;

@media (max-width: 992px) {
    flex-grow: 1;
}

`;

export const HeaderLink=styled.a` color: rgb(20, 41, 89);
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

export const HeaderItem=styled.div` margin-bottom: 2.5rem;
transition: opacity 0.3s ease,
transform 0.3s ease;
display: flex;
align-items: center;

@media (max-width: 768px) {
    margin-bottom: 1.5rem;

    opacity: $ {
        (props)=>(props.isMenuOpen ? 1 : 0)
    }

    ;

    transform: translateX($ {
            (props)=> (props.isMenuOpen ? 0 : -20)
        }

        px);
}

@media (max-width: 480px) {
    margin-bottom: 1rem;
}

&.logout-item {
    margin-bottom: 0;
    margin-top: auto;
}

`;

export const HeaderHamburgerMenu=styled.div` display: none;
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

export const HeaderContainer=styled.div` position: fixed;
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

export const HeaderCloseMenuIcon=styled.div` display: block;
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