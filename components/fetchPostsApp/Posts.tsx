'use client';

import { fetchPosts } from '@/helpers';
import { useState } from 'react';
import SinglePost from './SinglePost';

export interface Post {
  title: string;
  body: string;
}

const Posts = ({ initialPosts }: { initialPosts: Post[] }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [posts, setPosts] = useState<Post[]>([...initialPosts]);

  const onClick = async () => {
    setCurrentPage((prev) => prev + 1);

    const posts = await fetchPosts(currentPage, 10);
    setPosts((prevPosts) => [...prevPosts, posts]);
  };

  return (
    <>
      {posts.map((post) => (
        <SinglePost key={post.title} post={post} />
      ))}

      <button onClick={onClick}>Load More</button>
    </>
  );
};

export default Posts;
