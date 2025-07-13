import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on app startup
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const userEmail = localStorage.getItem('userEmail');
        const username = localStorage.getItem('username');
        
        if (token && userEmail) {
          // You can add token verification with backend here if needed
          setUser({
            email: userEmail,
            username: username,
            token: token
          });
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        // Clear invalid auth data
        clearAuthData();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const clearAuthData = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    setUser(null);
    setIsAuthenticated(false);
  };

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Store auth data
        const authToken = data.token || `token-${Date.now()}`; // Use actual token from backend
        const userData = {
          email: email,
          username: data.username || email.split('@')[0],
          token: authToken
        };

        localStorage.setItem('authToken', authToken);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('username', userData.username);
        localStorage.setItem('isLoggedIn', 'true');

        setUser(userData);
        setIsAuthenticated(true);

        return { success: true, message: 'Login successful' };
      } else {
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const signup = async (email, username, password) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password })
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true, message: 'Account created successfully' };
      } else {
        return { success: false, message: data.message || 'Signup failed' };
      }
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const logout = () => {
    clearAuthData();
  };

  const updateUser = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
    
    // Update localStorage
    if (userData.email) localStorage.setItem('userEmail', userData.email);
    if (userData.username) localStorage.setItem('username', userData.username);
  };

  // Check if user has specific permissions (for future use)
  const hasPermission = (permission) => {
    if (!user) return false;
    // Add permission logic here based on your needs
    return true;
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    updateUser,
    hasPermission,
    clearAuthData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};