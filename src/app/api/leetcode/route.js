
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json({ error: 'Username is required' }, { status: 400 });
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
            },
            body: JSON.stringify({
                query,
                variables: { username },
            }),
        });

        const data = await response.json();

        if (data.errors) {
            return NextResponse.json({ error: data.errors[0].message }, { status: 400 });
        }

        return NextResponse.json(data.data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
