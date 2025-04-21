import React from 'react'
import backgroundpoint from '../assets/backgroundpoint.png'

const Background = ()  =>{
  return (
    <div>
      {/* Image de fond  */}
      <div  className='w-screen h-screen absolute -z-10 '>
          <img src={backgroundpoint} alt="point" className='w-screen h-screen object-cover'/>
      </div>
    </div>
  )
}

export default Background
