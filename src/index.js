import React from 'react';
import ReactDOM from 'react-dom';

//Estilos
import './index.css';
import './assets/custom/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-step-progress/dist/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'popper.js/dist/popper.min.js'


import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();