import React from 'react';
import BaseContainer from '../components/main-container-components/container-base.component.jsx';
import PageHeader from '../components/page-header.component.jsx';
import PendingRequestsTable from '../components/tables-pages-component/pending-requests-table.component.jsx';
const containerStyle = {
  minHeight: '100vh',
  minWidth: '90vh',
};


function PendingRequests() {
  return (
    <BaseContainer>  
      <div style={containerStyle}>
        <div className="container mx-auto px-4 py-8">
          <PageHeader title="Requerimientos pendientes" userName="Nombre de usuario" marginTop='-10'/>
          <PendingRequestsTable></PendingRequestsTable>
        </div>
      </div>
    </BaseContainer>
  );
}

export default PendingRequests;

