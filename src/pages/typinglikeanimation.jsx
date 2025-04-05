// typinglikeanimation.jsx
import React, { useState, useEffect } from 'react';


const TypingSequence = () => {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const firstLineText = "Hello,";
  const secondLineText = "I am Zaid     ";
  const anothertextline="{.......}";
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);
  const [firstDone, setFirstDone] = useState(false);
  const [secondDone, setSecondDone] = useState(false);
  const [erasing, setErasing] = useState(false);
  const typingSpeed = 200; 
  const pauseBeforeErasing = 0; 
  const erasingSpeed = 75; 

  useEffect(() => {
    let timeout;
    
    // Type first line
    if (!firstDone && !erasing && firstIndex < firstLineText.length) {
      timeout = setTimeout(() => {
        setFirstLine(prev => prev + firstLineText[firstIndex]);
        setFirstIndex(prev => prev + 1);
      }, typingSpeed);
    } 
    // When first line is complete
    else if (firstIndex === firstLineText.length && !firstDone) {
      setFirstDone(true);
    }
    // Type second line after first line is done
    else if (firstDone && !secondDone && !erasing && secondIndex < secondLineText.length) {
      timeout = setTimeout(() => {
        setSecondLine(prev => prev + secondLineText[secondIndex]);
        setSecondIndex(prev => prev + 1);
      }, typingSpeed);
    }
    // When second line is complete
    else if (secondIndex === secondLineText.length && firstDone && !secondDone) {
      setSecondDone(true);
      timeout = setTimeout(() => {
        setErasing(true);
      }, pauseBeforeErasing);
    }
    // Erase second line
    else if (erasing && secondLine.length > 0) {
      timeout = setTimeout(() => {
        setSecondLine(prev => prev.slice(0, -1));
      }, erasingSpeed);
    }
    // Erase first line after second line is erased
    else if (erasing && secondLine.length === 0 && firstLine.length > 0) {
      timeout = setTimeout(() => {
        setFirstLine(prev => prev.slice(0, -1));
      }, erasingSpeed);
    }
    // Reset to start again
    else if (erasing && firstLine.length === 0 && secondLine.length === 0) {
      setErasing(false);
      setFirstDone(false);
      setSecondDone(false);
      setFirstIndex(0);
      setSecondIndex(0);
    }
    
    return () => clearTimeout(timeout);
  }, [firstIndex, secondIndex, firstDone, secondDone, erasing, firstLine, secondLine]);

  return (
    <h1 style={{ textAlign: "left", fontFamily: "sans-serif", fontStyle: "italic" }}>
      <span style={{ whiteSpace: "nowrap", fontWeight: "300" }}>
        {firstLine}
        {(!firstDone || (erasing && secondLine.length === 0)) && (
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
      <br />
      <span style={{ marginLeft: "130px", fontWeight: "300" }}>
        {secondLine}
        {(firstDone && !secondDone || (erasing && secondLine.length > 0)) && (
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

export default TypingSequence;