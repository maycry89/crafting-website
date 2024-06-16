// src/components/LightEffect.js
import React, { useEffect } from 'react';
import './LightEffect.css';

const LightEffect = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const light = document.getElementById('light-effect');
      if (light) {
        light.style.left = `${event.pageX - light.clientWidth / 2}px`;
        light.style.top = `${event.pageY - light.clientHeight / 2}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="light-effect" className="light-effect"></div>;
};

export default LightEffect;
