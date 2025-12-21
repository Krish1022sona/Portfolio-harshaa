"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaArrowLeft, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

// This is a template for blog posts
// In the future, you can fetch markdown content from a CMS or file system
const getBlogPost = (slug) => {
  const posts = {
    'getting-started-with-competitive-programming': {
      title: 'Getting Started with Competitive Programming',
      date: '2024-12-15',
      category: 'Programming',
      readTime: '5 min read',
      content: `# Getting Started with Competitive Programming

Competitive programming is a mind sport where participants solve algorithmic problems within a time limit. It's an excellent way to improve your problem-solving skills and prepare for technical interviews.

## Why Competitive Programming?

- **Improves Problem-Solving Skills**: Regular practice helps you think more logically and systematically.
- **Prepares for Interviews**: Many tech companies use similar problems in their interviews.
- **Builds Confidence**: Solving challenging problems boosts your confidence in coding.

## Getting Started

1. **Choose a Platform**: Start with LeetCode, Codeforces, or HackerRank.
2. **Learn the Basics**: Master fundamental data structures and algorithms.
3. **Practice Regularly**: Consistency is key to improvement.
4. **Participate in Contests**: Join weekly contests to test your skills.

## Tips for Beginners

- Start with easy problems and gradually increase difficulty
- Focus on understanding the solution, not just solving
- Read editorials and learn from others' solutions
- Join a community for support and motivation

Happy coding! 🚀`,
    },
    // Add more posts here as needed
  };

  return posts[slug] || null;
};

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 dark:text-cyan-400 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 mb-8 font-semibold"
          >
            <FaArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg p-8 sm:p-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-300 mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                <FaCalendar size={14} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

