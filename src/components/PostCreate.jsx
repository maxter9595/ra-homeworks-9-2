import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import '../styles/PostCreate.css';

const PostCreate = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7071/posts', { content });
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="post-create">
      <div className="create-header">
        <h2>Создать пост</h2>
        <button onClick={() => navigate('/')} className="close-btn">×</button>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Напишите что-нибудь..."
          required
        />
        <div className="create-options">
          <div className="options">
            <button type="button">Фото/видео</button>
            <button type="button">Отметить друзей</button>
            <button type="button">Чувства/действия</button>
            <button type="button">Отметить посещение</button>
            <button type="button">GIF</button>
          </div>
          <button type="submit" className="publish-btn">Опубликовать</button>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
