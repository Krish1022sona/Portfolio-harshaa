import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Important for Vercel

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const MAX_CACHE_ENTRIES = 20;
const USERNAME = 'harshvardhanpandey37211'; // your Codeforces handle

function getCacheMap() {
  if (!globalThis.__codeforcesStatsCache) {
    globalThis.__codeforcesStatsCache = new Map();
  }
  return globalThis.__codeforcesStatsCache;
}

export async function GET() {
  const cacheKey = `codeforces:${USERNAME}`;
  const cache = getCacheMap();
  const cached = cache.get(cacheKey);

  // ✅ Serve from cache
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
    return NextResponse.json(cached.data);
  }

  try {
    // ✅ Fetch user info
    const infoRes = await fetch(
      `https://codeforces.com/api/user.info?handles=${USERNAME}`
    );
    const infoData = await infoRes.json();

    if (infoData.status !== 'OK') {
      return NextResponse.json(
        { error: 'Failed to fetch user info' },
        { status: 400 }
      );
    }

    // ✅ Fetch submissions
    const statusRes = await fetch(
      `https://codeforces.com/api/user.status?handle=${USERNAME}`
    );
    const statusData = await statusRes.json();

    if (statusData.status !== 'OK') {
      return NextResponse.json(
        { error: 'Failed to fetch user submissions' },
        { status: 400 }
      );
    }

    // ✅ Calculate unique solved problems
    const solvedMap = new Set();
    let easy = 0,
      medium = 0,
      hard = 0;

    statusData.result.forEach((submission) => {
      if (submission.verdict === 'OK') {
        const problem = submission.problem;
        const problemId = `${problem.contestId}-${problem.index}`;

        if (!solvedMap.has(problemId)) {
          solvedMap.add(problemId);

          // ✅ Difficulty classification (based on rating)
          if (problem.rating) {
            if (problem.rating < 1200) easy++;
            else if (problem.rating < 1800) medium++;
            else hard++;
          }
        }
      }
    });

    const user = infoData.result[0];

    const payload = {
      username: user.handle,
      rating: user.rating || 0,
      maxRating: user.maxRating || 0,
      rank: user.rank || 'unrated',
      maxRank: user.maxRank || 'unrated',
      contribution: user.contribution || 0,
      totalSolved: solvedMap.size,
      problemsSolved: {
        easy,
        medium,
        hard,
      },
    };

    // ✅ Cache result
    cache.set(cacheKey, { ts: Date.now(), data: payload });

    if (cache.size > MAX_CACHE_ENTRIES) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    return NextResponse.json(payload);
  } catch (error) {
  console.error("API ERROR:", error);
  return NextResponse.json(
    { error: 'Failed to fetch data' },
    { status: 500 }
  );
}
}