import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from 'recharts';

const impactData = [
  { name: 'Health', value: 400 },
  { name: 'Education', value: 300 },
  { name: 'Water & Sanitation', value: 200 },
  { name: 'Livelihoods', value: 180 },
];

const kpiData = [
  { month: 'Jan', beneficiaries: 1200 },
  { month: 'Feb', beneficiaries: 2100 },
  { month: 'Mar', beneficiaries: 1800 },
  { month: 'Apr', beneficiaries: 2500 },
  { month: 'May', beneficiaries: 3000 },
];

const COLORS = ['#34d399', '#60a5fa', '#fbbf24', '#f87171'];

const MEDashboard = () => {
  return (
    <div className="my-20 px-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">📈 M&E Dashboard Snapshot</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* KPI Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow border">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">📊 Beneficiaries Reached Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={kpiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="beneficiaries" stroke="#34d399" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Impact Area Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow border">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">🧭 Program Impact Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={impactData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {impactData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36}/>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MEDashboard;
