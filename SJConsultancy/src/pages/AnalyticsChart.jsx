import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Q1', Analytics: 400 },
  { name: 'Q2', Analytics: 700 },
  { name: 'Q3', Analytics: 200 },
  { name: 'Q4', Analytics: 900 },
];

const AnalyticsChart = () => {
  return (
    <div className="analytics-chart p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Data Analytics Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Analytics" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
