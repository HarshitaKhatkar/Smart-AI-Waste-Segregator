import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  const baseStyles = `
    min-h-[44px] min-w-[44px]
    px-4 py-2
    rounded-2xl
    font-medium
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transform hover:scale-[1.02]
    active:scale-[0.98]
  `;

  const variantStyles = {
    primary: 'bg-[#7C9082] text-white hover:bg-[#2C4A3B]',
    secondary: 'bg-[#E5DCC5] text-[#2C4A3B] hover:bg-[#E8C097]'
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.button>
  );
}

export default Button;