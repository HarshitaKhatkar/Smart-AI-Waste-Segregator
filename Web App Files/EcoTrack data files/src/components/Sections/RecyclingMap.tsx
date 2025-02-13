import React from 'react';
import { MapPin } from 'lucide-react';

const RecyclingMap: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-8 h-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-indigo-900 font-poppins">Recycling Centers</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <p className="text-gray-500">Map will be integrated here</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-gray-900">City Recycling Center</h3>
            <p className="text-sm text-gray-500">123 Green Street, Eco City</p>
            <div className="mt-2 flex gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded">Open Now</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">2.5 km away</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingMap;