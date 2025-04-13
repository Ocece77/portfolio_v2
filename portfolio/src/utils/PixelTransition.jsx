import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import sticker1 from "../assets/smileysticker.png";

const animationVariants = {
  initial: { opacity: 0 },
  open: (i) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.25 * i },
  }),
  closed: (i) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.25 * i },
  }),
};

const PixelTransition = () => {
  const pixelContainerRef = useRef(null);
  const [hide, setHide] = useState(false); // contrôle la disparition

  useEffect(() => {
    const handleLoad = () => {
      console.log("✅ Page fully loaded");
      setTimeout(() => {
        setHide(true);
        console.log("🧼 Animation hidden");
      }, 3000); // laisse l’animation visible un moment après le chargement
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const bs = innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(innerHeight / bs);
    const delays = shuffle([...Array(amountOfBlocks)].map((_, i) => i));

    return delays.map((rdn, i) => (
      <motion.div
        key={i}
        className="block relative"
        variants={animationVariants}
        initial="open"
        animate="closed"
        custom={rdn}
      >
        <img
          src={sticker1}
          alt="sticker smiley"
          className="absolute -rotate-45 -top-18 -left-40"
        />
      </motion.div>
    ));
  };

  if (hide) return null; 

  return (
    <div
      ref={pixelContainerRef}
      className="!hidden xl:!hidden lg:!flex fixed top-0 z-[9999] w-screen h-screen "
    >
      {[...Array(20)].map((_, i) => (
        <div key={i} className="column">
          {getBlocks()}
        </div>
      ))}
    </div>
  );
};

export default PixelTransition;
