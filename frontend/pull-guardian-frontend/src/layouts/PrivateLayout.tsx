import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PrivateLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout, user } = useAuthContext();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center">
            <img 
              src="/logo192.png" 
              alt="PullGuardian Logo" 
              className="h-8 w-8 mr-2" 
            />
            <h1 className="text-xl font-bold">PullGuardian</h1>
          </div>
        </div>
        
        <nav className="flex-grow py-4">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/dashboard" 
                className={`flex items-center px-4 py-2 ${isActive('/dashboard') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
              >
                <span className="mr-2">📊</span>
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className={`flex items-center px-4 py-2 ${isActive('/team') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
              >
                <span className="mr-2">👥</span>
                Team
              </Link>
            </li>
            <li>
              <Link 
                to="/settings" 
                className={`flex items-center px-4 py-2 ${isActive('/settings') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
              >
                <span className="mr-2">⚙️</span>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={logout}
            className="w-full flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded"
          >
            <span className="mr-2">🚪</span>
            Logout
          </button>
        </div>
      </aside>
      
      {/* Mobile menu */}
      <div className="md:hidden">
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}
        
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center">
              <img 
                src="/logo192.png" 
                alt="PullGuardian Logo" 
                className="h-8 w-8 mr-2" 
              />
              <h1 className="text-xl font-bold">PullGuardian</h1>
            </div>
          </div>
          
          <nav className="py-4">
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/dashboard" 
                  className={`flex items-center px-4 py-2 ${isActive('/dashboard') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-2">📊</span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/team" 
                  className={`flex items-center px-4 py-2 ${isActive('/team') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-2">👥</span>
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/settings" 
                  className={`flex items-center px-4 py-2 ${isActive('/settings') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-2">⚙️</span>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="p-4 border-t border-gray-800">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                logout();
              }}
              className="w-full flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded"
            >
              <span className="mr-2">🚪</span>
              Logout
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm py-4 px-4 md:px-6">
          <div className="flex justify-between items-center">
            <button 
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              
              <div className="flex items-center">
                <img 
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=0D8ABC&color=fff`}
                  alt={`${user?.name || 'User'} Avatar`}
                  className="h-8 w-8 rounded-full" 
                />
                <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:block">
                  {user?.name || 'User'}
                </span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-grow p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
