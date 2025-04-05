// typinglikeanimation.jsx
import React, { useState, useEffect } from 'react';

const TypingSequenceTwo = () => {
  const anothertextline = "{.......}";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const typingSpeed = 200;

  useEffect(() => {
    let timeout;
    
    // Type the text
    if (!done && index < anothertextline.length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + anothertextline[index]);
        setIndex(prev => prev + 1);
      }, typingSpeed);
    } 
    // Mark as done when complete
    else if (index === anothertextline.length) {
      setDone(true);
    }
    
    return () => clearTimeout(timeout);
  }, [index, done, anothertextline]);

  return (
    <h1 style={{ textAlign: "left", fontFamily: "sans-serif", fontStyle: "italic" }}>
      <span style={{ whiteSpace: "nowrap", fontWeight: "300" }}>
        {displayText}
        {!done && (
          <span style={{
            display: 'inline-block',
            width: '3px',
            height: '1em',
            backgroundColor: 'black',
            marginLeft: '2px',
            animation: 'blink 1s infinite'
          }}></span>
        )}
      </span>
    </h1>
  );
};

export default TypingSequenceTwo;