import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterMenuContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: sans-serif;
  padding-left: 100px;
`;

const FilterButton = styled.button`
  background-color: transparent;
  color: white;
  background: darkgreen;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  padding: 6px;
`;

const FilterOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 10;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  padding: 15px;
  width: 300px;
  border-radius: 20px;
`;

const FilterTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.2em;
  color: black;
`;

const FilterSection = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0;
  font-weight: bold;
  text-align: left;
  width: 30%;
`;

const FilterSelectContainer = styled.div`
  position: relative;
  width: 70%;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f0f8ff;
  appearance: none;
  border-color: lightblue;
  padding-right: 30px;
`;

const ChevronIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  color: darkblue;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: darkblue;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
`;

const ApplyButton = styled.button`
  background-color: rgb(255, 255, 255);
  color: darkblue;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: auto;
  display: block;
  font-weight: bold;
`;

const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function FilterMenu({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [estado, setEstado] = useState("Todos");
  const [dias, setDias] = useState("Todos");
  const [firmas, setFirmas] = useState("Todos");

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  },);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleApply = () => {
    onSelect({ estado, dias, firmas });
    setIsOpen(false);
  };

  const handleReset = () => {
    setEstado("Todos");
    setDias("Todos");
    setFirmas("Todos");
  };

  return (
    <FilterMenuContainer ref={dropdownRef}>
      <FilterButton onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faFilter} />
      </FilterButton>
      {isOpen && (
        <FilterOptions>
          <FilterHeader>
            <FilterTitle>Filtros</FilterTitle>
            <ResetButton onClick={handleReset}>Reestablecer</ResetButton>
          </FilterHeader>

          <FilterSection>
            <FilterLabel>Estado</FilterLabel>
            <FilterSelectContainer>
              <FilterSelect
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="En espera">En espera</option>
                <option value="Aprobado">Aprobado</option>
                <option value="En avance">En avance</option>
                <option value="Completo">Completo</option>
                <option value="Rechazado">Rechazado</option>
              </FilterSelect>
              <ChevronIcon icon={faChevronDown} />
            </FilterSelectContainer>
          </FilterSection>

          <FilterSection>
            <FilterLabel>Días</FilterLabel>
            <FilterSelectContainer>
              <FilterSelect
                value={dias}
                onChange={(e) => setDias(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="1">Último día</option>
                <option value="7">Últimos 7 días</option>
                <option value="30">Últimos 30 días</option>
              </FilterSelect>
              <ChevronIcon icon={faChevronDown} />
            </FilterSelectContainer>
          </FilterSection>

          <FilterSection>
            <FilterLabel>Firmas</FilterLabel>
            <FilterSelectContainer>
              <FilterSelect
                value={firmas}
                onChange={(e) => setFirmas(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="Firma 1">Firma 1</option>
                <option value="Firma 2">Firma 2</option>
                <option value="Firma 3">Firma 3</option>
              </FilterSelect>
              <ChevronIcon icon={faChevronDown} />
            </FilterSelectContainer>
          </FilterSection>

          <ApplyButton onClick={handleApply}>Aplicar</ApplyButton>
        </FilterOptions>
      )}
    </FilterMenuContainer>
  );
}

export default FilterMenu;