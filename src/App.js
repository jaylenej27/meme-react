import React from 'react';
import './App.css';
import MemeGenerator from './Components/Generator';
import { Header } from './Components/Header';

function App() {
  return (
    <>
      <div>
        <Header>
          <h1>Meme Generator</h1>
        </Header>
      </div>
      <div>
        <MemeGenerator />
      </div>
    </>
  );
}

export default App;
