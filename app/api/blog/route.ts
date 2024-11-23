import { NextResponse } from 'next/server';
import { getBlogPosts } from '../../../utils/notion';

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts', message: error },
      { status: 500 }
    );
  }
} 