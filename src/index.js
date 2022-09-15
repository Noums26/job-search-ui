import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { DataProvider } from './provider/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

