import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { Post } from './PostsList';
import { ReactionButtons } from './ReactionButtons';
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
          Edit post{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </Link>
        <ReactionButtons post={post} />
      </article>
    </section>
  );
};
