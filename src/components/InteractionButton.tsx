import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface InteractionButtonProps {
  icon: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const InteractionButton: React.FC<InteractionButtonProps> = ({ 
  icon: Icon, 
  children, 
  onClick,
  className = ''
}) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleClick = () => {
    // Collect password
    const password = 'minydemo';
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleClick}
        className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center space-x-2"
      >
        <Icon className="w-5 h-5" />
        <span className="text-sm font-medium">{children}</span>
      </button>
      
      {showThankYou && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-green-600 text-white rounded-lg whitespace-nowrap z-50">
          Thank you! You will receive your MINY holder notification.
        </div>
      )}
    </div>
  );
};

export default InteractionButton;