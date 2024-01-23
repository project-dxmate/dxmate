import React from 'react';
import './App.css';
import { Home } from './renderer/views/Home';
import { Login } from './renderer/views/Login';
import { Match } from './renderer/views/Match';
import { Loading } from './renderer/views/Loading';
import { Stats } from './renderer/views/Stats';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;