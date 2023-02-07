import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from './PostsList';
import { postUpdated } from './postsSlice';

export const EditPostForm: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  const post = useSelector((state: any) =>
    state.posts.find((post: Post) => post.id === postId),
  );

  const [title, setTitle] = useState<string>(post.title);
  const [content, setContent] = useState<string>(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setContent(e.currentTarget.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          minLength={5}
          maxLength={100}
          required
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          minLength={5}
          maxLength={200}
          required
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};
