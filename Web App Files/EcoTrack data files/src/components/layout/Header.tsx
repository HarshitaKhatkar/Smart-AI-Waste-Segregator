import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#7C9082] text-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="w-6 h-6" />
          <h1 className="font-montserrat font-bold text-2xl">S.A.I.B</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;