import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the homepage...</p>
    </div>
  );
};

export default NotFound;
