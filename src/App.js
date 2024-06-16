import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) { // Beispiel: Scrollen Sie 400 Pixel nach unten, bevor das sticky-Verhalten beendet wird
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <main>
        <p>This is some content. Scroll down to see the effect of sticky.</p>
        <div className={`sticky-box ${scrolling ? 'stopped' : ''}`}>
          <h2>Sticky Box</h2>
          <p>This box will stick to the top when you scroll past it.</p>
        </div>
        <div className="long-content"></div>
        <div className="long-content"></div>
        <div className="long-content"></div>
        <div className="long-content"></div>
        <div className="long-content"></div>
      </main>
    </div>
  );
}

export default App;

