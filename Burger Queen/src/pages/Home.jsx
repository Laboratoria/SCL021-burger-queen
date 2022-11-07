import React from "react";
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { Link }  from "react-router-dom";
import "../../styles/home.css"


function Home(){
    const [count, setCount] = useState(0)

    return (
      <div className="App">  
      <div className="logoTitle">
      <img id="logo" src="./src/img/Logo.png"/>     
        <h1>El crustáceo cascarudo</h1>
      </div>
        <div className="btns">
        <button><Link to="garzon">Garzones</Link></button>
        <button><Link to="cocina">Cocina</Link></button>
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> 
        </div>




      </div>
    )
}
<Link to="/">Home</Link>
export default Home
