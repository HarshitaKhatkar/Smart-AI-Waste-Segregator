import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, Trophy, Map, Leaf, User, HeadphonesIcon } from 'lucide-react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  { id: 'leaderboard', label: 'Leaderboard', icon: <Trophy className="w-5 h-5" /> },
  { id: 'map', label: 'Recycling Centers', icon: <Map className="w-5 h-5" /> },
  { id: 'challenges', label: 'Challenges', icon: <Leaf className="w-5 h-5" /> },
  { id: 'support', label: 'Support', icon: <HeadphonesIcon className="w-5 h-5" /> },
];

const Sidebar: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 p-2 bg-card-bg text-neon-blue rounded-lg hover:shadow-neon transition-all duration-300 z-50"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-card-bg border-r border-border-color shadow-neon transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-border-color">
          <h2 className="text-xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
            EcoTrack
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-neon-blue hover:text-neon-purple transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setActiveItem(item.id);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 flex items-center space-x-3 transition-all duration-300 relative group
                ${activeItem === item.id 
                  ? 'text-neon-blue bg-neon-blue/10 shadow-neon' 
                  : 'text-text-secondary hover:text-neon-blue hover:bg-neon-blue/5'}`}
            >
              <div className={`absolute left-0 w-1 h-full transition-all duration-300
                ${activeItem === item.id ? 'bg-neon-blue' : 'bg-transparent group-hover:bg-neon-blue/50'}`} 
              />
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;