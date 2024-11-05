import React from 'react';
import HexagonGrid from './HexagonGrid';

const MixtapeGrid: React.FC = () => {
  const mixtapes = [
    {
      src: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80',
      alt: 'Summer Vibes Mixtape',
      title: 'Summer Vibes',
      subtitle: 'Mixed by Coota Brown'
    },
    {
      src: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&q=80',
      alt: 'Underground Beats Mixtape',
      title: 'Underground Beats',
      subtitle: 'Mixed by The Teeta'
    },
    {
      src: 'https://images.unsplash.com/photo-1482442120256-9c03866de390?auto=format&fit=crop&q=80',
      alt: 'Late Night Sessions Mixtape',
      title: 'Late Night Sessions',
      subtitle: 'Mixed by Rachel Bard'
    }
  ];

  return (
    <div className="relative">
      <HexagonGrid 
        images={mixtapes}
        columns={3}
        gap={8}
        size="lg"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/20 to-pink-900/20 animate-pulse" />
    </div>
  );
};

export default MixtapeGrid;