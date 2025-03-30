import React from 'react'
import Hero from '../components/Hero';
import Projects from '../components/Projects';

import About from '../components/About';
import PixelTransition from '../utils/PixelTransition';

const Home = () => {
    
  return (
    <div className=" h-full w-full overflow-x-hidden">
      {/* page transition */}
      <PixelTransition /> 
      <Hero/>
      <Projects/>
      <About/>
    </div>
  )
}

export default Home;