import React from 'react';
import { Zap, Shield, Swords, Bot } from 'lucide-react';

const QuickPlaySelection = ({ onBack, onPvP, onPvAI }) => {
  return (
    <div className="max-w-md w-full">
      <div className="text-center mb-8">
        <button
          onClick={onBack}
          className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors"
        >
          ← Back
        </button>
        <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-2">Quick Play</h2>
        <p className="text-gray-300">Choose your battle mode</p>
      </div>

      <div className="space-y-6">
        {/* Player vs Player */}
        <button
          onClick={onPvP}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-6 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
        >
          <div className="flex items-center justify-center space-x-4">
            <Shield className="w-6 h-6" />
            <span className="text-xl">Player vs Player</span>
            <Swords className="w-6 h-6" />
          </div>
          <p className="text-blue-200 text-sm mt-2">Challenge a friend on the same device</p>
        </button>

        {/* Player vs AI */}
        <button
          onClick={onPvAI}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-6 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
        >
          <div className="flex items-center justify-center space-x-4">
            <Shield className="w-6 h-6" />
            <span className="text-xl">Player vs AI</span>
            <Bot className="w-6 h-6" />
          </div>
          <p className="text-purple-200 text-sm mt-2">Test your skills against the computer</p>
        </button>
      </div>

      <div className="text-center mt-8 text-gray-400">
        <p className="text-sm">No stats saved in Quick Play mode</p>
      </div>
    </div>
  );
};

export default QuickPlaySelection;