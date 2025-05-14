import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routesConfig from "./routes/routesConfig";

function App() {
  return (
      <Router>
        <Routes>
          {routesConfig.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Router>
  );
}

export default App;