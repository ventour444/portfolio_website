import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import gymLogImage from '../assets/ventourGymLogLite.png';
import portfolioImage from '../assets/ventourPortfolioSite.png';
import project3Image from '../assets/ce19bbf2-1155-4a64-b32e-3f8ce46ac277.webp';

const portfolioItems = [
  {
    id: 1,
    title: "Gym Log Lite (React)",
    link: "https://github.com/ventour444/GymLogLite",
    imgSrc: gymLogImage,
  },
  {
    id: 2,
    title: "Dual Portfolio Template (React)",
    link: "https://github.com/ventour444/portfolio",
    imgSrc: portfolioImage,
  },
  {
    id: 3,
    title: "Project 3",
    link: "https://link-to-project3.com",
    imgSrc: project3Image,
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap justify-center items-center mt-32 my-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {portfolioItems.map((item) => (
        <motion.div
          key={item.id}
          className="m-8 w-60 h-60 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg overflow-hidden"
          whileHover={{ scale: 1.3, backdropFilter: "blur(0px)" }}
          onClick={() => window.location.href = item.link}
        >
          <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
          <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white">
            {item.title}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default PortfolioSection;
