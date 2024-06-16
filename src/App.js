import React, { useState, useEffect } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Quote from './components/Quote';

function App() {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, white, #d3d3d3)`,
        height: '100vh',
        width: '100vw',
        transition: 'background 0.5s ease',
      }}
    >
      <MainContent></MainContent>
      
    </div>
  );
}

export default App;
