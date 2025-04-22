import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonSubmit from '../buttons/button-submit.btn';
import SearchInputFilePages from '../search-input-file-pages.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import FilterMenu from '../filter-menu.component';

import Pagination from '../paginator-components/pagination.container';
import ButtonPaginator from '../paginator-components/components/paginator-button.component';
import PageNumbers from '../paginator-components/components/paginator-page-numbers.component';

import TableStyleHeaderRow from '../table-components/table-style-header-row.component';
import TableStyleDatosRow from '../table-components/table-style-datos-row.component';
import TableStyle from '../table-components/table-style.component';
import TableStyleContainer from '../table-components/table-style-container.component';

import ContainerStylePageHeader from '../main-container-components/container-style-page-header.component';

import SampleDataPendingRequests from '../../data/SampleData';

import usePagination from '../../hooks/use-pagination.hook';


const CenteredTableStyleDatosRow = styled(TableStyleDatosRow)`
  text-align: center;
`;

const RightAlignedTableStyleDatosRow = styled(TableStyleDatosRow)`
  text-align: right;
`;

const RightAlignedNameTableStyleDatosRow = styled(TableStyleDatosRow)`
  text-align: center;
  width: auto;
`;

function ThemesTableContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Usar el hook de paginación
  const { currentPage, onPageChange, itemsPerPage } = usePagination();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onPageChange(1);  // Restablecer a la primera página cuando cambia la búsqueda
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    onPageChange(1);  // Restablecer a la primera página cuando cambia el estado
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
        <ButtonPaginator key={i} onClick={() => onPageChange(i)} isActive={i === currentPage}>
          {i}
        </ButtonPaginator>
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
          <FilterMenu onSelect={handleStatusSelect}>
            <FontAwesomeIcon icon={faFilter} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </FilterMenu>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ButtonSubmit marginTop="30px" marginLeft="30px" marginBottom="30px">
            Crear nuevo
          </ButtonSubmit>
        </div>
      </ContainerStylePageHeader>
      <TableStyle>
        <thead>
          <tr>
            <TableStyleHeaderRow>Nombre</TableStyleHeaderRow>
            <TableStyleHeaderRow>Solicitudes ↑</TableStyleHeaderRow>
            <TableStyleHeaderRow></TableStyleHeaderRow>
            <TableStyleHeaderRow></TableStyleHeaderRow>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              <RightAlignedNameTableStyleDatosRow>{row.issue}</RightAlignedNameTableStyleDatosRow>
              <CenteredTableStyleDatosRow>{row.tasks}</CenteredTableStyleDatosRow>
              <RightAlignedTableStyleDatosRow>
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ cursor: 'pointer', marginRight: '10px' }}
                  onClick={() => console.log(`Acción para ${row.id}`)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log(`Descargar para ${row.id}`)}
                />
              </RightAlignedTableStyleDatosRow>
            </tr>
          ))}
        </tbody>
      </TableStyle>
      <Pagination>
        <ButtonPaginator onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          ← Anterior
        </ButtonPaginator>
        <PageNumbers>{renderPageNumbers()}</PageNumbers>
        <ButtonPaginator onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Siguiente →
        </ButtonPaginator>
      </Pagination>
    </TableStyleContainer>
  );
}

export default ThemesTableContainer;
