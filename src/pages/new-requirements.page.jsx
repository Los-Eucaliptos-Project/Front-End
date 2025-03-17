import React from 'react';
import BaseContainer from '../components/main-container-components/container-base.component';
import PageHeader from '../components/page-header.component';
import NewRequirementsForm from '../forms/pending-requirements-form/new-requirements-form/new-requirements-form.container';


const containerStyle = {
  minHeight: '100vh',
  minWidth: '90vh',
};


function NewRequirements() {
  return (
    <BaseContainer>  
      <div style={containerStyle}>
      <div style={{ display: 'solid', justifyContent: 'space-between', alignItems: 'right', padding: '10px' }}>
        <div className="container mx-auto px-4 py-8">
          <PageHeader title="Nuevo requerimiento" userName="Nombre de usuario" marginTop='-10'/>
        </div>
        <NewRequirementsForm></NewRequirementsForm>

        </div>
      </div>
    </BaseContainer>
  );
}

export default NewRequirements;

