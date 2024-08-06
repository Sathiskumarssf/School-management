import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';




const SignUp = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const navigate = useNavigate();//inbuilt 

  const [form, setForm] = useState({
    role:'',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

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
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (form.password && form.confirmPassword && form.username && form.email && form.role) {
      alert("Please fill All values");
      return;
    }

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
          role:form.role
        })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Form submitted successfully', data);
        navigate('/');

        // Handle successful signup (e.g., redirect to login page, show success message)
      } else {
        console.error('Error submitting form', data);
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error('Error submitting form', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    
    <div>
     <nav className="bg-customColor2 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">SCHool</div>

        <div className="hidden md:flex space-x-4">
          <a href="#about" className="text-white hover:text-gray-200">About</a>
          <a href="#services" className="text-white hover:text-gray-200">Services</a>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
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


    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-customColor1 backdrop-blur-lg max-h-full w-full">

      <div className="bg-white p-8 rounded-xl shadow-2xl w-full h-auto mt-20 max-w-md ">
        <h2 className="text-2xl font-bold mb-8 text-center  ">Sign Up</h2>
       
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Select Role
            </label>
            
            <div className="relative">
              <select
                id="role"
                name="role"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="principal">Principal</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3a1 1 0 00-.71.29l-7 7a1 1 0 001.42 1.42L10 5.41l6.29 6.3a1 1 0 001.42-1.42l-7-7A1 1 0 0010 3z"/></svg>
              </div>
            </div>
          </div>

            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
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
          <div className="mb-4">
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
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 py-2 border rounded"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-customColor2 text-white py-2 rounded hover:bg-customColor4"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-customColor4 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  
    </div>
  );
};





export default SignUp;
