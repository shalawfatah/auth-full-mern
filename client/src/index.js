import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import axios from 'axios'

axios.defaults.withCredentials = true

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
