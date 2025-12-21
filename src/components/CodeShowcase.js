"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCode, FaCopy, FaCheck, FaExternalLinkAlt } from 'react-icons/fa';
const codeSnippets = [
  {
    id: 1,
    title: 'Binary Search Implementation',
    description: 'Efficient binary search algorithm with edge case handling',
    language: 'cpp',
    code: `int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Not found
}`,
    complexity: 'Time: O(log n), Space: O(1)',
    platform: 'LeetCode',
    problemUrl: 'https://leetcode.com/problems/binary-search',
    tags: ['Binary Search', 'Algorithm', 'Array'],
  },
  {
    id: 2,
    title: 'Two Sum Problem',
    description: 'Find two numbers that add up to target using hash map',
    language: 'python',
    code: `def twoSum(nums, target):
    hash_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        if complement in hash_map:
            return [hash_map[complement], i]
        
        hash_map[num] = i
    
    return []`,
    complexity: 'Time: O(n), Space: O(n)',
    platform: 'LeetCode',
    problemUrl: 'https://leetcode.com/problems/two-sum',
    tags: ['Hash Map', 'Array', 'Two Pointers'],
  },
  {
    id: 3,
    title: 'Merge Two Sorted Lists',
    description: 'Merge two sorted linked lists in-place',
    language: 'cpp',
    code: `ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    
    if (list1->val <= list2->val) {
        list1->next = mergeTwoLists(list1->next, list2);
        return list1;
    } else {
        list2->next = mergeTwoLists(list1, list2->next);
        return list2;
    }
}`,
    complexity: 'Time: O(n + m), Space: O(n + m)',
    platform: 'LeetCode',
    problemUrl: 'https://leetcode.com/problems/merge-two-sorted-lists',
    tags: ['Linked List', 'Recursion', 'Merge'],
  },
];

const CodeShowcase = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [isDark, setIsDark] = useState(true);

  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const languages = ['all', 'cpp', 'python', 'javascript'];
  const filteredSnippets = selectedLanguage === 'all'
    ? codeSnippets
    : codeSnippets.filter(snippet => snippet.language === selectedLanguage);

  const copyToClipboard = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section 
      id="code" 
      className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
      aria-labelledby="code-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          id="code-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5 }}
        >
          Code Showcase
        </motion.h2>

        {/* Language Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {languages.map((lang) => (
            <motion.button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                selectedLanguage === lang
                  ? 'bg-blue-600 text-white dark:bg-cyan-500'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {lang === 'all' ? 'All Languages' : lang.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Code Snippets */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {filteredSnippets.map((snippet, index) => (
            <motion.div
              key={snippet.id}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 border-b border-gray-200 dark:border-white/10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{snippet.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{snippet.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">{snippet.complexity}</span>
                      <span>•</span>
                      <span>{snippet.platform}</span>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => copyToClipboard(snippet.code, snippet.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copy code"
                  >
                    {copiedId === snippet.id ? (
                      <FaCheck className="text-green-500" size={20} />
                    ) : (
                      <FaCopy className="text-gray-600 dark:text-gray-300" size={20} />
                    )}
                  </motion.button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {snippet.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {snippet.problemUrl && (
                  <motion.a
                    href={snippet.problemUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    <FaExternalLinkAlt size={14} />
                    View Problem
                  </motion.a>
                )}
              </div>

              <div className="relative">
                <SyntaxHighlighter
                  language={snippet.language}
                  style={isDark ? vscDarkPlus : vs}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    borderRadius: 0,
                    fontSize: '0.875rem',
                  }}
                  showLineNumbers
                >
                  {snippet.code}
                </SyntaxHighlighter>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSnippets.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaCode className="mx-auto text-gray-400 dark:text-gray-600 mb-4" size={48} />
            <p className="text-gray-600 dark:text-gray-400 text-lg">No code snippets found for this language.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CodeShowcase;

