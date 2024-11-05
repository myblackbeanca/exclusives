import React from 'react';
import HexagonGrid from './HexagonGrid';

const ArtistGrid: React.FC = () => {
  const artists = [
    {
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
      alt: 'DJ Coota Brown performing at a music festival',
      name: 'Coota Brown',
      genre: 'Electronic/House'
    },
    {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80',
      alt: 'The Teeta in studio session',
      name: 'The Teeta',
      genre: 'Hip Hop'
    },
    {
      src: 'https://images.unsplash.com/photo-1529518969858-8baa65152fc8?auto=format&fit=crop&q=80',
      alt: 'Rachel Bard live performance',
      name: 'Rachel Bard',
      genre: 'Alternative Rock'
    },
    {
      src: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80',
      alt: 'Kevin Diamond performing',
      name: 'Kevin Diamond',
      genre: 'Indie Rock'
    },
    {
      src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80',
      alt: 'Vivek Khanna in concert',
      name: 'Vivek Khanna',
      genre: 'World Fusion'
    },
    {
      src: 'https://images.unsplash.com/photo-1517230878791-4d28214057c2?auto=format&fit=crop&q=80',
      alt: 'Akbar Cowell studio session',
      name: 'Akbar Cowell',
      genre: 'Jazz Fusion'
    }
  ];

  return (
    <div className="relative">
      <HexagonGrid 
        images={artists.map(artist => ({
          src: artist.src,
          alt: artist.alt,
          title: artist.name,
          subtitle: artist.genre
        }))}
        columns={3}
        gap={8}
        size="lg"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/20 to-pink-900/20 animate-pulse" />
    </div>
  );
};

export default ArtistGrid;