import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  description?: string;
  footer?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  footer,
  className = '',
}) => {
  return (
    <div className={`bg-white shadow overflow-hidden rounded-lg ${className}`}>
      {(title || description) && (
        <div className="px-4 py-5 sm:px-6">
          {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      )}
      
      <div className={`${title || description ? 'border-t border-gray-200' : ''} px-4 py-5 sm:p-6`}>
        {children}
      </div>
      
      {footer && (
        <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
