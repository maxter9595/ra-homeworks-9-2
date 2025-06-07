import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostList, PostView, PostCreate, PostEdit, Layout } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="posts/new" element={<PostCreate />} />
          <Route path="posts/:id" element={<PostView />} />
          <Route path="posts/:id/edit" element={<PostEdit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
