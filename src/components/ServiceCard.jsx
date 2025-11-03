import React from 'react';

const ServiceCard = ({ icon, title, description, features = [] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-700 flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;

