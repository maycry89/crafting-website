import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('section1');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    const section1Top = section1.offsetTop;
    const section2Top = section2.offsetTop;
    const section3Top = section3.offsetTop;
    
    const offset = window.pageYOffset;

    if (offset >= section1Top && offset < section2Top) {
      setActiveSection('section1');
    } else if (offset >= section2Top && offset < section3Top) {
      setActiveSection('section2');
    } else if (offset >= section3Top) {
      setActiveSection('section3');
    }
  };

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li className={activeSection === 'section1' ? 'active' : ''} onClick={() => scrollToSection('section1')}>Punkt 1</li>
            <li className={activeSection === 'section2' ? 'active' : ''} onClick={() => scrollToSection('section2')}>Punkt 2</li>
            <li className={activeSection === 'section3' ? 'active' : ''} onClick={() => scrollToSection('section3')}>Punkt 3</li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="section1">
          <h2>Abschnitt 1</h2>
          <p>Text für Abschnitt 1</p>
        </section>
        <section id="section2">
          <h2>Abschnitt 2</h2>
          <p>Text für Abschnitt 2</p>
        </section>
        <section id="section3">
          <h2>Abschnitt 3</h2>
          <p>Text für Abschnitt 3</p>
        </section>
      </main>
    </div>
  );
}

export default App;
