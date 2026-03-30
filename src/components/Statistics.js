"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaGithub, FaStar } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';

const Statistics = ({ className }) => {
  const router = useRouter();
  const [stats, setStats] = useState({
    leetcode: {
      totalSolved: 0,
      ranking: 'N/A',
      contestRating: null,
      contestGlobalRanking: null,
      monthlyData: [],
      easy: 0,
      medium: 0,
      hard: 0,
      languages: [],
      starRating: null,
    },
    codeforces: {
      totalSolved: 0,
      rank: 'N/A',
      rating: 0,
    },
    github: {
      publicRepos: 0,
      followers: 0,
      totalStars: 0,
    },
    loading: true,
  });

  
  const formatRating = (value) => {
    if (value === null || value === undefined) return 'Unrated';
    const num = typeof value === 'number' ? value : Number(value);
    if (Number.isNaN(num)) return 'Unrated';
    return String(Math.round(num));
  };

  useEffect(() => {
    const fetchAndUpdate = async () => {
      try {
        const leetcodeUsername = 'pyro_hvp021';
        // Your Codeforces handle (from your profile URL)
        const codeforcesUsername = 'harshvardhanpandey37211';
        const githubUsername = 'Harsh63870';

        const [lcRes, cfRes, ghRes] = await Promise.all([
          fetch(`/api/leetcode?username=${leetcodeUsername}`),
          fetch(`/api/codeforces?username=${codeforcesUsername}`),
          fetch(`/api/github?username=${githubUsername}`),
        ]);

        const [lcData, cfData, ghData] = await Promise.all([lcRes.json(), cfRes.json(), ghRes.json()]);

        if (!lcData?.matchedUser) return;

        const submitStats = lcData.matchedUser.submitStats.acSubmissionNum;
        const totalSolved = submitStats.find(s => s.difficulty === 'All').count;
        const easySolved = submitStats.find(s => s.difficulty === 'Easy').count;
        const mediumSolved = submitStats.find(s => s.difficulty === 'Medium').count;
        const hardSolved = submitStats.find(s => s.difficulty === 'Hard').count;

        const ranking = lcData.matchedUser.profile.ranking;
        const starRating = lcData.matchedUser.profile?.starRating ?? null;

        // contest rating exists in your GraphQL query as `userContestRanking`
        const contestRating = lcData.userContestRanking?.rating ?? null;
        const contestGlobalRanking = lcData.userContestRanking?.globalRanking ?? null;

        // Process submission calendar for monthly data
        const calendarRaw = lcData.matchedUser.submissionCalendar;
        const calendar = typeof calendarRaw === 'string' ? JSON.parse(calendarRaw) : calendarRaw;

        const monthlyMap = new Map();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        Object.entries(calendar).forEach(([timestamp, count]) => {
          const date = new Date(parseInt(timestamp) * 1000);
          const month = months[date.getMonth()];
          monthlyMap.set(month, (monthlyMap.get(month) || 0) + count);
        });

        const currentMonthReduced = months.map(m => ({ month: m, problems: monthlyMap.get(m) || 0 }));

        // Process language stats
        const languageColors = {
          'C++': '#00599c',
          'C': '#a8b9cc',
          'Python': '#3776ab',
          'Java': '#b07219',
          'JavaScript': '#f7df1e',
          'TypeScript': '#3178c6',
          'Golang': '#00add8',
          'Rust': '#dea584',
        };

        let languages = [];
        if (lcData.matchedUser.languageProblemCount) {
          languages = lcData.matchedUser.languageProblemCount
            .filter(l => l.problemsSolved > 0)
            .map(l => ({
              name: l.languageName,
              problems: l.problemsSolved,
              color: languageColors[l.languageName] || '#8884d8',
            }))
            .sort((a, b) => b.problems - a.problems);
        }

        setStats(prev => ({
          ...prev,
          leetcode: {
            totalSolved,
            ranking: ranking ? `#${ranking}` : 'N/A',
            contestRating,
            contestGlobalRanking,
            monthlyData: currentMonthReduced.filter(d => d.problems > 0),
            easy: easySolved,
            medium: mediumSolved,
            hard: hardSolved,
            languages,
            starRating,
          },
          codeforces: cfData?.info
            ? prev.codeforces
            : cfData && typeof cfData.rating !== 'undefined'
              ? {
                  totalSolved: cfData.totalSolved ?? 0,
                  rank: cfData.rank ?? 'unrated',
                  rating: cfData.rating ?? 0,
                }
              : prev.codeforces,
          github: !ghData?.error
            ? {
                publicRepos: ghData.publicRepos ?? 0,
                followers: ghData.followers ?? 0,
                totalStars: ghData.totalStars ?? 0,
              }
            : prev.github,
          loading: false,
        }));
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchAndUpdate();
    const interval = setInterval(fetchAndUpdate, 15 * 60 * 1000); // refresh occasionally
    return () => clearInterval(interval);
  }, []);

  // Update chart data with real stats
  const leetcodeData = stats.loading ? [
    { month: 'Jan', problems: 0 },
    { month: 'Feb', problems: 0 },
  ] : stats.leetcode.monthlyData.length > 0 ? stats.leetcode.monthlyData : [];

  const languageStats = stats.loading ? [] : stats.leetcode.languages;

  const platformStats = [
    { name: 'LeetCode', problems: stats.loading ? 0 : stats.leetcode.totalSolved, color: '#ffa116' },
    { name: 'Codeforces', problems: stats.loading ? 0 : stats.codeforces.totalSolved, color: '#1f8acb' },
  ];

  const metricColorClass = (color) => {
    switch (color) {
      case 'blue':
        return 'text-blue-500';
      case 'green':
        return 'text-green-500';
      case 'yellow':
        return 'text-yellow-500';
      case 'purple':
        return 'text-purple-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <div
      className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${className || 'py-16 sm:py-20 md:py-24'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="statistics-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Statistics Dashboard
        </motion.h2>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {[
            { label: 'LeetCode Problems Solved', value: stats.loading ? 'Loading...' : stats.leetcode.totalSolved, icon: <FaCode />, color: 'blue' },
            { label: 'LeetCode Rank', value: stats.loading ? 'Loading...' : stats.leetcode.ranking, icon: <FaChartLine />, color: 'green' },
            // userContestRanking.rating is the actual competitive rating (e.g., 1706)
            { label: 'LeetCode Rating', value: stats.loading ? 'Loading...' : formatRating(stats.leetcode.contestRating), icon: <FaStar />, color: 'yellow' },
            { label: 'Codeforces Problems Solved', value: stats.loading ? 'Loading...' : stats.codeforces.totalSolved, icon: <FaCode />, color: 'blue' },
            { label: 'Codeforces Rating', value: stats.loading ? 'Loading...' : stats.codeforces.rating, icon: <FaChartLine />, color: 'green' },
            { label: 'GitHub Repositories', value: stats.loading ? 'Loading...' : stats.github.publicRepos, icon: <FaGithub />, color: 'purple' },
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex items-center gap-3 mb-2 ${metricColorClass(metric.color)}`}>
                {metric.icon}
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">{metric.label}</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Progress */}
          <motion.div
            className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Monthly Activity (LeetCode)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={leetcodeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="problems" stroke="#4a90e2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Language Distribution */}
          <motion.div
            className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Problems Solved by Language</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={languageStats}
                  cx="50%"
                  cy="50%"
                  label={false}
                  outerRadius={105}
                  fill="#8884d8"
                  dataKey="problems"
                >
                  {languageStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Platform Comparison */}
        <motion.div
          className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Platform Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="problems" radius={[8, 8, 0, 0]}>
                {platformStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'LeetCode Rank', value: stats.loading ? 'Loading...' : stats.leetcode.ranking, platform: 'Global Ranking' },
            { title: 'GitHub Stars', value: stats.loading ? 'Loading...' : stats.github.totalStars, platform: 'Total stars across repos' },
            { title: 'GitHub Followers', value: stats.loading ? 'Loading...' : stats.github.followers, platform: 'People following you' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-100/80 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{stat.title}</h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">{stat.platform}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
  <button
    onClick={() => router.push('/')}
    className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition"
  >
    ← Back to Home
  </button>
</div>
      </div>
    </div>
  );
};

export default Statistics;



