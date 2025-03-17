import React from 'react';
import styled from 'styled-components';

const HeaderSlideBarGreenContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 7%;
  background-color: rgb(36, 102, 51);
  margin-top: ${({ marginTop }) => marginTop};
`;

const HeaderSlideBarGreen = ({ marginTop }) => {
  return (
    <HeaderSlideBarGreenContainer marginTop={marginTop} />
  );
};

export default HeaderSlideBarGreen;