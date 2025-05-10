import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: darkblue;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem;
  border: 1px solid rgba(97, 148, 226, 0.7);
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  background-color: #dae9f6;
  color: black;

  &:focus {
    border-color: #dde5ec;
    box-shadow: 0 0 0 2px rgba(101, 164, 216, 0.36);
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: gray;
`;

function SearchInputFilePages({ type, placeholder, value, onChange, children, icon }) {
  return (
    <Wrapper>
      {children && (
        <Label className="text-xl mb-6">
          {children}
        </Label>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Icon icon={faSearch} />
    </Wrapper>
  );
}

export default SearchInputFilePages;
