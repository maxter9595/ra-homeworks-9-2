import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Avatar from './Avatar';
import '../styles/PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:7071/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <Link to={`/posts/${post.id}`} className="post-link">
            <div className="post-header">
              <div className="author-info">
                  <Avatar 
                    userId={post.id} 
                    name={post.authorName || "Автор поста"}
                    size={56}
                  />
                <div className="author-name">Author Name</div>
                <div className="post-time">6 мин.</div>
              </div>
            </div>
            <div className="post-content">{post.content}</div>
            <div className="post-actions">
              <button className="action-btn">Нравится</button>
              <button className="action-btn">Комментировать</button>
            </div>
            <div className="comment-input">
              <input type="text" placeholder="Напишите комментарий..." />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
