import React, {  useEffect, useRef } from 'react';
import Spline3dFlower from '../utils/Spline3dFlower';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Background from '../utils/Background';
import sticker1 from "../assets/smileysticker.png";


const Hero = ({ windowLoaded }) => {

  const finishLoading = () => {
    console.log(" Le chargement Hero + Spline + Window complet ! Youpi  ✅");
  };

  gsap.registerPlugin(ScrollTrigger);


  const asset2Ref = useRef(null);
  const threeDref = useRef(null);
  const container = useRef(null);


  
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

     gsap.fromTo(asset2Ref.current ,
        {translateY:window.innerHeight } ,
        {translateY:"0px", duration: 1 , delay : .7})

      gsap.fromTo(threeDref.current ,
        {translateY: "300px" } ,
        {translateY:0, duration:1 , delay : .4})
 
  } , []);
 

   //<h1 ref={Title1Ref}  data-depth="0.9" className='gsapelement -pb-10'>

  return (
   <div ref={container} className='z-97 w-screen h-screen relative overflow-x-hidden '>

      {/*background */}
      <div ref={asset2Ref}>
        <Background/>
      </div>

        {/* Conteneur principal pour les objets 3D */}
        <div className='relative w-screen h-screen lg:z-96 -bottom-5'> 
          {/* Objet 3D Spline */}
          <div ref={threeDref} className=' absolute lg:z-90 h-screen w-screen '>
            <Spline3dFlower windowLoaded={windowLoaded} finishLoading={finishLoading} />
          </div>


            {/* Nom & prénom  */}
            <div className='flex flex-col justify-end h-screen p-10 md:pb-15 pb-20  w-screen lg:max-w-5xl gap-5 '>
                <h1 className='text-5xl md:text-[10em] lg:text-[12em] leading-[0.75em] font-bold uppercase'>Océane KASINDU</h1>
                <p className='text-sm lg:text-[1.5em] font-mono'>Développeuse Full-Stack - Etudiante en [BTS SIO]</p>
          </div>


        </div>


    </div>


  );
}


export default Hero;
