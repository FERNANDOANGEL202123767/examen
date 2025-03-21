import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GraficoBarras = ({ datos }) => {
  return (
    <div className="flex justify-center">
      <BarChart width={600} height={300} data={datos}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categoria" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cantidad" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default GraficoBarras;