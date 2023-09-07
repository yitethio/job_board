import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Intro from './Pages/Intro';
import Compregister from './Pages/Comp_register';
import Home from './Pages/home';




function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Compregister/>} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route paath="/intro2" element={<intro_2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;