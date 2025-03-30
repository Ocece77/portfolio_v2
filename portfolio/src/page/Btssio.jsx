import React, { useRef } from 'react'
import PixelTransition from '../utils/PixelTransition'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import sticker1 from "../assets/smileysticker.png";
import sticker2 from "../assets/rainbowsticker.png";
import sticker3 from "../assets/cookiesticker.png";
import sticker4 from "../assets/bluesmileysticker.png";
import sticker5 from "../assets/murakamisticker.png";
import BlockBg from '../utils/BlockBg';
import { Draggable } from 'gsap/Draggable';
import HighlighterAnimation from '../utils/HighlighterAnimation';

const stickersArray = [
  sticker1,
  sticker2,
  sticker3,
  sticker4,
  sticker5
]

const Btssio = ()  => {

  gsap.registerPlugin(ScrollTrigger , Draggable );

  const btsSioRef = useRef(null);
  const contentContainerRef = useRef(null);


   useGSAP(()=>{
    Draggable.create(".draggable-sticker");
    let sections = gsap.utils.toArray(".panel");
      
        gsap.to(sections, { 
          xPercent: -100 * (sections.length - 1),
          ease: "none",
            scrollTrigger: {
              trigger: contentContainerRef.current,
              pin: btsSioRef.current,
              pinSpacing: true,
              scrub: 1,
              end: "+=3000",
              invalidateOnRefresh: true

              }
  
      });

   }, []);

  return (
    <div>
      <PixelTransition />
      <div id="btssio" ref={btsSioRef} className='h-screen w-screen flex'>
         <div>
           <BlockBg/>
         </div>
        
        <div ref={contentContainerRef} className='flex'>
          <h1 className='absolute left-10 top-50 z-1 font-mono text-[12px] w-fit bg-amber-100 rounded p-1 lg:block hidden opacity-40 animate-pulse'>[Déplace <br/> les stickers]</h1>

  
          <div className='panel text-center flex h-screen w-screen items-center justify-center relative '>
                <img src={sticker5} alt="sticker" className='draggable-sticker w-50 absolute -top-20 -right-10  lg:-top-20 lg:right-10 -rotate-12'/>
                <img  src={sticker1} alt="sticker"data-depth="0.4"  className='draggable-sticker w-50 absolute top-20 lg:left-32 -left-10 rotate-45'/>
                <h1 className='text-[3em] font-bold w-screen '>C'est quoi le <HighlighterAnimation texte="BTS SIO" color='#6fff00'/> ??</h1>
                <img src={sticker3} alt="sticke cookie" className='draggable-sticker w-50 absolute lg:bottom-20 lg:right-32 bottom-10'/>
                <img src={sticker2} alt="sticker rainbow" className='draggable-sticker w-50 absolute -bottom-10 lg:left-20  -right-20 rotate-12 '/>

            </div>
 
            <div className='panel text-center flex h-screen w-screen items-center justify-center relative  '>
                <img  src={sticker2} alt="sticker"data-depth="0.4"  className=' draggable-sticker w-50 absolute top-3 left-2 lg:top-20 lg:left-32 rotate-45'/>
                    <h1 className='lg:text-[3em] text-2xl font-bold w-screen '>C'est une formation de deux ans formant des spécialistes en informatique spécialisés en 
                    <span className=' rounded-2xl px-1 relative'>
                    <HighlighterAnimation texte="gestion des systèmes et réseaux" color='#00d5ff'/> 
                      <span className='text-[11px] font-mono absolute -bottom-3 right-0 text-sky-700 z-10'>(option SISR)</span>
                       </span> ou en 
                       <span className=' rounded-2xl px-1 relative'>
                       <HighlighterAnimation texte="développement d'applications." color='#ffea00'/> 
                       <span className='text-[11px] font-mono absolute -bottom-3 right-0 text-yellow-500'>(option SLAM)</span>
                       </span>
                       </h1>
                <img src={sticker3} alt="sticker" className='draggable-sticker w-50 absolute top-0 right-0 lg:top-20 lg:right-100 '/>
                <img src={sticker4} alt="sticker" className='draggable-sticker w-50 absolute bottom-0 right-32 lg:bottom-20 lg:right-32 '/>
            </div>

          </div>

          
       </div>

    </div>
  )
}

export default Btssio
