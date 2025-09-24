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
        {/* Job Tracker */}
        <div style={{ marginBottom: '3rem', color: 'black', textAlign:'center' }}>
          <h3>Job Tracker | MongoDb, Express, Node.js, React.js</h3>
          <p>
            A full-stack job tracking application with login/register functionality, bcrypt.js & JWT authentication, and MongoDB integration. Built using the MERN stack to manage job applications with an intuitive dashboard.&nbsp;&nbsp;
            <a href="https://job-tracker-bhrd.vercel.app" target="_blank" rel="noopener noreferrer">Click Here!</a>
            </p>
            

          <img
            src={`${process.env.PUBLIC_URL}/images/jt.png`}
            alt="Job Tracker Screenshot"
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '12px',
              paddingBottom: '20px'
            }}
          />
        </div>

                {/* Todo List */}
        <div style={{ marginBottom: '3rem', color: 'black', textAlign:'center' }}>
          <h3>To-Do List | MongoDb, Express, Node.js, React.js</h3>
            <p>
              This full-stack To-Do List app was my first real introduction to building and deploying a complete application. It gave me hands-on experience with core concepts like state management, routing, and connecting a frontend to an API. 
            </p>
            <p>
              The biggest challenge came during deployment: I hosted the backend on Render and the frontend on GitHub Pages, which led to some tricky CORS and environment variable issues. Solving those gave me a much clearer understanding of how full-stack 
              apps behave in production—and set the stage for more complex projects like my Job Tracker..&nbsp;&nbsp;
              <a href="https://dfabulous234.github.io/ToDoList/" target="_blank" rel="noopener noreferrer"> Click Here!</a>
            </p>
          <img
            src={`${process.env.PUBLIC_URL}/images/td.png`}
            alt="Todo Tracker Screenshot"
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '12px',
              paddingBottom: '20px'
            }}
          />
        </div>

        {/* Netflix Graph */}
        <div style={{ marginBottom: '3rem', color: 'black', textAlign:'center' }}>
          <h3>Netflix Cast Graph | Javascript, d3.js</h3>
          <p>
            Built an interactive d3.js visualization showing connections between Netflix shows and actors&nbsp;&nbsp;
            <a href="https://dfabulous234.github.io/Data-Vis" target="_blank" rel="noopener noreferrer"> Click Here!</a>
          </p>
          <img
          src={`${process.env.PUBLIC_URL}/images/dv.png`}
          alt="Graph Pic"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '12px'}}
          /> 
          {/* <video
            width="100%"
            controls
            style={{ maxWidth: '600px', borderRadius: '12px' }}
          >
            <source src={`${process.env.PUBLIC_URL}/videos/Visualization.webm`} type="video/webm" />
          </video> */}
        </div>

      {/* Figma Prototype */}
      <div>
        <h3>Gravity | Figma</h3>
          <p>
            Gravity was the final project for an Intro to UI Design course—an all-in-one gaming and matchmaking app designed to help college students connect through shared gaming interests.
          </p>
          <p>
            Through user research, we discovered that many student gamers wanted to make friends but were not sure how to start. Female participants also voiced concerns about safety and harassment in typical online spaces. This feedback shaped our goal: to design a platform that fosters real friendships, reduces toxicity, and consolidates key features like voice chat—removing the need for multiple separate apps.
          </p>
          <p>
            The prototype is the result of a full design cycle, including user interviews, ideation, wireframing, usability testing, and heuristic evaluation.&nbsp;&nbsp;
            <a href="https://www.figma.com/proto/fyqGRsHGGNvDwh6KNqGrWS/gravity?node-id=1-2&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer"> Click Here!</a>
          </p>

        <img
          src={`${process.env.PUBLIC_URL}/images/gravity.png`}
          alt="Gravity Screenshot"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '12px', color : 'black' }}
        />
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
            <source src={`${process.env.PUBLIC_URL}/videos/Gameboy.webm`} type="video/webm" />
          </video>
        </div>

      {/* GDHuddle Quiz */}
      <div>
        <h3>GDHuddle MVP | HTML, CSS, JavaScript</h3>
        <p>
          One of my earliest web projects, this interactive quiz helps aspiring game developers identify their ideal focus area (e.g. AI, Audio, Design). It was built as part of a two-part course: the first focused on 
          startup strategy and user research, while the second involved creating an MVP. I was responsible for the quiz itself, developed with HTML, CSS, and JavaScript, and linked to a Figma prototype representing our broader product vision.&nbsp;&nbsp;
          <a href="https://dfabulous234.github.io/GDHuddle" target="_blank" rel="noopener noreferrer"> Click Here!</a>
        </p>

        <img
          src={`${process.env.PUBLIC_URL}/images/quiz.png`}
          alt="GDHuddle Screenshot"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '12px', color : 'black' }}
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
