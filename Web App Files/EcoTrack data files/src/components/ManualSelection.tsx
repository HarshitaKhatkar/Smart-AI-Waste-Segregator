import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const categories = [
  { id: 'recyclable', name: 'Recyclable' },
  { id: 'non-recyclable', name: 'Non-Recyclable' },
  { id: 'organic', name: 'Organic' },
  { id: 'hazardous', name: 'Hazardous' }
];

const ManualSelection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategory) {
      console.log('Manual category selected:', selectedCategory);
      // Handle the manual selection
      setSelectedCategory('');
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <AlertCircle className="w-6 h-6" />
        <h2 className="text-2xl font-semibold">Manual Category Selection</h2>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="space-y-4">
          {categories.map((category) => (
            <label
              key={category.id}
              className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="hidden"
              />
              <span className="ml-2 text-gray-700">{category.name}</span>
            </label>
          ))}

          <button
            type="submit"
            disabled={!selectedCategory}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Confirm Selection
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManualSelection;