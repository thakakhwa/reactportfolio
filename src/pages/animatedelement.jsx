import React, { useEffect, useRef, useState } from "react";
import "./PageTransitions.css";

const AnimatedElement = ({ 
  children, 
  animation = "animate-fade-in-up", 
  delay = "", 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`${isVisible ? `${animation} ${delay}` : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
