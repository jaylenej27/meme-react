import React from 'react';
import './App.css';
import MemeGenerator from './Components/MemeGenerator';
import { Header } from './Components/Header';

function App() {
  return (
    <>
        <Header>
          <h1>Meme Generator</h1>
        </Header>
        <MemeGenerator />
    </>
  );
}

export default App;
