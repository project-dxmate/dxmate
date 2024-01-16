import React from 'react';
import './App.css';
import { Home } from './renderer/views/Home';
import { Login } from './renderer/views/Login';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;