import React , { useRef , Suspense} from "react"
const Spline = React.lazy(() => import('@splinetool/react-spline'));


const SplineSmiley = () => {

  const smiley = useRef();

  const onLoad = (spline) => {
    const obj = spline.findObjectById('828fd39a-8823-4c75-8c9a-75893dc10673');
    smiley.current = obj;
    console.log("smiley loading")
  }

  return (
    <div className="overflow-hidden relative ">
      <Suspense fallback={<div>Loading...</div>}>

    <Spline 
         scene="https://prod.spline.design/9nP0ix-2FVG5Ikn2/scene.splinecode"
        onLoad={onLoad}
      />
       </Suspense>


      <div className="bg-white w-50 h-20 rounded-full absolute bottom-0 right-0"></div>
    </div>
  );

}

export default SplineSmiley