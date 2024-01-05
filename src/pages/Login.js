import React, { useState } from 'react';
import { Navbar } from '../components/NavBar';
import CLogin from '../components/cLogin';

const Login = () => {
  
  return (
    <div className=''>
        <Navbar />
        <div className='mt-1 mb-10 bg-gray-600 h-2'></div>
        <CLogin/>
    </div>
    
  );
};

export default Login;
