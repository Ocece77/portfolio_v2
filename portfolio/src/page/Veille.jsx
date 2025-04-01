import React from 'react'
import PixelTransition from '../utils/PixelTransition'
import GravityBox from '../utils/GravityBox'
import BlockBg from '../utils/BlockBg'
import sticker1 from "../assets/pcLogo.png";
import sticker2 from "../assets/rainbowsticker.png";

const Veille = () => {
  return (
    <>

      {/*page transition*/}
      <PixelTransition /> 
      <div>
           <BlockBg/>
         </div>
        

      <div className='h-screen w-screen relative lg:block hidden '>
        <GravityBox texte={"Ma Veille technologique"}/>
      </div>

      <div className='lg:hidden flex justify-center items-center h-screen w-screen'>
            <img src={sticker1} alt="smiley" className='w-50 absolute bottom-10 right-10 rotate-12' />
            <h1 className='text-[3em] font-black px-5 text-center z-20'>Ma Veille technologique</h1>
            <img src={sticker2} alt="" className='w-50 absolute top-10 left-10 rotate-12' />
        </div>
      
      
      <div  className='h-screen w-screen bg-transparent'>
         autre element
      </div>
      </>

  )
}

export default Veille