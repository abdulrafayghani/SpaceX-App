import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { LaunchDetails } from './components/launchDetails/LaunchDetails';
import { Launches } from './components/launches/Launches';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/launches" element={<Launches />}>
            <Route path="/launches/:id" element={<LaunchDetails />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
