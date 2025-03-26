import React from 'react'
import SplineFlower from '../utils/SplineFlower'
import Spline2dFlower from '../utils/Spline2dFlower'
import SplineSkeletonFlower from '../utils/SplineSkeletonFlower'

function Hero() {
  return (
   <div className='relative'>

        <div className='relative '> 

            <div className='absolute'>
            <SplineFlower/>
            </div>

            <div className='absolute'>
            <Spline2dFlower/>
            </div>

            <div className='absolute'>
            <SplineSkeletonFlower/>
            </div>

          </div>

   </div>

  )
}

export default Hero
