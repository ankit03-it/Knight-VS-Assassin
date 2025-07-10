import React from 'react';

const Icon = ({ 
  IconComponent, 
  size = 'medium', 
  color = 'text-white',
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
    xlarge: 'w-12 h-12'
  };

  const classes = `${sizeClasses[size]} ${color} ${className}`;

  return <IconComponent className={classes} />;
};

export default Icon;