"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaRocket, FaHeart, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          id="about-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-16">
            <motion.div 
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed"
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 0.7 }}
            >
            <p>
              I&apos;m Harsh Vardhan Pandey, a B.Tech student majoring in Information Technology at <span className="text-blue-600 dark:text-cyan-300 font-semibold">IIIT Gwalior</span>. I have a deep interest in solving problems using <span className="text-blue-600 dark:text-cyan-300 font-semibold">Data Structures and Algorithms</span>.
            </p>
            <p>
              With <span className="font-bold text-white bg-blue-500/80 dark:bg-cyan-500/20 px-3 py-1.5 rounded-md inline-block">295+ problems solved on LeetCode</span> across C++, C, and Python, I&apos;m consistently improving my problem-solving approach and time complexity optimization.
            </p>
            </motion.div>
            <motion.div 
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed"
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 0.7 }}
            >
              <p>
                Currently, I&apos;m exploring <span className="text-blue-600 dark:text-cyan-300 font-semibold">backend development using Python</span> and diving into foundational concepts of <span className="text-blue-600 dark:text-cyan-300 font-semibold">AI/ML</span>.
              </p>
              <p>
                I am also an active participant in competitive programming contests on platforms like <span className="font-bold text-gray-900 dark:text-white">LeetCode</span> and <span className="font-bold text-gray-900 dark:text-white">Codeforces</span>. I believe in clean code, logical clarity, and meaningful project work.
              </p>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Journey</h3>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 dark:from-cyan-500 dark:to-purple-500 transform md:-translate-x-1/2"></div>
              {[
                { year: '2024', title: 'Started B.Tech', description: 'Began my journey in Information Technology at IIIT Gwalior', icon: <FaGraduationCap /> },
                { year: '2024', title: 'Competitive Programming', description: 'Started solving problems on LeetCode and Codeforces', icon: <FaCode /> },
                { year: '2024', title: 'First Projects', description: 'Built MINDLY and Eco Rush applications', icon: <FaRocket /> },
                { year: '2025', title: 'Ongoing Growth', description: 'Exploring backend development and AI/ML concepts', icon: <FaLightbulb /> },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
                      <div className="flex items-center gap-3 mb-2 md:justify-end">
                        <span className="text-blue-600 dark:text-cyan-400">{milestone.icon}</span>
                        <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400">{milestone.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-500 dark:bg-cyan-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests & Hobbies */}
          <motion.div
            className="bg-white/80 dark:bg-black/20 backdrop-blur-xl p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <FaHeart className="text-red-500" />
              <span>Interests & Goals</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Current Interests</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {['Competitive Programming', 'Backend Development', 'AI/ML Fundamentals', 'Problem Solving', 'Open Source'].map((interest, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-blue-500 dark:text-cyan-400">•</span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Learning Goals</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {['Master System Design', 'Deep Dive into AI/ML', 'Contribute to Open Source', 'Build Scalable Applications', 'Improve CP Rating'].map((goal, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-purple-500 dark:text-purple-400">•</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
