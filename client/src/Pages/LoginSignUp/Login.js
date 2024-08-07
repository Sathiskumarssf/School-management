

import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';


const Login = () => {

  const navigate = useNavigate();//inbuilt 


  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Add form validation logic here
    if (!form.password) {
      alert("Passwords shuld be given ");
      return;
    }

    if (!form.password &&  !form.email ) {
      alert("Please fill All values");
      return;
    }

    try {
      const response = await fetch(' http://localhost:5000/api/v1/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successfully', data);

         navigate('/');

      } else {
        console.error('Error submitting form', data);
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error('error in login', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
        <div>
            <nav className="bg-customColor2 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">SCHool</div>

        <div className="hidden md:flex space-x-4">
          <a href="http://localhost:3000/about" className="text-white hover:text-gray-200">About</a>
          <a href="http://localhost:3000/services" className="text-white hover:text-gray-200">Services</a>
          <a href="http://localhost:3000/contact" className="text-white hover:text-gray-200">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#about" className="block text-white hover:text-gray-200 p-2">About</a>
          <a href="#services" className="block text-white hover:text-gray-200 p-2">Services</a>
          <a href="#contact" className="block text-white hover:text-gray-200 p-2">Contact</a>
        </div>
      )}
    </nav>
</div>

<div>
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-custom-background backdrop-blur-lg h-64 w-full">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <hr className='-mt-4 bg-customColor3' ></hr>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className=" mt-5 block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-customColor3 text-white py-2 rounded hover:bg-customColor4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
</div>
<Footer/>
</div>
   
  );
};

export default Login;

