import React, { useState } from 'react';

const LyricsGame: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Example validation - replace with actual lyrics checking logic
    setIsCorrect(userInput.toLowerCase().includes('heart'));
  };

  return (
    <div className="bg-purple-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Complete the Lyrics</h3>
      <p className="mb-4 text-gray-300">
        "In the depths of night, where shadows dance,<br />
        My _______ beats to a different chance"
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-2 rounded bg-black/50 border border-purple-500 text-white"
          placeholder="Type the missing word..."
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 rounded hover:bg-purple-700 transition-colors"
        >
          Submit
        </button>
      </form>
      {isCorrect !== null && (
        <div className={`mt-4 text-center ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
          {isCorrect ? "Correct! You've unlocked a special message!" : "Try again!"}
        </div>
      )}
    </div>
  );
};

export default LyricsGame;