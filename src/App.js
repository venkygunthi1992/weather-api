// App.js
import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WeatherCard from './components/WeatherCard';
import './styles/animations.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-sky-100 to-white min-h-screen overflow-hidden">
      <Hero />
      <Features />
      <Testimonials />
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default App;