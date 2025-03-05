import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const Signup = () => {
  const [user, setUser] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const toast = useRef(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Show success toast
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Signup successful!', life: 3000 });

    // Redirect after short delay
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <section className="bg-gray-800 h-screen flex items-center justify-center">
      <Toast ref={toast} />
      <div className="container w-96 text-center p-8 text-white bg-opacity-30 backdrop-blur-lg rounded-lg">
        <h2 className="text-xl mb-4">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 my-2 rounded bg-gray-700 text-white"
            value={user.email} // Fix: Bind value
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 my-2 rounded bg-gray-700 text-white"
            value={user.password} // Fix: Bind value
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 my-2 rounded bg-gray-700 text-white"
            value={user.confirmPassword} // Fix: Bind value
            onChange={handleChange}
            required
          />
          <button type="submit" className="p-2 bg-green-500 rounded-2xl w-36 hover:bg-green-700">
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <a href="/login" className="underline text-blue-300">Login</a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
