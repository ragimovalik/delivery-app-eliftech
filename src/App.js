import { Routes, Route } from 'react-router-dom';

import { ShopsPage } from './views';
import Header from './modules/Header';

import './App.css';

import { routes } from './routes';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map(({ path, title, component }) => (
          <Route key={title} path={path} element={component} title={title} />
        ))}
      </Routes>
      {/* <ShopsPage /> */}
    </div>
  );
}

export default App;
