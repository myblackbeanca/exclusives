import React, { useState } from 'react';
import { MapPin, Calendar, Users, Star, Hotel, Coffee, Car, Music, Ticket, MessageCircle, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import HexagonImage from '../components/HexagonImage';

const FestivalTickets: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [expandedAmenity, setExpandedAmenity] = useState<string | null>(null);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const ticketTiers = [
    {
      name: 'MINY Early Bird',
      price: 199,
      regularPrice: 299,
      perks: [
        'Priority entrance',
        'Access to all stages',
        'Exclusive MINY holder lounge',
        'Limited edition festival merch'
      ]
    },
    {
      name: 'MINY VIP Experience',
      price: 399,
      regularPrice: 599,
      perks: [
        'All Early Bird perks',
        'VIP viewing areas',
        'Backstage tours',
        'Artist meet & greets',
        'Complimentary food & drinks'
      ]
    },
    {
      name: 'MINY Ultimate Access',
      price: 799,
      regularPrice: 1299,
      perks: [
        'All VIP perks',
        'Private golf cart transportation',
        'On-stage viewing for one performance',
        'Exclusive afterparty access',
        'Personal concierge service'
      ]
    }
  ];

  const lineup = {
    'Nov 15': [
      {
        time: '4:00 PM',
        artist: 'Coota Brown',
        stage: 'Main Stage',
        image: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&q=80'
      },
      {
        time: '6:00 PM',
        artist: 'The Teeta',
        stage: 'Sunset Stage',
        image: 'https://images.unsplash.com/photo-1534385842125-8c9ad0bd123c?auto=format&fit=crop&q=80'
      }
    ],
    'Nov 16': [
      {
        time: '5:00 PM',
        artist: 'Rachel Bard',
        stage: 'Main Stage',
        image: 'https://images.unsplash.com/photo-1516016096211-4d1665a00c7a?auto=format&fit=crop&q=80'
      },
      {
        time: '7:00 PM',
        artist: 'Kevin Diamond',
        stage: 'Echo Stage',
        image: 'https://images.unsplash.com/photo-1549834125-82d3c48159a3?auto=format&fit=crop&q=80'
      }
    ]
  };

  const amenities = [
    {
      icon: Coffee,
      title: 'Food & Drinks',
      description: 'Gourmet food trucks, craft beverages, and exclusive VIP catering options',
      details: [
        'Local food vendors',
        'Craft beer garden',
        'VIP dining area',
        'Specialty cocktail bars'
      ]
    },
    {
      icon: Hotel,
      title: 'Accommodations',
      description: 'Partner hotels and luxury camping options with special MINY holder rates',
      details: [
        'Boutique hotels nearby',
        'Glamping experiences',
        'RV parking available',
        'Shuttle service included'
      ]
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Easy access with dedicated parking and shuttle services',
      details: [
        'VIP parking area',
        'Regular shuttle service',
        'Ride-share pickup zone',
        'Bike valet available'
      ]
    }
  ];

  const fanGroups = [
    {
      name: 'Early Birds Squad',
      members: 24,
      image: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&q=80'
    },
    {
      name: 'VIP Crew',
      members: 16,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80'
    },
    {
      name: 'Festival Veterans',
      members: 32,
      image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <>
      <SEOHelmet
        title="MINY Festival Tickets | Special Access"
        description="Get special-priced festival tickets exclusive to MINY holders. VIP access and unique perks included."
        path="/festival-tickets"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
            alt="Festival atmosphere"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MINY Festival
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Exclusive Access
              </span>
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-300 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>November 15-16, 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Austin Music Valley</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Limited MINY holder spots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Exclusive Ticket Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ticketTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-purple-900/20 rounded-lg p-6 transition-all hover:transform hover:scale-105 ${
                  selectedTier === tier.name ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedTier(tier.name)}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl font-bold">${tier.price}</span>
                    <span className="text-gray-400 line-through">${tier.regularPrice}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {tier.perks.map((perk, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-purple-400" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-6 py-3 rounded-lg transition-colors ${
                    selectedTier === tier.name
                      ? 'bg-purple-500 hover:bg-purple-600'
                      : 'bg-purple-900/40 hover:bg-purple-900/60'
                  }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Lineup */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Festival Lineup</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center space-x-4 mb-8">
              {Object.keys(lineup).map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    selectedDate === date
                      ? 'bg-purple-500'
                      : 'bg-purple-900/40 hover:bg-purple-900/60'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectedDate &&
                lineup[selectedDate as keyof typeof lineup].map((performance, index) => (
                  <div key={index} className="bg-purple-900/20 rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={performance.image}
                        alt={performance.artist}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold">{performance.artist}</h3>
                        <div className="flex items-center space-x-4 text-gray-300">
                          <span>{performance.time}</span>
                          <span>·</span>
                          <span>{performance.stage}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Planning */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Festival Amenities</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="bg-purple-900/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedAmenity(
                    expandedAmenity === amenity.title ? null : amenity.title
                  )}
                  className="w-full p-6 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-900/40 rounded-lg">
                      <amenity.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">{amenity.title}</h3>
                      <p className="text-gray-400">{amenity.description}</p>
                    </div>
                  </div>
                  {expandedAmenity === amenity.title ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {expandedAmenity === amenity.title && (
                  <div className="px-6 pb-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {amenity.details.map((detail, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-purple-400" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fan Groups */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Festival Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {fanGroups.map((group) => (
              <div key={group.name} className="bg-purple-900/20 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold">{group.name}</h3>
                    <p className="text-gray-300">{group.members} members</p>
                  </div>
                </div>
                <div className="p-4">
                  <button className="w-full py-2 bg-purple-900/40 rounded-lg hover:bg-purple-900/60 transition-colors flex items-center justify-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Join Group</span>
                  </button>
                </div>
              </div>
            ))}
            <div className="bg-purple-900/20 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <button
                onClick={() => setShowGroupModal(true)}
                className="p-4 bg-purple-900/40 rounded-full hover:bg-purple-900/60 transition-colors mb-4"
              >
                <Plus className="w-6 h-6" />
              </button>
              <h3 className="font-bold">Create New Group</h3>
              <p className="text-gray-400">Start your own festival crew</p>
            </div>
          </div>
        </div>
      </section>

      {/* Create Group Modal */}
      {showGroupModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-purple-900/90 p-8 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">Create Festival Group</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Group Name</label>
                <input
                  type="text"
                  className="w-full p-2 bg-black/50 border border-purple-500 rounded"
                  placeholder="Enter group name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  className="w-full p-2 bg-black/50 border border-purple-500 rounded"
                  rows={3}
                  placeholder="What's your group about?"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  className="flex-1 py-2 bg-purple-500 rounded hover:bg-purple-600 transition-colors"
                  onClick={() => setShowGroupModal(false)}
                >
                  Create Group
                </button>
                <button
                  className="flex-1 py-2 bg-purple-900/40 rounded hover:bg-purple-900/60 transition-colors"
                  onClick={() => setShowGroupModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FestivalTickets;