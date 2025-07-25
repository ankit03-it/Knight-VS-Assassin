import { useState } from 'react';

export const ROUTES = {
  HOME: 'home',
  SIGNUP: 'signup',
  LOGIN: 'login',
  GAME: 'game',
  PROFILE: 'profile',
  LEADERBOARD: 'leaderboard'
};

const useNavigation = () => {
  const [currentRoute, setCurrentRoute] = useState(ROUTES.HOME);
  const [routeData, setRouteData] = useState({});

  const goTo = (route, data = {}) => {
    setCurrentRoute(route);
    setRouteData(data);
  };

  return {
    currentRoute,
    routeData,
    goToHomePage: () => goTo(ROUTES.HOME),
    goToSignUp: () => goTo(ROUTES.SIGNUP),
    goToLogin: () => goTo(ROUTES.LOGIN),
    goToGame: (mode) => goTo(ROUTES.GAME, { mode }),
    goToProfile: (id) => goTo(ROUTES.PROFILE, { id }),
    goToLeaderboard: () => goTo(ROUTES.LEADERBOARD),
    ROUTES,
  };
};

export default useNavigation;