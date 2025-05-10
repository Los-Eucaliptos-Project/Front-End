import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(97, 148, 226, 0.7);
  border-radius: 0.375rem;
  background-color: #dae9f6;
  padding: 0 0.5rem;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

export const DateInput = styled(DatePicker)`
  border: none;
  background-color: transparent;
  padding: 0.5rem 0;
  font-size: 1rem;
  outline: none;
  width: 120px;
`;

export const CalendarIcon = styled(FontAwesomeIcon)`
  color: darkblue;
  cursor: pointer;
`;
