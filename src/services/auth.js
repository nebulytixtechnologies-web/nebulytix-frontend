import api from './api';

const AuthService = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.data.accessToken) {
      localStorage.setItem('token', response.data.data.accessToken);
      localStorage.setItem('user', JSON.stringify(response.data.data));
    }
    return response.data.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  isAdmin: () => {
    const user = AuthService.getCurrentUser();
    return user?.role === 'ADMIN';
  },

  isSubAdmin: () => {
    const user = AuthService.getCurrentUser();
    return user?.role === 'SUB_ADMIN';
  },
};

export default AuthService;