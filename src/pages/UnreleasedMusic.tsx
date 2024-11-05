import React, { useState } from 'react';
import { Play, Pause, Clock, Music2, Mic, Star, Calendar, Headphones, Download, Heart, Share2, Volume2 } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import AudioPreview from '../components/AudioPreview';
import LyricsGame from '../components/LyricsGame';
import CommentWall from '../components/CommentWall';
import HexagonImage from '../components/HexagonImage';
import InteractionButton from '../components/InteractionButton';
import TrackCard from '../components/TrackCard';

const UnreleasedMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  const unreleasedTracks = [
    {
      title: "Midnight Dreams",
      artist: "Coota Brown",
      image: "https://images.unsplash.com/photo-1571778654803-67f49dd79754?auto=format&fit=crop&q=80",
      duration: "3:45",
      genre: "Electronic",
      releaseDate: "Nov 15, 2024",
      likes: 1243
    },
    {
      title: "Urban Echo",
      artist: "The Teeta",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&q=80",
      duration: "4:12",
      genre: "Hip Hop",
      releaseDate: "Nov 18, 2024",
      likes: 892
    },
    {
      title: "Neon Lights",
      artist: "Rachel Bard",
      image: "https://images.unsplash.com/photo-1482442120256-9c03866de390?auto=format&fit=crop&q=80",
      duration: "3:58",
      genre: "Alternative",
      releaseDate: "Nov 20, 2024",
      likes: 1567
    }
  ];

  const mixtapes = [
    {
      title: "Summer Underground",
      artist: "Coota Brown",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80",
      tracks: 12,
      duration: "58:24",
      mood: "Energetic",
      description: "A fusion of underground electronic beats and summer vibes"
    },
    {
      title: "Late Night Tales",
      artist: "The Teeta",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&q=80",
      tracks: 10,
      duration: "45:18",
      mood: "Chill",
      description: "Deep cuts and rare grooves for the night owls"
    },
    {
      title: "Urban Frequencies",
      artist: "Rachel Bard",
      image: "https://images.unsplash.com/photo-1482442120256-9c03866de390?auto=format&fit=crop&q=80",
      tracks: 14,
      duration: "62:35",
      mood: "Dynamic",
      description: "An eclectic mix of city sounds and urban rhythms"
    }
  ];

  return (
    <>
      <SEOHelmet
        title="MINY Unreleased Music | Exclusive Early Access"
        description="Get early access to unreleased tracks from your favorite independent artists. Exclusive to MINY holders."
        path="/unreleased-music"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
            alt="Recording studio"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exclusive
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Unreleased Tracks
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to experience new music from your favorite independent artists.
              Available only to MINY holders.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Drops Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Drops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {unreleasedTracks.map((track, index) => (
              <TrackCard
                key={index}
                track={track}
                isActive={activeTrack === index}
                onPlayPause={() => setActiveTrack(activeTrack === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mixtapes Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Mixtapes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mixtapes.map((mixtape, index) => (
              <div 
                key={index}
                className="bg-purple-900/10 rounded-lg p-6 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <HexagonImage
                      src={mixtape.image}
                      alt={`${mixtape.title} by ${mixtape.artist}`}
                      size="lg"
                    />
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{mixtape.title}</h3>
                    <p className="text-purple-400 mb-2">{mixtape.artist}</p>
                    <p className="text-sm text-gray-300 mb-4">{mixtape.description}</p>
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

                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <InteractionButton icon={Headphones} className="flex-1">
                      Claim MINY
                    </InteractionButton>
                    <InteractionButton icon={Volume2} className="flex-1">
                      Listen
                    </InteractionButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fan Engagement Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Fan Zone</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LyricsGame />
            <CommentWall />
          </div>
        </div>
      </section>
    </>
  );
};

export default UnreleasedMusic;