import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const InputContainer = styled.div`
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

const DateInput = styled(DatePicker)`
  border: none;
  background-color: transparent;
  padding: 0.5rem 0;
  font-size: 1rem;
  outline: none;
  width: 120px;
`;

const CalendarIcon = styled(FontAwesomeIcon)`
  color: darkblue;
  cursor: pointer;
`;

function DateFilterInputPages({ selectedDate, onChange }) {
  return (
    <InputContainer>
      <DateInput
        selected={selectedDate}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/AA"
      />
      <CalendarIcon icon={faCalendarAlt} />
    </InputContainer>
  );
}

export default DateFilterInputPages;