import React from 'react';
import './App.css';
import Generator from './Generator';
import { Header } from './Header';

function App() {
  return (
    <>
      <div>
        <Header>
          <h1>Meme Generator</h1>
        </Header>
      </div>
      <div>
        <Generator />
      </div>
    </>
  );
}

export default App;
