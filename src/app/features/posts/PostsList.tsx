import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';

export interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
  user?: string;
}

export const PostsList: React.FC = () => {
  const posts = useSelector((state: any) => state.posts);
  const ordersPosts = posts
    .slice()
    .sort((a: Post, b: Post) => b.date.localeCompare(a.date));

  const renderedPosts = ordersPosts.map(
    ({ id, title, content, user, date }: Post) => (
      <article className="post-excerpt" key={id}>
        <h3>{title}</h3>
        <PostAuthor userId={user} />
        <TimeAgo timestamp={date} />
        <p className="post-content">{content}</p>
        <Link to={`/posts/${id}`} className="button muted-button">
          View Post
        </Link>
      </article>
    ),
  );

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
