"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SkillProgressBar = ({ skill, proficiency, years, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-500 dark:bg-cyan-400',
    purple: 'bg-purple-500 dark:bg-purple-400',
    green: 'bg-green-500 dark:bg-green-400',
    yellow: 'bg-yellow-500 dark:bg-yellow-400',
    orange: 'bg-orange-500 dark:bg-orange-400',
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">{skill}</span>
        <div className="flex items-center gap-2">
          {years && (
            <span className="text-xs text-gray-500 dark:text-gray-400">{years} {years === 1 ? 'year' : 'years'}</span>
          )}
          <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400">{proficiency}%</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-full ${colorClasses[color] || colorClasses.blue} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;

