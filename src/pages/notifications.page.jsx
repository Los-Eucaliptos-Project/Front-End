import React from 'react';
import BaseContainer from '../components/main-container-components/container-base.component';
import PageHeader from '../components/page-header.component';
import NotificationsTable from '../components/tables-pages-component/notifications-table.component';

const containerStyle = {
  minHeight: '100vh',
  minWidth: '90vh',
};


function Users() {
  return (
    <BaseContainer>  
      <div style={containerStyle}>
        <div className="container mx-auto px-4 py-8">
          <PageHeader title="Requerimientos pendientes" userName="Nombre de usuario" marginTop='-10'/>
          <NotificationsTable></NotificationsTable>
        </div>
      </div>
    </BaseContainer>
  );
}

export default Users;

