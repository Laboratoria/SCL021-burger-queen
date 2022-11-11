import React from 'react'
import burgerbackground from '../imgs/burgerbackground.png';
import '../home/home.css';



const Home = () => {
  return (
    <section id= "homePage"> {/*Puede ser sin el nombre, solo llaves*/}
    <div className='borderExt'>
    <div className='mainContainer'>
      <img className="burgerbackground" src ={burgerbackground} alt="burgerbackground.png"/>
      <button type="submit" className="loginBtn">Login</button>
      <button type="submit" className="continueGoogleBtn">Login with</button>
   
    <div className= "textContainer">
    <h1> Burger</h1>
    <h2> Queen</h2>
   </div>

    </div>
    </div>
    </section>

  )
 
};

export default Home