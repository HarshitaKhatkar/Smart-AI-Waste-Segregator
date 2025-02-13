import React from 'react';
import WasteCategories from './WasteCategories';
import WasteDistributionChart from './WasteDistributionChart';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-900">Waste Storage Status</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WasteCategories />
        <WasteDistributionChart />
      </div>
    </div>
  );
};

export default Dashboard;