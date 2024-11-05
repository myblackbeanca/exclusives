import React, { useState } from 'react';
import { Menu, X, Music, ShoppingBag, Calendar, Heart, Ticket, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { 
      name: 'Exclusive Event', 
      href: '/exclusive-event', 
      icon: Calendar,
      description: 'Access exclusive MINY live events and performances'
    },
    { 
      name: 'Unreleased Music', 
      href: '/unreleased-music', 
      icon: Music,
      description: 'Preview unreleased tracks from top artists'
    },
    { 
      name: 'MINY Merch', 
      href: '/merch', 
      icon: ShoppingBag,
      description: 'Shop exclusive MINY merchandise at holder prices'
    },
    { 
      name: 'Fundraiser', 
      href: '/fundraiser', 
      icon: Heart,
      description: 'Support music causes with the MINY community'
    },
    { 
      name: 'Virtual Event', 
      href: '/virtual-event', 
      icon: Video,
      description: 'Join exclusive online events and performances'
    },
    { 
      name: 'Festival Tickets', 
      href: '/festival-tickets', 
      icon: Ticket,
      description: 'Get special access to festival tickets'
    },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/20">
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="MINY Home">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[30%] rotate-45" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Music className="w-6 h-6 text-white transform -rotate-45" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              MINY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group relative text-gray-300 hover:text-purple-400 transition-colors"
                aria-label={item.description}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/40 rounded-[30%] rotate-45 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon className="w-4 h-4 transform -rotate-45" />
                    </div>
                  </div>
                  <span className="text-xs font-medium">{item.name}</span>
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 hidden group-hover:block">
                  <div className="bg-black/90 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-purple-900/20"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={item.description}
                >
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 bg-purple-900/20 rounded-[30%] rotate-45" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon className="w-4 h-4 transform -rotate-45" />
                    </div>
                  </div>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;