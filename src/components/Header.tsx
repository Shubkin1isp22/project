import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Anchor, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const navLinks = [
    { title: 'Главная', path: '/' },
    { title: 'О нас', path: '/about' },
    { title: 'Расписание', path: '/schedule' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Логотип */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-federant text-black">Port</span>
        </Link>

        {/* Мобильное меню кнопка */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-sea-blue-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-slate-700 hover:text-sea-blue-600 transition-colors"
            >
              {link.title}
            </Link>
          ))}
          {isAuthenticated ? (
            <>
              <Link
                to="/profile"
                className="text-slate-700 hover:text-sea-blue-600 transition-colors"
              >
                Личный кабинет
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-primary"
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-slate-700 hover:text-sea-blue-600 transition-colors">
                Вход
              </Link>
              <Link to="/register" className="btn btn-primary">
                Регистрация
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-700 hover:text-sea-blue-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="text-slate-700 hover:text-sea-blue-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Личный кабинет
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-primary w-full"
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-slate-700 hover:text-sea-blue-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Вход
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Регистрация
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;