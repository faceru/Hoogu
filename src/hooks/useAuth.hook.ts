import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from 'common/router';

interface IUseAuth {
  token: string;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuth = (): IUseAuth => {
  const localToken: string | null = localStorage.getItem('token');

  const [token, setToken] = useState<string>(localToken || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (localToken) {
      setToken(localToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = useCallback(
    (newToken: string) => {
      if (newToken) {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        navigate(AppPaths.main);
      }
    },
    [navigate]
  );

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setToken('');
    navigate(AppPaths.main);
  }, [navigate]);

  return { token, login, logout };
};
