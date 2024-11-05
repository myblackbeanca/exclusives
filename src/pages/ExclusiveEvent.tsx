import React, { useState } from 'react';
import { Calendar, MapPin, Users, Gift, MessageCircle, Star } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import Countdown from '../components/Countdown';
import HexagonImage from '../components/HexagonImage';

const ExclusiveEvent: React.FC = () => {
  const [isRSVPed, setIsRSVPed] = useState(false);
  const [selectedSetlist, setSelectedSetlist] = useState<string>('');

  const rewards = [
    {
      title: 'Early Bird',
      description: 'Private Meet & Greet',
      icon: Users,
    },
    {
      title: 'First 50',
      description: 'Exclusive Q&A Session',
      icon: MessageCircle,
    },
    {
      title: 'VIP Access',
      description: 'Backstage Tour',
      icon: Star,
    },
  ];

  const setlists = [
    'Classic Hits & New Releases',
    'Fan Favorites Mix',
    'Underground Gems',
    'Greatest Hits Collection',
  ];

  return (
    <>
      <SEOHelmet
        title="MINY Exclusive Event | VIP Access to Live Performances"
        description="Get exclusive access to MINY's live events featuring comedy shows, DJ sets, and rock performances. Special perks for MINY holders."
        path="/exclusive-event"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Event venue"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MINY Summer
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Exclusive Showcase
              </span>
            </h1>
            <div className="flex items-center space-x-4 text-gray-300 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>November 15, 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>The Grand Theater, Austin</span>
              </div>
            </div>
            <div className="mb-8">
              <Countdown targetDate="2024-11-15T20:00:00" />
            </div>
            <button
              onClick={() => setIsRSVPed(!isRSVPed)}
              className={`px-8 py-4 rounded-lg transition-colors flex items-center space-x-2 ${
                isRSVPed
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
              }`}
            >
              {isRSVPed ? (
                <>
                  <Star className="w-5 h-5" />
                  <span>RSVP Confirmed!</span>
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  <span>RSVP Now</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Early RSVP Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="bg-purple-900/20 rounded-lg p-8 text-center hover:transform hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <reward.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{reward.title}</h3>
                <p className="text-gray-400">{reward.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Virtual Venue Tour</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">The Grand Theater</h3>
              <p className="text-gray-300">
                Experience luxury and intimacy in Austin's premier music venue. The Grand Theater
                offers state-of-the-art acoustics and an unforgettable atmosphere for our exclusive
                MINY showcase.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>Premium sound system</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>Intimate setting with perfect sightlines</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>VIP lounges and private areas</span>
                </li>
              </ul>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
                alt="The Grand Theater interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Setlist Poll */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Vote for the Setlist</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {setlists.map((setlist) => (
                <button
                  key={setlist}
                  onClick={() => setSelectedSetlist(setlist)}
                  className={`w-full p-4 rounded-lg transition-colors flex items-center justify-between ${
                    selectedSetlist === setlist
                      ? 'bg-purple-600'
                      : 'bg-purple-900/20 hover:bg-purple-900/40'
                  }`}
                >
                  <span>{setlist}</span>
                  {selectedSetlist === setlist && <Star className="w-5 h-5" />}
                </button>
              ))}
            </div>
            {selectedSetlist && (
              <div className="mt-6 text-center text-green-400">
                Thanks for voting! Your choice helps shape the show.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Message Wall */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leave a Message for the Artists</h2>
          <div className="max-w-2xl mx-auto">
            <textarea
              className="w-full p-4 bg-black/50 border border-purple-500 rounded-lg text-white resize-none"
              rows={4}
              placeholder="Share your excitement or song requests..."
            />
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExclusiveEvent;