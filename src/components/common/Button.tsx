import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  onClick 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg flex items-center';
  const primaryStyles = 'bg-green-600 hover:bg-green-700';
  const secondaryStyles = 'border border-green-400 text-green-400 hover:bg-green-400/20';

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variant === 'primary' ? primaryStyles : secondaryStyles} 
        ${className}
      `}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};