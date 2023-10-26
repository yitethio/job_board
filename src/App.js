import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro';
import  Home  from './Pages/home';
import Comp from './Pages/comp';
import Welcome from './Pages/welcoming_page'
import Register from './Pages/registration/register'
import ApplyForm from './Pages/Application/apply'







function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Intro/>} />  
        <Route path="/home" element={<Home/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path='/comp' element={<Comp/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/apply' element={<ApplyForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;