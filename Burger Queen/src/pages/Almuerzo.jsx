import React from "react";
import { Link } from "react-router-dom";

const Almuerzo = () => {
  return (
    <>
      <div className="logoTitle">
        <img id="logo" src="./src/img/Logo.png" />
        <h1>Almuerzo/Cena El crustáceo cascarudo</h1>
      </div>
      <div className="pedidos">
        <input id="inputs" placeholder="Cliente" />
        <input id="inputs" placeholder="Resumen del pedido" />
      </div>
      <br></br>
      <button className="volver">
        <Link to="/garzon">Volver</Link>
      </button>
    </>
  );
};

export default Almuerzo;
