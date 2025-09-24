import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function RotatingText() {
  return (
    <h2 style={{ fontsize: "1.6rem", fontWeight: "400", marginTop: "1rem", color: "black",}}>
      <span>
        <Typewriter
          words={[
            'Software engineer 💻',
            'Creating clean UIs 🎨',
            'Solving real-world problems 🧠',
            'Bringing ideas to life 🚀',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
}

export default RotatingText; 
