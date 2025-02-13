import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-white
      rounded-2xl
      shadow-[0_2px_4px_rgba(0,0,0,0.08)]
      p-4
      transition-all duration-300
      hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)]
      ${className}
    `}>
      {children}
    </div>
  );
}

export default Card;