import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function DashboardDailyChart() {
  const chartDiaRef = useRef(null);

  useEffect(() => {
    const chartDia = new Chart(chartDiaRef.current, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
        datasets: [{
          label: 'Requerimientos',
          data: [20, 25, 30, 40, 35, 20, 22, 28, 40, 38, 25, 28, 20, 22, 30, 40],
          backgroundColor: 'rgba(14, 54, 111, 0.82)',
          borderColor: 'rgb(16, 41, 170)',
          borderWidth: 1,
        }, {
          label: 'Solicitudes',
          data: [15, 20, 25, 35, 30, 18, 20, 25, 35, 33, 20, 25, 18, 20, 25, 35],
          backgroundColor: 'rgba(21, 86, 56, 0.7)',
          borderColor: 'rgb(16, 94, 21)',
          borderWidth: 1,
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
      chartDia.destroy();
    };
  }, []);

  return <canvas ref={chartDiaRef} style={{ width: '100%' }} />;
}

export default DashboardDailyChart;