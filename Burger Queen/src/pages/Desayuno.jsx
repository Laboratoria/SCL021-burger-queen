import React from 'react';
import { Link } from "react-router-dom";

const Desayuno = () => {
  return (
    <>     
      <div className="logoTitle">
          <img id="logo" src="./src/img/Logo.png" />
          <h1>Desayunos El crustáceo cascarudo</h1>
      </div>
      <div className='pedidos'>

      </div>
      <button><Link to="garzon">Volver</Link></button>
    </>
  )
}

export default Desayuno
