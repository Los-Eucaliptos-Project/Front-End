import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

const COLORS = ['#2c4261', '#1a56a8', '#5395ee'];

export default class DashboardPieChart extends PureComponent {
  render() {
    return (
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={300}
          cy={100}ñ
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
        <text
          x={300}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: 24, fontWeight: 'bold', fill: 'black' }}
        >
          12
        </text>
      </PieChart>
    );
  }
}
