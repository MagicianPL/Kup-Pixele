import React from 'react';
import './App.css';
import PixelsProvider from './context/PixelsProvider';
import Header from './components/Header';
import PixelsGrid from './components/PixelsGrid';
import About from './components/About';
import RegisterPage from './components/RegisterPage';
import {BrowserRouter,
  Routes,
  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <PixelsProvider>
          <Routes>
            <Route path="/" element={<><PixelsGrid /><About /></>} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </PixelsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
