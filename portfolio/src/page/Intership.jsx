import React, { useRef, useEffect } from 'react';
import PixelTransition from '../utils/PixelTransition';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Intership() {
  gsap.registerPlugin(ScrollTrigger);
  const stageSectionRef = useRef(null);

  useGSAP(() => {
    const stageSections = gsap.utils.toArray(".stagesection"); // Récupère toutes les sections
    const spacer = 20;
    const minScale = 0.8;
    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    stageSections.forEach((stage, i) => {
      const scaleVal = distributor(i, stage[i], stageSections); 
      gsap.to(stage, {
        scrollTrigger: {
          trigger: stage,
          start: `top top`,
          scrub: true,
          invalidateOnRefresh: true
        },
        ease: "none",
        scale: scaleVal
      });

      ScrollTrigger.create({
        trigger: stage,
        start: `top-=${i * spacer} top`,
        end: `bottom top+=${200 + (stageSections.length * spacer)}`,
        endTrigger: '.cards',

        pin: true,
        pinSpacing: false,
        id: `pin-${i}`,
        invalidateOnRefresh: true,
      });
    });

  }, []);

  return (
    <div>
      {/* Page transition */}
      <PixelTransition /> 



      {/* Sections animées */}
      <div ref={stageSectionRef} className='cards'>
    {/* Section d'introduction */}
      <div className='h-screen w-screen stagesection flex text-center justify-center items-center'>
        <h1 className="font-bold text-7xl lg:text-6xl w-1/3">
          J'ai fait des <span className='bg-amber-300 rounded-2xl px-1'>stages</span> !
        </h1>
      </div>

        <div className='h-screen w-screen stagesection flex justify-center items-center bg-amber-50 rounded shadow-xl'>
          <h1 className="font-bold text-7xl lg:text-6xl">Stage 1!</h1>
        </div>

        <div className='h-screen w-screen stagesection flex justify-center items-center bg-sky-50 rounded'>
          <h1 className="font-bold text-7xl lg:text-6xl">Stage 2!</h1>
        </div>
      </div>
    </div>
  );
}

export default Intership;
