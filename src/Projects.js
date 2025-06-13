import React from 'react';

function Projects() {
  return (
    <>
<div className="custom-shape-divider-top-1749427692">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
        fill="#E6C082"/>
    </svg>
</div>
      <section
        id="projects"
        style={{
          backgroundColor: '#E6C082',
          padding: '6rem 2rem 100px',
          marginBottom: '0px',
          marginTop: '-5px',
          position: 'relative',
          zIndex: 0,
        }}
      >
      

        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Projects</h2>

        {/* Netflix Graph */}
        <div style={{ marginBottom: '3rem', color: 'black', textAlign:'center' }}>
          <h3>Netflix Cast Graph | Javascript, d3.js</h3>
          <p>
            Built an interactive d3.js visualization showing connections between Netflix shows and actors
          </p>
          <video
            width="100%"
            controls
            style={{ maxWidth: '600px', borderRadius: '12px' }}
          >
            <source src="/videos/Visualization.webm" type="video/webm" />
          </video>
        </div>

        {/* Gameboy */}
        <div style={{ marginBottom: '3rem', color: 'black', textAlign:'center' }}>
          <h3>Groove School | C, Gameboy Architecture</h3>
          <p>
            Programmed a rhythm-based game using C
          </p>
          <video
            width="100%"
            controls
            style={{ maxWidth: '600px', borderRadius: '12px' }}
          >
            <source src="/videos/Gameboy.webm" type="video/webm" />
          </video>
        </div>

        {/* Flappy Bird */}
        <div style ={{textAlign:'center'}}>
          <h3>Flappy Bird Clone | C#</h3>
          <p>
            Recreated the classic Flappy Bird game using C#
          </p>
          <img
            src="/images/Flappy.png"
            alt="Flappy Bird Screenshot"
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '12px',
              paddingBottom: '20px'
            }}
          />
        </div>            
      </section>
<div className="custom-shape-divider-top-1749428882">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        fill="#E6C082"/>
    </svg>
</div>
    </>
  );
}

export default Projects;
