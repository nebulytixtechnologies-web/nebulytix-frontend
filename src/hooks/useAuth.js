import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';
import AuthService from '../services/auth';

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token, isLoading } = useSelector((state) => state.auth);

  const isAuthenticated = !!token && !!user;
  const isAdmin = user?.role === 'ADMIN';
  const isSubAdmin = user?.role === 'SUB_ADMIN';

  const handleLogout = () => {
    dispatch(logout());
    navigate('/admin/login');
  };

  const hasPermission = (requiredRole) => {
    if (!isAuthenticated) return false;
    if (requiredRole === 'ADMIN') return isAdmin;
    if (requiredRole === 'SUB_ADMIN') return isAdmin || isSubAdmin;
    return false;
  };

  return {
    user,
    token,
    isLoading,
    isAuthenticated,
    isAdmin,
    isSubAdmin,
    logout: handleLogout,
    hasPermission,
  };
};

export default useAuth;