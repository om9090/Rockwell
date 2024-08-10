import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const LoginPage = () => {
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form Data:", formData, "Data:", data)
    try {
      const response = await axios.post('https://rockwell-project.onrender.com/auth/login', {
        email: formData.get('email'),
        password: formData.get('password'),
      });

      if (response.status === 200) {
        console.log("Login Response:", response);
        setUserInfo(response?.data); 
        toast.success("Login Successful");
        navigate('/home');
      } else {
        toast.error("Login Failed"); // You can handle other cases accordingly
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className='container p-8 flex items-start justify-center'>
      <div className='w-full max-w-md p-6 rounded-lg bg-white border'>
        <h1 className='text-2xl font-bold mb-6 text-gray-800'>Login</h1>
        <form className='space-y-4' onSubmit={loginUser}>
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              autoComplete="current-email"
              className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              autoComplete="current-password"
              className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
