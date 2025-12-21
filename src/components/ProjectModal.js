"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaDownload, FaCalendar, FaCode } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-white/10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-white/10 p-4 flex justify-between items-center z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes className="text-gray-600 dark:text-gray-400" size={24} />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4 flex-wrap">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                project.status === 'Ongoing' 
                  ? 'bg-blue-500/20 text-blue-800 dark:text-cyan-200' 
                  : project.status === 'Completed' 
                  ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-200' 
                  : 'bg-purple-500/20 text-purple-800 dark:text-purple-200'
              }`}>
                {project.status}
              </span>
              {project.period && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaCalendar size={14} />
                  <span>{project.period}</span>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 dark:text-cyan-400 font-bold mr-3 mt-1" aria-hidden="true">&#8227;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <FaCode />
                  <span>Technology Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-300 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Challenges & Solutions</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">Challenge: </span>
                      {challenge.challenge}
                      {challenge.solution && (
                        <>
                          <br />
                          <span className="font-semibold text-gray-900 dark:text-white">Solution: </span>
                          {challenge.solution}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold transition-colors"
                >
                  <FaGithub /> View on GitHub
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </motion.a>
              )}
              {project.downloadUrl && (
                <motion.a
                  href={project.downloadUrl}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
                >
                  <FaDownload /> Download
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

