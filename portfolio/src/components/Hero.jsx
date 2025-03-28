import React, {  useRef } from 'react';
import Spline3dFlower from '../utils/Spline3dFlower';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PixelBackground from '../utils/PixelBackground';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const getBlocks = ()=>{

    const {innerWidth , innerHeight} = window;
    const bs = innerWidth * .05;
    const amountOfBlocks =Math.ceil( innerHeight / bs)
    
    return [...Array(amountOfBlocks)].map((_, i) =>{
         return ( <div key={i} className='block-static'></div> )
    }) 
  }
  const asset2Ref = useRef(null);
  const threeDref = useRef(null);
  const container = useRef(null);
  const paragraphRef = useRef(null);
  const Title1Ref = useRef(null);
  const Title2Ref = useRef(null);

  
  useGSAP(()=>{

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
    <div ref={container} className='z-1000 w-full h-screen relative overflow-hidden '> 

      {/* Conteneur principal pour les objets 3D */}
      <div className='relative w-screen h-screen z-100 -bottom-5'> 
        {/* Objet 3D Spline */}
        <div ref={threeDref} data-depth="0.9" className='gsapelement absolute z-90  h-screen w-screen  '>
          <Spline3dFlower />
        </div>


      </div>


    {/* Texte */}
    <div className='flex lg:flex-row flex-col justify-between absolute lg:gap-30 bottom-10 px-15 '>
        <div data-depth="0.2" className=' flex flex-col w-full lg:text-[9.5rem] md:text-[6rem] text-[4rem] font-bold capitalize leading-20 lg:leading-30 text-neutral-900'>
         
          <div className='flex'>
            <h1 ref={Title1Ref}  data-depth="0.9"  className='gsapelement -pb-10'>O

              <span className='letter font-pixelify '>C</span>
              E</h1>
            <h1 ref={Title2Ref}  data-depth="0.4"  className='gsapelement text-yellow-400'>
              <span className='font-rubik'>A</span>
              <span className='letter font-mono'>N</span>
              E </h1>
          </div>
         
         <div className='flex'>
           <h1 data-depth="0.2" className='gsapelement underline text-yellow-400'><span className='font-meaculpa'>K</span>A<span className='letter font-pixelify'>S</span></h1>
            <h1 data-depth="0.1" className='gsapelement font-rubik'>I<span className='letter font-pixelify '>N</span>D<span className='letter font-pixelify'>U</span></h1>
         </div>

        </div>

        <div data-depth="0.5"  ref={paragraphRef} className='gsapelement font-mono lftext-[12px] lg:text-sm w-full lg:mt-30 mt-5 '>
          <p>Developpeuse Full-Stack</p>
          <p>Etudiante en [BTS SIO].</p>
        </div>

      </div>

      
      {/* Image de fond  */}
      <div ref={asset2Ref}  className='w-full h-full absolute top-0  '>
         {
           <div className='fixed top-0 z-80 w-screen h-screen flex'>
           {
             [...Array(20)].map((_, i)=>{
               return <div key={i} className={`column-static`}>
                 {
                  getBlocks()
                 }
               </div>
             })
           }
           
         </div>
         }
      </div>


      {/*grid*/}
      <PixelBackground />
    </div>


  );
}

export default Hero;
// <div ref={asset2Ref} className='w-full h-full bg-contain  bg-repeat' style={{ backgroundImage: `url(${asset2})` }}> </div> 