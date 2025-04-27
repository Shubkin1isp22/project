import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormInput from '../components/FormInput';
import { useAuth } from '../contexts/AuthContext';
import { Anchor } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch
  } = useForm<FieldValues>();
  
  const password = watch('password', '');
  
  const onSubmit = async (data: FieldValues) => {
    try {
      await registerUser(data.name, data.email, data.password);
      navigate('/profile');
    } catch (error) {
      console.error('Ошибка регистрации:', error);
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
              <h1 className="text-2xl font-bold text-gray-900">Регистрация</h1>
              <p className="text-gray-600">Создайте аккаунт Port для бронирования круизов</p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FormInput
                label="Имя"
                name="name"
                register={register}
                errors={errors}
                validationRules={{
                  required: 'Имя обязательно',
                  minLength: {
                    value: 2,
                    message: 'Имя должно содержать минимум 2 символа'
                  }
                }}
              />
              
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
                  required: 'Пароль обязателен',
                  minLength: {
                    value: 6,
                    message: 'Пароль должен содержать минимум 6 символов'
                  }
                }}
              />
              
              <FormInput
                label="Подтверждение пароля"
                name="passwordConfirm"
                type="password"
                register={register}
                errors={errors}
                validationRules={{
                  required: 'Подтверждение пароля обязательно',
                  validate: value => value === password || 'Пароли не совпадают'
                }}
              />
              
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Уже есть аккаунт?{' '}
                <Link to="/login" className="text-sea-blue-600 hover:text-sea-blue-800 font-medium">
                  Войти
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

export default RegisterPage;