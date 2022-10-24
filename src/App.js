import React from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import About from './components/About'
import Demo from './components/Demo'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
