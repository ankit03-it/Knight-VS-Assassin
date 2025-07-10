import React from 'react';
import { Shield, Swords, Crown } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center items-center mb-6">
        <Shield className="w-12 h-12 text-blue-400 mr-3" />
        <Swords className="w-16 h-16 text-yellow-400" />
        <Crown className="w-12 h-12 text-purple-400 ml-3" />
      </div>
      <h1 className="text-5xl font-bold text-white mb-3">
        Knight vs Assassin
      </h1>
      <p className="text-xl text-gray-300 mb-2">
        A Chess Game of Wits and Blades
      </p>
      <p className="text-gray-400 max-w-2xl mx-auto">
        This isn't just another chess game. It's a tactical war between discipline and deception. 
        Play casually, train your instincts, or track your legacy as a chess warrior.
      </p>
    </div>
  );
};

export default Header;
