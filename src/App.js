import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Intro from './Pages/Intro';
import Compregister from './Pages/Comp_register';
import Intro2 from './Pages/intro2'; // Make sure to import Intro2 component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/comp_register" element={<Compregister />} /> {/* Corrected path */}
        <Route path="/intro2" element={<Intro2 />} /> {/* Corrected component name */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
