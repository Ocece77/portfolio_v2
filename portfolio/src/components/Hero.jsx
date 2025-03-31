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
   <div ref={container} className='z-97 w-full h-screen relative overflow-hidden'>

      {/*background */}
      <div ref={asset2Ref}>
        <BlockBg/>
      </div>

        {/* Conteneur principal pour les objets 3D */}
        <div className='relative w-screen h-screen lg:z-96 -bottom-5'> 
          {/* Objet 3D Spline */}
          <div ref={threeDref} data-depth="0.9" className='gsapelement absolute z-90  h-screen w-screen lg:block hidden '>
            <Spline3dFlower />
          </div>

          <div className='relative w-screen h-1/2 flex items-center lg:hidden '>
            <img src={sticker1} alt="smiley"  data-depth="0.4" className='gsapelement w-1/3 absolute' />
            <img src={sticker2} alt="smiley"  data-depth="0.2" className='gsapelement w-1/3 absolute right-0 top-10' />
            <img src={sticker3} alt="smiley"  data-depth="0.4" className='gsapelement w-1/3 absolute right-30 top-40' />
            <img src={sticker4} alt="smiley"  data-depth="0.6" className='gsapelement w-1/3 absolute left-30 bottom-50' />

          </div>
        </div>


      {/* Texte */}
        <div className='flex lg:flex-row flex-col justify-between absolute lg:gap-30 gap-10 bottom-10 px-15 lg:pb-0 pb-10 '>
          <div data-depth="0.2" className='flex flex-col w-full lg:text-[9.5rem] md:text-[10rem] text-[7rem] font-bold capitalize leading-20 lg:leading-30 text-neutral-900'>
          
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

          <div data-depth="0.5" ref={paragraphRef} className='gsapelement font-mono lg:block flex lg:gap-0 gap-2 lg:text-sm w-full lg:mt-30 mt-5'>
            <p>Développeuse Full-Stack</p>
            <span className='lg:hidden block'>-</span>
            <p>Etudiante en [BTS SIO].</p>
          </div>

        </div>

    </div>


  );
}

export default Hero;
