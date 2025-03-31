import React, { useRef, useEffect } from 'react';
import PixelTransition from '../utils/PixelTransition';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhotoAnimation from '../utils/PhotoAnimation';
import BlockBg from '../utils/BlockBg';
import HighlighterAnimation from '../utils/HighlighterAnimation';
import { Draggable } from 'gsap/Draggable';
import sticker1 from "../assets/emojiquestion.png";
import sticker2 from "../assets/btssioLogo.png";
import sticker3 from "../assets/pcLogo.png";
import sticker4 from "../assets/logo/angularLogo.png";
import sticker5 from "../assets/logo/bootstrapLogo.png";
import sticker6 from "../assets/logo/clogo.png";
import sticker7 from "../assets/logo/csharpLogo.png";
import sticker8 from "../assets/logo/cssLogo.png";
import sticker9 from "../assets/logo/figmaLogo.png";
import sticker10 from "../assets/logo/htmlLogo.png";
import sticker11 from "../assets/logo/jsLogo.png";
import sticker12 from "../assets/logo/kotlinLogo.png";
import sticker13 from "../assets/logo/nodeLogo.png";
import sticker14 from "../assets/logo/pythonLogo.png";
import sticker15 from "../assets/logo/reactLogo.png";
import sticker16 from "../assets/logo/swiftLogo.png";
import sticker17 from "../assets/logo/tailwindLogo.png";
import sticker18 from "../assets/rainbowsticker.png";

import Reveal from '../utils/Reveal';

const stickersArray1 = [sticker4, sticker5, sticker6, sticker7 ];
const stickersArray2 = [sticker8, sticker9, sticker10 ];
const stickersArray3 = [sticker11, sticker12, sticker13 ];
const stickersArray4 = [sticker14, sticker15, sticker16, sticker17];


const About = ()=> {
  const skillsStickers = []

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
        end: `bottom top+=${500 + (stageSections.length * spacer)}`,
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
        <h1 className="font-bold text-6xl lg:w-1/2">
          <img src={sticker1} alt="question sticker" className='draggable-sticker w-50 absolute top-0 right-0 lg:top-20 lg:right-10 -rotate-12'/>
            Mais c'est qui cette Océane <HighlighterAnimation texte="KASINDU" color='#ffd900'/>?
        </h1>
        <img src={sticker1} alt="question sticker" className='draggable-sticker w-50 absolute bottom-10 lg:right-10 left-10 rotate-12'/>
      </div>

     {/* Section description sur moi */}
      <div className='h-screen w-screen stagesection flex justify-center items-center bg-white'>
             <BlockBg/>
             <img src={sticker2} alt="question bts sio" className='draggable-sticker w-50 absolute top-0 right-0 lg:top-20 lg:left-10 -rotate-12'/>
              <h1 className="font-bold text-5xl text-center lg:w-5/6">
                  Je suis une étudiante en <HighlighterAnimation texte="BTS SIO" color='#00d5ff'/> intéressée par la robotique et <HighlighterAnimation texte="kiffant" color='#7b00ff'/> la <HighlighterAnimation texte="programmation" color='#ffd000'/>  et le  <HighlighterAnimation texte="roller aggressif" color='#0ffa55'/> 
              </h1>
              <img src={sticker3} alt="question pc" className='draggable-sticker w-50 absolute bottom-10 right-10 rotate-12 '/>
        </div>

       {/* Section photos */}
        <div className='h-[550vh] w-screen stagesection'>
            <PhotoAnimation/>
        </div>

        {/* Section mes hards skils */}
        <div className='h-screen w-screen stagesection '>
          <BlockBg/>
          <div className='relative h-screen w-screen flex flex-col justify-center items-center rounded text-center'>
            {/*sticker en haut à droite */}
          {
            stickersArray1.map((sticker, i)=>{
              return (
                <img key={i} src={sticker} alt="sticker Logo"
                  style={{ top: `${i * 40}px`, right: `${i * 300}px` }} 
                className={`draggable-sticker w-40 absolute otate-1 z-50`}/>
              )
            })
          }


        {/*sticker en haut à gauche */}
          {
            stickersArray2.map((sticker, i)=>{
              return (
                <img key={i} src={sticker} alt="sticker Logo"
                  style={{ top: `-${i*30}px`, left: `${i * 400}px` }} 
                className={`draggable-sticker w-45 absolute z-10`}/>
              )
            })
          }

        {/*sticker en bas à droite */}
          {
            stickersArray4.map((sticker, i)=>{
              return (
                <img key={i} src={sticker} alt="sticker Logo"
                  style={{ bottom: `${i * 50}px`, right: `${i * 300}px` }} 
                className={`draggable-sticker w-45 absolute z-10`}/>
              )
            })
          }

        {/*sticker en bas à gauche */}
          {
            stickersArray3.map((sticker, i)=>{
              return (
                <img key={i} src={sticker} alt="sticker Logo"
                  style={{ bottom: `${i * 30}px`, left: `${i * 400}px` }} 
                className={`draggable-sticker w-40 absolute z-10`}/>
              )
            })
          }
            <h1 className="font-bold text-5xl lg:text-6xl lg:w-1/2">Je suis à <span className='underline'>l'aise</span> avec ces <HighlighterAnimation texte="technologies" color="#ff0066"/></h1>
            <p className='font-mono text-sm'>[Parce que je les ai apprises  <HighlighterAnimation texte="au cours" color="#ffb300"/> et <HighlighterAnimation texte="au cours" color="#80ff00"/> en dehors de ma formation hihi !!]</p>
          </div>
        </div>


      </div>
  
      {/* Section mes expériences*/}
      <div className='h-screen w-screen stagesection  border-4 bg-zinc-950 border-white'>
         {/* titre de la section => mes expériences*/}
   

          <div className='relative flex justify-center items-center pt-30 text-white'>
            <Reveal delay={0.5}>
              <h1 className="relative font-bold text-5xl lg:text-6xl w-2/3 h-full ">Et j'ai plein d'expériences <HighlighterAnimation texte="professionelle" color="#ad03fc" opacity={1} />
                <img src={sticker18} alt="rainwbow sticker" className='draggable-sticker w-50  absolute -bottom-10 -right-40 rotate-12'/>
              </h1>
            </Reveal>
          </div>

          <div className='w-full h-full py-16 pl-40 '>

                  <div className="block max-w-sm p-6 text-gray-900 bg-gray-100 border border-gray-200 rounded-lg shadow-sm ">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight ">Experience 1</h1>
                    <p className="font-normal ">Lorem ipsum dolor sit amet consectetur </p>
                  </div>

          </div>



        </div>

    </div>

  );
}

export default About;
