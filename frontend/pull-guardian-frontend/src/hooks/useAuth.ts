import { useState, useEffect, useCallback } from 'react';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface UseAuthReturn extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

const useAuth = (): UseAuthReturn => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, you would check if the user has a valid token
        // and fetch the user data from an API
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        
        if (isAuthenticated) {
          // Mock user data for demo purposes
          const user: User = {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'admin',
            avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=4C1D95&color=fff',
          };
          
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: 'Failed to authenticate',
        });
      }
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = useCallback(async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // In a real app, you would call an API to authenticate the user
      // For demo purposes, we'll just simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, let's just check if the email and password are not empty
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }
      
      // Mock user data for demo purposes
      const user: User = {
        id: '1',
        name: 'John Doe',
        email,
        role: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=4C1D95&color=fff',
      };
      
      // Store auth token or user info in localStorage/sessionStorage
      localStorage.setItem('isAuthenticated', 'true');
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to login',
      }));
    }
  }, []);

  // Logout function
  const logout = useCallback(() => {
    // Remove auth token or user info from localStorage/sessionStorage
    localStorage.removeItem('isAuthenticated');
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  }, []);

  // Register function
  const register = useCallback(async (name: string, email: string, password: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // In a real app, you would call an API to register the user
      // For demo purposes, we'll just simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, let's just check if all fields are filled
      if (!name || !email || !password) {
        throw new Error('Please fill in all fields');
      }
      
      // In a real app, you would typically redirect to login after registration
      // For demo purposes, we'll just set isLoading to false and clear any errors
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to register',
      }));
    }
  }, []);

  return {
    ...authState,
    login,
    logout,
    register,
  };
};

export default useAuth;
