import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BronzeBadge } from './renderer/components/BronzeBadge';
import { Home } from './renderer/views/Home';
import { updateDoublesSkill } from './utils/updateDoublesSkill';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;