import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Loading } from './components/loading/Loading';

const Home = lazy(() => import('./components/Home/Home'));
const Launches = lazy(() => import('./components/launches/Launches'));
const LaunchDetails = lazy(
  () => import('./components/launchDetails/LaunchDetails')
);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              {' '}
              <Home />{' '}
            </Suspense>
          }
        ></Route>
        <Route
          path="/launches"
          element={
            <Suspense fallback={<Loading />}>
              {' '}
              <Launches />{' '}
            </Suspense>
          }
        />
        <Route
          path="/launches/:id"
          element={
            <Suspense fallback={<Loading />}>
              {' '}
              <LaunchDetails />{' '}
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
