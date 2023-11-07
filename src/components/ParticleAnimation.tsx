import React, { useRef, useEffect } from 'react';


const ParticleAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const particleNum = 20;

    for (let i = 0; i < particleNum; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const startX = Math.random() * window.innerWidth + "px";
      const startY = Math.random() * window.innerHeight + "px";
      const endX = Math.random() * window.innerWidth + "px";
      const endY = Math.random() * window.innerHeight + "px";
      particle.style.setProperty('--start-x', startX);
      particle.style.setProperty('--start-y', startY);
      particle.style.setProperty('--end-x', endX);
      particle.style.setProperty('--end-y', endY);
      particle.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(particle);
    }
  }, []);

  return (
    <div className="container">
      <div className="background"></div>
      <div className="particle-container" ref={containerRef}></div>
    </div>
  );
};

export default ParticleAnimation;
