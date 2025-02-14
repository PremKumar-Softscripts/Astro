import { getPosts } from '../../lib/wp.js';

export async function GET() {
  const posts = await getPosts();
  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  });
}
