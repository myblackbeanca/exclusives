import React, { useState } from 'react';
import { Music2, Play, Pause, MessageCircle, Share2, Heart, Download, Calendar, Bell } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import Countdown from '../components/Countdown';
import AudioPreview from '../components/AudioPreview';
import LyricsGame from '../components/LyricsGame';
import CommentWall from '../components/CommentWall';
import EventCarousel from '../components/EventCarousel';
import ArtistGrid from '../components/ArtistGrid';
import HexagonImage from '../components/HexagonImage';

const HomePage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <>
      <SEOHelmet
        title="MINY Exclusives: Be the First to Hear!"
        description="Join the MINY community for exclusive access to unreleased tracks, live events, and special performances from top artists in comedy, DJ, and rock music."
        path="/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80"
            alt="Concert background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            MINY Holder Exclusive:
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Unreleased Music Drop
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Be the first to experience new tracks from our incredible lineup of artists.
            Dropping November 15, 2024.
          </p>
          
          <Countdown targetDate="2024-11-15T00:00:00" />
          
          <button className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center space-x-2 mx-auto">
            <Bell className="w-5 h-5" />
            <span>Reserve Your Exclusive Listen</span>
          </button>
        </div>
      </section>

      {/* Sneak Peek Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Sneak Peek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <AudioPreview isPlaying={isPlaying} onPlayPause={() => setIsPlaying(!isPlaying)} />
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Behind the Scenes</h3>
                <p className="text-gray-400">
                  "This track was a journey, and I can't wait to share it with my biggest supporters!"
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
                alt="Recording studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Artists</h2>
          <ArtistGrid />
        </div>
      </section>

      {/* Fan Zone Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Fan Zone</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <LyricsGame />
            <CommentWall />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">More MINY Exclusives</h2>
          <EventCarousel />
        </div>
      </section>
    </>
  );
};

export default HomePage;