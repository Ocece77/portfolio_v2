import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import face2 from "../assets/face/face2.jpeg";
import face3 from "../assets/face/memoji.jpg";
import face4 from "../assets/face/powerpuffoceane.png";
import video from "../assets/video/videoface2.mp4";
import BlockBg from './BlockBg';

gsap.registerPlugin(ScrollTrigger);

const PhotoAnimation = () => {
  const photoContainer = useRef(null);

  useGSAP(() => {
    if (!photoContainer.current) return;

    const photos = Array.from(photoContainer.current.querySelectorAll(".photo"));
    const totalHeight = photos.length * (typeof window !== "undefined" ? window.innerHeight : 800);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: photoContainer.current,
        start: `top top`,
        end: `+=${totalHeight}`,
        scrub: true,
        pin: true,
      }
    });

    photos.forEach((photo, i) => {
      gsap.set(photo, {
        position: "absolute",
        top: 0,
        left: 0,
        y: i === 0 ? 0 : window.innerHeight,
        rotation: 0,
      });
    });

    photos.forEach((photo, i) => {
      if (i > 0) {
        tl.to(photo, {
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "Power2.out",
        }, `+=0.5`); 

        const rotation = i == 2 ? 0 : i % 2 === 0 ? 7 : -7;
        tl.to(photos[i - 1], {
          rotation: rotation,
          duration: 1,          
          ease: "Power2.out",
        }, `-=0.5`); 
      }
    });

  }, [photoContainer]); 

  return (
    <div ref={photoContainer} className='photo-container h-screen w-screen flex justify-center items-center '>

      <div className="photo h-full w-full flex justify-center items-center z-10">
          <img src={face3} alt="face" className='rounded-xl xl:w-[25vw] w-[35vw]' />
      </div>

      <div className="photo h-full w-full bg-amber-100"></div>


      <div className="photo h-full w-full flex justify-center items-center z-10">
           <img src={face4} alt="face" className='rounded-xl xl:w-[25vw] w-[35vw]' />
      </div>

      <div className="photo h-full w-full flex justify-center items-center z-10">
          <video autoPlay loop muted preload="auto" className='rounded-xl xl:w-[30vw] w-[40vw] pointer-events-none' playsInline={true}>
            <source src={video} type="video/mp4"/>
              <img src={face3} alt='memoji photo'/>
        </video>
      </div>

      <div className="photo h-full w-full flex justify-center items-center z-10">
          <img src={face2} alt="face" className='rounded-xl xl:w-[25vw] w-[35vw]' />
      </div>

      <div className="photo h-screen w-screen z-10 ">
        <BlockBg/>
      </div>


    </div>
  );
};

export default PhotoAnimation;
