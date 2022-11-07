import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Garzon from './pages/Garzon';
import Cocina from './pages/Cocina';
import Home from './pages/Home.jsx'


function App(){
  return (
    < div>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="garzon" element={ <Garzon/>}/>   
      <Route path='cocina' element={<Cocina/>}/>
    </Routes>   
    </div>
    );

};

export default App
