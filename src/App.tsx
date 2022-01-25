import React from 'react';
import './App.css';
import PixelsProvider from './context/PixelsProvider';
import Header from './components/Header';
import PixelsGrid from './components/PixelsGrid';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <PixelsProvider>
        <PixelsGrid />
        <About />
      </PixelsProvider>
    </div>
  );
}

export default App;
