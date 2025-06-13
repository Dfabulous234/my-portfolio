import React from 'react';

function Involvement() {
    const cardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '10px',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  };
return (
  <>
          <div className="custom-shape-divider-bottom-1747673317">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
       fill= "#B8E986"
       />
    </svg>
</div>
    <section id="involvement" style={{
          backgroundColor: '#B8E986',
          padding: '6rem 2rem 100px',
          marginBottom: '0px',
          marginTop: '-5px',
          position: 'relative',
          zIndex: 0,
      }}>
        
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem',textAlign: 'center' }}>Involvement</h2>

      <div style={cardStyle}>
        <h3>Georgia Tech Dance Company</h3>
        <p>Performer for campus showcases and events.</p>
        <img
          src="/images/Dance.jpg"
          alt="DCGT"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '12px' }}
          />
      </div>

      <div style={cardStyle}>
        <h3>Jazz Ensemble</h3>
        <p>Clarinetist performing in university-led concerts.</p>
        <img
          src="/images/Jazz.jpg"
          alt="Group Pic"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '12px'}}
          />
      </div>

      <div style={cardStyle}>
        <h3>Society of Black Engineers</h3>
        <p>Active member attending tech workshops, career fairs, and networking events.</p>
      </div>

      <div style={cardStyle}>
        <h3>Volunteer Work</h3>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', lineHeight: '1.6' }}>
          <li>Trees Atlanta – community planting and conservation projects</li>
          <li>The Salvation Army – food bank support and seasonal drives</li>
          <li>West Atlanta Watershed Alliance – trail maintenance and education events</li>
          <li>Youth Soccer Camps – mentorship and activity coordination</li>
        </ul>
      </div>
    </section>
    <div className="custom-shape-divider-top-1749429428">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        fill="#B8E986"/>
    </svg>
</div>
    </>
  );
}

export default Involvement;
