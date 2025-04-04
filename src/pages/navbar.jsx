import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import "./navbar.css";
import "./index.css"

const Navbar = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; 
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.transition = "background-color 0.3s ease-in-out, color 0.3s ease-in-out";
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsAnimating(true);
    const newTheme = !isDarkMode ? 'dark' : 'light';  
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);  
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleIconHover = (e, isHover) => {
    e.currentTarget.style.color = isHover ? (isDarkMode ? "#fff" : "#000") : "#6120f8";
    e.currentTarget.style.transform = isHover ? "scale(1.2)" : "scale(1)";
  };

  
  const navLinks = [
    { id: 1, to: "/", text: "Home" },
    { id: 2, to: "/skills", text: "My Skills" },
    { id: 3, to: "/work", text: "My Work" },
    { id: 4, to: "/contact", text: "Contact Me" },
  ];

  return (
    <div
      id="header"
      style={{
        borderRadius: "25px",
        padding: "20px 0",
        width: "70px",
        display: "flex",
        position: "fixed",
        left: "30px",
        top: "50%",
        transform: "translateY(-50%)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "25px",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.6)",
        border: isDarkMode ? "1px solid rgba(97, 32, 248, 0.2)" : "1px solid rgba(115, 0, 255, 0.36)",
        boxShadow: isDarkMode ? "0 0 25px rgba(97, 32, 248, 0.1)" : "0 0 25px rgba(97, 32, 248, 0.6)",
      }}
    >
      {navLinks.map((link) => (
        <Link
          key={link.id}
          to={link.to}
          className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
          onMouseEnter={(e) => {
            e.target.style.color = isDarkMode ? "white" : "black";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = location.pathname === link.to ? (isDarkMode ? "white" : "black") : "#6120f8";
            e.target.style.transform = "scale(1)";
          }}
          style={{
            color: location.pathname === link.to ? (isDarkMode ? "white" : "black") : "#6120f8",
            textDecoration: "none",
            transition: "color 0.3s, transform 0.3s",
          }}
        >
          {link.text}
        </Link>
      ))}

      <div className="social-links">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => handleIconHover(e, true)}
          onMouseLeave={(e) => handleIconHover(e, false)}
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => handleIconHover(e, true)}
          onMouseLeave={(e) => handleIconHover(e, false)}
        >
          <FaGithub className="social-icon" />
        </a>
      </div>

      <button
        className={`theme-toggle ${isAnimating ? "animate" : ""}`}
        onClick={handleThemeToggle}
        onMouseDown={(e) => e.preventDefault()}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: isDarkMode ? "white" : "#6120f8",
          fontSize: "1.5rem",
          position: "relative",
        }}
      >
        <div className="toggle-inner">
          {isDarkMode ? <FaSun className="icon-sun" /> : <FaMoon className="icon-moon" />}
        </div>
        <div className="glow-effect"></div>
      </button>
    </div>
  );
};

export default Navbar;