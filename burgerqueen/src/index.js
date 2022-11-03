import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const name = "Ordena los commits antes de codear";
  const age = 2022;
  return (
    <h1>
      {name} {age}
    </h1>
  );

  /*si funciona pero hay que eliminar la 14
  const married = true
  return <h1> {married ? 'estoy casado' : 'no estoy casado'} 
  </h1>*/
}

root.render(
  <Greeting />

  //<React.StrictMode>
  //<App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
