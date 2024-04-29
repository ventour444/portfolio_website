import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <div className="container mx-auto px-4 ">
        <AboutMe />
        <PortfolioSection />
      </div>
    </>
  );
}

export default App;
