import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function DashboardMonthlyChart({ years }) {
  const chartMesRef = useRef(null);

  useEffect(() => {
    const chartMes = new Chart(chartMesRef.current, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
          label: 'Requerimientos',
          data: [10, 15, 20, 25, 30, 35, 30, 25, 20, 15, 10, 5],
          backgroundColor: 'rgba(10, 84, 28, 0.49)',
          borderColor: 'rgb(10, 102, 65)',
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        }, {
          label: 'Solicitudes',
          data: [5, 10, 15, 20, 25, 30, 25, 20, 15, 10, 5, 0],
          backgroundColor: 'rgba(15, 35, 190, 0.56)',
          borderColor: 'rgb(14, 27, 146)',
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chartMes.destroy();
    };
  }, []);

  return <canvas ref={chartMesRef} style={{ width: '100%' }} />;
}

export default DashboardMonthlyChart;