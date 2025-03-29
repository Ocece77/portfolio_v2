import React from 'react'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Lenis from 'lenis';
import Veille from './Veille';
import About from '../components/About';

const Home = () => {
    
  

  return (
    <div className=" h-full w-full overflow-x-hidden">
      <Hero/>
      <Projects/>
      <About/>
    </div>
  )
}

export default Home;