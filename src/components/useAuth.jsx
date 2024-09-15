import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, clearUser } from '@/redux/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_NODE_BASE_URL;

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetch(`${API_BASE_URL}/api/validate-token`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.ok) {
            const userData = await response.json();
            dispatch(setUser(userData));
          } else {
            dispatch(clearUser());
          }
        } else {
          dispatch(clearUser());
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        dispatch(clearUser());
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [dispatch, API_BASE_URL]);

  const login = async (credentials) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const userData = await response.json();
        dispatch(setUser(userData));
        localStorage.setItem('token', userData.token);
        navigate(userData.role === 'admin' ? '/admin/dashboard' : '/user/profile');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(clearUser());
    navigate('/');
  };

  return { user, isAuthenticated, isLoading, login, logout };
};