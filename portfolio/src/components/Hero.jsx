import React, {  useEffect, useRef } from 'react';
import Spline3dFlower from '../utils/Spline3dFlower';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlockBg from '../utils/BlockBg';
import sticker1 from "../assets/smileysticker.png";
import sticker2 from "../assets/powerpufflogo.png";
import sticker3 from "../assets/rainbowsticker.png";
import sticker4 from "../assets/cookiesticker.png";

const Hero = () => {

  gsap.registerPlugin(ScrollTrigger);


  const asset2Ref = useRef(null);
  const threeDref = useRef(null);
  const container = useRef(null);
  const paragraphRef = useRef(null);
  const Title1Ref = useRef(null);
  const Title2Ref = useRef(null);

  
  useGSAP(()=>{

    //effet d'elevation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 0%",
        end: "bottom 50%",
        scrub: true,
      }
  });

      gsap.utils.toArray(".gsapelement").forEach((layer) => {
        const depth = layer.dataset.depth;
        const movement =  -(layer.offsetHeight * depth) * -5;
        tl.to(layer, { y: -movement, ease: "none" }, 0);
      });

     gsap.fromTo(asset2Ref.current ,
        {translateY:window.innerHeight } ,
        {translateY:"0px", duration: 1 , delay : .7})

      gsap.fromTo(threeDref.current ,
        {translateY: "300px" } ,
        {translateY:0, duration:1 , delay : .4})
 
  } , []);
 

  

  return (
   <div ref={container} className='z-97 w-full h-screen relative overflow-hidden '>

      {/*background */}
      <div ref={asset2Ref}>
        <BlockBg/>
      </div>

        {/* Conteneur principal pour les objets 3D */}
        <div className='relative w-screen lg:h-screen lg:z-96 -bottom-5'> 
          {/* Objet 3D Spline */}
          <div ref={threeDref} data-depth="0.9" className='gsapelement absolute z-90 h-screen w-screen lg:block hidden '>
            <Spline3dFlower />
          </div>

          <div  className='lg:hidden'>
            <div className=' grid grid-cols-4 items-center  md:pt-10 pt-30 w-full h-1/3 '>
                      <div className='flex items-end md:py-10' >
                        <img src={sticker1} alt="smiley" className='object-contain'/>
                        </div>
                      <div className='flex h-full items-start md:py-10'>
                        <img src={sticker2} alt="smiley"  className='object-contain'/>
                        </div>
                      <div className='flex h-full md:py-10 -mt-10'>
                        <img src={sticker3} alt="smiley" className='object-contain -mt-10'/>
                        </div>
                      <div className='flex h-full items-start md:pt-30 -mt-10'>
                        <img src={sticker4} alt="smiley" className='object-contain'/>
                        </div>
            </div>
            {/* Texte pc */}
            <div className='block ps-10'>

                      <div className='flex flex-col md:flex-row md:text-8xl  text-6xl pt-20'>
                        
                        <div className='flex'>
                            <h1 className='-pb-10'>O
                              <span className='letter font-pixelify'>C</span>
                              E</h1>
                            <h1   className='text-yellow-400'>
                              <span className='font-rubik'>A</span>
                              <span className='letter font-mono'>N</span>
                              E </h1>
                        </div>
                        
                        <div className='flex'>
                          <h1 className='underline text-yellow-400'><span className='font-meaculpa'>K</span>A<span className='letter font-pixelify'>S</span></h1>
                            <h1>I<span className='letter font-pixelify '>N</span><span className='font-rubik'>D</span><span className='letter font-pixelify'>U</span></h1>
                        </div>
                        
                      </div>

                      <div className='font-mono '>
                        <p>Développeuse Full-Stack - Etudiante en [BTS SIO].</p>
                      </div>

             </div>
          </div>

        </div>



      {/* Texte tablet/mobile */}
        <div className='hidden lg:flex flex-row justify-between absolute lg:gap-30 gap-10 bottom-10 lg:px-15 px-5 lg:pb-0 pb-10 '>

          <div className='flex flex-col w-full lg:text-[10rem] md:text-[9rem] text-[5rem] font-bold capitalize leading-40 md:leading-35 lg:leading-30 text-neutral-900 '>
          
          <div className='flex'>
              <h1 ref={Title1Ref}  data-depth="0.9" className='gsapelement -pb-10'>O
                <span className='letter font-pixelify'>C</span>
                E</h1>
              <h1 ref={Title2Ref}  data-depth="0.4"  className='gsapelement text-yellow-400'>
                <span className='font-rubik'>A</span>
                <span className='letter font-mono'>N</span>
                E </h1>
          </div>
          
          <div className='flex'>
            <h1 data-depth="0.4" className='gsapelement underline text-yellow-400'><span className='font-meaculpa'>K</span>A<span className='letter font-pixelify'>S</span></h1>
              <h1 data-depth="0.3" className='gsapelement'>I<span className='letter font-pixelify '>N</span><span className='font-rubik'>D</span><span className='letter font-pixelify'>U</span></h1>
          </div>

          </div>

          <div data-depth="0.5" ref={paragraphRef} className='gsapelement font-mono lg:block flex lg:flex-row flex-col lg:gap-0 gap-2 lg:text-sm w-full lg:mt-30 mt-5'>
            <p>Développeuse Full-Stack</p>
            <p>Etudiante en [BTS SIO].</p>
          </div>

        </div>

    </div>


  );
}

export default Hero;
