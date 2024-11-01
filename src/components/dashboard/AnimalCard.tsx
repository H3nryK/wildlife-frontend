import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import { Animal } from '../../types/system';

interface AnimalCardProps {
  animal: Animal;
  onAdopt: (id: string) => void;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onAdopt }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden
                 hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <FaHeart className="w-5 h-5 text-red-500" />
          </button>
          <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <FaShareAlt className="w-5 h-5 text-blue-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {animal.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {animal.description}
        </p>

        {/* Stats */}
        <motion.div
          variants={statsVariants}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          <div className="text-center">
            <span className="block text-lg font-bold text-gray-900">
              {animal.age}
            </span>
            <span className="text-xs text-gray-500">Age</span>
          </div>
          <div className="text-center">
            <span className="block text-lg font-bold text-gray-900">
              {animal.health}%
            </span>
            <span className="text-xs text-gray-500">Health</span>
          </div>
          <div className="text-center">
            <span className="block text-lg font-bold text-gray-900">
              {animal.supporters}
            </span>
            <span className="text-xs text-gray-500">Supporters</span>
          </div>
        </motion.div>

        {/* Adoption Button */}
        <button
          onClick={() => onAdopt(animal.id)}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-6 rounded-lg
                   font-semibold transform hover:-translate-y-0.5 transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Adopt Now
        </button>
      </div>
    </motion.div>
  );
};