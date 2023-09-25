import React from 'react';
import ReactDOM from 'react-dom';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";//para habilitar la navegación basada en URL
import axios from "axios";

import './index.css';

axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();