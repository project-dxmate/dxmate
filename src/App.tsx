import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BronzeBadge } from './renderer/components/BronzeBadge';

function App() {
  return (
    <div className="App">
      <BronzeBadge tier='I' size='small' />
    </div>
  );
}

export default App;
