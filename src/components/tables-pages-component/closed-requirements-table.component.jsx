import React, { useState } from 'react';
import SearchInputFilePages from '../search-input-file-pages.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import FilterMenu from '../filter-menu.component';
import DateFilterInput from '../filters-menu/date-filter-input.component';

import Pagination from '../paginator-components/pagination.container';
import ButtonPaginator from '../paginator-components/components/paginator-button.component';
import PageNumbers from '../paginator-components/components/paginator-page-numbers.component';

import TableStyleHeaderRow from '../table-components/table-style-header-row.component'
import TableStyleDatosRow from '../table-components/table-style-datos-row.component';
import TableStyle from '../table-components/table-style.component'
import TableStatusBadgeStyle from '../table-components/table-style-status-badge.component';
import TableStyleContainer from '../table-components/table-style-container.component';

import ContainerStylePageHeader from '../main-container-components/container-style-page-header.component';

import SampleDataPendingRequests from '../../data/SampleData';

import CustomModal from '../custom-modal-components/custom-modal-white-and-green.component';

import usePagination from '../../hooks/use-pagination.hook'

function ClosedRequirementsTableContainer() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Usar el hook de paginación
  const { currentPage, onPageChange, itemsPerPage } = usePagination();

  const [downloandModalVisible, setDownloandModalVisible] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onPageChange(1);  // Restablecer a la primera página cuando cambia la búsqueda
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    onPageChange(1);  // Restablecer a la primera página cuando cambia el estado
  };

  const handleDownloadClick = (rowId) => {
    setSelectedRowId(rowId);
    setDownloandModalVisible(true);
  };

  const handleConfirmDownload = () => {
    console.log(`Descargando requerimiento para ${selectedRowId}`);
    setDownloandModalVisible(false);
  };

  const handleCancelDownload = () => {
    setDownloandModalVisible(false);
  };

  const filteredData = SampleDataPendingRequests.filter(row => {
    if (row.status !== 'Completado' && row.status !== 'Rechazado') {
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
          <DateFilterInput
            selectedDate={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </ContainerStylePageHeader>
      <TableStyle>
        <thead>
          <tr>
            <TableStyleHeaderRow>ID</TableStyleHeaderRow>
            <TableStyleHeaderRow>Solicitante ↑</TableStyleHeaderRow>
            <TableStyleHeaderRow>Estado</TableStyleHeaderRow>
            <TableStyleHeaderRow>Creación</TableStyleHeaderRow>
            <TableStyleHeaderRow>Cerrado</TableStyleHeaderRow>
            <TableStyleHeaderRow></TableStyleHeaderRow>
            <TableStyleHeaderRow></TableStyleHeaderRow>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              <TableStyleDatosRow>{row.id}</TableStyleDatosRow>
              <TableStyleDatosRow>{row.name}</TableStyleDatosRow>
              <TableStyleDatosRow><TableStatusBadgeStyle status={row.status}>{row.status}</TableStatusBadgeStyle></TableStyleDatosRow>
              <TableStyleDatosRow>{row.creationDate}</TableStyleDatosRow>
              <TableStyleDatosRow>{row.closed}</TableStyleDatosRow>
              <TableStyleDatosRow bold={true}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log(`Acción para ${row.id}`)}
                />
              </TableStyleDatosRow>
              <TableStyleDatosRow bold={true}>
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDownloadClick(row.id)}
                />
              </TableStyleDatosRow>
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
      <CustomModal
        isOpen={downloandModalVisible}
        onClose={handleCancelDownload}
        title="¿Descargar el requerimiento?"
        primaryButtonText="Descargar"
        secondaryButtonText="Cancelar"
        onPrimaryButtonClick={handleConfirmDownload}
        onSecondaryButtonClick={handleCancelDownload}
      />
    </TableStyleContainer>
  );
}

export default ClosedRequirementsTableContainer;