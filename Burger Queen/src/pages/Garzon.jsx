import React from "react";
//import Home from "./Home";
import { Link } from "react-router-dom";

const Garzon = () => {
  return (
    <>
      <div>
        <div className="logoTitle">
          <img id="logo" src="./src/img/Logo.png" />
          <h1>Menú El crustáceo cascarudo</h1>
        </div>
        <div id="btns">
        <button>
          <Link to="desayuno">Desayuno</Link>
        </button>
        <button>
          <Link to="AlmuezoCena">Almuerzo/Cena</Link>
        </button>
        </div>
        <button className="volver">
          <Link to="/">Volver</Link>
        </button>
      </div>
    </>
  );
};

export default Garzon;
 