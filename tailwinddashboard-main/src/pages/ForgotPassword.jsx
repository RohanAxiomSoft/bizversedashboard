import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const toast = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email.trim() === '') {
      toast.current.show({ severity: 'warn', summary: 'Warning', detail: 'Email is required.', life: 3000 });
      return;
    }

    if (email === 'user@gmail.com') {
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Password reset link sent!', life: 3000 });

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'No account found with this email.', life: 3000 });
    }
  };

  return (
    <section className="bg-gray-800 h-screen flex items-center justify-center">
      <Toast ref={toast} />
      <div className="container w-96 text-center p-8 text-white bg-opacity-30 backdrop-blur-lg rounded-lg">
        <h2 className="text-xl mb-4">Forgot Password?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"  // <-- Added Name Attribute
            placeholder="Enter your email"
            className="w-full p-2 my-2 rounded bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="p-2 bg-orange-500 rounded-2xl w-36 hover:bg-orange-700">
            Reset
          </button>
        </form>
        <p className="mt-4">
          <a href="/login" className="underline text-blue-300">Back to Login</a>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
