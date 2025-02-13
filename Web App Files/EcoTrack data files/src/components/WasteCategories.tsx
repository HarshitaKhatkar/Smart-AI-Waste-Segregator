import React from 'react';
import { Recycle, Trash2, Leaf, AlertTriangle } from 'lucide-react';
import WasteCard from './WasteCard';
import { categories } from '../data/wasteCategories';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'recycle':
      return <Recycle className="w-8 h-8" />;
    case 'trash':
      return <Trash2 className="w-8 h-8" />;
    case 'leaf':
      return <Leaf className="w-8 h-8" />;
    case 'alert':
      return <AlertTriangle className="w-8 h-8" />;
    default:
      return null;
  }
};

const WasteCategories: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map((category) => (
        <WasteCard
          key={category.id}
          category={category}
          icon={getIcon(category.icon)}
        />
      ))}
    </div>
  );
};

export default WasteCategories;