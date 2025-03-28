import React from 'react'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Lenis from 'lenis';

const Home = () => {
    
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  return (
    <div className=" h-full w-full overflow-x-hidden">
      <Hero/>
      <Projects/>
    </div>
  )
}

export default Home;