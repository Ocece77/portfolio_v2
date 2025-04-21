import React, { Suspense, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { useEffect } from "react";

const Spline3dFlower = ({ windowLoaded, finishLoading }) => {
  const flower = useRef();

  const onLoad = (spline) => {
    const obj = spline.findObjectById('835f5de2-b0dd-471c-b728-44c2ea48f9ab');
    flower.current = obj;
    console.log("flower loading")
  }

  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    if (windowLoaded && splineLoaded) {
      setTimeout(() => {
        finishLoading();
      }, 1000); // délai pour la transition
    }
  }, [windowLoaded, splineLoaded, finishLoading]);


  return (
    <> 
    {/*desktop*/}
     <div className="overflow-x-hidden relative h-screen w-screen lg:block hidden overflow-y-scroll ">
         <Suspense fallback={<div>Loading...</div>} className='hidden'>
            <Spline 
                scene="https://prod.spline.design/Ixb2yYBfDobRanjU/scene.splinecode" 
                onLoad={() => setSplineLoaded(true)} />    
        </Suspense>
      <div className="bg-white w-49 h-12 rounded-full absolute bottom-4 right-0"></div>
    </div>

     {/*mobile/tablet */}
     <div className="overflow-scroll relative h-screen w-screen lg:hidden ">
      <div className="absolute pointer-events-none block bottom-10">{/*permet d'éviter l'action de la fleur sur tablet/mobile */}</div>
         <Suspense fallback={<div>Loading...</div>} className='hidden'>
            <Spline 
                scene="https://prod.spline.design/o8kNDElOlXZro5Js/scene.splinecode" 
                onLoad={() => setSplineLoaded(true)} />    
        </Suspense>
      <div className="bg-white w-49 h-12 rounded-full absolute bottom-4 right-0"></div>
    </div>
    </>
  
  );
};

export default Spline3dFlower;
