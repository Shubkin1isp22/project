import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  registerUser: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserInfo: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = useCallback(() => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
  });

  // 👉 Подставляем токен в каждый запрос
  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  });

  // 👉 Автообновление access токена
  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refresh = localStorage.getItem('refresh');
        if (refresh) {
          try {
            const res: AxiosResponse<{ access: string }> = await axios.post('http://localhost:8000/api/token/refresh/', { refresh });
            localStorage.setItem('access', res.data.access);

            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] = `Bearer ${res.data.access}`;
            }

            return api(originalRequest);
          } catch (refreshError) {
            logout();
          }
        }
      }

      return Promise.reject(error);
    }
  );

  const loadUser = useCallback(async () => {
    try {
      const res: AxiosResponse<User> = await api.get('/user/');
      setUser(res.data);
      setIsAuthenticated(true);
    } catch {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const res: AxiosResponse<{ access: string; refresh: string }> = await axios.post('http://localhost:8000/api/token/', {
      username,
      password,
    });
    localStorage.setItem('access', res.data.access);
    localStorage.setItem('refresh', res.data.refresh);
    await loadUser();
  }, [loadUser]);

  const registerUser = useCallback(
    async ({
      name,
      email,
      password,
      password2,
    }: {
      name: string;
      email: string;
      password: string;
      password2: string;
    }) => {
      await api.post('/register/', {
        name,
        email,
        password,
        password2,
      });

      // Авторизуем пользователя сразу после регистрации
      await login(name, password); // name — это username в DRF
    },
    [login]
  );

  const updateUserInfo = useCallback(
    async (data: Partial<User>) => {
      try {
        const res: AxiosResponse<User> = await api.put('/user/', data);
        setUser(res.data);
      } catch (error) {
        console.error('Ошибка при обновлении информации о пользователе:', error);
        throw error;
      }
    },
    []
  );

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      loadUser();
    }
  }, [loadUser]);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, registerUser, logout, updateUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};