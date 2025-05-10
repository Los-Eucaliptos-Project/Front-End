  import React, { useRef, useEffect } from 'react';
  import BaseContainer from '../components/main-container-components/container-base.component';
  import DashboardPieChart from '../components/dashboard-components/dashboard-pie-chart.component';
  import DashboardMonthlyChart from '../components/dashboard-components/dashboard-monthly-chart.component'; 
  import DashboardDailyChart from '../components/dashboard-components/dashboard-daily-chart.component';
  import SelectionMonth from '../components/selection-components/selection-month.component';
  import SelectionYear from '../components/selection-components/selection-year.component';
  import PageHeader from '../components/page-header.component';
  import styles from '../modules/page.module.css'
  import {CardStyle, CardTitleStyle, FlexStyle, SelectStyle } from '../styled/dashboard.styles'

  function Dashboard() {

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

    useEffect(() => {
      return () => {
        chartDia.destroy();
      };
    }, []);

    return (
      <BaseContainer>
      <div className={styles.containerStyle}>
          <div className="container mx-auto px-4 py-8">
          <PageHeader title="Dashboard" userName="Nombre de usuario" marginTop='10'/>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={CardStyle}>
              <h2 style={{ ...CardTitleStyle, color: '#2b3e90' }}>Requerimientos en cola</h2>
                <div style={FlexStyle}>
                  <div style={{ width: '600px', height: '150px' }}>
                    <DashboardPieChart />
                  </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <div style={FlexStyle}>
                    <div style={{ backgroundColor: '#2b3e90', width: '1rem', height: '1rem', borderRadius: '50%', marginRight: '0.5rem' }}></div>
                    <span style={{ color: 'black' }}>Requerimientos</span>
                    <div style={{ backgroundColor: '#2f9bea', width: '1rem', height: '1rem', borderRadius: '50%', marginLeft: '1rem', marginRight: '0.5rem' }}></div>
                    <span style={{ color: 'black' }}>Solicitudes</span>
                    <div style={{ backgroundColor: '#82b1d3', width: '1rem', height: '1rem', borderRadius: '50%', marginLeft: '1rem', marginRight: '0.5rem' }}></div>
                    <span style={{ color: 'black' }}>Todos los pendientes</span>
                  </div>
                </div>
              </div>

              <div style={CardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h2 style={{ CardTitleStyle, color: '#2b3e90' }}>Requerimientos por mes</h2>
                  <SelectionYear years={years} selectStyle={SelectStyle} /> 
                </div>
                <div style={{ height: '12rem', borderRadius: '0.375rem', display: 'flex', justifyContent: 'center' }}>
                  <DashboardMonthlyChart years={years} /> 
                </div>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ ...CardStyle, marginTop: '2rem', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h2 style={{ CardTitleStyle, color: '#2b3e90' }}>Requerimientos por día</h2>
                  <div style={{ display: 'flex' }}>
                  <SelectionYear years={years} selectStyle={SelectStyle} /> 
                  <SelectionMonth selectStyle={SelectStyle} /> 
                  </div>
                </div>
                <div style={{ height: '20rem', borderRadius: '0.375rem', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <DashboardDailyChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    );
  }

  export default Dashboard;