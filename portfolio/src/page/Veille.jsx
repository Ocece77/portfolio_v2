import React from 'react'
import PixelTransition from '../utils/PixelTransition'
import GravityBox from '../utils/GravityBox'
import BlockBg from '../utils/BlockBg'

function Veille() {
  return (
    <>

      {/*page transition*/}
      <PixelTransition /> 
      <div>
           <BlockBg/>
         </div>
        

      <div className='h-screen w-screen relative '>
        <GravityBox texte={"Ma Veille technologique"}/>
      </div>
      
      <div  className='h-screen w-screen bg-transparent'>
         autre element
      </div>
      </>

  )
}

export default Veille