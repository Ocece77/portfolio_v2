import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import atlas from '../assets/robots/atlas.jpg';
import figure02 from '../assets/robots/figure02.jpg';
import neoby1x from '../assets/robots/neoby1x.png';
import gr2 from '../assets/robots/gr2.jpg';
import neo from '../assets/robots/neo.jpg';
import optimus from '../assets/robots/optimus.jpg';
import optimusRobot from '../assets/robots/optimus_robot.jpg';


gsap.registerPlugin(ScrollTrigger);

const robotImages = [
  {
    'img': figure02,
    'nom': "Figure 02",
    'entreprise': "Figure"
  },
  {
    'img': gr2,
    'nom': "GR2",
    'entreprise': "Fourier"
  },
  {
    'img': neo,
    'nom': "Neo",
    'entreprise': "1X"
  },
  {
    'img': optimus,
    'nom': "Optimus",
    'entreprise': "Tesla"
  },
  {
    'img': atlas,
    'nom': "Atlas",
    'entreprise': "Boston Dynamics"
  },
  {
    'img': neoby1x,
    'nom': "Neo By 1X",
    'entreprise': "1X"
  },
  {
    'img': optimusRobot,
    'nom': "Optimus Robot",
    'entreprise': "Tesla"
  }
];

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

    const getScrollAmount = () => {
      let imgWidth = images.scrollWidth;
      return -(imgWidth - window.innerWidth);
    }
    

    gsap.to(images, {
      xPercent: -100 * (robotImages.length - 2),
      ease: 'none',
      duration: 3,
      scrollTrigger: {
        trigger: trackRef.current,
        pinSpacing: true,
        start:"top 10%",
        scrub: 1,
        invalidateOnRefresh:true,
        end: () => `+=${ -window.innerWidth * -1}`, 
      },
    });
  }, []);

  return (
      <div
        ref={trackRef}
        className='flex h-fit w-screen items-center justify-center overflow-hidden'
      >
       <div ref={trackContainerRef} className='flex w-fit h-fit items-center justify-start gap-[1vmin]  ps-[150vw] '>
       {robotImages.map((robots, i) => (
        <div className='relative h-fit w-[40vmin] image'>
          <img
            key={i}
            src={robots.img}
            alt={`Robot ${robots.nom} de chez ${robots.entreprise}`}
            className="  h-[56vmin] object-cover object-left"
            style={{ objectPosition: ` ${20+ scrollPercent}% center` }}
          />
          <p className='absolute bottom-5 left-5 font-mono text-xl'>{robots.nom}</p>
          </div>
        ))}

       </div>

      </div>
  );
};

export default ImageTrack;
