import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

export interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
  user?: string;
  reactions: string;
}

export const PostsList: React.FC = () => {
  const posts = useSelector((state: any) => state.posts);
  const ordersPosts = posts
    .slice()
    .sort((a: Post, b: Post) => b.date.localeCompare(a.date));

  const renderedPosts = ordersPosts.map((post: Post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p className="post-content">{post.content}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
