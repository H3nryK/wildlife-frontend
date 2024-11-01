import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Connecting Wildlife lovers with their perfect companions through blockchain technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-gray-400 hover:text-white">NFT Marketplace</Link></li>
              <li><Link to="/animals" className="text-gray-400 hover:text-white">Available Pets</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white">Support</Link></li>
              <li><Link to="/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} wildNFT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;