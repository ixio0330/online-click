import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';

const ClockView = lazy(() => import('./views/clock'));
const StopWatchView = lazy(() => import('./views/stopWatch'));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Page Load...</div>}>
        <Routes>
          <Route path='/' element={<ClockView />} />
          <Route path='/stop-watch' element={<StopWatchView />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}