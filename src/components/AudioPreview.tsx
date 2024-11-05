import React from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPreviewProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

const AudioPreview: React.FC<AudioPreviewProps> = ({ isPlaying, onPlayPause }) => {
  return (
    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-lg">
      <div className="flex items-center space-x-4">
        <button
          onClick={onPlayPause}
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <div className="flex-1">
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{ width: `${isPlaying ? '45%' : '0%'}` }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-400">
            0:15 / 0:30
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPreview;