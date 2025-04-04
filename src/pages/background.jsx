import React, { useEffect } from "react";
import "./background.css";

const Background = () => {
  useEffect(() => {
    const createFallingStar = () => {
      const star = document.createElement("div");
      star.classList.add("falling-star");

      const positionChoice = Math.random();
      let leftPosition, topPosition;

      if (positionChoice < 0.33) {
        leftPosition = Math.random() * window.innerWidth;
        topPosition = -10;
      } else if (positionChoice < 0.66) {
        leftPosition = -10;
        topPosition = Math.random() * window.innerHeight;
      } else {
        leftPosition = window.innerWidth - Math.random() * window.innerWidth;
        topPosition = window.innerHeight + 10;
      }

      const animationDuration = Math.random() * 3 + 2;
      star.style.left = `${leftPosition}px`;
      star.style.top = `${topPosition}px`;
      star.style.animation = `fall ${animationDuration}s linear forwards`;

      const container = document.querySelector(".moving-blocks");
      if (container) {
        container.appendChild(star);
      }

      setTimeout(() => {
        if (star && star.parentNode) {
          star.remove();
        }
      }, animationDuration * 1000);
    };

    const interval = setInterval(createFallingStar, 200);

    return () => clearInterval(interval);
  }, []);

  return <div className="moving-blocks"></div>;
};

export default Background;