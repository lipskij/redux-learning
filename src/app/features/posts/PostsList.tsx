import { useSelector } from 'react-redux';

interface Post {
  id: string;
  title: string;
  content: string;
}

export const PostsList: React.FC = () => {
  const posts = useSelector((state: any) => state.posts);

  const renderedPosts = posts.map(({ id, title, content }: Post) => (
    <article className="post-excerpt" key={id}>
      <h3>{title}</h3>
      <p className="post-content">{content}</p>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
