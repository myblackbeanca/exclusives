import React, { useState } from 'react';
import { Heart, Share2, Gift, Music2, Users, Star, Twitter, Facebook } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import HexagonImage from '../components/HexagonImage';

const Fundraiser: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [showShareModal, setShowShareModal] = useState(false);

  const currentAmount = 75420;
  const goalAmount = 100000;
  const progress = (currentAmount / goalAmount) * 100;

  const rewards = [
    {
      level: 25,
      title: 'Digital Supporter',
      perks: ['Virtual shoutout', 'Digital badge', 'Exclusive wallpaper']
    },
    {
      level: 50,
      title: 'Music Enthusiast',
      perks: ['Previous rewards', 'Limited edition NFT', 'Behind-the-scenes content']
    },
    {
      level: 100,
      title: 'VIP Backer',
      perks: ['Previous rewards', 'Exclusive merch', 'Virtual meet & greet']
    },
    {
      level: 500,
      title: 'Producer Circle',
      perks: ['Previous rewards', 'Studio session access', 'Executive producer credit']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Music Education Program Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      quote: 'This funding has helped us bring music education to over 500 underprivileged students.'
    },
    {
      name: 'Marcus Chen',
      role: 'Independent Artist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      quote: 'The MINY community support allowed me to produce my first professional album.'
    }
  ];

  const topSupporters = [
    {
      name: 'Alex K.',
      amount: 2500,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
    },
    {
      name: 'Maria R.',
      amount: 1800,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80'
    },
    {
      name: 'James L.',
      amount: 1500,
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <>
      <SEOHelmet
        title="MINY Fundraiser | Support Music Innovation"
        description="Join MINY in supporting emerging artists and music education. Exclusive rewards for contributors."
        path="/fundraiser"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80"
            alt="Music education"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Future Musicians
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Support emerging artists and music education programs.
              Every contribution makes a difference in shaping the future of music.
            </p>

            {/* Progress Bar */}
            <div className="bg-purple-900/20 p-6 rounded-lg mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-2xl font-bold">${currentAmount.toLocaleString()}</span>
                <span className="text-gray-400">Goal: ${goalAmount.toLocaleString()}</span>
              </div>
              <div className="h-4 bg-purple-900/40 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-gray-400">
                Supported by {topSupporters.length} MINY holders
              </div>
            </div>

            {/* Donation Input */}
            <div className="bg-purple-900/20 p-6 rounded-lg">
              <div className="flex gap-4 mb-4">
                {[25, 50, 100, 500].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount)}
                    className={`flex-1 py-2 px-4 rounded transition-colors ${
                      donationAmount === amount
                        ? 'bg-purple-500'
                        : 'bg-purple-900/40 hover:bg-purple-900/60'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Contribute ${donationAmount}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Supporter Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rewards.map((reward) => (
              <div
                key={reward.level}
                className="bg-purple-900/20 rounded-lg p-6 hover:transform hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded">
                    ${reward.level}+
                  </div>
                  <Gift className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{reward.title}</h3>
                <ul className="space-y-2">
                  {reward.perks.map((perk, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-300">
                      <Star className="w-4 h-4 text-purple-400" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-purple-900/20 rounded-lg p-8">
                <div className="flex items-center space-x-6 mb-6">
                  <HexagonImage src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic">{testimonial.quote}</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Supporters */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Supporters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topSupporters.map((supporter, index) => (
              <div key={index} className="bg-purple-900/20 rounded-lg p-6 text-center">
                <div className="mb-4">
                  <HexagonImage src={supporter.image} alt={supporter.name} />
                </div>
                <h3 className="text-xl font-bold">{supporter.name}</h3>
                <p className="text-purple-400">${supporter.amount} contributed</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowShareModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center space-x-2 mx-auto"
            >
              <Share2 className="w-5 h-5" />
              <span>Share to Support</span>
            </button>
          </div>
        </div>
      </section>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-purple-900/90 p-8 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">Share & Earn Rewards</h3>
            <p className="text-gray-300 mb-6">
              Share this fundraiser with your network and earn exclusive rewards for each referral
              that contributes.
            </p>
            <div className="space-y-4">
              <button className="w-full py-3 bg-[#1DA1F2] rounded flex items-center justify-center space-x-2">
                <Twitter className="w-5 h-5" />
                <span>Share on Twitter</span>
              </button>
              <button className="w-full py-3 bg-[#4267B2] rounded flex items-center justify-center space-x-2">
                <Facebook className="w-5 h-5" />
                <span>Share on Facebook</span>
              </button>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="mt-6 w-full py-2 text-gray-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Fundraiser;