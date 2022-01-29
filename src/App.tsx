import React from 'react';
import './App.css';
import PixelsProvider from './context/PixelsProvider';
import UserProvider from './context/UserProvider';
import Header from './components/Header';
import PixelsGrid from './components/PixelsGrid';
import About from './components/About';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import {BrowserRouter,
  Routes,
  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <PixelsProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<><PixelsGrid /><About /></>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login&successregister" element={<LoginPage />} />
          </Routes>
        </UserProvider>
        </PixelsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
