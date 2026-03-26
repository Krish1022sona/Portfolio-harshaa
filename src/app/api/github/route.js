import { NextResponse } from 'next/server';

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const MAX_CACHE_ENTRIES = 20;

function getCacheMap() {
  if (!globalThis.__githubStatsCache) {
    globalThis.__githubStatsCache = new Map();
  }
  return globalThis.__githubStatsCache;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  const cacheKey = `github:${username}`;
  const cache = getCacheMap();
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
    return NextResponse.json(cached.data);
  }

  const headers = {
    Accept: 'application/vnd.github+json',
  };

  // Optional: set GITHUB_TOKEN in your deployment env for higher rate limits
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const userRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
      headers,
      next: { revalidate: 1800 },
    });

    if (!userRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch GitHub user' }, { status: userRes.status });
    }

    const user = await userRes.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&type=owner&sort=updated`,
      { headers, next: { revalidate: 1800 } }
    );

    if (!reposRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch GitHub repos' }, { status: reposRes.status });
    }

    const repos = await reposRes.json();
    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum, r) => sum + (typeof r.stargazers_count === 'number' ? r.stargazers_count : 0), 0)
      : 0;

    const payload = {
      username: user.login,
      publicRepos: user.public_repos ?? 0,
      followers: user.followers ?? 0,
      following: user.following ?? 0,
      totalStars,
      profileUrl: user.html_url,
    };

    cache.set(cacheKey, { ts: Date.now(), data: payload });
    if (cache.size > MAX_CACHE_ENTRIES) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

