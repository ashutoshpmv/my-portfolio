import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
//import Skills from './components/Skills';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-inter relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;