import React from 'react';
import { FaUser, FaCode, FaEnvelope, FaUserFriends, FaBriefcase } from 'react-icons/fa';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const linkStyle = {
    marginLeft: '1.5rem',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
  };

  const iconStyle = { marginRight: '0.5rem' };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: 'bold' }}>Jha’Deya Rhymes</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}>
        <a href="#about" style={linkStyle}>
          <FaUser style={iconStyle} /> About
        </a>
        <a href="#projects" style={linkStyle}>
          <FaCode style={iconStyle} /> Projects
        </a>
        <a href="#experience" style={linkStyle}>
            <FaBriefcase style={iconStyle} /> Experience
        </a>
        <a href="#involvement" style={linkStyle}>
            <FaUserFriends style={iconStyle} /> Involvement
        </a>
        <a href="#contact" style={linkStyle}>
          <FaEnvelope style={iconStyle} /> Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;