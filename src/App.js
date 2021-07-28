// import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import About from './components/About';
import Types from './components/Types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const types = [
    'acid', 'afro', 'bass', 'big room', 'chicago',
    'deep', 'electro', 'hard', 'future', 'latin',
    'piano', 'progressive', 'tech', 'tribal', 'speed'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header-large house-header-1">house music</h1>
      </header>
      <About />
      <Types types={types} />
    </div>
  );
}

export default App;
