import React from 'react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { InputContainer, DateInput, CalendarIcon } from '../../styled/date-filter-input.styles'

function DateFilterInput({ selectedDate, onChange }) {
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

export default DateFilterInput;
