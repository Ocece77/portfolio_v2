import React, { useRef } from 'react'
import PixelBackground from '../utils/PixelBackground'
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




   }, [])

  return (
    <div>
      <PixelBackground />
     
      <div id="btssio" ref={btsSioRef} className='h-screen w-screen flex'>
         <div>
           <BlockBg/>
         </div>

        <div ref={contentContainerRef} className='flex h-fit w-fit'>


          <div className='panel text-center flex h-screen w-screen items-center justify-center relative '>
                <img  src={sticker1} alt="sticker" className='draggable-sticker w-50 absolute top-20 left-32 rotate-45'/>
                <h1 className='text-[3em] font-bold w-screen '>C'est quoi le <span className='underline'> BTS SIO </span> ??</h1>
                <img src={sticker3} alt="sticker" className='draggable-sticker w-50 absolute bottom-20 right-32 '/>

            </div>


          </div>
       </div>

    </div>
  )
}

export default Btssio
