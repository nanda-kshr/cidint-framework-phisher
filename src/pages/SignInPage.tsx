import React, { useState, FormEvent } from 'react';

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Sign In:', { email, password });
  };

  return (
    <div className="container mx-auto px-4 pt-24 flex justify-center items-center">
      <div className="bg-gray-800/60 backdrop-blur-xl p-10 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Sign In</h2>
        <form onSubmit={handleSubmit}>
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
            className="w-full bg-black/30 p-3 rounded-lg mb-6 border border-green-600/20"
            required
          />
          <button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};