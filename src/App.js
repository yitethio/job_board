import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro';
import  Home  from './Pages/home';
import ApplicationForm from './Pages/ApplicationForm';
import Signup_c from './Pages/SignUp_compony';
import Comp from './Pages/comp';
import RegistrationForm from './Pages/register';
import ApplyForm from './Pages/apply';







function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Signup_c/>} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/ApplicationForm" element={<ApplicationForm/>}/>
        <Route path='/comp' element={<Comp/>}/>
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path='/apply' element={<ApplyForm/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;