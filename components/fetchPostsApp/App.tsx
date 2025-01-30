// Fetch data from the following public API endpoint:
// https://jsonplaceholder.typicode.com/posts
// Display the data as a list in the browser. Each item should include:
// 1. The post's title (as a heading).
// 2. The post's body (as a paragraph).
// Add a "Load More" button to fetch the next batch of 10 posts.
// Ensure the data is appended, not replaced.

import { fetchPosts } from '@/helpers';
import { Posts } from '.';

const FetchPosts = async () => {
  const posts = await fetchPosts(1, 10);

  return <Posts initialPosts={posts} />;
};

export default FetchPosts;
