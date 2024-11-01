import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/marketplace', label: 'NFT Marketplace' },
    { path: '/animals', label: 'Animals' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-primary ${
              isActive ? 'text-primary' : 'text-gray-600'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;