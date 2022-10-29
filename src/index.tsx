import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './i18n';

import './css/pc.css';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)