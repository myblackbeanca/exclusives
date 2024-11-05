import React, { useState } from 'react';
import { Play, Pause, Clock, Music2, Volume2, Share2 } from 'lucide-react';
import HexagonImage from './HexagonImage';
import InteractionButton from './InteractionButton';

interface MixtapeProps {
  mixtape: {
    title: string;
    artist: string;
    image: string;
    tracks: number;
    duration: string;
    mood: string;
    description: string;
  };
}

const MixtapeCard: React.FC<MixtapeProps> = ({ mixtape }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div 
      className="group relative bg-purple-900/10 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-purple-900/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/5 rounded-full animate-spin-slow"
            style={{
              top: `${i * 20}%`,
              left: `${i * 20}%`,
              right: `${i * 20}%`,
              bottom: `${i * 20}%`,
              animationDuration: `${20 + i * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Mixtape Image */}
        <div className="relative mb-6">
          <HexagonImage
            src={mixtape.image}
            alt={`${mixtape.title} by ${mixtape.artist}`}
            size="lg"
            className="mx-auto transform group-hover:scale-105 transition-duration-300"
          />
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="bg-black/60 rounded-full p-4 backdrop-blur-sm">
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8" />
              )}
            </div>
          </button>
        </div>

        {/* Mixtape Info */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">{mixtape.title}</h3>
          <p className="text-purple-400 mb-4">{mixtape.artist}</p>
          <p className="text-gray-300 text-sm mb-4">{mixtape.description}</p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Music2 className="w-4 h-4 mr-1" />
              <span>{mixtape.tracks} tracks</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{mixtape.duration}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <InteractionButton icon={Volume2}>
            Listen Now
          </InteractionButton>
          <InteractionButton icon={Share2}>
            Share
          </InteractionButton>
        </div>

        {/* Mood Tag */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs backdrop-blur-sm">
            {mixtape.mood}
          </span>
        </div>
      </div>

      {/* Hover Effects */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : ''
        }`}
      />
    </div>
  );
};

export default MixtapeCard;