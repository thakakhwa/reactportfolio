import React from "react";
import { Link } from "react-router-dom";
import AnimatedElement from "./animatedelement";
import TypingSequence from "./typinglikeanimation"; // Import the typing sequence component
import "./index.css";
import resume from "../assets/ZAIDQALCV2.pdf";
import TypingSequenceTwo from "./typingsequencetwo";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
            {/* <div 
        style={{
          position: "absolute",
          top: "240px",
          right: "100px",
          textAlign: "left",
          fontWeight: "bold",
          fontSize: "0.9rem",
          color: "#6120f8", // Matching your accent color
        }}
      >
        <TypingSequenceTwo/>
      </div> */}
      <AnimatedElement animation="animate-fade-in-left">
        <TypingSequence />
      </AnimatedElement>

      {/* Rest of your component remains the same */}
      <AnimatedElement animation="animate-fade-in-up" delay="delay-200">
        <p style={{ fontSize: "0.9rem", marginBottom: "2.5rem", fontWeight: "400", border: "1px solid #6120f8", borderRadius: "10px", padding: "5px", boxShadow: "0px 0px 18px 4px rgba(97, 32, 248, 0.4)", marginTop: "50px" }}>
          I am a software engineer with a strong foundation in web development. My expertise lies in designing and implementing robust software solutions that meet business objectives while ensuring high performance, scalability, and maintainability. With a proven track record of delivering high-quality code and innovative solutions, I am passionate about leveraging my skills to tackle complex challenges and drive project success. I have a deep understanding of data structures and algorithms. My ability to optimize data structures led to standout performance, enhancing efficiency and scalability in software solutions.
        </p>
      </AnimatedElement>

      <AnimatedElement animation="animate-fade-in-up" delay="delay-400">
        <div
          className="cta-buttons"
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          <div id="resume">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button id="resumebutton">Check out my resume!</button>
            </a>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default Home;