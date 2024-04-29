import React from 'react';

const AboutMe = () => {
  return (
    <div className="text-center p-10 mt-10 bg-white max-w-xl justify-center mx-auto">
      <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
      <p className="text-gray-600 mt-4">
        Hello! I'm <strong>Austin Ventour</strong>, a software engineer and professional DJ from Walthamstow, London. 
        My tech expertise includes developing dynamic web applications with Python, JavaScript, React, and Java. 
        I am also an experienced DJ, performing internationally and managing complex digital systems for music.
      </p>
      <p className="text-gray-600 mt-2">
        My certifications include Oracle Java Foundations Associate and IBM Agile Explorer, 
        and I enjoy creating responsive, user-friendly websites. Check out my work 
        on projects like a Gym Log App in React, a full-stack Chitter platform clone, and a website 
        for makeup artists.
      </p>
      <p className="text-gray-600 mt-2">
        Welcome to my site, where technology meets creativity!
      </p>
    </div>
  );
};

export default AboutMe;
