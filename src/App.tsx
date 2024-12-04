import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { WebsiteCreatorPage } from './pages/WebsiteCreatorPage';
import { FormDataPage } from './pages/FormDataPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'signin': return <SignInPage />;
      case 'signup': return <SignUpPage />;
      case 'websitecreator': return <WebsiteCreatorPage />;
      case 'formdata': return <FormDataPage />;
      default: return <HomePage />;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;