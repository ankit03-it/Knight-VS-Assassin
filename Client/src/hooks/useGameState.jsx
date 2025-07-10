import { useState, useCallback } from 'react';
import { GAME_MODES } from '../utils/constants';

const useGameState = () => {
  const [currentMode, setCurrentMode] = useState(null);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameHistory, setGameHistory] = useState([]);

  const startGame = useCallback((mode) => {
    setCurrentMode(mode);
    setIsGameActive(true);
    console.log(`Starting game in mode: ${mode}`);
  }, []);

  const endGame = useCallback((result) => {
    setIsGameActive(false);
    setGameHistory(prev => [...prev, {
      mode: currentMode,
      result,
      timestamp: new Date().toISOString()
    }]);
    console.log(`Game ended with result: ${result}`);
  }, [currentMode]);

  const resetGame = useCallback(() => {
    setCurrentMode(null);
    setIsGameActive(false);
  }, []);

  return {
    currentMode,
    isGameActive,
    gameHistory,
    startGame,
    endGame,
    resetGame
  };
};

export default useGameState;