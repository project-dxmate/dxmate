import React from 'react';
import './App.css';
import { Home } from './renderer/views/Home';
import { Login } from './renderer/views/Login';
import { Match } from './renderer/views/Match';

function App() {
  return (
    <div className="App">
      <Match />
    </div>
  );
}

export default App;