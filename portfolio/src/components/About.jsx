import React, { useRef, useEffect } from 'react';
import PixelTransition from '../utils/PixelTransition';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhotoAnimation from '../utils/PhotoAnimation';
import BlockBg from '../utils/BlockBg';
import HighlighterAnimation from '../utils/HighlighterAnimation';
import { Draggable } from 'gsap/Draggable';

const About = ()=> {
  gsap.registerPlugin(ScrollTrigger ,Draggable);
  const stageSectionRef = useRef(null);

  useGSAP(() => {
    Draggable.create(".draggable-sticker");

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
        start: `top+=${i * spacer} top`,
        end: `bottom top-=${200 + (stageSections.length * spacer)}`,
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
        <h1 className="font-bold text-4xl lg:text-6xl lg:w-1/2">
          Mais c'est qui cette <span className=' rounded-2xl px-1'>Océane <HighlighterAnimation texte="KASINDU" color='#ffd900'/> </span>?
        </h1>
      </div>

     {/* Section description sur moi */}
      <div className='h-screen w-screen stagesection flex justify-center items-center '>
             <BlockBg/>
              <h1 className="font-bold text-4xl text-center w-5/6">
                  Je suis une étudiante en <HighlighterAnimation texte="BTS SIO" color='#00d5ff'/> intéressée par la robotique et <HighlighterAnimation texte="kiff" color='#7b00ff'/> la programmation
              </h1>

        </div>

      {/* Section photos */}
        <div className='h-[540vh] w-screen stagesection'>
            <PhotoAnimation/>
        </div>

        <div className='h-screen w-screen stagesection  '>
        <BlockBg/>

        <div className='h-screen w-screen flex flex-col justify-center items-center rounded text-center'>
           <h1 className="font-bold text-7xl lg:text-6xl">Je suis à <span className='underline'>l'aise</span> avec ces <HighlighterAnimation texte="technologies" color="#ff0066"/></h1>
          <p>Parce que je les ai apprises  <HighlighterAnimation texte="au cours" color="#ffb300"/>  et <HighlighterAnimation texte="au cours" color="#80ff00"/> en dehors de ma formation</p>
        </div>

        </div>
      </div>
    </div>
  );
}

export default About;
