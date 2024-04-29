// HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="hero bg-gray-800 min-h-screen flex flex-col justify-center items-center text-white">
      <motion.h1
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-6xl font-bold mb-4"
      >
        Austin Ventour
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-xl"
      >
        I am a software engineer. Welcome to my website!
      </motion.p>
    </div>
  );
};

export default HeroSection;
