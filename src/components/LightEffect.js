import React, { useEffect } from 'react';

const LightEffect = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth * 100;
      const y = event.clientY / window.innerHeight * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default LightEffect;
