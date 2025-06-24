import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const GraficoBarras = ({ datos }) => {
  return (
    <div className="flex justify-center">
      <BarChart width={600} height={300} data={datos}>
        <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" />
        <XAxis dataKey="categoria" tick={{ fill: '#000000', fontSize: 14 }} />
        <YAxis domain={[0, 8]} ticks={[0, 2, 4, 6, 8]} tick={{ fill: '#000000', fontSize: 14 }} />
        <Tooltip
          contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }}
          labelStyle={{ color: '#000000' }}
        />
        <Bar dataKey="cantidad" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default GraficoBarras;
