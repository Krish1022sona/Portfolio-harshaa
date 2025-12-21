"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaFilter, FaCalendar, FaAward } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    title: 'Data Structures and Algorithms',
    issuer: 'Coursera / GeeksforGeeks',
    date: '2024',
    credentialId: 'CERT-001',
    category: 'Programming',
    verificationUrl: 'https://example.com/verify',
    skills: ['DSA', 'Algorithms', 'Problem Solving'],
    description: 'Comprehensive course covering fundamental data structures and algorithms.',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    issuer: 'Udemy',
    date: '2024',
    credentialId: 'CERT-002',
    category: 'Data Science',
    verificationUrl: 'https://example.com/verify',
    skills: ['Python', 'Data Science', 'Pandas'],
    description: 'Learned data manipulation and analysis using Python libraries.',
  },
  {
    id: 3,
    title: 'Web Development Fundamentals',
    issuer: 'FreeCodeCamp',
    date: '2024',
    credentialId: 'CERT-003',
    category: 'Web Development',
    verificationUrl: 'https://example.com/verify',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: 'Complete web development certification covering frontend technologies.',
  },
];

const categories = ['All', 'Programming', 'Data Science', 'Web Development'];

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCertifications = selectedCategory === 'All'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section 
      id="certifications" 
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      aria-labelledby="certifications-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          id="certifications-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white dark:bg-cyan-500'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <FaCertificate className="text-white" size={24} />
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-300">
                  {cert.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
              <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-3">{cert.issuer}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{cert.description}</p>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <FaCalendar size={14} />
                <span>{cert.date}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <motion.a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
              >
                <FaExternalLinkAlt size={14} />
                Verify Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>

        {filteredCertifications.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaAward className="mx-auto text-gray-400 dark:text-gray-600 mb-4" size={48} />
            <p className="text-gray-600 dark:text-gray-400 text-lg">No certifications found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;

