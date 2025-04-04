import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from 'prop-types';

const HighlighterAnimation = ({ texte , color = "#FF5733" , opacity = .2}) => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef(null);
  const [textRefClientHeight , setTextRefClientHeight] = useState(0);

  useGSAP(() => {
    const highlight = textRef.current;
    if (!highlight) return; // Sécurité si l'élément n'est pas encore chargé
    setTextRefClientHeight(highlight.clientHeight)

    // Ajoute une barre qui s'élargit sous le texte
    gsap.set(highlight, { position: "relative" });


    ScrollTrigger.create({
      trigger: highlight,
      start: "top 80%",
      onEnter: () =>
        gsap.to(highlight, {
          "--highlight-width": "100%",
          duration: 0.5,
          backgroundColor: "transparent",
          ease: "power2.out",
        }),
      onLeaveBack: () =>
        gsap.to(highlight, {
          "--highlight-width": "0%",
          duration: 0.5,
          backgroundColor: "transparent",
          ease: "power2.out",
        }),
    });
  }, []);

  return (
    <span
      ref={textRef}
      className="text-highlight"
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
     {texte}
      <span
        className="highlight-bar rounded -z-10"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: textRefClientHeight,
          width: "var(--highlight-width)", // On anime cette valeur
          backgroundColor: color,
          opacity: opacity,
          transition: "width 0.5s ease",
        }}
      ></span>
    </span>
  );
};



HighlighterAnimation.propTypes ={
  texte : PropTypes.string,
  color : PropTypes.string,
  opacity : PropTypes.string,
}

export default HighlighterAnimation;
