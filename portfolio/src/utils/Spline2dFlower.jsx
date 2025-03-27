import React, { Suspense, useRef } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));


const Spline2dFlower = () => {
  const flower = useRef();

  const onLoad = (spline) => {
    const obj = spline.findObjectById('e0e2afdb-0d8b-4342-bd2f-30269702792f');
    flower.current = obj;
    console.log(obj)
  }
  
  return (
    <div className="overflow-hidden relative ">
  
    <Spline 
         scene="https://prod.spline.design/b9gB8dHRkmgSE2TQ/scene.splinecode"
        onLoad={onLoad}
      />
  
      <div className="bg-white w-50 h-20 rounded-full absolute bottom-0 right-0"></div>
    </div>
  );
  };


export default Spline2dFlower;