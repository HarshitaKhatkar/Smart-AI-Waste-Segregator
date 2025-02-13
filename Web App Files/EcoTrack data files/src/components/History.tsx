import React from 'react';
import { Clock } from 'lucide-react';

const historyData = [
  {
    id: '1',
    category: 'Recyclable',
    weight: 0.5,
    timestamp: '2024-03-10T10:30:00'
  },
  {
    id: '2',
    category: 'Organic',
    weight: 1.2,
    timestamp: '2024-03-10T10:15:00'
  },
  // Add more history entries as needed
];

const History: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-6 h-6" />
        <h2 className="text-2xl font-semibold">History Log</h2>
      </div>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Weight (kg)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {historyData.map((entry) => (
                <tr key={entry.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(entry.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.weight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;