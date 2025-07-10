import React from 'react';
import { COLORS } from '../../utils/constants';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  icon: Icon,
  disabled = false,
  className = '' 
}) => {
  const baseClasses = "font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center space-x-2";
  
  const variantClasses = {
    primary: `bg-gradient-to-r ${COLORS.PRIMARY.BLUE} ${COLORS.HOVER.BLUE} text-white`,
    secondary: `bg-gradient-to-r ${COLORS.PRIMARY.PURPLE} ${COLORS.HOVER.PURPLE} text-white`,
    tertiary: `bg-gradient-to-r ${COLORS.PRIMARY.GRAY} ${COLORS.HOVER.GRAY} text-white`
  };

  const sizeClasses = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-6",
    large: "py-4 px-8 text-lg"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button 
      onClick={onClick} 
      className={classes}
      disabled={disabled}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;