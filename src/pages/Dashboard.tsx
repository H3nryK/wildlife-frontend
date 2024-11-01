import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';
import { FaLocationDot, FaHeart, FaLeaf, FaChartLine } from 'react-icons/fa6';
import { useAnimalData } from '../hooks/UseAnimalData';
import { Stats } from '../components/dashboard/Stats';
import { LiveFeed } from '../components/dashboard/LiveFeed';
import { AnimalCard } from '../components/dashboard/AnimalCard';

const Dashboard: React.FC = () => {
  const { animals, stats, activityData } = useAnimalData();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Conservation Dashboard</h1>
          <p className="text-gray-600">Monitor your impact on wildlife conservation</p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Total Animals',
              value: stats.totalAnimals,
              icon: <FaHeart className="text-rose-500" />,
              trend: '+12%',
            },
            {
              title: 'Active Trackers',
              value: stats.activeTrackers,
              icon: <FaLocationDot className="text-blue-500" />,
              trend: '+5%',
            },
            {
              title: 'Conservation Score',
              value: stats.conservationScore,
              icon: <FaLeaf className="text-emerald-500" />,
              trend: '+8%',
            },
            {
              title: 'Investment Value',
              value: `$${stats.investmentValue}`,
              icon: <FaChartLine className="text-purple-500" />,
              trend: '+15%',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-gray-50">{stat.icon}</div>
                <span className={`text-sm ${
                  stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>{stat.trend}</span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Monitoring Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Activity Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Conservation Activity</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={activityData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="activity" stroke="#10b981" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Adopted Animals */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Protected Animals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {animals.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
              </div>
            </div>
          </div>

          {/* Live Feed Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Live Updates</h2>
              <LiveFeed />
            </div>

            {/* Impact Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Impact</h2>
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;