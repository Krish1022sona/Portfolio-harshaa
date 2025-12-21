"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaTrophy, FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const leetcodeData = [
  { month: 'Jan', problems: 25 },
  { month: 'Feb', problems: 30 },
  { month: 'Mar', problems: 35 },
  { month: 'Apr', problems: 40 },
  { month: 'May', problems: 45 },
  { month: 'Jun', problems: 50 },
];

const languageStats = [
  { name: 'C++', problems: 240, color: '#00599c' },
  { name: 'C', problems: 38, color: '#a8b9cc' },
  { name: 'Python', problems: 17, color: '#3776ab' },
];

// Codolio aggregated statistics (numbers pulled from your Codolio screenshot)
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

const platformStats = [
  { name: 'LeetCode', problems: 295, color: '#ffa116' },
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

const Statistics = () => {
  return (
    <section 
      id="statistics" 
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      aria-labelledby="statistics-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          id="statistics-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5 }}
        >
          Statistics Dashboard
        </motion.h2>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'LeetCode Problems Solved', value: '295+', icon: <FaCode />, color: 'blue' },
            { label: 'LeetCode Rank', value: '#428K', icon: <FaChartLine />, color: 'green' },
            { label: 'Achievement Badges', value: '3', icon: <FaTrophy />, color: 'yellow' },
            { label: 'GitHub Repositories', value: '5', icon: <FaGithub />, color: 'purple' },
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex items-center gap-3 mb-2 text-${metric.color}-500`}>
                {metric.icon}
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">{metric.label}</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Progress */}
          <motion.div
            className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Monthly Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={leetcodeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="problems" stroke="#4a90e2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Language Distribution */}
          <motion.div
            className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Problems Solved by Language</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={languageStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="problems"
                >
                  {languageStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Platform Comparison */}
        <motion.div
          className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Platform Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="problems" radius={[8, 8, 0, 0]}>
                {platformStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Codolio Platform Breakdown - Show if multiple platforms are connected */}
        {codolioPlatformBreakdown.length > 1 && (
          <motion.div
            className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg mb-8"
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

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'LeetCode Rank', value: '#428K', platform: 'Global Ranking' },
            { title: 'Languages Used', value: '3', platform: 'C++, C, Python' },
            { title: 'Badges Earned', value: '3', platform: 'Achievement Badges' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{stat.title}</h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">{stat.platform}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

