import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Spinner from './components/spinner';

const ClockView = lazy(() => import('./views/clock'));
const StopWatchView = lazy(() => import('./views/stopwatch'));
const NotFoundView = lazy(() => import('./views/notfound'));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner />}>
        <main>
          <Routes>
            <Route path='/' element={<ClockView />} />
            <Route path='/stop-watch' element={<StopWatchView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
        </main>
      </Suspense>
    </BrowserRouter>
  )
}
