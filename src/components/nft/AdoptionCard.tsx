import React from 'react';
import { motion } from 'framer-motion';
import { NFT } from '../../types/nft';
import { format } from 'date-fns';
// import { useBlockchain } from '../../hooks/useBlockchain';

interface AdoptionCardProps {
  nft: NFT;
  onMint: (animalId: string) => void;
}

export const AdoptionCard: React.FC<AdoptionCardProps> = ({ nft, onMint }) => {
  // const { connect, address, isConnecting } = useBlockchain();

  const handleAdopt = async () => {
    // if (!address) {
    //   await connect();
    // }
    onMint(nft.animalId);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* NFT Image */}
      <div className="relative h-48">
        <img
          src={nft.metadata.image}
          alt={nft.metadata.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full">
          <span className="text-white font-medium">
            {nft.price} {nft.currency}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{nft.metadata.name}</h3>
        <p className="text-gray-600 mb-4">{nft.metadata.description}</p>

        {/* Attributes */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {nft.metadata.attributes.map((attr) => (
            <div key={attr.trait_type} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">{attr.trait_type}</p>
              <p className="font-medium">{attr.value}</p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={handleAdopt}
          className={`
            w-full py-3 rounded-lg font-semibold text-white
            transition-colors duration-200
            ${nft.owner 
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-emerald-500 hover:bg-emerald-600'}
          `}
        >
          { 'Connecting Wallet...'}
        </button>

        {/* History */}
        {nft.history.length > 0 && (
          <div className="mt-6">
            <h4 className="font-medium mb-2">History</h4>
            <div className="space-y-2">
              {nft.history.slice(0, 3).map((event, index) => (
                <div key={index} className="text-sm text-gray-600">
                  <span className="capitalize">{event.type}</span> •{' '}
                  {format(new Date(event.timestamp), 'MMM d, yyyy')}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};