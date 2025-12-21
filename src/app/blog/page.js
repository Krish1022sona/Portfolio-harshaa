"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaArrowRight, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

// Sample blog posts data - in future, this can be fetched from a CMS or markdown files
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Competitive Programming',
    excerpt: 'A comprehensive guide for beginners looking to start their competitive programming journey.',
    date: '2024-12-15',
    category: 'Programming',
    readTime: '5 min read',
    slug: 'getting-started-with-competitive-programming',
  },
  {
    id: 2,
    title: 'Understanding Time Complexity',
    excerpt: 'Deep dive into Big O notation and how to analyze algorithm efficiency.',
    date: '2024-12-10',
    category: 'Algorithms',
    readTime: '8 min read',
    slug: 'understanding-time-complexity',
  },
  {
    id: 3,
    title: 'Building My First Full-Stack Application',
    excerpt: 'Lessons learned while building MINDLY - a mental health tracking application.',
    date: '2024-12-05',
    category: 'Web Development',
    readTime: '10 min read',
    slug: 'building-my-first-fullstack-app',
  },
];

const categories = ['All', 'Programming', 'Algorithms', 'Web Development', 'Tips'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </motion.h1>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white dark:bg-cyan-500'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-300 mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                      Read More <FaArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">No blog posts found matching your criteria.</p>
          </motion.div>
        )}

        {/* Coming Soon Notice */}
        <motion.div
          className="max-w-2xl mx-auto mt-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">More Articles Coming Soon!</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m working on creating more content about programming, algorithms, and web development. Stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

