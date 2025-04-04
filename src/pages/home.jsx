import React from "react";
import { Link } from "react-router-dom";
import AnimatedElement from "./animatedelement";
import "./index.css";
import resume from "../assets/ZAIDQALCV2.pdf";

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
      <AnimatedElement animation="animate-scale-in">
        <h1 style={{ textAlign: "left", fontFamily: "sans-serif", fontStyle: "italic" }}>
          <span style={{ whiteSpace: "nowrap",fontWeight:"300" }}>Hello,</span>
          <br />
          <span style={{ marginLeft: "100px",fontWeight:"300" }}>I am Zaid</span> {/* Reduced margin */}
        </h1>
      </AnimatedElement>

      <AnimatedElement animation="animate-fade-in-up" delay="delay-200">
        <p style={{ fontSize: "0.9rem", marginBottom: "2.5rem",fontWeight:"400" }}>
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
