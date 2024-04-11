import React from 'react';
import ClippedLogo from './ClippedLOgo';
import './App.css';
import { TweenMax, Power2 } from 'gsap';

function App() {
  React.useEffect(() => {
    TweenMax.to('.clipped-logo', 2, {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      ease: Power2.easeInOut,
      repeat: -1,
      rotation: 360, // Add rotation effect
    });
  }, []);

  return (
    <div className="App">
      <ClippedLogo />
    </div>
  );
}

export default App;
