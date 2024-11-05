import React from 'react';
import { Calendar } from 'lucide-react';

const EventCarousel: React.FC = () => {
  const events = [
    {
      title: 'Virtual Meet & Greet',
      date: 'Nov 20, 2024',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80'
    },
    {
      title: 'Exclusive Live Stream',
      date: 'Nov 25, 2024',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80'
    },
    {
      title: 'Behind the Scenes',
      date: 'Dec 1, 2024',
      image: 'https://images.unsplash.com/photo-1574701148212-8518049c7b2c?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCarousel;