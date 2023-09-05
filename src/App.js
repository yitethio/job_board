import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Intro from './Pages/Intro';
import Compregister from './Pages/Comp_register';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Compregister/>} />
        <Route path="/intro" element={<Intro />} />
       
        <Route paath="/intro2" element={<intro_2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;