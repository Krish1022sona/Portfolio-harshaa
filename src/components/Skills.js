"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SkillProgressBar from './SkillProgressBar';
import { FaCode, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

const skills = {
  'Languages': [
    { name: 'C++', proficiency: 85, years: 3, color: 'blue' },
    { name: 'Python', proficiency: 80, years: 2, color: 'green' },
    { name: 'C', proficiency: 75, years: 3, color: 'blue' },
    { name: 'Java', proficiency: 50, years: 1, color: 'purple' },
  ],
  'Core Skills': [
    { name: 'Data Structures & Algorithms', proficiency: 90, years: 3, color: 'blue' },
    { name: 'Competitive Programming', proficiency: 85, years: 3, color: 'purple' },
    { name: 'Problem Solving', proficiency: 88, years: 3, color: 'blue' },
    { name: 'Backend Development (Python)', proficiency: 70, years: 1, color: 'green' },
    { name: 'REST APIs', proficiency: 65, years: 1, color: 'green' },
    { name: 'Debugging & Optimization', proficiency: 80, years: 3, color: 'blue' },
  ],
  'Tools & Platforms': [
    { name: 'Git & GitHub', proficiency: 85, years: 3, color: 'blue' },
    { name: 'Firebase', proficiency: 70, years: 1, color: 'yellow' },
    { name: 'MongoDB', proficiency: 65, years: 1, color: 'green' },
    { name: 'VS Code', proficiency: 90, years: 3, color: 'blue' },
    { name: 'Postman', proficiency: 75, years: 1, color: 'orange' },
    { name: 'React', proficiency: 60, years: 1, color: 'blue' },
    { name: 'Tailwind CSS', proficiency: 70, years: 1, color: 'blue' },
  ],
};

const categoryIcons = {
  'Languages': <FaCode />,
  'Core Skills': <FaBrain />,
  'Tools & Platforms': <FaTools />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          id="skills-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div 
              key={category} 
              className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={categoryIndex}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-blue-600 dark:text-cyan-300 text-2xl" aria-hidden="true">
                  {categoryIcons[category]}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-cyan-300">{category}</h3>
              </div>
              <div className="space-y-4" role="list">
                {items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                  >
                    <SkillProgressBar
                      skill={skill.name}
                      proficiency={skill.proficiency}
                      years={skill.years}
                      color={skill.color}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
