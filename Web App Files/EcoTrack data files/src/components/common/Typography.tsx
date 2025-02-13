import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'body' | 'caption';
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'body',
  className = '' 
}) => {
  const styles = {
    h1: 'text-2xl leading-tight font-bold font-montserrat',
    h2: 'text-lg leading-snug font-semibold font-montserrat',
    body: 'text-base leading-relaxed',
    caption: 'text-sm leading-normal text-gray-600'
  };

  return (
    <div className={`${styles[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default Typography;