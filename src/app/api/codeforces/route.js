
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    try {
        // Fetch user info
        const infoRes = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
        const infoData = await infoRes.json();

        if (infoData.status !== 'OK') {
            return NextResponse.json({ error: 'Failed to fetch user info' }, { status: 400 });
        }

        // Fetch user status (submissions)
        const statusRes = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
        const statusData = await statusRes.json();

        if (statusData.status !== 'OK') {
            return NextResponse.json({ error: 'Failed to fetch user submissions' }, { status: 400 });
        }

        // Calculate solved problems (unique problems with verdict OK)
        const solvedMap = new Set();
        statusData.result.forEach(submission => {
            if (submission.verdict === 'OK') {
                const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
                solvedMap.add(problemId);
            }
        });

        return NextResponse.json({
            info: infoData.result[0],
            totalSolved: solvedMap.size,
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
