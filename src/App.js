import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Involvement from './Involvement';
import Contact from './Contact';

function App() {
  const bgStyle = {
    backgroundImage: "url('/images/bg2.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',

  };

  return (
    <div style={{ overflowX: 'hidden' }}> 
      <div className="background-container" style={bgStyle}>
        <Navbar />
        <main style={{padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', width: '100%', boxSizing: 'border-box', }}>
          <About />
          <Projects />
          <Experience />
          <Involvement />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
