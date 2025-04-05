import React, { createContext, useContext, ReactNode } from 'react';
import useAuth from '../hooks/useAuth';

// Create a context with a default value
const AuthContext = createContext<ReturnType<typeof useAuth> | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Provider component that wraps the app and makes auth object available to any child component that calls useAuth()
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuth();
  
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// Hook for child components to get the auth object and re-render when it changes
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  
  return context;
};
