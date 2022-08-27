import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './styles/index.css'

import App from './App';
import { GlobalProvider } from './context/GlobalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </React.StrictMode>
  </HashRouter>
);

