import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import axios from 'axios'
import { AuthContextProvider } from './context/AuthContext';

axios.defaults.withCredentials = true

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <Router />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
