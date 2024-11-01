import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Animal } from '../../types/system';
import { format } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface LiveFeedProps {
  animalId: string;
  data: Animal['trackingData'][];
}

export const LiveFeed: React.FC<LiveFeedProps> = ({ data }) => {
  const [activities, setActivities] = useState<Array<{
    id: string;
    type: string;
    timestamp: string;
    message: string;
  }>>([]);

  useEffect(() => {
    // Simulate real-time activities
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now().toString(),
        type: Math.random() > 0.5 ? 'movement' : 'health',
        timestamp: new Date().toISOString(),
        message: `Activity detected in sector ${Math.floor(Math.random() * 10) + 1}`,
      };

      setActivities(prev => [newActivity, ...prev].slice(0, 10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Live Activity Feed</h2>
      
      {/* Activity Chart */}
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="timestamp" 
              tickFormatter={(time) => format(new Date(time), 'HH:mm')}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(time) => format(new Date(time), 'HH:mm:ss')}
            />
            <Line 
              type="monotone" 
              dataKey="movement" 
              stroke="#10b981" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        <AnimatePresence>
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex items-center p-4 bg-gray-50 rounded-lg"
            >
              <div className={`
                w-3 h-3 rounded-full mr-4
                ${activity.type === 'movement' ? 'bg-blue-500' : 'bg-green-500'}
              `} />
              <div className="flex-1">
                <p className="text-gray-800">{activity.message}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(activity.timestamp), 'HH:mm:ss')}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};