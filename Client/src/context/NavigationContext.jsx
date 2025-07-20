import React, { createContext, useContext, useState } from 'react';

export const ROUTES = {
  HOME: 'home',
  SIGNUP: 'signup',
  LOGIN: 'login',
  GAME: 'game',
  PROFILE: 'profile',
  LEADERBOARD: 'leaderboard',
  DASHBOARD: 'dashboard' // Added dashboard route
};

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(ROUTES.HOME);
  const [routeData, setRouteData] = useState({});

  const goTo = (route, data = {}) => {
    setCurrentRoute(route);
    setRouteData(data);
  };

  const value = {
    currentRoute,
    routeData,
    goToHomePage: () => goTo(ROUTES.HOME),
    goToSignUp: () => goTo(ROUTES.SIGNUP),
    goToLogin: () => goTo(ROUTES.LOGIN),
    goToGame: (mode) => goTo(ROUTES.GAME, { mode }),
    goToProfile: (id) => goTo(ROUTES.PROFILE, { id }),
    goToLeaderboard: () => goTo(ROUTES.LEADERBOARD),
    goToDashboard: () => goTo(ROUTES.DASHBOARD), // Added dashboard navigation
    ROUTES
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};