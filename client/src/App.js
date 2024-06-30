import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import BookDetail from './pages/BookDetail'
import Catalogue from './pages/Catalogue'
import Member from './pages/Member'
import ApplyLoan from './pages/ApplyLoan'
import LoanList from './pages/LoanList';
import LoanDetail from './pages/LoanDetail';
import Nav from './components/Nav'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/members' element={<Member />} />
        <Route path='/books/:id' element={<BookDetail />} />
        <Route path='/books' element={<Catalogue />} />
        <Route path='/loans/:nomerid/:idbuku/:nik/:tglpinjam/:status' element={<ApplyLoan />} />
        <Route path='/loans' element={<LoanList />} />
        <Route path='/loans/:nomerid' element={<LoanDetail />} />
      </Routes>
    </div>

  );
}

export default App;

