import React, { Suspense, useRef } from "react";
import Spline from "@splinetool/react-spline";

const Spline3dFlower = () => {
  const flower = useRef();

  const onLoad = (spline) => {
    const obj = spline.findObjectById('835f5de2-b0dd-471c-b728-44c2ea48f9ab');
    flower.current = obj;
    console.log("flower loading")

  }

  return (
    <div className="overflow-hidden relative h-screen w-screen ">
         <Suspense fallback={<div>Loading...</div>}>
   
    <Spline 
         scene="https://prod.spline.design/Ixb2yYBfDobRanjU/scene.splinecode" 
        onLoad={onLoad}
      />    
      
       </Suspense>

      <div className="bg-white  w-49 h-12 rounded-full absolute bottom-4 right-0"></div>
    </div>
  );
};

export default Spline3dFlower;
