import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import routesConfig from "./routes/routesConfig";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routesConfig.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;