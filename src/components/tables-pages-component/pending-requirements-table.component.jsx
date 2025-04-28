import React, { useState } from 'react';
import ButtonSubmit from '../buttons/button-submit.btn';
import SearchInputFilePages from '../filters-menu/search-input-file-pages.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import FilterMenu from '../filters-menu/filter-menu.component';

import Pagination from '../paginator-components/pagination.container';
import ButtonPaginator from '../paginator-components/components/paginator-button.component';
import PageNumbers from '../paginator-components/components/paginator-page-numbers.component';

import TableStyleHeaderRow from '../table-components/table-style-header-row.component';
import TableStyleDatosRow from '../table-components/table-style-datos-row.component';
import TableStyle from '../table-components/table-style.component';
import TableStatusBadgeStyle from '../table-components/table-style-status-badge.component';
import TableStyleVBStatusBadge from '../table-components/table-style-vb-status-badge.component';
import TableStyleContainer from '../table-components/table-style-container.component';

import ContainerStylePageHeader from '../main-container-components/container-style-page-header.component';

import SampleDataPendingRequests from '../../data/SampleData';

import { Link } from 'react-router-dom';

import DownloadModal from '../../components/custom-modal-components/download-modal.component';

import usePagination from '../../hooks/use-pagination.hook';

function PendingRequirementsTableContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [downloadApiUrl, setDownloadApiUrl] = useState('');

  const {
    currentPage,
    setCurrentPage,
    onPageChange,
    itemsPerPage,
    resetPagination,
  } = usePagination(1, 9);

  const handleDownloadClick = (rowId) => {
    setDownloadApiUrl(`/api/requirements/${rowId}/download`);
    setIsDownloadModalOpen(true);
  };

  const handleCloseDownloadModal = () => {
    setIsDownloadModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    resetPagination();
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    resetPagination();
  };

  const calculateDaysPassed = (creationDate) => {
    const creation = new Date(creationDate);
    const today = new Date();
    const diffTime = Math.abs(today - creation);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredData = SampleDataPendingRequests.filter((row) => {
    if (row.status === 'Completado' || row.status === 'Rechazado') {
      return false;
    }

    const searchMatch =
      row.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        <ButtonPaginator
          key={i}
          onClick={() => onPageChange(i)}
          isActive={i === currentPage}
        >
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
            <FontAwesomeIcon
              icon={faFilter}
              style={{ marginLeft: '8px', verticalAlign: 'middle' }}
            />
          </FilterMenu>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/pending-requirements/new-requirements">
            <ButtonSubmit marginTop="30px" marginLeft="30px" marginBottom="30px">
              Crear nuevo
            </ButtonSubmit>
          </Link>
        </div>
      </ContainerStylePageHeader>

      <TableStyle>
        <thead>
          <tr>
            <TableStyleHeaderRow>ID</TableStyleHeaderRow>
            <TableStyleHeaderRow>Solicitante ↑</TableStyleHeaderRow>
            <TableStyleHeaderRow>Estado</TableStyleHeaderRow>
            <TableStyleHeaderRow>Creación</TableStyleHeaderRow>
            <TableStyleHeaderRow>Días</TableStyleHeaderRow>
            <TableStyleHeaderRow>VB1</TableStyleHeaderRow>
            <TableStyleHeaderRow>VB2</TableStyleHeaderRow>
            <TableStyleHeaderRow>VB3</TableStyleHeaderRow>
            <TableStyleHeaderRow></TableStyleHeaderRow>
            <TableStyleHeaderRow></TableStyleHeaderRow>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              <TableStyleDatosRow>{row.id}</TableStyleDatosRow>
              <TableStyleDatosRow>{row.name}</TableStyleDatosRow>
              <TableStyleDatosRow>
                <TableStatusBadgeStyle status={row.status}>
                  {row.status}
                </TableStatusBadgeStyle>
              </TableStyleDatosRow>
              <TableStyleDatosRow>{row.creationDate}</TableStyleDatosRow>
              <TableStyleDatosRow>{calculateDaysPassed(row.creationDate)}</TableStyleDatosRow>
              <TableStyleDatosRow>
                <TableStyleVBStatusBadge status={row.vb1}>{row.vb1}</TableStyleVBStatusBadge>
              </TableStyleDatosRow>
              <TableStyleDatosRow>
                <TableStyleVBStatusBadge status={row.vb2}>{row.vb2}</TableStyleVBStatusBadge>
              </TableStyleDatosRow>
              <TableStyleDatosRow>
                <TableStyleVBStatusBadge status={row.vb3}>{row.vb3}</TableStyleVBStatusBadge>
              </TableStyleDatosRow>
              <TableStyleDatosRow bold={true}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ cursor: 'pointer' }}
                  onClick={() => console.log(`Ver detalles de ${row.id}`)}
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

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={handleCloseDownloadModal}
        title="Descargar Requerimiento"
        apiUrl={downloadApiUrl}
      >
        <p>¿Seguro que quieres descargar este requerimiento?</p>
      </DownloadModal>
    </TableStyleContainer>
  );
}

export default PendingRequirementsTableContainer;