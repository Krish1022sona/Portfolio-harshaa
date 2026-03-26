import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Fix for Vercel

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const MAX_CACHE_ENTRIES = 20;
const USERNAME = 'pyro_hvp021'; // your username

function getCacheMap() {
  if (!globalThis.__leetcodeStatsCache) {
    globalThis.__leetcodeStatsCache = new Map();
  }
  return globalThis.__leetcodeStatsCache;
}

export async function GET() {
  const cacheKey = `leetcode:${USERNAME}`;
  const cache = getCacheMap();
  const cached = cache.get(cacheKey);

  // ✅ Serve from cache
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
    return NextResponse.json(cached.data);
  }

  const query = `
    query userSessionProgress($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        languageProblemCount {
          languageName
          problemsSolved
        }
        submissionCalendar
        profile {
          ranking
          reputation
          starRating
        }
      }
      userContestRanking(username: $username) {
        rating
        globalRanking
      }
    }
  `;

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'User-Agent': 'Mozilla/5.0',
        'Origin': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username: USERNAME },
      }),
    });

    const data = await response.json();

    // ✅ Debug log (remove later)
    console.log(JSON.stringify(data, null, 2));

    if (data.errors) {
      return NextResponse.json(
        { error: data.errors[0].message },
        { status: 400 }
      );
    }

    let payload = data.data;

    // ✅ Handle null cases safely
    if (!payload.matchedUser) {
      return NextResponse.json(
        { error: 'Invalid username or no data found' },
        { status: 404 }
      );
    }

    // ✅ Fix submissionCalendar (string → JSON)
    if (payload?.matchedUser?.submissionCalendar) {
      try {
        payload.matchedUser.submissionCalendar = JSON.parse(
          payload.matchedUser.submissionCalendar
        );
      } catch (e) {
        payload.matchedUser.submissionCalendar = {};
      }
    }

    // ✅ Safe fallback values
    payload.userContestRanking = payload.userContestRanking || {
      rating: 0,
      globalRanking: 0,
    };

    payload.matchedUser.languageProblemCount =
      payload.matchedUser.languageProblemCount || [];

    // ✅ Save to cache
    cache.set(cacheKey, { ts: Date.now(), data: payload });

    // Remove oldest if cache too big
    if (cache.size > MAX_CACHE_ENTRIES) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    return NextResponse.json(payload);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch LeetCode data' },
      { status: 500 }
    );
  }
}