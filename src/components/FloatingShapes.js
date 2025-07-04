import React from 'react';
import './FloatingShapes.css';

function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="floating-shape top-10 left-10 bg-indigo-300"></div>
      <div className="floating-shape bottom-10 right-10 bg-blue-200"></div>
      <div className="floating-shape top-1/3 left-1/2 bg-purple-200"></div>
    </div>
  );
}

export default FloatingShapes;