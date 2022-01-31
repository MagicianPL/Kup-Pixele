import React from 'react';
import './App.css';
import PixelsProvider from './context/PixelsProvider';
import UserProvider from './context/UserProvider';
import Header from './components/Header';
import PixelsGrid from './components/PixelsGrid';
import About from './components/About';
import BuyPlace from './components/BuyPlace';
import LimitedEdition from './components/LimitedEdition';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import ListOfPixelsPage from './components/ListOfPixelsPage';
import UserUpdatePage from './components/UserUpdatePage';
import AllSoldPixelsList from './components/AllSoldPixelsList';
import PlaceDetails from './components/PlaceDetails';
import LoggedRoute from './components/LoggedRoute';
import {HashRouter,
  Routes,
  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <UserProvider>
        <Header />
        <PixelsProvider>
          <Routes>
            <Route path="/" element={<><PixelsGrid /><About /></>} />
            <Route path="/buy" element={<BuyPlace />} />
            <Route path="/limited" element={<LimitedEdition />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login&successregister" element={<LoginPage />} />
            <Route path="/user" element={<LoggedRoute><UserUpdatePage /></LoggedRoute>} />
            <Route path="/pixelslist" element={<LoggedRoute><ListOfPixelsPage /></LoggedRoute>} />
            <Route path="/soldList" element={<AllSoldPixelsList />} />
            <Route path="/place/:id" element={<PlaceDetails />} />
          </Routes>
        </PixelsProvider>
        </UserProvider>
      </HashRouter>
    </div>
  );
}

export default App;
