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
      }}
    >
      <AnimatedTitle text="Jha'Deya Rhymes" />
      <RotatingText />
        <img
          src="/images/me.jpg"
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
        Recent Georgia Tech Computer Science graduate passionate about building
        clean, efficient software and beautiful user experiences.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '2rem' }}>
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
