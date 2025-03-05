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
    <section className="bg-white dark:bg-gray-800 h-screen flex items-center justify-center">
      <Toast ref={toast} />
      <style>
        {`
          .p-toast .p-toast-message {
            background-color: rgba(30, 41, 59, 0.9) !important;
            color: white !important;
            border-radius: 8px !important;
          }
          .p-toast .p-toast-message-success {
            background-color: #22c55e !important;
            color: white !important;
          }
          .p-toast .p-toast-message-error {
            background-color: #dc2626 !important;
            color: white !important;
          }
        `}
      </style>
      <div className="container w-96 text-center p-8 text-white bg-opacity-30 backdrop-blur-lg rounded-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png"
          alt="User Avatar"
          className="mx-auto w-24"
        />
        <h2 className="text-xl mb-4">Login Here</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 my-2 rounded bg-gray-700 text-white"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 my-2 rounded bg-gray-700 text-white"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="p-2 bg-blue-500 rounded-2xl w-36 hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="mt-4">
          New here? <a href="/signup" className="underline text-blue-300">Sign Up</a>
        </p>
        <p>
          <a href="/forgot-password" className="underline text-blue-300">Forgot Password?</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
