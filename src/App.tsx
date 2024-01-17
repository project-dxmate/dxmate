import React from 'react';
import './App.css';
import { Home } from './renderer/views/Home';
import { Login } from './renderer/views/Login';
import { Match } from './renderer/views/Match';
import { Loading } from './renderer/views/Loading';

function App() {
  return (
    <div className="App">
      <Loading />
    </div>
  );
}

export default App;