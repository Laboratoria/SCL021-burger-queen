import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Homeview from './routes/homeView';
import './Styles/Home.css';
import MenuView from './routes/MenuView';
import './Styles/MenuView.css';
import DrinksView from './routes/Drinks';
import FoodsView from './routes/Foods';
import './Styles/foods.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homeview/>} />
      <Route path="menu" element={<MenuView/>} />
      <Route path="foods" element={<FoodsView/>} />
      <Route path="drinks" element={<DrinksView/>} />
   </Routes>
  </BrowserRouter>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
