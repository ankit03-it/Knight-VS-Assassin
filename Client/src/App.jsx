import React from 'react';
import HomePage from './components/HomePage/HomePage.jsx';
import SignupPage from './components/Auth/SignupPage';
import LoginPage from './components/Auth/LoginPage';
import Dashboard from './components/Dashboard/Dashboard.jsx';

import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import './index.css';

const AppContent = () => {
  const { currentRoute, ROUTES } = useNavigation();
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen flex justify-center items-center text-white">Loading...</div>;
  }

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case ROUTES.HOME:
        return <HomePage />;
      case ROUTES.SIGNUP:
        return <SignupPage />;
      case ROUTES.LOGIN:
        return <LoginPage />;
      case ROUTES.GAME:
        return isAuthenticated ? (
          <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
            <h1 className="text-4xl">Game Page - To be implemented</h1>
          </div>
        ) : <LoginPage />;
      case ROUTES.PROFILE:
        return isAuthenticated ? (
          <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
            <h1 className="text-4xl">Profile Page - To be implemented</h1>
          </div>
        ) : <LoginPage />;
      case ROUTES.LEADERBOARD:
        return (
          <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
            <h1 className="text-4xl">Leaderboard Page - To be implemented</h1>
          </div>
        );
      case ROUTES.DASHBOARD:
        return isAuthenticated ? <Dashboard /> : <LoginPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  </AuthProvider>
);

export default App;
