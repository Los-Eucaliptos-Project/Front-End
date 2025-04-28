import React, { useState } from 'react';
import ButtonSubmit from '../buttons/button-submit.btn';
import SearchInputFilePages from '../filters-menu/search-input-file-pages.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import FilterMenu from '../filters-menu/filter-menu.component';

import Pagination from '../paginator-components/pagination.container';
import ButtonPaginator from '../paginator-components/components/paginator-button.component';
import PageNumbers from '../paginator-components/components/paginator-page-numbers.component';

import TableStyleHeaderRow from '../table-components/table-style-header-row.component';
import TableStyleDatosRow from '../table-components/table-style-datos-row.component';
import TableStyle from '../table-components/table-style.component';
import TableStyleContainer from '../table-components/table-style-container.component';

import ContainerStylePageHeader from '../main-container-components/container-style-page-header.component';

import SampleDataPendingRequests from '../../data/SampleData';

import usePagination from '../../hooks/use-pagination.hook'

import CustomSwitch from '../custom-iu-components/custom-switch-style.component'

function NotificationsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [usuarios, setUsuarios] = useState(SampleDataPendingRequests);

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

  const handleSwitchChange = (userId, switchName, checked) => {
    setUsuarios((prevUsuarios) =>
      prevUsuarios.map((usuario) => {
        if (usuario.id === userId) {
          return { ...usuario, [switchName]: checked };
        }
        return usuario;
      })
    );
  };

  const filteredData = usuarios.filter((row) => {
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
          <ButtonSubmit
            marginTop="30px"
            marginLeft="30px"
            marginBottom="30px"
          >
            Crear nuevo
          </ButtonSubmit>
        </div>
      </ContainerStylePageHeader>
      <TableStyle>
        <thead>
          <tr>
            <TableStyleHeaderRow>Nombre ↑</TableStyleHeaderRow>
            <TableStyleHeaderRow>Correo ↑</TableStyleHeaderRow>
            <TableStyleHeaderRow>Creación</TableStyleHeaderRow>
            <TableStyleHeaderRow>Firma</TableStyleHeaderRow>
            <TableStyleHeaderRow>Rechazo</TableStyleHeaderRow>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              <TableStyleDatosRow>{row.fulName}</TableStyleDatosRow>
              <TableStyleDatosRow>{row.email}</TableStyleDatosRow>
              <TableStyleDatosRow>
                 <CustomSwitch
                   checked={row.creation || false}
                   onChange={(e) =>
                     handleSwitchChange(row.id, 'creation', e.target.checked)
                   }
                 />
               </TableStyleDatosRow>
               <TableStyleDatosRow>
                 <CustomSwitch
                   checked={row.firma || false}
                   onChange={(e) =>
                     handleSwitchChange(row.id, 'firma', e.target.checked)
                   }
                 />
               </TableStyleDatosRow>
               <TableStyleDatosRow>
                 <CustomSwitch
                   checked={row.rechazo || false}
                   onChange={(e) =>
                     handleSwitchChange(row.id, 'rechazo', e.target.checked)
                   }
                 />
               </TableStyleDatosRow>
            </tr>
          ))}
        </tbody>
      </TableStyle>
      <Pagination>
        <ButtonPaginator
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Anterior
        </ButtonPaginator>
        <PageNumbers>{renderPageNumbers()}</PageNumbers>
        <ButtonPaginator
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente →
        </ButtonPaginator>
      </Pagination>
    </TableStyleContainer>
  );
}

export default NotificationsTable;