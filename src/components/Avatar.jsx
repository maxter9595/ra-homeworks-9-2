const Avatar = ({ userId, name, size = 48 }) => {
  const getInitials = (name) => 
    name ? name.split(' ').map(p => p[0]).join('') : 'U';

  return (
    <div 
      className="author-avatar"
      style={{ width: size, height: size }}
      aria-label={`Аватар пользователя ${name || 'Неизвестный'}`}
    >
      <img
        src={`https://i.pravatar.cc/${size}?img=${userId % 70}`}
        alt={name ? `Профиль ${name}` : 'Профиль пользователя'}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.textContent = getInitials(name);
          e.target.parentElement.style.display = 'flex';
          e.target.parentElement.style.alignItems = 'center';
          e.target.parentElement.style.justifyContent = 'center';
          e.target.parentElement.style.fontWeight = 'bold';
          e.target.parentElement.style.color = 'white';
        }}
      />
    </div>
  );
};

export default Avatar;
