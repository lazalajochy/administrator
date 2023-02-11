import React from 'react';
import Navbar from './componets/Navbar/Navbar';
import AddService from './componets/AddService';
import Service from './componets/Service';
import EditService from './componets/EditService';
import ListCustomer from './componets/ListCustomers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Service/>}/>
        <Route path='/editService/:id' element={<EditService/>} />
        <Route path='/addService' element={<AddService/>}/>
        <Route path='/listCustomer' element={<ListCustomer/>}/>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
