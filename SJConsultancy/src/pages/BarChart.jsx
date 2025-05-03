import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Example data
const data = [
  { month: 'Jan', customers: 120 },
  { month: 'Feb', customers: 200 },
  { month: 'Mar', customers: 250 },
  { month: 'Apr', customers: 300 },
  { month: 'May', customers: 350 },
];

const CustomerGrowthChart = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Customer Growth Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="customers" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerGrowthChart;
