import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { LineChart, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';
import { FaLocationDot, FaLeaf, FaTemperatureLow } from 'react-icons/fa6';
import { FaHeartbeat } from "react-icons/fa";

const AnimalProfile: React.FC = () => {
  useParams<{ id: string; }>();
  
  // Mock data - replace with actual API calls
  const animalData = {
    name: "Luna",
    species: "African Elephant",
    age: 12,
    location: "Serengeti National Park",
    conservationStatus: "Endangered",
    healthStatus: "Healthy",
    lastUpdated: "2 minutes ago",
    vitals: {
      heartRate: 65,
      temperature: 36.5,
      activity: "Active",
      location: { lat: -2.3333, lng: 34.8333 }
    },
    history: [
      { date: '2024-01', health: 95 },
      { date: '2024-02', health: 98 },
      { date: '2024-03', health: 96 },
      { date: '2024-04', health: 97 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{animalData.name}</h1>
              <p className="text-gray-600">{animalData.species}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full">
                {animalData.conservationStatus}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Vitals */}
          <div className="space-y-8">
            {/* Vital Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Vital Statistics</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <FaHeartbeat className="text-rose-500" />,
                    label: "Heart Rate",
                    value: `${animalData.vitals.heartRate} bpm`
                  },
                  {
                    icon: <FaTemperatureLow className="text-amber-500" />,
                    label: "Temperature",
                    value: `${animalData.vitals.temperature}°C`
                  },
                  {
                    icon: <FaLeaf className="text-emerald-500" />,
                    label: "Activity",
                    value: animalData.vitals.activity
                  },
                  {
                    icon: <FaLocationDot className="text-blue-500" />,
                    label: "Location",
                    value: animalData.location
                  }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gray-50">{stat.icon}</div>
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="font-semibold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Middle Column - Health Trends */}
          <div className="lg:col-span-2 space-y-8">
            {/* Health Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Health Trends</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={animalData.history}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="health" stroke="#10b981" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Activity Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { event: "Health check completed", time: "2 hours ago" },
                  { event: "Location updated", time: "4 hours ago" },
                  { event: "Feeding observed", time: "6 hours ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <p className="text-gray-700">{activity.event}</p>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalProfile;