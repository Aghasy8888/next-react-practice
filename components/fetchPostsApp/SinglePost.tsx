import { Post } from './Posts';

const SinglePost = ({ post }: { post: Post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
};

export default SinglePost;
