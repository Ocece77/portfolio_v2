import React from 'react'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = ({ windowLoaded }) => {
    
  return (
    <div className="overflow-x-hidden overflow-y-auto h-full w-full">
      {/* page transition */}
      <Hero windowLoaded={windowLoaded} />
      <Projects/>
      <About/>
    </div>
  )
}

export default Home;