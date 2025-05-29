// src/pages/NotFound.jsx
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-container" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '72px', color: '#00C292' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or was moved.</p>
      <NavLink to="/" style={{ color: '#00C292', fontWeight: 'bold', textDecoration: 'underline' }}>
        Go back to Home
      </NavLink>
    </div>
  );
};

export default NotFound;
