import React, { useState } from 'react';
import Header from './Header';
import QuickPlayCard from './QuickPlayCard';
import JoinArenaCard from './JoinArenaCard';
import FeaturesPreview from './FeaturesPreview';
import Footer from './Footer';
import QuickPlaySelection from './QuickPlaySelection';
import { useNavigation } from '../../context/NavigationContext';

import { useAuth } from '../../context/AuthContext';
import useGameState from '../../hooks/useGameState';
import { GAME_MODES } from '../../utils/constants';

const MainLanding = () => {
  const [showQuickPlayOptions, setShowQuickPlayOptions] = useState(false);
  const { goToSignUp, goToLogin, goToGame } = useNavigation();
  const { isAuthenticated, user, logout } = useAuth();
  const { startGame } = useGameState();

  // Game mode triggers
  const handlePvP = () => {
    startGame(GAME_MODES.PVP);
    goToGame(GAME_MODES.PVP);
  };

  const handlePvAI = () => {
    startGame(GAME_MODES.PVP_AI);
    goToGame(GAME_MODES.PVP_AI);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <Header />

      {/* Greeting / Auth Info */}
      {isAuthenticated && user && (
        <div className="text-center mb-8">
          <p className="text-purple-300 text-lg">
            Welcome back, <span className="font-semibold">{user.username || user.email}</span>!
          </p>
          <button
            onClick={logout}
            className="text-sm text-gray-400 hover:text-gray-300 mt-2 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      )}

      {/* Main Content: Cards or QuickPlaySelection */}
      {showQuickPlayOptions ? (
        <QuickPlaySelection
          onBack={() => setShowQuickPlayOptions(false)}
          onPvP={handlePvP}
          onPvAI={handlePvAI}
        />
      ) : (
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <QuickPlayCard onQuickPlay={() => setShowQuickPlayOptions(true)} />
          
          {!isAuthenticated && (
            <JoinArenaCard onSignUp={goToSignUp} onLogin={goToLogin} />
          )}

          {isAuthenticated && (
            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 hover:from-green-600/30 hover:to-green-800/30 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Premium Features</h3>
                <p className="text-gray-300 mb-6">
                  Access advanced game modes, statistics tracking, and more!
                </p>
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105">
                  Explore Features
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Universal Footer */}
      <FeaturesPreview />
      <Footer />
    </div>
  );
};

export default MainLanding;
