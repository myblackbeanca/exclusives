import React from 'react';

interface HexagonImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

const HexagonImage: React.FC<HexagonImageProps> = ({ 
  src, 
  alt, 
  size = 'md',
  className = '',
  hoverable = true,
  onClick
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16', // 1 inch
    md: 'w-24 h-24', // 1.5 inches
    lg: 'w-32 h-32', // 2 inches (MINY size)
    xl: 'w-40 h-40'  // 2.5 inches
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
      role="img"
      aria-label={alt}
      onClick={onClick}
    >
      {/* Vinyl record effect - outer ring */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-hexagon rotate-30 ${
          hoverable ? 'transform hover:scale-105 transition-transform duration-300' : ''
        }`}
      />
      
      {/* Vinyl grooves effect */}
      <div className="absolute inset-[4px] rounded-hexagon rotate-30 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 animate-pulse-slow opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white/10 rounded-full"
              style={{
                top: `${i * 20}%`,
                left: `${i * 20}%`,
                right: `${i * 20}%`,
                bottom: `${i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Image container */}
      <div className="absolute inset-[2px] overflow-hidden rounded-hexagon rotate-30">
        <img
          src={src}
          alt={alt}
          className={`w-[141%] h-[141%] object-cover -rotate-30 transform -translate-x-[15%] -translate-y-[15%] ${
            hoverable ? 'hover:scale-110 transition-transform duration-300' : ''
          }`}
          loading="lazy"
        />
      </div>

      {/* Center hole effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[12%] h-[12%] bg-black rounded-full border-2 border-white/20" />
      
      {/* Shine effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-hexagon rotate-30 opacity-0 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default HexagonImage;