import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualifications/Qualification';
import Work from './components/work/Work';

function App() {
  return (
    <>
    <Header/>

    <main>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Work/>

    </main>
    
    </>
  );
}

export default App;
