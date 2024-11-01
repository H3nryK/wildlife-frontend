import React from 'react';
import { motion } from 'framer-motion';
import { ConservationStats } from '../../types/stats';

interface StatsProps {
  stats: ConservationStats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  const statItems = [
    {
      label: 'Protected Animals',
      value: stats.totalAnimals,
      color: 'bg-emerald-500',
      increase: '+12%'
    },
    {
      label: 'Active Supporters',
      value: stats.totalSupporters,
      color: 'bg-blue-500',
      increase: '+8%'
    },
    {
      label: 'Total Contributions',
      value: `$${stats.totalContributions.toLocaleString()}`,
      color: 'bg-purple-500',
      increase: '+15%'
    },
    {
      label: 'Success Stories',
      value: stats.successStories,
      color: 'bg-yellow-500',
      increase: '+5%'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center`}>
              <span className="text-white text-xl font-bold">
                {typeof item.value === 'number' ? Math.floor((item.value % 100) / 10) : '0'}
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">{item.label}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-green-500 font-semibold">{item.increase}</span>
            <span className="text-gray-500 ml-2">vs last month</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};