"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaLaptopCode, FaCertificate, FaMedal, FaLayerGroup, FaCodeBranch } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Generative AI & Deep Learning',
    icon: <FaBrain />,
    skills: [
      'Generative AI', 'Deep Learning', 'Prompt Engineering', 'Neural Networks',
      'RNN', 'LSTM', 'GRU', 'GANs', 'VAEs', 'BERT', 'Stable Diffusion', 'LDM', 'ChatGPT'
    ],
    color: 'purple'
  },
  {
    title: 'Development & Open Source',
    icon: <FaLaptopCode />,
    skills: [
      'Open-Source Development', 'Full-Stack Development', 'Web Development',
      'Git & GitHub'
    ],
    color: 'blue'
  },
  {
    title: 'Languages & Core',
    icon: <FaCode />,
    skills: [
      'C++', 'C', 'HTML5', 'CSS', 'Data Structures', 'Algorithms'
    ],
    color: 'green'
  }
];

const certifications = [
  {
    title: 'Social Winter of Code (SWOC)',
    role: 'Contributor',
    date: 'Dec 2025',
    icon: <FaCodeBranch className="text-orange-500" />,
    description: 'Contributed to open-source projects during the winter program, collaborating with mentors and the community.',
    color: 'orange'
  },
  {
    title: 'Hacktoberfest 2025',
    role: 'Open Source Contributor',
    date: 'Oct 2025',
    icon: <FaLayerGroup className="text-blue-500" />,
    description: 'Contributed multiple accepted pull requests to open-source repositories, following best practices.',
    color: 'blue'
  },
  {
    title: "ZERO's Arena",
    role: 'Semi-Finalist',
    date: 'Sep 2025',
    icon: <FaMedal className="text-yellow-500" />,
    description: 'Reached the Semi-Final stage in a competitive technical event organized by CODE GEASS.',
    color: 'yellow'
  },
  {
    title: 'Open Source Connect India',
    role: 'Contributor',
    date: 'Jul 2025',
    icon: <FaCodeBranch className="text-green-500" />,
    description: 'Active contributor connecting with the Indian open-source community to foster collaboration.',
    color: 'green'
  },
  {
    title: 'Generative AI (Simplilearn)',
    role: 'Certified',
    date: 'Jun 2025',
    icon: <FaCertificate className="text-purple-500" />,
    description: 'Mastered RNN, LSTM, GRU, GANs, Transformers, and AI content generation techniques.',
    color: 'purple'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Skills & Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical expertise, certifications, and contributions to the open-source community.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              className={`bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border-t-4 border-${cat.color}-500 shadow-sm hover:shadow-md transition-all h-full`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`flex items-center gap-3 mb-6 text-${cat.color}-600 dark:text-${cat.color}-400`}>
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-medium bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Timeline/Grid */}
        <motion.h3
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Licenses & Certifications
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-2xl">
                  {cert.icon}
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-500 dark:text-gray-400">
                  {cert.date}
                </span>
              </div>
              <h4 className="text-lg font-bold mb-1 leading-tight">{cert.title}</h4>
              <p className="text-sm font-medium text-blue-600 dark:text-cyan-400 mb-2">{cert.role}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
