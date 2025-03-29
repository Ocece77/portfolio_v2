import React, { useRef } from 'react'
import PixelBackground from '../utils/PixelBackground'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Btssio = ()  => {

  gsap.registerPlugin(ScrollTrigger);

  const btsSioRef = useRef(null);
  const contentContainerRef = useRef(null);



   useGSAP(()=>{
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
            }

    });


   }, [])

  return (
    <div>
      <PixelBackground />
    
      <div id="btssio" ref={btsSioRef} className='h-screen w-screen flex'>

        <div ref={contentContainerRef} className='flex h-fit w-fit'>
    
          <div className='panel text-center flex h-screen w-screen items-center justify-center relative bg-amber-600'>
                <h1 className='text-[3em] font-bold w-screen'>C'est quoi le <span className='underline'> BTS SIO </span> ??</h1>
            </div>
            {/*intro */}
            <div className='panel text-center flex h-screen w-screen items-center justify-center relative bg-pink-600'>
                <p>C'est une formation de deux ans</p>
            </div>

{/*intro */}
            <div className='panel text-center flex h-screen w-screen items-center justify-center relative bg-pink-600'>
                <p>C'est une formation de deux ans</p>
            </div>

            <div className='panel text-center flex h-screen w-screen items-center justify-center relative bg-pink-600'>
                <p>C'est une formation de deux ans</p>
            </div>


          </div>
       </div>

    </div>
  )
}

export default Btssio
