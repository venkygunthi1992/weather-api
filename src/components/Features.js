import React from 'react';

const features = [
  { title: 'Accurate Forecasts', description: 'Get real-time weather data you can trust.' },
  { title: 'Location-based Info', description: 'Auto-detects your city and weather instantly.' },
  { title: 'Clean UI', description: 'Minimal and beautiful design for easy reading.' }
];

const Features = () => (
  <section className="py-16 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-10">Features</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feat, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
          <p className="text-gray-600">{feat.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;