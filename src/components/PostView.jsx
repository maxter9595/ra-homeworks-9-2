import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Avatar from './Avatar';
import '../styles/PostView.css';

const PostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:7071/posts/${id}`);
        setPost(response.data.post);
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:7071/posts/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (!post) {
    return <div className="error">Пост не найден</div>;
  }

  return (
    <div className="post-view">
      <div className="post-card">
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
        <div className="post-controls">
          <Link to={`/posts/${id}/edit`} className="edit-btn">Изменить</Link>
          <button onClick={handleDelete} className="delete-btn">Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default PostView;
