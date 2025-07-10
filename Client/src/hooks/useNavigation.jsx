import { useCallback } from 'react';
import { ROUTES } from '../utils/constants';

const useNavigation = () => {
  const navigateTo = useCallback((route) => {
    console.log(`Navigating to: ${route}`);
    // Replace with actual navigation logic (React Router)
    // For now, just log the navigation
  }, []);

  const goToSignUp = useCallback(() => navigateTo(ROUTES.SIGNUP), [navigateTo]);
  const goToLogin = useCallback(() => navigateTo(ROUTES.LOGIN), [navigateTo]);
  const goToDashboard = useCallback(() => navigateTo(ROUTES.DASHBOARD), [navigateTo]);
  const goToGame = useCallback((mode) => navigateTo(`${ROUTES.GAME}?mode=${mode}`), [navigateTo]);
  const goToQuickPlay = useCallback(() => navigateTo(ROUTES.QUICK_PLAY), [navigateTo]);

  return {
    navigateTo,
    goToSignUp,
    goToLogin,
    goToDashboard,
    goToGame,
    goToQuickPlay
  };
};

export default useNavigation;
