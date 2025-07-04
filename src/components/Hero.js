import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-20 px-4 relative">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to SkyCast</h1>
      <p className="text-xl md:text-2xl mb-6">Your beautiful daily forecast companion</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">Get Started</button>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;