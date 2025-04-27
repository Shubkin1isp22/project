import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormInput from '../components/FormInput';
import { useAuth } from '../contexts/AuthContext';
import { Anchor } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<FieldValues>();
  
  const onSubmit = async (data: FieldValues) => {
    try {
      await login(data.email, data.password);
      navigate('/profile');
    } catch (error) {
      console.error('Ошибка входа:', error);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12 bg-ocean-view bg-cover bg-fixed">
        <div className="container-custom max-w-md">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-6">
              <Anchor className="inline-block h-12 w-12 text-sea-blue-600 mb-2" />
              <h1 className="text-2xl font-bold text-gray-900">Вход в аккаунт</h1>
              <p className="text-gray-600">Войдите в свой аккаунт Port</p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FormInput
                label="Email"
                name="email"
                type="email"
                register={register}
                errors={errors}
                validationRules={{
                  required: 'Email обязателен',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Неверный формат email'
                  }
                }}
              />
              
              <FormInput
                label="Пароль"
                name="password"
                type="password"
                register={register}
                errors={errors}
                validationRules={{
                  required: 'Пароль обязателен'
                }}
              />
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-sea-blue-600 focus:ring-sea-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Запомнить меня
                  </label>
                </div>
                
                <a href="#" className="text-sm text-sea-blue-600 hover:text-sea-blue-800">
                  Забыли пароль?
                </a>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Вход...' : 'Войти'}
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Нет аккаунта?{' '}
                <Link to="/register" className="text-sea-blue-600 hover:text-sea-blue-800 font-medium">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;