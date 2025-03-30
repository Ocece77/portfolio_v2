import React from 'react'
import PixelTransition from '../utils/PixelTransition'
import Reveal from '../utils/Reveal'

function Intership() {
  return (
    <div>
      {/*page transition*/}
      <PixelTransition /> 


         <div className='h-screen w-screen flex text-center justify-center items-center'>
            <h1 className="font-bold text-7xl lg:text-6xl w-1/3 ">J'ai fais des <span className='bg-amber-300  rounded-2xl px-1'>stages</span>  
                !</h1>
         </div>

   

    </div>
  )
}

export default Intership
