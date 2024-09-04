import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Color from './Color';
import App from './App';
// import Example from './26-08-2024 xcel';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { Test } from './usestate';
// import Garage from "./react from notes";
import Favorite from './react from notes';
import MyForm from './react from notes';
import Employee from './company';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Employee />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
