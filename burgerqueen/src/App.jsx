

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/Foodtype";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <>
      <Routes>
        {" "}
        {/*Rutas hijas dentro de elemento route
  Cuando hago click en cada path, me renderea a  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
