import React from 'react';

function Experience() {
  return (
    <>
                  {/* Wave Divider */}
            <div className="custom-shape-divider-bottom-1747668439">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#DAD279"
          />
        </svg>
      </div>  
    <section id="experience" style={{ 
          backgroundColor: '#DAD279',
          padding: '6rem 2rem 100px',
          marginBottom: '0px',
          marginTop: '-5px',
          position: 'relative',
          zIndex: 0,
    }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign:'center' }}>Work Experience</h2>

        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '1.5rem',
          borderRadius: '10px',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>IT Intern – Georgia Tech Conference Services</h3>
          <p style={{ fontStyle: 'italic', color: '#555', marginTop: 0, marginBottom: '1rem' }}>
            May 2024 – August 2024
          </p>
          <ul style={{ marginTop: 0, lineHeight: '1.6' }}>
            <li>Managed IT systems and infrastructure supporting campus summer conferences.</li>
            <li>Provided technical support to staff and event coordinators, ensuring fast resolutions and system uptime.</li>

          </ul>
            <img
            src={`${process.env.PUBLIC_URL}/images/ConfServ.png`}
            alt="Group Pic"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '12px'}}
            />        
        </div>

        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '1.5rem',
          borderRadius: '10px',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Facility Assistant – Campus Recreation Center</h3>
          <p style={{ fontStyle: 'italic', color: '#555', marginTop: 0, marginBottom: '1rem' }}>
            June 2022 – August 2023
          </p>
          <ul style={{ marginTop: 0, lineHeight: '1.6' }}>
            <li>Monitored patron safety and provided support for facility equipment checkout and logistics.</li>
            <li>Helped maintain operational efficiency and safety standards in high-traffic environments.</li>
          </ul>
                    <img
            src={`${process.env.PUBLIC_URL}/images/CRC.jpg`}
            alt="Bldg"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '12px'}}
            />
        </div>

        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '1.5rem',
          borderRadius: '10px',
          marginBottom: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Student Assistant – Veterans Resource Center</h3>
          <p style={{ fontStyle: 'italic', color: '#555', marginTop: 0, marginBottom: '1rem' }}>
            August 2020 – December 2024
          </p>
          <ul style={{ marginTop: 0, lineHeight: '1.6' }}>
            <li>Supported veteran students with GI Bill inquiries, document submissions, and office communications.</li>
            <li>Handled sensitive student data and maintained a high level of service accuracy.</li>
          </ul>
                            <img
            src={`${process.env.PUBLIC_URL}/images/VRC.png`}
            alt="Bldg"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '12px'}}
            />
        </div>        
    </section>
    <div className="custom-shape-divider-top-1749429220">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        fill="#DAD279"/>
    </svg>
</div>
    </>
  );
}

export default Experience; 
