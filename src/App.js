import React from 'react';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/Login' element = {<Login/>} />
      <Route path = '/Signup' element = {<Signup/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
