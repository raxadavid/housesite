// import React, { useState, useEffect } from 'react';
import logo from '../../logo.png';
import About from './About';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="header-large house-header-1">house music</h1>
    </header>
    <About />
  </div>
)

export default App;
