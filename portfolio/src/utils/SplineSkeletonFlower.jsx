import { useRef } from "react"
import Spline from "@splinetool/react-spline";


const SplineSkeletonFlower = () => {

  const flower = useRef();

  const onLoad = (spline) => {
    const obj = spline.findObjectById('e0e2afdb-0d8b-4342-bd2f-30269702792f');
    flower.current = obj;
    console.log(obj)
  }

  return (
    <div className="overflow-hidden relative rounded-full">

    <Spline
         scene="https://prod.spline.design/DVzhx8mTu3XsgIUi/scene.splinecode" 
        onLoad={onLoad}
      />

      <div className="bg-white w-50 h-20 rounded-full absolute bottom-0 right-0"></div>
    </div>
  );

}

export default SplineSkeletonFlower