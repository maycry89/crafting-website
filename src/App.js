import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Quote from './components/Quote';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <MainContent />
      <Quote />
      <Menu />
    </div>
  );
}

export default App;
