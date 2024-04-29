import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    <div className='App'>
      <HeroSection />
      <div className="container mx-auto px-4 ">
        <AboutMe />
        <PortfolioSection />
        <ContactForm />
      </div>
      </div>
    </>
  );
}

export default App;
