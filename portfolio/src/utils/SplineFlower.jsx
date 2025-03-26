import Spline from '@splinetool/react-spline';

const SplineFlower = () => {
  
  return (
    <main className='overflow-hidden relative  '>

      <Spline 
        scene="https://prod.spline.design/Ixb2yYBfDobRanjU/scene.splinecode" 
        />
      <div className='bg-white w-50 h-20 rounded-full  absolute bottom-0 right-0'>
        </div>

    </main>
  );
}

export default SplineFlower