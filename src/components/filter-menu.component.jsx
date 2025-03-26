import React, { useState, useRef, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../modules/filter-menu.module.css";

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
  }, []);

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
    <div className={styles.filterMenuContainer} ref={dropdownRef}>
      <button className={styles.filterButton} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faFilter} />
      </button>
      {isOpen && (
        <div className={styles.filterOptions}>
          <div className={styles.filterHeader}>
            <h3 className={styles.filterTitle}>Filtros</h3>
            <button className={styles.resetButton} onClick={handleReset}>Reestablecer</button>
          </div>

          <div className={styles.filterSection}>
            <label className={styles.filterLabel}>Estado</label>
            <div className={styles.filterSelectContainer}>
              <select
                className={styles.filterSelect}
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="En espera">En espera</option>
                <option value="Aprobado">Aprobado</option>
                <option value="En avance">En avance</option>
                <option value="Completo">Completo</option>
                <option value="Rechazado">Rechazado</option>
              </select>
              <FontAwesomeIcon className={styles.chevronIcon} icon={faChevronDown} />
            </div>
          </div>

          <div className={styles.filterSection}>
            <label className={styles.filterLabel}>Días</label>
            <div className={styles.filterSelectContainer}>
              <select
                className={styles.filterSelect}
                value={dias}
                onChange={(e) => setDias(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="1">Último día</option>
                <option value="7">Últimos 7 días</option>
                <option value="30">Últimos 30 días</option>
              </select>
              <FontAwesomeIcon className={styles.chevronIcon} icon={faChevronDown} />
            </div>
          </div>

          <div className={styles.filterSection}>
            <label className={styles.filterLabel}>Firmas</label>
            <div className={styles.filterSelectContainer}>
              <select
                className={styles.filterSelect}
                value={firmas}
                onChange={(e) => setFirmas(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="Firma 1">Firma 1</option>
                <option value="Firma 2">Firma 2</option>
                <option value="Firma 3">Firma 3</option>
              </select>
              <FontAwesomeIcon className={styles.chevronIcon} icon={faChevronDown} />
            </div>
          </div>

          <button className={styles.applyButton} onClick={handleApply}>Aplicar</button>
        </div>
      )}
    </div>
  );
}

export default FilterMenu;