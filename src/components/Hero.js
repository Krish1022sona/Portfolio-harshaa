"use client";

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FaGithub, FaLinkedin, FaFileAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#4A90E2',
      },
      links: {
        color: '#4A90E2',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.4,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      role="banner"
      aria-label="Hero section"
      id="hero"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 bg-white/80 dark:bg-black/50 backdrop-blur-3xl p-8 sm:p-12 rounded-3xl border border-gray-200/50 dark:border-white/30 shadow-2xl text-center max-w-4xl mx-4 shadow-blue-400/20"
      >
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tighter"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500">Harsh Vardhan Pandey</span>
        </motion.h1>
        <motion.p 
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          An aspiring Software Developer with a strong foundation in DSA, Competitive Programming, and an evolving interest in AI/ML. I enjoy building efficient systems and solving real-world problems through code.
        </motion.p>
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="\HarshVardhanPandey.pdf"
            download
            aria-label="Download resume PDF"
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 25px rgba(74, 144, 226, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white px-8 py-3 rounded-full font-bold text-base sm:text-lg border-2 border-blue-400 dark:border-cyan-400 hover:from-blue-600 hover:to-blue-700 dark:hover:from-cyan-600 dark:hover:to-blue-700 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/30 focus:outline-none focus:ring-4 focus:ring-blue-400/50 dark:focus:ring-cyan-400/50"
          >
            <FaFileAlt aria-hidden="true" /> View Resume
          </motion.a>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/Harsh63870"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              whileFocus={{ scale: 1.15 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 dark:focus:ring-cyan-400/50 rounded-full p-2"
              title="GitHub Profile"
            >
              <FaGithub size={36} aria-hidden="true" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/harsh-vardhan-pandey-00b463280/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              whileFocus={{ scale: 1.15 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 dark:focus:ring-cyan-400/50 rounded-full p-2"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={36} aria-hidden="true" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/pyro_hvp021/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LeetCode profile"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              whileFocus={{ scale: 1.15 }}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-orange-400/50 rounded-full p-2"
              title="LeetCode Profile"
            >
              <FaCode size={36} aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
