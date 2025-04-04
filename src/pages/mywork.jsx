import React from "react";
import AnimatedElement from "./animatedelement";

const MyWork = () => {
  return (
    <div className="work-container">
      <AnimatedElement animation="animate-fade-in-right">
        <h1>My Work</h1>
      </AnimatedElement>
      
      <AnimatedElement animation="animate-fade-in-right" delay="delay-100">
        <p>Here are some projects I've worked on recently.</p>
      </AnimatedElement>
      
      <div className="project-grid">
        <AnimatedElement animation="animate-scale-in" delay="delay-200">
          <div className="project-card">
            <h2>Portfolio Project</h2>
            <p>A personal portfolio built using only HTML, CSS, and vanilla JavaScript, with no frameworks involved. It showcases my skills and experience through a clean and responsive design.</p>
            <div className="project-links">
              <a href="https://thakakhwa.github.io/" className="project-link" target="_blank">View Live</a>
              <a href="https://github.com/thakakhwa/thakakhwa.github.io" className="project-link" target="_blank">GitHub</a>
            </div>
          </div>
        </AnimatedElement>
        
      </div>
    </div>
  );
};

export default MyWork;