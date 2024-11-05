import React, { useState } from 'react';
import { MessageCircle, ThumbsUp } from 'lucide-react';
import HexagonImage from './HexagonImage';
import InteractionButton from './InteractionButton';

const CommentWall: React.FC = () => {
  const [comment, setComment] = useState('');

  const comments = [
    {
      name: 'Emma Rodriguez',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      comment: 'The production quality on these tracks is incredible! Can\'t wait for more!',
      likes: 24
    },
    {
      name: 'Marcus Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      comment: 'That bass line in Urban Echo is pure fire! 🔥',
      likes: 18
    },
    {
      name: 'Sofia Patel',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      comment: 'MINY community never disappoints! These artists are amazing.',
      likes: 31
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComment('');
  };

  return (
    <div className="bg-purple-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Fan Comments</h3>
      <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
        {comments.map((comment, i) => (
          <div key={i} className="bg-black/30 p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <HexagonImage
                src={comment.image}
                alt={comment.name}
                size="sm"
              />
              <span className="font-semibold">{comment.name}</span>
            </div>
            <p className="text-gray-300 mb-2">{comment.comment}</p>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span>{comment.likes}</span>
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 rounded-lg bg-black/50 border border-purple-500 text-white resize-none"
          placeholder="Share your thoughts..."
          rows={3}
        />
        <InteractionButton icon={MessageCircle}>
          Post Comment
        </InteractionButton>
      </form>
    </div>
  );
};

export default CommentWall;