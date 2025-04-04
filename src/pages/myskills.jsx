import React from "react";
import AnimatedElement from "./animatedelement";

const MySkills = () => {
  return (
    <div className="skills-container">
      <AnimatedElement animation="animate-fade-in-left">
        <h1>My Skills</h1>
      </AnimatedElement>
      
      <AnimatedElement animation="animate-fade-in-left" delay="delay-100">
        <p>Here are some of my technical skills and expertise.</p>
      </AnimatedElement>
      
      <div className="skills-grid">
        <AnimatedElement animation="animate-slide-in-bottom" delay="delay-200">
          <div className="skill-category">
            <h2>Frontend Development</h2>
            <ul>
              <li>React.js</li>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-slide-in-bottom" delay="delay-300">
          <div className="skill-category">
            <h2>Backend Development</h2>
            <ul>
              <li>PHP</li>
              <li>Node.js</li>
            </ul>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default MySkills;