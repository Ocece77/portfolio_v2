import React from 'react'
import backgroundpoint from '../assets/backgroundpoint.png'

const BlockBg = ()  =>{
  return (
    <div>
      {/* Image de fond  */}
      <div  className='w-screen h-screen absolute top-0 -z-10 '>
          <img src={backgroundpoint} alt="point" className='w-screen h-screen'/>
      </div>
    </div>
  )
}

export default BlockBg
