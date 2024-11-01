import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNFTData } from '../../hooks/UseNFTData';
import { AdoptionCard } from './AdoptionCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const NFTGallery: React.FC = () => {
  const { nfts, isLoading, mint } = useNFTData();
  const [filter, setFilter] = useState<'all' | 'available' | 'owned'>('all');

  const filteredNFTs = nfts?.filter(nft => {
    switch (filter) {
      case 'available':
        return !nft.owner;
      case 'owned':
        return !!nft.owner;
      default:
        return true;
    }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="flex space-x-4">
        {['all', 'available', 'owned'].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option as typeof filter)}
            className={`
              px-6 py-2 rounded-lg font-medium transition-colors
              ${filter === option 
                ? 'bg-emerald-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
            `}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* NFT Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredNFTs?.map((nft) => (
          <motion.div key={nft.id} variants={item}>
            <AdoptionCard nft={nft} onMint={mint} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};