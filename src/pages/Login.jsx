import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Login = ({ setAuth }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const toast = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.email === 'user@gmail.com' && credentials.password === 'user123') {
      setAuth(true);
      localStorage.setItem("isAuthenticated", "true");

      toast.current.show({ 
        severity: 'success', 
        summary: 'Success', 
        detail: 'Login Successful!', 
        life: 3000 
      });

      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else {
      toast.current.show({ 
        severity: 'error', 
        summary: 'Error', 
        detail: 'Invalid email or password', 
        life: 3000 
      });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <Toast ref={toast} />
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        {/* User Avatar */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png"
          alt="User Avatar"
          className="mx-auto w-24 mb-4"
        />

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Login Here</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            value={credentials.email}
            onChange={handleChange}
            required
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          {/* Login Button */}
          <button type="submit" className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="flex justify-between mt-4 text-sm">
          <div className="text-gray-600 dark:text-gray-300">
            New here? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
