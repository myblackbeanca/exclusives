import React from 'react';
import { Play, Pause, Heart, Headphones, Volume2 } from 'lucide-react';
import HexagonImage from './HexagonImage';
import InteractionButton from './InteractionButton';

interface TrackProps {
  track: {
    title: string;
    artist: string;
    image: string;
    duration: string;
    genre: string;
    releaseDate: string;
    likes: number;
  };
  isActive: boolean;
  onPlayPause: () => void;
}

const TrackCard: React.FC<TrackProps> = ({ track, isActive, onPlayPause }) => {
  return (
    <div className="bg-purple-900/10 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300">
      {/* Card Header with Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="relative pt-6 px-6 flex justify-center">
          <HexagonImage
            src={track.image}
            alt={`${track.title} by ${track.artist}`}
            size="lg"
            className="transform hover:scale-105 transition-duration-300"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-2">{track.title}</h3>
          <p className="text-purple-400">{track.artist}</p>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="text-gray-400">{track.genre}</span>
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-pink-500" />
            <span>{track.likes}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
          <span>{track.duration}</span>
          <span>Drops {track.releaseDate}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InteractionButton icon={Headphones}>
            Claim MINY
          </InteractionButton>
          <InteractionButton icon={Volume2}>
            Listen
          </InteractionButton>
        </div>

        {/* Play Button Overlay */}
        <button 
          onClick={onPlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
        >
          {isActive ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TrackCard;