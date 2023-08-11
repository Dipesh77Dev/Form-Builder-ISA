import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode> 
);


/*
If it not work we can add in react package.json - "proxy" : "http://localhost:5500/",
We can add in backend index.js - cors {http://localhost:3000}
*/