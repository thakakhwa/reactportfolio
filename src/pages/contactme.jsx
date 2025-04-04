import React from "react";
import AnimatedElement from "./animatedelement";
import "./index.css";
import "./contactme.css"

const ContactMe = () => {
  return (
    <div className="contact-container">
      <AnimatedElement animation="animate-fade-in-left" delay="delay-200">
        <div className="contact-info">
          <a href="tel:+00962790135912" className="contact-link">
            <div className="contact-item">
              Tel: 00962 79 013 5912
            </div>
          </a>
          
          <a href="mailto:zaidqal@hotmail.com?subject=Hello&body=Hi there!" className="contact-link">
            <div className="contact-item">
              Email: zaidqal@hotmail.com
            </div>
          </a>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default ContactMe;