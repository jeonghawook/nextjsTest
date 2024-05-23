'use client';
import React, { useState } from 'react';

// @ts-ignore
const FlipCard = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="w-full h-full" onClick={handleFlip}>
      <div
        className={`w-full h-full rounded-2xl text-white text-3xl bg-black  relative  transition-transform duration-500 ${flipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center"
        >
          {frontContent}
        </div>
        <div
          className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center"
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
