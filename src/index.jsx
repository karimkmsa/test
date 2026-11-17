
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// React-Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Boxicons
import 'boxicons';

// Main SCSS file
import './assets/scss/style.scss';

// Main JS file
import './assets/js/main.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
