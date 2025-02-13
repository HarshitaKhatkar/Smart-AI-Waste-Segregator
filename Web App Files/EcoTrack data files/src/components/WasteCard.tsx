import React, { useState } from 'react';
import { WasteCategory } from '../types';

interface WasteCardProps {
  category: WasteCategory;
  icon: React.ReactNode;
}

const WasteCard: React.FC<WasteCardProps> = ({ category, icon }) => {
  const [showInfo, setShowInfo] = useState(false);

  const getStatusColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-indigo-500';
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border-l-4 border-indigo-500"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-indigo-600">{icon}</div>
        {category.storagePercentage >= 90 && (
          <span className="absolute top-2 right-2 text-red-500 text-sm font-semibold">
            Storage Full!
          </span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-indigo-900">{category.name}</h3>
      
      <div className="mb-4">
        <div className="w-full bg-gray-100 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${getStatusColor(category.storagePercentage)}`}
            style={{ width: `${category.storagePercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-sm text-indigo-600">{category.storagePercentage}% full</span>
          <span className="text-sm text-indigo-600">{category.weight} kg</span>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-white/95 rounded-lg p-6 transition-opacity duration-300 ${
          showInfo ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <p className="text-indigo-800">{category.description}</p>
      </div>
    </div>
  );
};

export default WasteCard;