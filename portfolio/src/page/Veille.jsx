import React from 'react'
import PixelBackground from '../utils/PixelBackground'
import GravityBox from '../utils/GravityBox'

function Veille() {
  return (
    <>
      <div className='h-screen w-screen relative '>
        <GravityBox texte={"Veille"}/>
      </div>
      
      <div  className='h-screen w-screen bg-transparent'>
         autre element
      </div>
      </>

  )
}

export default Veille