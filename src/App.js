import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import Home from './Pages/home';
import ApplicationForm from './Pages/ApplicationForm';
import Intro from './Pages/Intro';





function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUp/>} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ApplicationForm" element={<ApplicationForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;