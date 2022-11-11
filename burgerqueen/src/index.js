import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/*import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App.jsx";
//import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*--------Importar rutas -------
import FoodTypeView from "./routes/Foodtype.js";
import OrderView from "./routes/Order.js";
import LogoutView from "./routes/Logout";
/*-------------------------------
import "./firebase/firebaseconfig";

/*--------Creación de rutas -------
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<App />} />
      <Route path ="foodType" element = {<FoodTypeView />} />
      <Route path ="order" element = {<OrderView />} />
      <Route path ="logout" element = {<LogoutView />} />
      </Routes>
  </BrowserRouter>
);
/*-------------------------------*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
