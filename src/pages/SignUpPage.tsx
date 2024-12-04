import React, { useState, FormEvent } from 'react';

export const SignUpPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setError('');

    console.log('Sign Up:', { fullName, email, password });
  };

  return (
    <div className="container mx-auto px-4 pt-24 flex justify-center items-center">
      <div className="bg-gray-800/60 backdrop-blur-xl p-10 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Sign Up</h2>
        {error && (
          <div className="bg-red-600/20 text-red-400 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-black/30 p-3 rounded-lg mb-4 border border-green-600/20"
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black/30 p-3 rounded-lg mb-4 border border-green-600/20"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black/30 p-3 rounded-lg mb-4 border border-green-600/20"
            required
            minLength={8}
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-black/30 p-3 rounded-lg mb-6 border border-green-600/20"
            required
            minLength={8}
          />
          <button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};