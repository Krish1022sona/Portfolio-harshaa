"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-black/20 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-blue-600 text-xl" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

