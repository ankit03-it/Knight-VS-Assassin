import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true 
}) => {
  const baseClasses = "backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white/10 border-white/20",
    blue: "bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-400/30",
    purple: "bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-400/30",
    gray: "bg-gradient-to-br from-gray-600/20 to-gray-800/20 border-gray-400/30"
  };

  const hoverClasses = {
    default: "hover:bg-white/20",
    blue: "hover:from-blue-600/30 hover:to-blue-800/30",
    purple: "hover:from-purple-600/30 hover:to-purple-800/30",
    gray: "hover:from-gray-600/30 hover:to-gray-800/30"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${hover ? hoverClasses[variant] : ''} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
