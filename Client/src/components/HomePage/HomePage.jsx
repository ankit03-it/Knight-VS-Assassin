import React, { useState } from 'react';
import MainLanding from './MainLanding';
import QuickPlaySelection from './QuickPlaySelection';
import BackgroundPattern from './BackgroundPattern';
import useNavigation from '../../hooks/useNavigation';
import useGameState from '../../hooks/useGameState';
import { GAME_MODES } from '../../utils/constants';

const HomePage = () => {
  const [showQuickPlay, setShowQuickPlay] = useState(false);
  const { goToSignUp, goToLogin, goToGame } = useNavigation();
  const { startGame } = useGameState();

  const handleQuickPlay = () => {
    setShowQuickPlay(true);
  };

  const handleBack = () => {
    setShowQuickPlay(false);
  };

  const handlePvP = () => {
    startGame(GAME_MODES.PVP);
    goToGame(GAME_MODES.PVP);
  };

  const handlePvAI = () => {
    startGame(GAME_MODES.PVP_AI);
    goToGame(GAME_MODES.PVP_AI);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {!showQuickPlay ? (
          <MainLanding 
            onQuickPlay={handleQuickPlay}
            onSignUp={goToSignUp}
            onLogin={goToLogin}
          />
        ) : (
          <QuickPlaySelection 
            onBack={handleBack}
            onPvP={handlePvP}
            onPvAI={handlePvAI}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;