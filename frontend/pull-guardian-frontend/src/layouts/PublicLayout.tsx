import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/logo192.png" 
                alt="PullGuardian Logo" 
                className="h-8 w-8 mr-2" 
              />
              <h1 className="text-xl font-bold text-gray-900">PullGuardian</h1>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PullGuardian. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
