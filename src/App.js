import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Intro from './Pages/Intro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;