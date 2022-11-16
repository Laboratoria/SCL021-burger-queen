import React from "react";
import { Link } from "react-router-dom";
import menu from "./Menu.json";


const Desayuno = () => {
  const breakfast = menu.desayunos;
  console.log(breakfast);
  return (
    <>
      <div className="logoTitle">
        <img id="logo" src="./src/img/Logo.png" />
        <h1>Desayunos El crustáceo cascarudo</h1>
      </div>
      <div className="pedidos">
        <input id="inputs" placeholder="Cliente"/>
        <input id="inputs" placeholder="Resumen del pedido"/>
      </div>
      <br></br>
      <div className="menuContainer">
      <div className="items">
        {/*<h3>Desayunos</h3>*/}
        {
          breakfast.map((products)=>(
            <button className="btnItem">{products.item}</button>
          ))
        }
      </div>
      <div className="resumenPedido"></div>
      </div>
      <button className="volver">
        <Link to="/garzon">Volver</Link>
      </button>
    </>
  );
};

export default Desayuno;
