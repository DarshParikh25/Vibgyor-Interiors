import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Themes from './components/Themes';

function App() {
  

  return (
    <div className="font-sans text-gray-900">
      <Navigation />
      <Home />
      <About />
      <Themes />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;