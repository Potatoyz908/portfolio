import React from 'react';
import './StarBackground.css';

const generateBoxShadows = (n: number) => {
  const shadows = [];
  for (let i = 0; i < n; i++) {
    const x = Math.random() * 2000; // Valores aleatórios para X
    const y = Math.random() * 2000; // Valores aleatórios para Y
    shadows.push(`${x}px ${y}px #FFF`);
  }
  return shadows.join(', ');
};

const StarBackground = () => {
  const smallShadows = generateBoxShadows(700);
  const mediumShadows = generateBoxShadows(200);
  const bigShadows = generateBoxShadows(100);

  return (
    <div className="stars-container">
      <video autoPlay loop muted className="background-video">
        <source src="/home//Documents/Programação/Projetos/spaceportfolio/public/blackhole.webm" type="video/webm" />
        Seu navegador não suporta vídeo.
      </video>
      <div className="stars" id="stars" style={{ boxShadow: smallShadows }}></div>
      <div className="stars" id="stars2" style={{ boxShadow: mediumShadows }}></div>
      <div className="stars" id="stars3" style={{ boxShadow: bigShadows }}></div>
      <div className="title">
        <span>

        </span>
      </div>
    </div>
  );
};

export default StarBackground;
