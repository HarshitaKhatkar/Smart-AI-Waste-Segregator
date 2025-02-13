import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      max-w-screen-xl 
      mx-auto 
      px-6 
      py-8 
      grid 
      gap-8
      ${className}
    `}>
      {children}
    </div>
  );
}

export default Container;