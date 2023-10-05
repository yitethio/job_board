import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro';
import  Home  from './Pages/home';
import ApplicationForm from './Pages/Application/apply';
import Signup_c from './Pages/SignUp_compony';
import Comp from './Pages/comp';

import Register from './Pages/registration/register';
import ApplyForm from './Pages/Application/apply';

import Welcome from './Pages/welcoming_page';







function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Signup_c/>} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/ApplicationForm" element={<ApplicationForm/>}/>
        <Route path='/comp' element={<Comp/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/apply' element={<ApplyForm/>}/>
        <Route path='/welcome' element={<Welcome/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;