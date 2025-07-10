import React from 'react';
import { Zap, Play } from 'lucide-react';

const QuickPlayCard = ({ onQuickPlay }) => {
  return (
    <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 hover:from-blue-600/30 hover:to-blue-800/30 transition-all duration-300">
      <div className="text-center">
        <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-3">Quick Play</h3>
        <p className="text-gray-300 mb-6">
          Start instantly — no signup required. Pure, raw gameplay.
        </p>
        <button
          onClick={onQuickPlay}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center mx-auto space-x-2"
        >
          <Play className="w-5 h-5" />
          <span>Play Now</span>
        </button>
      </div>
    </div>
  );
};

export default QuickPlayCard;
