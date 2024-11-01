import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { NFTGallery } from '../components/nft/NFTGallery';

const NFTMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Species' },
    { id: 'endangered', name: 'Endangered' },
    { id: 'mammals', name: 'Mammals' },
    { id: 'birds', name: 'Birds' },
    { id: 'reptiles', name: 'Reptiles' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wildlife NFT Marketplace</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Support conservation efforts by adopting digital representations of real wildlife
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search animals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* NFT Gallery */}
        <NFTGallery searchTerm={searchTerm} category={selectedCategory} />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 bg-white rounded-lg p-8 shadow-lg"
        >
          {[
            { label: 'Total NFTs', value: '2,456' },
            { label: 'Animals Protected', value: '1,234' },
            { label: 'Total Value Locked', value: '$3.2M' },
            { label: 'Active Supporters', value: '50K+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NFTMarketplace;