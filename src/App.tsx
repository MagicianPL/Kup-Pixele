import React from 'react';
import './App.css';
import PixelsProvider from './context/PixelsProvider';
import UserProvider from './context/UserProvider';
import Header from './components/Header';
import PixelsGrid from './components/PixelsGrid';
import About from './components/About';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import ListOfPixelsPage from './components/ListOfPixelsPage';
import UserUpdatePage from './components/UserUpdatePage';
import {BrowserRouter,
  Routes,
  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
        <Header />
        <PixelsProvider>
          <Routes>
            <Route path="/" element={<><PixelsGrid /><About /></>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login&successregister" element={<LoginPage />} />
            <Route path="/user" element={<UserUpdatePage />} />
            <Route path="/pixelslist" element={<ListOfPixelsPage />} />
          </Routes>
        </PixelsProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
