import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { categories } from '../data/wasteCategories';

ChartJS.register(ArcElement, Tooltip, Legend);

const WasteDistributionChart: React.FC = () => {
  const data = {
    labels: categories.map(cat => cat.name),
    datasets: [
      {
        data: categories.map(cat => cat.weight),
        backgroundColor: [
          'rgba(0, 240, 255, 0.8)',  // Neon Blue
          'rgba(176, 38, 255, 0.8)',  // Neon Purple
          'rgba(255, 38, 185, 0.8)',  // Neon Pink
          'rgba(0, 255, 128, 0.8)',   // Neon Green
        ],
        borderColor: [
          '#00F0FF',
          '#B026FF',
          '#FF26B9',
          '#00FF80',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#FFFFFF',
          font: {
            size: 12,
          },
          padding: 15,
        },
      },
    },
    maintainAspectRatio: true,
    width: 200,  // Smaller fixed width
    height: 200, // Smaller fixed height
  };

  return (
    <div className="bg-card-bg p-6 rounded-xl shadow-neon w-[300px]">
      <h3 className="text-lg font-semibold text-neon-blue mb-4">Distribution</h3>
      <div className="flex justify-center">
        <div className="w-[200px] h-[200px]">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default WasteDistributionChart;