import React from 'react';
import { 
  Home, 
  Shield, 
  Layout, 
  Users, 
  CloudLightning 
} from 'lucide-react';
import { NavItem, NavigationProps } from '../types/types';

export const Navigation: React.FC<NavigationProps> = ({ setCurrentPage }) => {
  const navItems: NavItem[] = [
    { name: 'Home', icon: <Home />, page: 'home' },
    { name: 'Sign In', icon: <Shield />, page: 'signin' },
    { name: 'Sign Up', icon: <Users />, page: 'signup' },
    { name: 'Website Creator', icon: <CloudLightning />, page: 'websitecreator' },
    { name: 'Form Data', icon: <Layout />, page: 'formdata' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-green-400">CyberPhish</div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <button 
              key={item.page}
              onClick={() => setCurrentPage(item.page)}
              className="flex items-center space-x-2 hover:text-green-400 transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};