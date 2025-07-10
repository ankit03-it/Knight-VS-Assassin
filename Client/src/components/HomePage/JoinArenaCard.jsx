import React from 'react';
import { Crown, UserPlus, LogIn } from 'lucide-react';

const JoinArenaCard = ({ onSignUp, onLogin }) => {
  return (
    <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 hover:from-purple-600/30 hover:to-purple-800/30 transition-all duration-300">
      <div className="text-center">
        <Crown className="w-12 h-12 text-purple-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-3">Join the Arena</h3>
        <p className="text-gray-300 mb-6">
          Create an account to unlock all game modes and track your chess journey.
        </p>
        <div className="flex space-x-3 justify-center">
          <button
            onClick={onSignUp}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center space-x-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Sign Up</span>
          </button>
          <button
            onClick={onLogin}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center space-x-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinArenaCard;
