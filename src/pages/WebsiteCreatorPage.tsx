import React, { useState } from 'react';
import { Lock, User, Mail } from 'lucide-react';


const AuthModal: React.FC<{ 
  isOpen: boolean, 
  onClose: () => void, 
  onSignIn: () => void 
}> = ({ isOpen, onClose, onSignIn }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-2xl p-8 w-96 shadow-2xl border border-green-600/20">
        <h2 className="text-2xl font-bold mb-6 text-green-400 text-center">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        
        <div className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full pl-10 pr-3 py-2 bg-black/30 rounded-lg border border-green-600/20"
              />
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-10 pr-3 py-2 bg-black/30 rounded-lg border border-green-600/20"
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-10 pr-3 py-2 bg-black/30 rounded-lg border border-green-600/20"
            />
          </div>
          
          <button 
            onClick={onSignIn} 
            className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg transition"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
          
          <div className="text-center">
            <span className="text-gray-400">
              {isSignUp 
                ? 'Already have an account? ' 
                : 'Don\'t have an account? '}
              <button 
                onClick={() => setIsSignUp(!isSignUp)} 
                className="text-green-400 hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </span>
          </div>
        </div>
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export const WebsiteCreatorPage: React.FC = () => {
  const [websiteType, setWebsiteType] = useState('');
  const [websiteTitle, setWebsiteTitle] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const websiteTypes = [
    { value: 'portfolio', label: 'Portfolio Website', description: 'Showcase your work, projects, and achievements. Perfect for creatives and professionals.' },
    { value: 'blog', label: 'Blog', description: 'Share your thoughts, ideas, and experiences with the world. Great for writers and content creators.' },
    { value: 'ecommerce', label: 'E-commerce Store', description: 'Start selling your products online. Includes tools for inventory, payments, and shipping.' },
    { value: 'business', label: 'Business Website', description: 'Create a professional online presence for your business. Showcase your services, products, and contact info.' },
    { value: 'personal', label: 'Personal Website', description: 'Create a digital identity and share your interests, hobbies, and professional info.' },
    { value: 'landing', label: 'Landing Page', description: 'A single-page website designed to capture leads and conversions. Ideal for marketing campaigns.' }
  ];

  const handleCreateWebsite = () => {
    const isLoggedIn = false; 

    if (!isLoggedIn) {
      setIsAuthModalOpen(true);
    } else {
      console.log('Creating website', { websiteType, websiteTitle });
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24">
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onSignIn={() => {
          setIsAuthModalOpen(false);
        }}
      />

      <div className="bg-gray-800/60 backdrop-blur-xl p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Website Creator</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input 
              type="text" 
              placeholder="Website Title" 
              value={websiteTitle}
              onChange={(e) => setWebsiteTitle(e.target.value)}
              className="w-full bg-black/30 p-3 rounded-lg mb-4 border border-green-600/20"
            />
            
            <div className="mb-4">
              <select 
                value={websiteType}
                onChange={(e) => setWebsiteType(e.target.value)}
                className="w-full bg-black/30 p-3 rounded-lg border border-green-600/20"
              >
                <option value="">Select Website Type</option>
                {websiteTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {websiteType && (
              <div className="bg-black/30 p-3 rounded-lg border border-green-600/20 text-gray-300">
                <p>
                  {websiteTypes.find(type => type.value === websiteType)?.description}
                </p>
              </div>
            )}

            <div className="mt-6 bg-black/30 p-4 rounded-lg border border-green-600/20 text-gray-300">
              <h3 className="text-xl text-green-400">Additional Information</h3>
              <p className="mt-2">
                Once you select a website type, we will guide you through the customization process. Whether it's adding pages, choosing designs, or setting up your store, we offer intuitive tools to make it easy to get started.
              </p>
            </div>

            <div className="mt-6 bg-black/30 p-4 rounded-lg border border-green-600/20 text-gray-300">
              <h3 className="text-xl text-green-400">What’s Next?</h3>
              <p className="mt-2">
                After you click "Create Website", we’ll walk you through additional steps to customize your site, including design options, adding content, and setting up your domain. Get ready to launch your online presence!
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-black/30 p-4 rounded-lg border border-green-600/20 h-full">
              <h3 className="text-xl mb-4 text-green-400">How It Works</h3>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Select a website type that matches your needs.</li>
                <li>Customize the title and content of your site.</li>
                <li>Choose a theme and design to make your website unique.</li>
                <li>Launch and manage your website with ease.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleCreateWebsite}
          disabled={!websiteType || !websiteTitle}
          className={`w-full p-3 rounded-lg mt-6 transition ${
            websiteType && websiteTitle 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          Create Website
        </button>
      </div>
    </div>
  );
};
