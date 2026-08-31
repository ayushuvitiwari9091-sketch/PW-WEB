import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import './App.css'
import Vidyapeeth from './Pages/Vidyapeeth';
import Classjunior from './Pages/Classjunior';
import Pwstore from './Pages/Pwstore';
import Testserise from './Pages/Testseries';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/vidyapeeth" element={<Vidyapeeth />} />
          <Route path='/pwstore' element={<Pwstore/>} />
          <Route path='/classjunior' element={<Classjunior />} />
          <Route path='/testseries' element={<Testserise/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App