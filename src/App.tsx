import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddPostForm } from './app/features/posts/AddPostForm';
import { PostsList } from './app/features/posts/PostsList';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
