import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Garzon from './pages/Garzon';
import Cocina from './pages/Cocina';
import Home from './pages/Home.jsx'
import Desayuno from './pages/Desayuno.jsx'
import Almuerzo from './pages/Almuerzo';

function App(){
  return (
    < div>    
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="garzon" element={ <Garzon/>}/>   
      <Route path='cocina' element={<Cocina/>}/>
      <Route path="desayuno" element={ <Desayuno/>}/>  
      <Route path="almuezoCena" element={ <Almuerzo/>}/>  
    </Routes>   
    </div>
    );

};

export default App
