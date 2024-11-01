import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedGlobe: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial 
        color="#4ade80"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-emerald-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedGlobe />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            <span className="block">Protect Wildlife Through</span>
            <span className="block text-emerald-400">Technology Innovation</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto text-xl text-gray-300 mb-10"
          >
            Join our mission to safeguard endangered species using blockchain, AI, 
            and IoT technology. Make a real impact through digital adoption.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center space-x-4"
          >
            <button className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg
                           hover:bg-emerald-600 transform hover:-translate-y-0.5 transition-all duration-200">
              Explore NFTs
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold 
                           rounded-lg hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20"
        >
          {[
            { label: 'Protected Animals', value: '1,234+' },
            { label: 'Active Supporters', value: '50K+' },
            { label: 'Conservation Projects', value: '85+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block text-3xl font-bold text-white mb-2">
                {stat.value}
              </span>
              <span className="text-emerald-400">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};