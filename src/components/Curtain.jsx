import React, { useEffect, useState } from 'react';
import './Curtain.css';

const Curtain = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div className={`curtain-container ${isVisible ? 'opened' : ''}`} onClick={handleClick}>
      <div className="curtain left"></div>
      <div className="curtain right"></div>
    </div>
  );
};

export default Curtain;
