import React from 'react';
import HexagonImage from './HexagonImage';

interface HexagonGridProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
  }>;
  columns?: number;
  gap?: number;
  size?: 'sm' | 'md' | 'lg';
}

const HexagonGrid: React.FC<HexagonGridProps> = ({ 
  images, 
  columns = 3,
  gap = 4,
  size = 'md'
}) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: `${gap * 0.25}rem`
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div style={gridStyle}>
        {images.map((image, index) => (
          <div 
            key={index}
            className="group flex flex-col items-center justify-center"
            style={{
              transform: index % 2 === 0 ? 'translateY(0)' : 'translateY(25%)',
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            <HexagonImage
              src={image.src}
              alt={image.alt}
              size={size}
              className="transform hover:scale-105 transition-transform duration-300"
            />
            {image.title && (
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg">{image.title}</h3>
                {image.subtitle && (
                  <p className="text-sm text-purple-400">{image.subtitle}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonGrid;