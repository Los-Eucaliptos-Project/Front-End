import React from 'react';
import BaseContainer from '../components/main-container-components/container-base.component.jsx';
import PageHeader from '../components/page-header.component.jsx';
import PendingRequirementsTableContainer from '../components/tables-pages-component/pending-requirements-table.component.jsx';
import styles from '../modules/page.module.css'

function PendingRequirements() {
  return (
    <BaseContainer>  
      <div className={styles.containerStyle}>
        <div className="container mx-auto px-4 py-8">
          <PageHeader title="Requerimientos pendientes" userName="Nombre de usuario" marginTop='-10'/>
          <PendingRequirementsTableContainer></PendingRequirementsTableContainer>
        </div>
      </div>
    </BaseContainer>
  );
}

export default PendingRequirements;

