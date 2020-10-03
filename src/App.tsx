import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './components/Home/Home';
import { LaunchDetails } from './components/launchDetails/LaunchDetails';
import { Launches } from './components/launches/Launches';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:id" element={<LaunchDetails />} />
      </Routes>
    </div>
  );
}

export default App;
