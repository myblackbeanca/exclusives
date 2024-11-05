import React, { useState } from 'react';
import { Calendar, Clock, MessageCircle, Users, Star, Bell, Send, Download, ThumbsUp, Share2 } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import HexagonImage from '../components/HexagonImage';
import Countdown from '../components/Countdown';

const VirtualEvent: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [question, setQuestion] = useState('');
  const [showChatInput, setShowChatInput] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const schedule = [
    {
      time: '7:00 PM',
      title: 'Opening Set - DJ Coota Brown',
      type: 'performance',
      duration: '45 min',
      reminder: false
    },
    {
      time: '8:00 PM',
      title: 'Live Q&A with The Teeta',
      type: 'qa',
      duration: '30 min',
      reminder: true
    },
    {
      time: '8:45 PM',
      title: 'Comedy Hour with Vivek & Akbar',
      type: 'comedy',
      duration: '60 min',
      reminder: false
    },
    {
      time: '10:00 PM',
      title: 'Headline Performance - Rachel Bard',
      type: 'performance',
      duration: '90 min',
      reminder: true
    }
  ];

  const chatMessages = [
    {
      user: 'Alex M.',
      message: '🔥 This virtual setup is incredible!',
      time: '2 min ago',
      likes: 12
    },
    {
      user: 'Sarah K.',
      message: 'Can\'t wait for the Q&A session!',
      time: '1 min ago',
      likes: 8
    }
  ];

  const questions = [
    {
      user: 'Mike R.',
      question: 'What inspired your latest track?',
      votes: 24,
      answered: false
    },
    {
      user: 'Lisa T.',
      question: 'Will you be releasing more collabs soon?',
      votes: 18,
      answered: true
    }
  ];

  return (
    <>
      <SEOHelmet
        title="MINY Virtual Event | Interactive Live Experience"
        description="Join our exclusive virtual event featuring live performances, Q&As, and interactive sessions with your favorite artists."
        path="/virtual-event"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Virtual concert"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MINY Virtual
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Live Experience
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              An immersive virtual event featuring your favorite artists,
              interactive Q&As, and exclusive performances.
            </p>
            <div className="mb-8">
              <Countdown targetDate="2024-11-15T19:00:00" />
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Join Virtual Lobby</span>
            </button>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Event Schedule</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {schedule.map((session, index) => (
              <div
                key={index}
                className={`bg-purple-900/20 rounded-lg p-6 transition-colors ${
                  selectedSession === session.title ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedSession(session.title)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-purple-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">{session.title}</h3>
                      <p className="text-gray-400">
                        {session.time} · {session.duration}
                      </p>
                    </div>
                  </div>
                  <button
                    className={`p-2 rounded-full transition-colors ${
                      session.reminder
                        ? 'bg-purple-500 text-white'
                        : 'bg-purple-900/40 text-gray-400 hover:bg-purple-900/60'
                    }`}
                  >
                    <Bell className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Submit Your Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-4 bg-black/50 border border-purple-500 rounded-lg text-white resize-none"
                rows={3}
                placeholder="Ask your question..."
              />
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Submit Question</span>
              </button>
            </div>

            <div className="space-y-4">
              {questions.map((q, index) => (
                <div key={index} className="bg-purple-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{q.user}</span>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-purple-400">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{q.votes}</span>
                      </button>
                      {q.answered && (
                        <span className="px-2 py-1 bg-green-600 text-xs rounded">
                          Answered
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300">{q.question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Live Chat</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-900/20 rounded-lg p-6">
              <div className="h-80 overflow-y-auto mb-6 space-y-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{msg.user}</span>
                        <span className="text-xs text-gray-400">{msg.time}</span>
                      </div>
                      <p className="text-gray-300">{msg.message}</p>
                      <button className="mt-1 text-sm text-gray-400 hover:text-purple-400 flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{msg.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 p-3 bg-black/50 border border-purple-500 rounded-lg"
                  placeholder="Type your message..."
                />
                <button className="px-6 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shareable Badges */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Event Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((badge) => (
              <div key={badge} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[30%] rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="w-12 h-12 text-white transform -rotate-45" />
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-900/40 rounded-lg hover:bg-purple-900/60 transition-colors flex items-center justify-center space-x-2 mx-auto">
                  <Download className="w-4 h-4" />
                  <span>Save Badge</span>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center space-x-2 mx-auto">
              <Share2 className="w-5 h-5" />
              <span>Share Your Badge</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VirtualEvent;