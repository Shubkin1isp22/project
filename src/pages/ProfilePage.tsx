import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormInput from '../components/FormInput';
import { useAuth } from '../contexts/AuthContext';
import { User, LogOut, CreditCard, MapPin } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user, logout, updateUserInfo } = useAuth();
  const navigate = useNavigate();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<FieldValues>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
    }
  });
  
  const onSubmit = async (data: FieldValues) => {
    try {
      updateUserInfo({
        name: data.name,
        email: data.email,
      });
      // Можно добавить уведомление об успешном обновлении
    } catch (error) {
      console.error('Ошибка обновления профиля:', error);
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-400 bg-cover bg-center h-40 relative">
                <div className="absolute inset-0  bg-opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <User className="h-12 w-12 text-sea-blue-600" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">{user?.name}</h1>
                      <p>{user?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h2 className="text-lg font-bold mb-4">Навигация</h2>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="#" 
                            className="flex items-center p-2 text-gray-700 rounded hover:bg-sea-blue-50 hover:text-sea-blue-600"
                          >
                            <User className="mr-2 h-5 w-5" />
                            <span>Профиль</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="flex items-center p-2 text-gray-700 rounded hover:bg-sea-blue-50 hover:text-sea-blue-600"
                          >
                            <CreditCard className="mr-2 h-5 w-5" />
                            <span>Мои бронирования</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#" 
                            className="flex items-center p-2 text-gray-700 rounded hover:bg-sea-blue-50 hover:text-sea-blue-600"
                          >
                            <MapPin className="mr-2 h-5 w-5" />
                            <span>Избранные круизы</span>
                          </a>
                        </li>
                        <li>
                          <button 
                            onClick={handleLogout}
                            className="flex items-center w-full p-2 text-red-600 rounded hover:bg-red-50"
                          >
                            <LogOut className="mr-2 h-5 w-5" />
                            <span>Выйти</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h2 className="text-xl font-bold mb-6">Редактирование профиля</h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        className="mt-4"
                      />
                      
                      <div className="mt-6">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          {isSubmitting ? 'Сохранение...' : 'Сохранить изменения'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;