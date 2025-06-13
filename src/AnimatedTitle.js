import React from 'react';

function AnimatedTitle({ text }) {
  return (
    <h1 style={{ fontsize: '2.0rem', textalign: 'center', margin: '0.5em 0',}}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            opacity: 0,
            animation: `fadeInUp 0.5s forwards`,
            animationDelay: `${i * 0.1}s`,
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </h1>
  );
}


export default AnimatedTitle;
