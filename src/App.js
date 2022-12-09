
import './App.css';
import React from 'react';
import Header from './common/header/Header';
import Home from './page/home/Home';
import Registration from './page/registration/Registration';
import { Routes, Route } from 'react-router-dom';
import Login from './page/login/Login';
import Dashboard from './page/dashboard/Dashboard';

function App() {
  return (
    <div className='bg-[#E5E5E5]'>
      <div className="App bg-nen rounded-[19px]">
        <Header className="fixed" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={< Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
