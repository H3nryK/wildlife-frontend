import React from 'react';
import { HeroSection } from '../components/layout/HeroSection';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaMicrochip, FaChartLine } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology for Conservation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining AI, IoT, and blockchain to revolutionize wildlife protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt className="text-5xl text-emerald-500" />,
                title: "ICP Blockchain",
                description: "Energy-efficient, scalable blockchain technology ensuring transparent and secure conservation efforts."
              },
              {
                icon: <FaMicrochip className="text-5xl text-emerald-500" />,
                title: "IoT Integration",
                description: "Real-time wildlife tracking and monitoring through advanced IoT devices."
              },
              {
                icon: <FaChartLine className="text-5xl text-emerald-500" />,
                title: "AI Analysis",
                description: "Advanced machine learning algorithms for wildlife behavior and health monitoring."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6 rounded-lg"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Impact on Conservation</h2>
              <ul className="space-y-4">
                {[
                  "Reduced poaching incidents by 60% in monitored areas",
                  "24/7 real-time tracking of endangered species",
                  "Community-driven conservation efforts",
                  "Transparent fund allocation through smart contracts"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center text-lg text-gray-700"
                  >
                    <span className="mr-2 text-emerald-500">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1526226128118-9ef71fc2f34b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Conservation Impact"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;