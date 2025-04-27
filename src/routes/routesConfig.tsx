import { ReactElement } from "react";
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import SchedulePage from '../pages/SchedulePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import ProtectedRoute from '../components/ProtectedRoute'; 

const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/schedule', element: <SchedulePage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/login', element: <LoginPage /> },
    { 
      path: '/profile', 
      element: (
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      )
    },
  ];
  
  export default routes;