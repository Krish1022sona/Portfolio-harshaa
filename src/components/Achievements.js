"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaChartLine, FaMedal, FaExternalLinkAlt } from 'react-icons/fa';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const achievements = [
  'Solved 295+ problems on LeetCode across C++, C, and Python',
  'Strong in Advanced topics: Dynamic Programming, Divide & Conquer, Backtracking',
  'Proficient in Intermediate skills: Math (74 problems), Hash Tables (45), Trees (22)',
  'Expert in Fundamental concepts: Arrays (143), Strings (75), Two Pointers (41)',
  'Earned multiple achievement badges: 100 Days, 200 Days, and 50 Days Badge 2025',
];

const leetcodeStats = {
  total: 295, // 240 (C++) + 38 (C) + 17 (Python)
  cpp: 240,
  c: 38,
  python: 17,
  easy: 0, // Will be calculated from difficulty distribution
  medium: 0,
  hard: 0,
  acceptanceRate: 0,
  contests: 0,
  rating: 0,
  rank: 428193,
  badges: ['100 Days Badge 2025', '200 Days Badge 2025', '50 Days Badge 2025'],
  skills: {
    advanced: [
      { name: 'Dynamic Programming', count: 10 },
      { name: 'Divide and Conquer', count: 8 },
      { name: 'Backtracking', count: 5 },
    ],
    intermediate: [
      { name: 'Math', count: 74 },
      { name: 'Hash Table', count: 45 },
      { name: 'Tree', count: 22 },
    ],
    fundamental: [
      { name: 'Array', count: 143 },
      { name: 'String', count: 75 },
      { name: 'Two Pointers', count: 41 },
    ],
  },
};

const codeforcesStats = {
  problemsSolved: 0, // Not available from search
  contests: 0,
  maxRating: 0,
  currentRating: 0,
};

// Calculate difficulty distribution (estimated based on typical patterns)
const difficultyData = [
  { name: 'Easy', value: Math.floor(leetcodeStats.total * 0.4), color: '#10b981' },
  { name: 'Medium', value: Math.floor(leetcodeStats.total * 0.5), color: '#f59e0b' },
  { name: 'Hard', value: Math.floor(leetcodeStats.total * 0.1), color: '#ef4444' },
];

const languageData = [
  { name: 'C++', problems: leetcodeStats.cpp, color: '#00599c' },
  { name: 'C', problems: leetcodeStats.c, color: '#a8b9cc' },
  { name: 'Python', problems: leetcodeStats.python, color: '#3776ab' },
];

// Codolio aggregates data from multiple platforms (numbers pulled from your Codolio screenshot)
const codolioStats = {
  total: 396,
  platforms: {
    leetcode: 309,
    geeksforgeeks: 10,
    codeforces: 4,
    codechef: 35,
    hackerrank: 38,
    codestudio: 0,
    interviewbit: 0,
  },
};

// Platform comparison data
const platformData = [
  { name: 'LeetCode', problems: leetcodeStats.total, color: '#ffa116' },
  { name: 'Codolio', problems: codolioStats.total, color: '#6366f1' },
];

// Codolio platform breakdown (if multiple platforms are connected)
const codolioPlatformBreakdown = Object.entries(codolioStats.platforms)
  .filter(([_, count]) => count > 0)
  .map(([platform, count]) => ({
    name: platform.charAt(0).toUpperCase() + platform.slice(1),
    problems: count,
    color:
      platform === 'leetcode'
        ? '#ffa116'
        : platform === 'geeksforgeeks'
        ? '#2f8d46'
        : platform === 'codeforces'
        ? '#1f8acb'
        : platform === 'codechef'
        ? '#f77f00'
        : platform === 'hackerrank'
        ? '#2ec866'
        : '#6366f1',
  }));

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const Achievements = () => {
  return (
    <section 
      id="achievements" 
      className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
      aria-labelledby="achievements-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          id="achievements-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5 }}
        >
          CP & LeetCode
        </motion.h2>

          {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            className="bg-white/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <FaCode className="text-blue-500 dark:text-cyan-400" size={24} />
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Total Problems</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{leetcodeStats.total}+</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">LeetCode</p>
          </motion.div>

          <motion.div
            className="bg-white/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <FaChartLine className="text-green-500 dark:text-green-400" size={24} />
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">LeetCode Rank</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">#{leetcodeStats.rank.toLocaleString()}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Global Ranking</p>
          </motion.div>

          <motion.div
            className="bg-white/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <FaMedal className="text-yellow-500 dark:text-yellow-400" size={24} />
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Badges Earned</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{leetcodeStats.badges.length}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Achievement Badges</p>
          </motion.div>

          <motion.div
            className="bg-white/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <FaTrophy className="text-purple-500 dark:text-purple-400" size={24} />
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Languages</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">C++, C, Python</p>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Language Distribution */}
          <motion.div
            className="bg-white/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Problems Solved by Language</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={languageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="problems"
                >
                  {languageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Platform Comparison */}
          <motion.div
            className="bg-white/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Problems Solved by Platform</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="problems" fill="#4a90e2" radius={[8, 8, 0, 0]}>
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Codolio Platform Breakdown - Show if multiple platforms are connected */}
        {codolioPlatformBreakdown.length > 1 && (
          <motion.div
            className="bg-white/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Codolio Platform Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={codolioPlatformBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="problems" radius={[8, 8, 0, 0]}>
                  {codolioPlatformBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {/* Achievements List */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white/80 dark:bg-black/20 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Key Achievements</h3>
          <ul className="space-y-4 sm:space-y-5" role="list">
            {achievements.map((achievement, index) => (
              <motion.li 
                key={achievement} 
                className="flex items-start text-base sm:text-lg md:text-xl"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <FaTrophy className="text-yellow-500 dark:text-yellow-400 mr-4 sm:mr-5 flex-shrink-0 mt-1" size={24} aria-hidden="true" />
                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
              </motion.li>
            ))}
          </ul>

          {/* Badges */}
          <div className="mt-6 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Achievement Badges</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {leetcodeStats.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 font-semibold text-sm border border-yellow-300 dark:border-yellow-700"
                >
                  🏆 {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://leetcode.com/u/pyro_hvp021/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold border border-orange-500/20 transition-colors"
            >
              <FaExternalLinkAlt /> LeetCode Profile
            </motion.a>
            <motion.a
              href="https://codolio.com/profile/harsh_v_pandey"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-500/20 transition-colors"
            >
              <FaExternalLinkAlt /> Codolio Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
