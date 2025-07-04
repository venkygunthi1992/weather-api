import React from 'react';

const Testimonials = () => (
  <section className="py-16 px-4 bg-blue-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10">What People Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <p>"SkyCast is a daily essential for me. Love the clean UI!"</p>
          <span className="block mt-4 font-bold">— Alex R.</span>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <p>"The weather updates are spot on and the design is gorgeous."</p>
          <span className="block mt-4 font-bold">— Priya M.</span>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;