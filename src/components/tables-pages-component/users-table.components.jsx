import React, { useState } from 'react';
import styled from 'styled-components';
import SubmitButton from '../submit-button.component';
import SearchInputFilePages from '../search-input-file-pages.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowRight, faFolder, faClipboard } from '@fortawesome/free-solid-svg-icons';
import FilterMenu from '../filter-menu.component';

import Pagination from '../paginator-components/pagination.component';
import PaginatorButton from '../paginator-components/paginator-button.component';
import PageNumbers from '../paginator-components/paginator-page-numbers.component';

import TableStyleHeaderRow from '../table-components/table-style-header-row.component'
import TableStyleDatosRow from '../table-components/table-style-datos-row.component';
import TableStyle from '../table-components/table-style.component'
import TableStyleContainer from '../table-components/table-style-container.component';
import TableStyleStatusActive from '../table-components/table-style-status-active.component';

import ContainerStylePageHeader from '../main-container-components/container-style-page-header.component';

import SampleDataPendingRequests from '../../data/SampleData';

function UsersTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };
  
  const filteredData = SampleDataPendingRequests.filter(row => {
    if (row.status === 'Completado' || row.status === 'Rechazado') {
      return false;
    }

    const searchMatch = row.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const statusMatch = selectedStatus ? row.status === selectedStatus : true;
    return searchMatch && statusMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginatorButton key={i} onClick={() => setCurrentPage(i)} isActive={i === currentPage}>
          {i}
        </PaginatorButton>
      );
    }
    return pageNumbers;
  };

  return (
    <TableStyleContainer>
      <ContainerStylePageHeader>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <SearchInputFilePages
            type="text"
            placeholder="Buscar por ID o solicitante"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FilterMenu onSelect={handleStatusSelect} >
            <FontAwesomeIcon icon={faFilter} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </FilterMenu>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SubmitButton
            marginTop="30px"
            marginLeft="30px"
            marginBottom="30px"
          >
            Crear nuevo
          </SubmitButton>
        </div>
      </ContainerStylePageHeader>
      <TableStyle>
        <thead>
          <tr>
            <TableStyleHeaderRow> Estado</TableStyleHeaderRow>
            <TableStyleHeaderRow>Nombre ↑</TableStyleHeaderRow>
            <TableStyleHeaderRow>Correo ↑</TableStyleHeaderRow>
            <TableStyleHeaderRow>Funcionario ↑</TableStyleHeaderRow>
            <TableStyleHeaderRow>Permisos ↑</TableStyleHeaderRow>
            <TableStyleHeaderRow></TableStyleHeaderRow>
            <TableStyleHeaderRow></TableStyleHeaderRow>
            <TableStyleHeaderRow></TableStyleHeaderRow>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              <TableStyleDatosRow><TableStyleStatusActive statusActive = {row.statusActive}> {row.statusActive}</TableStyleStatusActive></TableStyleDatosRow>
              <TableStyleDatosRow>{row.fulName}</TableStyleDatosRow>
              <TableStyleDatosRow>{row.email}</TableStyleDatosRow>
              <TableStyleDatosRow>{row.official}</TableStyleDatosRow>
              <TableStyleDatosRow>{row.permissions}</TableStyleDatosRow>
              <TableStyleDatosRow bold={true}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log(`Acción para ${row.id}`)}
                />
              </TableStyleDatosRow>
              <TableStyleDatosRow bold={true}>
                <FontAwesomeIcon
                 icon={faClipboard}
                 style={{ cursor: 'pointer' }}
                  onClick={() => console.log(`Descargar para ${row.id}`)}
                />
              </TableStyleDatosRow>
              <TableStyleDatosRow bold={true}>
                <FontAwesomeIcon
                  icon={faFolder}
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log(`Descargar para ${row.id}`)}
                />
              </TableStyleDatosRow>
            </tr>
          ))}
        </tbody>
      </TableStyle>
      <Pagination>
        <PaginatorButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          ← Anterior
        </PaginatorButton>
        <PageNumbers>{renderPageNumbers()}</PageNumbers>
        <PaginatorButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Siguiente →
        </PaginatorButton>
      </Pagination>
    </TableStyleContainer>
  );
}

export default UsersTable;