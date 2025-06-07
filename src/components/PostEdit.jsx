import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';
import '../styles/PostEdit.css';

const PostEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:7071/posts/${id}`);
        setContent(response.data.post.content);
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate(`/posts/${id}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:7071/posts/${id}`, { content });
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="post-edit">
      <div className="edit-header">
        <h2>Редактировать публикацию</h2>
        <button onClick={() => navigate(`/posts/${id}`)} className="close-btn">×</button>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className="edit-options">
          <div className="options">
            <button type="button">Фото/видео</button>
            <button type="button">Отметить друзей</button>
            <button type="button">Чувства/действия</button>
            <button type="button">Отметить посещение</button>
            <button type="button">GIF</button>
          </div>
          <button type="submit" className="save-btn">Сохранить</button>
        </div>
      </form>
    </div>
  );
};

export default PostEdit;
