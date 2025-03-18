import styled from 'styled-components';

const CustomModalStyleButton = styled.button`
  padding: 10px 90px;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? '#1a6824' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
`;

export default CustomModalStyleButton;