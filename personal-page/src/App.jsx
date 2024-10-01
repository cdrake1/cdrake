import React, { useState } from 'react'; // Import useState
import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/hero';
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Nav/>
      <Hero/>
    </>
  )
}

export default App
