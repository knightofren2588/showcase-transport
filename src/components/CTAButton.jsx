import React from 'react';

const CTAButton = ({ children, onClick, to, variant = 'primary', className = '' }) => {
  const baseStyles = "font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl duration-200";
  
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <a href={to} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default CTAButton;

