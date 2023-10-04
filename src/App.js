import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro';
import  Home  from './Pages/home';
import ApplicationForm from './Pages/Application/ApplicationForm';
import Signup_c from './Pages/SignUp_compony';
import Comp from './Pages/comp';
import Welcome from './Pages/welcoming_page';
import Register from './Pages/registration/register'








function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Signup_c/>} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/ApplicationForm" element={<ApplicationForm/>}/>
        <Route path='/comp' element={<Comp/>}/>
        <Route path='/welcoming_page' element={<Welcome/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;