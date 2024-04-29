import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaSpotify } from 'react-icons/fa';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 justify-between items-center">
        <div className="flex items-center justify-center">

          <a href="https://github.com/ventour444" className="p-2"><FaGithub size="3em"/></a>
          <span className="px-2"></span>
          <a href="https://www.linkedin.com/in/ventour444" className="p-2"><FaLinkedinIn size="3em"/></a>
          <span className="px-2"></span>
          <button onClick={toggleModal} className="p-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Contact Me
          </button>
          <span className="px-2"></span>
          <a href="https://instagram.com/ventour444" className="p-2"><FaInstagram size="3em"/></a>
          <span className="px-2"></span>
          <a href="https://spotify.com/user/ventour444" className="p-2"><FaSpotify size="3em"/></a>
        </div>
      </nav>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleModal}></div>
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <form className="space-y-3" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white" />
                <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white" />
                <textarea placeholder="Your Message" className="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white" rows="3"></textarea>
                <div className="flex justify-end">
                  <button type="button" onClick={toggleModal} className="p-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">Close</button>
                  <button type="submit" className="p-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Send Message</button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
