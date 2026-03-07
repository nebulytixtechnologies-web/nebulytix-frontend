import React from 'react';
import { motion } from 'framer-motion';

const DashboardStats = ({ stat }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClasses[stat.color]}`}>
          <stat.icon size={24} />
        </div>
        <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
          {stat.change}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-secondary-900 mb-1">{stat.value}</h3>
      <p className="text-secondary-600">{stat.title}</p>
    </motion.div>
  );
};

export default DashboardStats;