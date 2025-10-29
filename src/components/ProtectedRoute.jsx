import { Navigate } from 'react-router-dom';
import { authService } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

