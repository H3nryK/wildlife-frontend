import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">wildNFT</span>
          </Link>
          
          <Navigation />

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;