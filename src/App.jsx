import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'

import './App.css'
import Vidyapeeth from './Pages/Vidyapeeth';
import Powerbatch from './Pages/Powerbatch';
import Classjunior from './Pages/Classjunior';
import Pwstore from './Pages/Pwstore';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/vidyapeeth" element={<Vidyapeeth />} />
          <Route path='/pwstore' element={<Pwstore/>} />
          <Route path='/classjunior' element={<Classjunior />} />
          <Route path='/powerbatch' element={<Powerbatch />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App