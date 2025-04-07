import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import atlas from '../assets/robots/atlas.jpg';
import figure02 from '../assets/robots/figure02.jpg';
import gr2 from '../assets/robots/gr2.jpg';
import onex from '../assets/robots/onex.jpeg';
import optimus from '../assets/robots/optimus.jpeg';

gsap.registerPlugin(ScrollTrigger);

const robotImages = [atlas, figure02, gr2, onex, optimus];

const ImageTrack = () => {
  const trackRef = useRef(null);
  const trackContainerRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / maxScroll) * 100;
    setScrollPercent(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    if (!trackRef.current) return;
    const images = gsap.utils.toArray(".image");

    gsap.to(images, {
      xPercent: -100 * (robotImages.length - 3),
      ease: 'none',
      scrollTrigger: {
        trigger: trackContainerRef.current,
        pin: trackRef.current,
        scrub: 1,
        end: '+=2500',
   
 
      },
    });
  }, []);

  return (
      <div
        ref={trackRef}
        className="flex h-[200vh] w-screen "
      >
       <div ref={trackContainerRef}  className='flex w-screen h-screen items-center justify-start ps-50  gap-[1vmin] '>
       {robotImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Robot ${i}`}
            className="image w-[40vmin] h-[56vmin] object-cover object-left "
            style={{ objectPosition: `${20 + scrollPercent}% center` }}
          />
        ))}
       </div>

      </div>
  );
};

export default ImageTrack;
