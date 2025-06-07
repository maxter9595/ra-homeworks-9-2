import { Link, Outlet } from 'react-router-dom';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo">React Posts</Link>
        <Link to="/posts/new" className="create-btn">Создать пост</Link>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
