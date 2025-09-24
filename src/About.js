import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import AnimatedTitle from './AnimatedTitle';
import RotatingText from './RotatingText';


function About() {
  return (
    <section
      id="about"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
        padding: '6rem 2rem 100px',
        marginBottom: '25px',
        marginTop: '120px'
      }}
    >
      <AnimatedTitle text="Jha'Deya Rhymes" />
      <RotatingText />
        <img
          src={`${process.env.PUBLIC_URL}/images/me.jpg`}
          alt="Me"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '12px' }}
        />

      <p
        style={{
          fontSize: '1.5rem',
          fontWeight: '300',
          color: 'black',
          maxWidth: '600px',
          marginBottom: '1.5em',
        }}
      >
        {/* Recent Georgia Tech Computer Science graduate passionate about building
        clean, efficient software and beautiful user experiences. */}
        I'm a Frontend Engineer with a strong eye for user experience and a growing interest in full-stack development. I enjoy building responsive, accessible web apps that prioritize real user needs, and translating Figma prototypes into clean, interactive interfaces.

        {/* My recent projects use the MERN stack, giving me hands-on exposure to building full-stack applications from scratch. I'm especially passionate about frontend development that bridges thoughtful design with solid engineering. */}
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '2rem' , marginBottom: '8rem'}}>
        <a
          href="https://www.linkedin.com/in/jha-deya-rhymes-b818051b4/"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0A66C2' }}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/JRhymes7"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#333' }}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default About;
