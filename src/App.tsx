import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddPostForm } from './app/features/posts/AddPostForm';
import { EditPostForm } from './app/features/posts/EditPostForm';
import { PostsList } from './app/features/posts/PostsList';
import { SinglePostPage } from './app/features/posts/SinglePostPage';

import { Navbar } from './app/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
