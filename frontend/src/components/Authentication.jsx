import { Navigate } from 'react-router-dom';

const Authentication = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check the flag
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default Authentication;