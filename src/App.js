import React from 'react';
import Navbar from './componets/Navbar/Navbar';
import AddService from './componets/AddService';
import Service from './componets/Service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Service/>}/>
        <Route path='/addService' element={<AddService/>}/>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
