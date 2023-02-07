import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { Post } from './PostsList';
import { TimeAgo } from './TimeAgo';

export const SinglePostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  const post = useSelector((state: any) =>
    state.posts.find((post: Post) => post.id === postId),
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};
