import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 'md', className = '' }) => {
  const IconComponent = LucideIcons[name];
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <IconComponent className={`${sizeClasses[size]} ${className}`} />
  );
}

export default Icon;